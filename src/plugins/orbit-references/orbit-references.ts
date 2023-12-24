import { SatObject } from '@app/interfaces';
import { KeepTrackApiEvents, keepTrackApi } from '@app/keepTrackApi';
import { RAD2DEG } from '@app/lib/constants';
import { getEl } from '@app/lib/get-el';
import { StringPad } from '@app/lib/stringPad';

import { FormatTle } from '@app/static/format-tle';
import { StringifiedNumber } from '@app/static/sat-math';
import { Sgp4 } from 'ootk';
import { KeepTrackPlugin } from '../KeepTrackPlugin';
import { SatInfoBox } from '../select-sat-manager/sat-info-box';
import { SelectSatManager } from '../select-sat-manager/select-sat-manager';

export class OrbitReferences extends KeepTrackPlugin {
  static PLUGIN_NAME = 'Orbit References';
  dependencies: string[] = [SatInfoBox.PLUGIN_NAME, SelectSatManager.PLUGIN_NAME];
  private selectSatManager_: SelectSatManager;

  constructor() {
    super(OrbitReferences.PLUGIN_NAME);
    this.selectSatManager_ = keepTrackApi.getPlugin(SelectSatManager);
  }

  doOnce = false;
  isReferenceSatsActive = false;

  addHtml(): void {
    super.addHtml();

    keepTrackApi.register({
      event: KeepTrackApiEvents.selectSatData,
      cbName: this.PLUGIN_NAME,
      cb: (sat?: SatObject) => {
        // Skip this if there is no satellite object because the menu isn't open
        if (!sat) {
          return;
        }

        if (!this.doOnce) {
          getEl('sat-info-top-links').insertAdjacentHTML(
            'beforeend',
            keepTrackApi.html`
                <div id="orbit-references-link" class="link sat-infobox-links" data-position="top" data-delay="50"
                      data-tooltip="Create Analyst Satellites in Orbit">Generate Orbit Reference Satellites...</div>
              `
          );
          getEl('orbit-references-link').addEventListener('click', this.orbitReferencesLinkClick.bind(this));
          this.doOnce = true;
        }
      },
    });
  }

  orbitReferencesLinkClick() {
    const catalogManagerInstance = keepTrackApi.getCatalogManager();

    // Determine which satellite is selected
    const sat = catalogManagerInstance.getSat(this.selectSatManager_.selectedSat);
    let satNum = catalogManagerInstance.analSatSet[0].id + 20000; // Find Analyst satellite 10,000
    let searchStr = '';

    // Add the satellites
    const satrec = Sgp4.createSatrec(sat.TLE1, sat.TLE2);
    const ecen = satrec.ecco.toFixed(7).substr(2, 7);
    const rasc = <StringifiedNumber>(satrec.nodeo * RAD2DEG).toString();
    const argPe = <StringifiedNumber>(satrec.argpo * RAD2DEG).toString();
    const inc = <StringifiedNumber>sat.TLE2.substr(8, 8);
    const meanmo = <StringifiedNumber>sat.TLE2.substr(52, 10);
    const epochyr = sat.TLE1.substr(18, 2);
    const epochday = sat.TLE1.substr(20, 12);
    const intl = sat.TLE1.substr(9, 8);
    const sccNum = StringPad.pad0(sat.TLE1.substr(2, 5).trim(), 5);

    const period = 1440.0 / parseFloat(meanmo);

    let j = 0;
    for (let i = 0; i < 360; i++) {
      const meana = <StringifiedNumber>StringPad.pad0(j.toFixed(4), 8);
      const { TLE1, TLE2 } = FormatTle.createTle({ sat, inc, meanmo, rasc, argPe, meana, ecen, epochyr, epochday, intl, scc: sccNum });
      searchStr += catalogManagerInstance.insertNewAnalystSatellite(TLE1, TLE2, satNum + i, (100000 + i).toString()).sccNum.toString() + ',';
      j += (360 / period) * 4;
      if (j >= 360) break;
    }

    // Remove the last comma
    searchStr = searchStr.substr(0, searchStr.length - 1);
    const uiManagerInstance = keepTrackApi.getUiManager();
    uiManagerInstance.doSearch(searchStr);

    this.isReferenceSatsActive = true;
  }
}

export const orbitReferencesPlugin = new OrbitReferences();