import { errorManagerInstance } from '@app/singletons/errorManager';
import collissionsPng from '@public/img/icons/socrates.png';

import { getEl } from '@app/lib/get-el';
import { showLoading } from '@app/lib/showLoading';
import { keepTrackApi, KeepTrackApiEvents } from '../../keepTrackApi';
import { clickDragOptions, KeepTrackPlugin } from '../KeepTrackPlugin';
import { SelectSatManager } from '../select-sat-manager/select-sat-manager';

interface CollisionEvent {
  sat1: string;
  sat1Name: string;
  sat1Status: string;
  sat2: string;
  sat2Name: string;
  sat2Status: string;
  /** Number of Days */
  sat1AgeOfTLE: number;
  /** Number of Days */
  sat2AgeOfTLE: number;
  /** ISO Date format */
  toca: string;
  minRng: number;
  dilutionThreshold: number;
  relSpeed: number;
  maxProb: number;
}

export class CollissionsPlugin extends KeepTrackPlugin {
  static PLUGIN_NAME = 'collisions';

  constructor() {
    super(CollissionsPlugin.PLUGIN_NAME);
  }

  private readonly collisionDataSrc = './tle/SOCRATES.json';
  bottomIconElementName: string = 'menu-satellite-collision';
  bottomIconImg = collissionsPng;
  bottomIconLabel: string = 'Collisions';
  sideMenuElementName: string = 'socrates-menu';
  sideMenuElementHtml = keepTrackApi.html`
  <div id="socrates-menu" class="side-menu-parent start-hidden text-select">
    <div id="socrates-content" class="side-menu">
      <div class="row">
        <h5 class="center-align">Possible collisions</h5>
        <table id="socrates-table" class="center-align"></table>
      </div>
    </div>
  </div>`;

  helpTitle = `Collisions Menu`;
  helpBody = keepTrackApi.html`The Collisions Menu shows satellites with a high probability of collision.
  <br><br>
  Clicking on a row will select the two satellites involved in the collision and change the time to the time of the collision.`;

  private socratesOnSatCruncher: number | null = null;
  collisionList = <CollisionEvent[]>[];
  dragOptions: clickDragOptions = {
    isDraggable: true,
    minWidth: 500,
    maxWidth: 650,
  };

  bottomIconCallback: () => void = () => {
    if (this.isMenuButtonActive) {
      this.parseCollisionData_();
    }
  };

  private uiManagerFinal() {
    getEl(this.sideMenuElementName).addEventListener('click', (evt: any) => {
      showLoading(() => {
        const el = <HTMLElement>evt.target.parentElement;
        if (!el.classList.contains('socrates-object')) return;
        // Might be better code for this.
        const hiddenRow = el.dataset?.row;
        if (hiddenRow !== null) {
          this.eventClicked_(parseInt(hiddenRow));
        }
      });
    });
  }

  public addJs(): void {
    super.addJs();

    keepTrackApi.register({
      event: KeepTrackApiEvents.uiManagerFinal,
      cbName: this.PLUGIN_NAME,
      cb: this.uiManagerFinal.bind(this),
    });

    keepTrackApi.register({
      event: KeepTrackApiEvents.onCruncherMessage,
      cbName: this.PLUGIN_NAME,
      cb: () => {
        if (this.socratesOnSatCruncher !== null) {
          // If selectedSatManager is loaded, set the selected sat to the one that was just added
          keepTrackApi.getPlugin(SelectSatManager)?.setSelectedSat(this.socratesOnSatCruncher);

          this.socratesOnSatCruncher = null;
        }
      },
    });
  }

  private parseCollisionData_() {
    if (this.collisionList.length === 0) {
      // Only generate the table if receiving the -1 argument for the first time
      fetch(this.collisionDataSrc).then((response) => {
        response.json().then((collisionList: CollisionEvent[]) => {
          this.collisionList = collisionList;
          this.createTable_();

          if (this.collisionList.length === 0) {
            errorManagerInstance.warn('No collisions data found!');
          }
        });
      });
    }
  }

  private eventClicked_(row: number) {
    const now = new Date();
    keepTrackApi.getTimeManager().changeStaticOffset(new Date(this.collisionList[row].toca).getTime() - now.getTime() - 1000 * 30);
    keepTrackApi.getMainCamera().isAutoPitchYawToTarget = false;

    const sat1 = this.collisionList[row].sat1.padStart(5, '0');
    const sat2 = this.collisionList[row].sat2.padStart(5, '0');

    keepTrackApi.getUiManager().doSearch(`${sat1},${sat2}`);
    const catalogManagerInstance = keepTrackApi.getCatalogManager();
    this.socratesOnSatCruncher = catalogManagerInstance.getIdFromSccNum(parseInt(sat1));
  }

  private createTable_(): void {
    try {
      const tbl = <HTMLTableElement>getEl('socrates-table'); // Identify the table to update
      tbl.innerHTML = ''; // Clear the table from old object data

      CollissionsPlugin.createHeaders_(tbl);

      this.createBody_(tbl);
    } catch (e) {
      errorManagerInstance.warn('Error processing SOCRATES data!');
    }
  }

  private createBody_(tbl: HTMLTableElement) {
    for (let i = 0; i < this.collisionList.length; i++) {
      this.createRow_(tbl, i);
    }
  }

  private static createHeaders_(tbl: HTMLTableElement) {
    let tr = tbl.insertRow();
    const names = ['TOCA', '#1', '#2', 'Max Prob', 'Min Range (km)', 'Rel Speed (km/s)'];
    for (const name of names) {
      const column = tr.insertCell();
      column.appendChild(document.createTextNode(name));
      column.setAttribute('style', 'text-decoration: underline');
    }
  }

  private createRow_(tbl: HTMLTableElement, i: number): HTMLTableRowElement {
    // Create a new row
    const tr = tbl.insertRow();
    tr.setAttribute('class', 'socrates-object link');
    tr.setAttribute('data-row', i.toString());

    // Populate the table with the data
    CollissionsPlugin.createCell_(tr, this.collisionList[i].toca.slice(0, 19).replace('T', ' '));
    CollissionsPlugin.createCell_(tr, this.collisionList[i].sat1);
    CollissionsPlugin.createCell_(tr, this.collisionList[i].sat2);
    CollissionsPlugin.createCell_(tr, this.collisionList[i].maxProb.toString());
    CollissionsPlugin.createCell_(tr, this.collisionList[i].minRng.toString());
    CollissionsPlugin.createCell_(tr, this.collisionList[i].relSpeed.toString());
    return tr;
  }

  private static createCell_(tr: HTMLTableRowElement, text: string): void {
    const cell = tr.insertCell();
    cell.appendChild(document.createTextNode(text));
  }
}

export const collissionsPlugin = new CollissionsPlugin();