"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_breakup_breakup_ts"],{

/***/ "./src/js/plugins/breakup/breakup.ts":
/*!*******************************************!*\
  !*** ./src/js/plugins/breakup/breakup.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "breakupOnSubmit": () => (/* binding */ breakupOnSubmit),
/* harmony export */   "hideSideMenus": () => (/* binding */ hideSideMenus),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick)
/* harmony export */ });
/* harmony import */ var _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/js/api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/js/lib/helpers */ "./src/js/lib/helpers.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



let isBreakupMenuOpen = false;
const init = () => {
    // Add HTML
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'breakup',
        cb: uiManagerInit,
    });
    // Add JavaScript
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'breakup',
        cb: bottomMenuClick,
    });
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'breakup',
        cb: hideSideMenus,
    });
};
const uiManagerInit = () => {
    // Side Menu
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#left-menus').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
      <div id="breakup-menu" class="side-menu-parent start-hidden text-select">
        <div id="breakup-content" class="side-menu">
          <div class="row">
            <h5 class="center-align">Breakup Simulator</h5>
            <form id="breakup" class="col s12">
              <div class="input-field col s12">
                <input disabled value="00005" id="hc-scc" type="text" />
                <label for="disabled" class="active">Satellite SCC#</label>
              </div>
              <div class="input-field col s12">
                <select id="hc-inc">
                  <option value="0">0 Degrees</option>
                  <option value="0.5">0.5 Degrees</option>
                  <option value="0.75">0.75 Degrees</option>
                  <option value="1" selected>1 Degrees</option>
                  <option value="1.25">1.25 Degrees</option>
                  <option value="1.5">1.5 Degrees</option>
                  <option value="1.75">1.75 Degrees</option>
                  <option value="2">2 Degrees</option>
                  <option value="2.25">2.25 Degrees</option>
                  <option value="2.5">2.5 Degrees</option>
                </select>
                <label>Inclination Variation</label>
              </div>
              <div class="input-field col s12">
                <select id="hc-per">
                  <option value="0">0 Percent</option>
                  <option value="0.01">1 Percent</option>
                  <option value="0.02" selected>2 Percent</option>
                  <option value="0.03">3 Percent</option>
                  <option value="0.04">4 Percent</option>
                  <option value="0.05">5 Percent</option>
                </select>
                <label>Period Variation</label>
              </div>
              <div class="input-field col s12">
                <select id="hc-raan">
                  <option value="0">0 Degrees</option>
                  <option value="0.5">0.5 Degrees</option>
                  <option value="0.75">0.75 Degrees</option>
                  <option value="1" selected>1 Degrees</option>
                  <option value="1.25">1.25 Degrees</option>
                  <option value="1.5">1.5 Degrees</option>
                  <option value="1.75">1.75 Degrees</option>
                  <option value="2">2 Degrees</option>
                  <option value="2.25">2.25 Degrees</option>
                  <option value="2.5">2.5 Degrees</option>
                </select>
                <label>Right Ascension Variation</label>
              </div>
              <div class="center-align">
                <button class="btn btn-ui waves-effect waves-light" type="submit" name="action">Create Breakup &#9658;</button>
              </div>
            </form>
          </div>
        </div>
      </div>   
    `);
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#bottom-icons').append(_app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.html `
      <div id="menu-breakup" class="bmenu-item bmenu-item-disabled">
        <img
          alt="breakup"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAADH0lEQVR4nO3cz04TURQG8O82pDQG1AUP4AJWE7qxcd2uCIlGQvBZdCfu7LNICEYTw6q4NOCqzgoWPgALpYSUhnhcTWyqM53+Oefcmu+3I5TMnfNl7p25wylARERERERERERERKQuzPLHm2ci8xpIptsIM41pnNjGXJnnQGhyDMAZA3DGAJwxAGdLFgcR4Pi6h53vrdC3OF6RMncsSSrVcIODEPBMezwmV0AAtlZWcfSoIzWL483CsviA4RS0CCFYFx8wXgNiDsGj+IBWAAGf8n+FrdX7OFw/l2WVY09h/VyWK30cFRa/4JxmoRLArxp2RPAh9wOC7dpPvI/hSkhSqdZ+4B0E23mfEeC4d4VdjeOrBJAmYSD3sFcUQgzTUZlpR/sOTm0NiD2EGIoPKC/CsYYQS/EBg7ugNAmD/kO8KLMwNzui/mDY7MhSmQW3/wDPLR4cTW5DLzbC7biFWYAvJ61wpz2Wk1a4g+BzwTiOe1fYvdgIt9pjAQyfA4qmIwnY//Y4vLEaS7cR2gBe/TUOhy0T0wexf4VgXfzMaAhe+1Umm3HD0iQMklT2cIMDVPDVo/iZbiO0N88EArS8NgtdtqPTJAzWrrHrWfxMtxHaaz089dqpVX0BPg2Nl+bDtF/6T4ovZJwxAGcMwBkDcMYAnJk/B0xr0rsX7bupeeEV4IwBOGMAzhiAMwbgjAE4YwDOGIAzBuCMAThjAM4WZi9oUfZ2JsUrwBkDcMYAnDEAZwzAmcqXdZR5e9XsyJLFP+OWUXYss5xvHpcrIEmlermCw80zeetx/GH1U9m/XMVHr04d8wBGmiNeeoZQP5V9CXjt2aljGkBOZ4pLCFnxs5+9QjALYExbkGkIo8XPeIRgEkDJPty6VYuSVPAkfxi2fczqAUzSh2vVohRTH7NqADF1Iw6LqXtTLYBYi5+JJQSVAGIvfiaGEFQCiKkPd5xJ+pg1jq8zBZVYcK36cMso08dcdE6zMH0Qi2HayVNmOtJgFkDMxc94hGASwCIUP2MdAr87eg4Wbjua/mAAzhiAMwbgjAEQEREREREREREREf3/fgOPPc3WB/LHfwAAAABJRU5ErkJggg==" // NO-PIG
        />
        <span class="bmenu-title">Breakup</span>
        <div class="status-icon"></div>
      </div>
    `);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#breakup').on('submit', function (e) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#loading-screen').fadeIn(1000, breakupOnSubmit);
        e.preventDefault();
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#breakup-menu').resizable({
        handles: 'e',
        stop: function () {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).css('height', '');
        },
        maxWidth: 450,
        minWidth: 280,
    });
};
const breakupOnSubmit = () => {
    const { orbitManager, satellite, timeManager, uiManager, satSet } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
    let satId = satSet.getIdFromObjNum(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#hc-scc').val());
    const mainsat = satSet.getSat(satId);
    const origsat = mainsat;
    // Launch Points are the Satellites Current Location
    // TODO: Remove TEARR References
    const TEARR = mainsat.getTEARR();
    const launchLat = satellite.degreesLat(TEARR.lat);
    const launchLon = satellite.degreesLong(TEARR.lon);
    const simulationTimeObj = timeManager.calculateSimulationTime();
    const upOrDown = mainsat.getDirection();
    // console.log(upOrDown);
    const currentEpoch = satellite.currentEpoch(simulationTimeObj);
    mainsat.TLE1 = mainsat.TLE1.substr(0, 18) + currentEpoch[0] + currentEpoch[1] + mainsat.TLE1.substr(32);
    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.mainCamera.isCamSnapMode = false;
    const alt = mainsat.apogee - mainsat.perigee < 300 ? 0 : TEARR.alt; // Ignore argument of perigee for round orbits OPTIMIZE
    let TLEs = satellite.getOrbitByLatLon(mainsat, launchLat, launchLon, upOrDown, simulationTimeObj, alt);
    const TLE1 = TLEs[0];
    const TLE2 = TLEs[1];
    satSet.satCruncher.postMessage({
        typ: 'satEdit',
        id: satId,
        TLE1: TLE1,
        TLE2: TLE2,
    });
    orbitManager.updateOrbitBuffer(satId, true, TLE1, TLE2);
    const meanmoVariation = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#hc-per').val());
    const incVariation = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#hc-inc').val());
    const rascVariation = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_2___default()('#hc-raan').val());
    // const eVariation = 0.001;
    // const origEcc = mainsat.eccentricity;
    const breakupCount = 256; // settingsManager.maxAnalystSats;
    for (let i = 0; i < breakupCount; i++) {
        for (let incIterat = 0; incIterat <= 4; incIterat++) {
            for (let meanmoIterat = 0; meanmoIterat <= 4; meanmoIterat++) {
                for (let rascIterat = 0; rascIterat <= 4; rascIterat++) {
                    if (i >= breakupCount)
                        break;
                    satId = satSet.getIdFromObjNum(80000 + i);
                    let sat = satSet.getSat(satId);
                    sat = origsat;
                    let iTLE1 = '1 ' + (80000 + i) + TLE1.substr(7);
                    const rascOffset = -rascVariation / 2 + rascVariation * (rascIterat / 4);
                    // sat.eccentricity = origEcc;
                    // sat.eccentricity += -eVariation / 2 + eVariation * (eVariation / 4);
                    const alt = mainsat.apogee - mainsat.perigee < 300 ? 0 : TEARR.alt; // Ignore argument of perigee for round orbits OPTIMIZE
                    let iTLEs = satellite.getOrbitByLatLon(sat, launchLat, launchLon, upOrDown, simulationTimeObj, alt, rascOffset);
                    iTLE1 = iTLEs[0];
                    let iTLE2 = iTLEs[1];
                    // For the first 30
                    let inc = parseFloat(TLE2.substr(8, 8));
                    inc = inc - incVariation / 2 + incVariation * (incIterat / 4);
                    const incStr = _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_1__.stringPad.pad0(inc.toPrecision(7), 8);
                    // For the second 30
                    let meanmo = parseFloat(iTLE2.substr(52, 10));
                    meanmo = meanmo - (meanmo * meanmoVariation) / 2 + meanmo * meanmoVariation * (meanmoIterat / 4);
                    const meanmoStr = _app_js_lib_helpers__WEBPACK_IMPORTED_MODULE_1__.stringPad.pad0(meanmo.toPrecision(10), 8);
                    iTLE2 = `2 ${80000 + i} ${incStr} ${iTLE2.substr(17, 35)}${meanmoStr}${iTLE2.substr(63)}`;
                    sat = satSet.getSat(satId);
                    sat.TLE1 = iTLE1;
                    sat.TLE2 = iTLE2;
                    sat.active = true;
                    if (satellite.altitudeCheck(iTLE1, iTLE2, timeManager.calculateSimulationTime()) > 1) {
                        satSet.satCruncher.postMessage({
                            typ: 'satEdit',
                            id: satId,
                            TLE1: iTLE1,
                            TLE2: iTLE2,
                        });
                        orbitManager.updateOrbitBuffer(satId, true, iTLE1, iTLE2);
                    }
                    else {
                        // console.debug('Breakup Generator Failed');
                    }
                    i++;
                }
            }
        }
    }
    uiManager.doSearch(`${mainsat.sccNum},Analyst Sat`);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#loading-screen').fadeOut('slow');
};
const hideSideMenus = () => {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#breakup-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-breakup').removeClass('bmenu-item-selected');
    isBreakupMenuOpen = false;
};
const bottomMenuClick = (iconName) => {
    if (iconName === 'menu-breakup') {
        const { uiManager, satSet, objectManager } = _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs;
        if (isBreakupMenuOpen) {
            isBreakupMenuOpen = false;
            uiManager.hideSideMenus();
            return;
        }
        else {
            if (objectManager.selectedSat !== -1) {
                if (settingsManager.isMobileModeEnabled)
                    uiManager.searchToggle(false);
                uiManager.hideSideMenus();
                jquery__WEBPACK_IMPORTED_MODULE_2___default()('#breakup-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
                jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-breakup').addClass('bmenu-item-selected');
                isBreakupMenuOpen = true;
                const sat = satSet.getSatExtraOnly(objectManager.selectedSat);
                jquery__WEBPACK_IMPORTED_MODULE_2___default()('#hc-scc').val(sat.sccNum);
            }
            else {
                if (settingsManager.plugins.topMenu)
                    _app_js_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_0__.keepTrackApi.programs.adviceManager.adviceList.breakupDisabled();
                uiManager.toast(`Select a Satellite First!`, 'caution');
                if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-breakup:animated').length) {
                    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#menu-breakup').effect('shake', {
                        distance: 10,
                    });
                }
            }
            return;
        }
    }
};


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_breakup_breakup_ts.4a904d0a64ece53790e8.js.map