"use strict";
(self["webpackChunkkeeptrack_space"] = self["webpackChunkkeeptrack_space"] || []).push([["src_js_plugins_findSat_findSat_ts"],{

/***/ "./src/js/plugins/findSat/findSat.ts":
/*!*******************************************!*\
  !*** ./src/js/plugins/findSat/findSat.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkInc": () => (/* binding */ checkInc),
/* harmony export */   "checkRaan": () => (/* binding */ checkRaan),
/* harmony export */   "checkArgPe": () => (/* binding */ checkArgPe),
/* harmony export */   "checkPeriod": () => (/* binding */ checkPeriod),
/* harmony export */   "checkRcs": () => (/* binding */ checkRcs),
/* harmony export */   "searchSats": () => (/* binding */ searchSats),
/* harmony export */   "checkInview": () => (/* binding */ checkInview),
/* harmony export */   "checkObjtype": () => (/* binding */ checkObjtype),
/* harmony export */   "checkAz": () => (/* binding */ checkAz),
/* harmony export */   "checkEl": () => (/* binding */ checkEl),
/* harmony export */   "checkRange": () => (/* binding */ checkRange),
/* harmony export */   "newLaunchSubmit": () => (/* binding */ newLaunchSubmit),
/* harmony export */   "uiManagerInit": () => (/* binding */ uiManagerInit),
/* harmony export */   "bottomMenuClick": () => (/* binding */ bottomMenuClick),
/* harmony export */   "hideSideMenus": () => (/* binding */ hideSideMenus),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "findByLooksSubmit": () => (/* binding */ findByLooksSubmit),
/* harmony export */   "limitPossibles": () => (/* binding */ limitPossibles)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/keepTrackApi */ "./src/js/api/keepTrackApi.ts");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/constants */ "./src/js/lib/constants.ts");



let isFindByLooksMenuOpen = false;
const checkInc = (possibles, min, max) => {
    possibles = possibles.filter((possible) => possible.inclination * _lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG < max && possible.inclination * _lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG > min);
    return possibles;
};
const checkRaan = (possibles, min, max) => {
    possibles = possibles.filter((possible) => possible.raan * _lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG < max && possible.raan * _lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG > min);
    return possibles;
};
const checkArgPe = (possibles, min, max) => {
    possibles = possibles.filter((possible) => possible.argPe * _lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG < max && possible.argPe * _lib_constants__WEBPACK_IMPORTED_MODULE_2__.RAD2DEG > min);
    return possibles;
};
const checkPeriod = (possibles, minPeriod, maxPeriod) => {
    possibles = possibles.filter((possible) => possible.period > minPeriod && possible.period < maxPeriod);
    return limitPossibles(possibles, 200);
};
const checkRcs = (possibles, minRcs, maxRcs) => {
    possibles = possibles.filter((possible) => parseFloat(possible.R) > minRcs && parseFloat(possible.R) < maxRcs);
    return limitPossibles(possibles, 200);
};
const searchSats = (azimuth, elevation, range, inclination, azMarg, elMarg, rangeMarg, incMarg, period, periodMarg, rcs, rcsMarg, objtype, raan, raanMarg, argPe, argPeMarg) => {
    const isValidAz = !isNaN(azimuth) && isFinite(azimuth);
    const isValidEl = !isNaN(elevation) && isFinite(elevation);
    const isValidRange = !isNaN(range) && isFinite(range);
    const isValidInc = !isNaN(inclination) && isFinite(inclination);
    const isValidRaan = !isNaN(raan) && isFinite(raan);
    const isValidArgPe = !isNaN(argPe) && isFinite(argPe);
    const isValidPeriod = !isNaN(period) && isFinite(period);
    const isValidRcs = !isNaN(rcs) && isFinite(rcs);
    azMarg = !isNaN(azMarg) && isFinite(azMarg) ? azMarg : 5;
    elMarg = !isNaN(elMarg) && isFinite(elMarg) ? elMarg : 5;
    rangeMarg = !isNaN(rangeMarg) && isFinite(rangeMarg) ? rangeMarg : 200;
    incMarg = !isNaN(incMarg) && isFinite(incMarg) ? incMarg : 1;
    periodMarg = !isNaN(periodMarg) && isFinite(periodMarg) ? periodMarg : 0.5;
    rcsMarg = !isNaN(rcsMarg) && isFinite(rcsMarg) ? rcsMarg : rcs / 10;
    raanMarg = !isNaN(raanMarg) && isFinite(raanMarg) ? raanMarg : 1;
    argPeMarg = !isNaN(argPeMarg) && isFinite(argPeMarg) ? argPeMarg : 1;
    if (!isValidEl && !isValidRange && !isValidAz && !isValidInc && !isValidPeriod && !isValidRcs && !isValidArgPe && !isValidRaan)
        throw new Error('No Search Criteria Entered');
    const { satSet, satellite, uiManager } = _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    const satData = satSet.satData;
    let res = satData
        .filter((sat) => !sat.static && !sat.missile && sat.active)
        .map((sat) => {
        const tearr = satellite.getTEARR(sat);
        return Object.assign(Object.assign({}, sat), { az: tearr.az, el: tearr.el, rng: tearr.rng, inView: tearr.inView });
    });
    res = !isValidInc && !isValidPeriod ? checkInview(res) : res;
    res = objtype !== 0 ? checkObjtype(res, objtype) : res;
    if (isValidAz) {
        const minaz = azimuth - azMarg;
        const maxaz = azimuth + azMarg;
        res = checkAz(res, minaz, maxaz);
    }
    if (isValidEl) {
        const minel = elevation - elMarg;
        const maxel = elevation + elMarg;
        res = checkEl(res, minel, maxel);
    }
    if (isValidRange) {
        const minrange = range - rangeMarg;
        const maxrange = range + rangeMarg;
        res = checkRange(res, minrange, maxrange);
    }
    if (isValidInc) {
        const minInc = inclination - incMarg;
        const maxInc = inclination + incMarg;
        res = checkInc(res, minInc, maxInc);
    }
    if (isValidRaan) {
        const minRaan = raan - raanMarg;
        const maxRaan = raan + raanMarg;
        res = checkRaan(res, minRaan, maxRaan);
    }
    if (isValidArgPe) {
        const minArgPe = argPe - argPeMarg;
        const maxArgPe = argPe + argPeMarg;
        res = checkArgPe(res, minArgPe, maxArgPe);
    }
    if (isValidPeriod) {
        const minPeriod = period - periodMarg;
        const maxPeriod = period + periodMarg;
        res = checkPeriod(res, minPeriod, maxPeriod);
    }
    if (isValidRcs) {
        const minRcs = rcs - rcsMarg;
        const maxRcs = rcs + rcsMarg;
        res = checkRcs(res, minRcs, maxRcs);
    }
    // $('#findByLooks-results').text('');
    // IDEA: Intentionally doesn't clear previous searches. Could be an option later.
    const sccList = [];
    for (let i = 0; i < res.length; i++) {
        // $('#findByLooks-results').append(res[i].sccNum + '<br />');
        if (i < res.length - 1) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search').val(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search').val() + res[i].sccNum + ',');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search').val(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search').val() + res[i].sccNum);
        }
        sccList.push(res[i].sccNum);
    }
    uiManager.doSearch(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search').val());
    // console.log(sccList);
    return res;
};
const checkInview = (possibles) => {
    possibles = possibles.filter((possible) => possible.inView);
    return possibles;
};
const checkObjtype = (possibles, objtype) => {
    possibles = possibles.filter((possible) => possible.OT === objtype);
    return possibles;
};
const checkAz = (possibles, minaz, maxaz) => {
    possibles = possibles.filter((possible) => possible.az >= minaz && possible.az <= maxaz);
    return possibles;
};
const checkEl = (possibles, minel, maxel) => {
    possibles = possibles.filter((possible) => possible.el >= minel && possible.el <= maxel);
    return possibles;
};
const checkRange = (possibles, minrange, maxrange) => {
    possibles = possibles.filter((possible) => possible.rng >= minrange && possible.rng <= maxrange);
    return possibles;
};
const newLaunchSubmit = () => {
    const { timeManager, mainCamera, satellite, satSet, orbitManager, uiManager, objectManager } = _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    const scc = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#nl-scc').val();
    const satId = satSet.getIdFromObjNum(scc);
    let sat = satSet.getSat(satId);
    const upOrDown = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#nl-updown').val();
    const launchFac = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#nl-facility').val();
    let launchLat, launchLon;
    if (objectManager.isLaunchSiteManagerLoaded) {
        for (const launchSite in objectManager.launchSiteManager.launchSiteList) {
            if (objectManager.launchSiteManager.launchSiteList[launchSite].name === launchFac) {
                launchLat = objectManager.launchSiteManager.launchSiteList[launchSite].lat;
                launchLon = objectManager.launchSiteManager.launchSiteList[launchSite].lon;
            }
        }
    }
    if (launchLon > 180) {
        // if West not East
        launchLon -= 360; // Convert from 0-360 to -180-180
    }
    // if (sat.inclination * RAD2DEG < launchLat) {
    //   uiManager.toast(`Satellite Inclination Lower than Launch Latitude!`, 'critical');
    //   $('#loading-screen').fadeOut('slow');
    //   return;
    // }
    // Set time to 0000z for relative time.
    const today = new Date(); // Need to know today for offset calculation
    const quadZTime = new Date(today.getFullYear(), today.getUTCMonth(), today.getUTCDate(), 0, 0, 0); // New Date object of the future collision
    // Date object defaults to local time.
    quadZTime.setUTCHours(0); // Move to UTC Hour
    timeManager.changeStaticOffset(quadZTime.getTime() - today.getTime()); // Find the offset from today
    mainCamera.isCamSnapMode = false;
    const simulationTimeObj = timeManager.calculateSimulationTime();
    const TLEs = satellite.getOrbitByLatLon(sat, launchLat, launchLon, upOrDown, simulationTimeObj);
    const TLE1 = TLEs[0];
    const TLE2 = TLEs[1];
    if (satellite.altitudeCheck(TLE1, TLE2, timeManager.calculateSimulationTime()) > 1) {
        satSet.satCruncher.postMessage({
            typ: 'satEdit',
            id: satId,
            active: true,
            TLE1: TLE1,
            TLE2: TLE2,
        });
        orbitManager.updateOrbitBuffer(satId, true, TLE1, TLE2);
        sat = satSet.getSat(satId);
    }
    else {
        uiManager.toast(`Failed Altitude Test - Try a Different Satellite!`, 'critical');
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#loading-screen').fadeOut('slow');
};
const uiManagerInit = () => {
    // Side Menu
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#left-menus').append(_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
        <div id="findByLooks-menu" class="side-menu-parent start-hidden text-select">
          <div id="findByLooks-content" class="side-menu">
            <div class="row">
              <h5 class="center-align">Find By Looks</h5>
              <form id="findByLooks">
                <div class="row">
                  <div class="input-field col s12">
                    <select value=0 id="fbl-type" type="text">
                      <option value=0>All</option>
                      <option value=1>Payload</option>
                      <option value=2>Rocket Body</option>
                      <option value=3>Debris</option>
                    </select>
                    <label for="disabled">Object Type</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="xxx.x" id="fbl-azimuth" type="text">
                    <label for="fbl-azimuth" class="active">Azimuth</label>
                  </div>
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="5" id="fbl-azimuth-margin" type="text">
                    <label for="fbl-azimuth-margin "class="active">Margin</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="XX.X" id="fbl-elevation" type="text">
                    <label for="fbl-elevation "class="active">Elevation</label>
                  </div>
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="5" id="fbl-elevation-margin" type="text">
                    <label for="fbl-elevation-margin "class="active">Margin</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="xxxx.x" id="fbl-range" type="text">
                    <label for="fbl-range "class="active">Range</label>
                  </div>
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="500" id="fbl-range-margin" type="text">
                    <label for="fbl-range-margin "class="active">Margin</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="XX.X" id="fbl-inc" type="text">
                    <label for="fbl-inc "class="active">Inclination</label>
                  </div>
                  <div class="input-field col s12 m6 l6">
                    <input value="0.5" placeholder="0.5" id="fbl-inc-margin" type="text">
                    <label for="fbl-inc-margin "class="active">Margin</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="XX.X" id="fbl-period" type="text">
                    <label for="fbl-period "class="active">Period</label>
                  </div>
                  <div class="input-field col s12 m6 l6">
                    <input value="10" placeholder="10" id="fbl-period-margin" type="text">
                    <label for="fbl-period-margin "class="active">Margin</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="XX.X" id="fbl-rcs" type="text">
                    <label for="fbl-rcs "class="active">RCS</label>
                  </div>
                  <div class="input-field col s12 m6 l6">
                    <input value="10" placeholder="10" id="fbl-rcs-margin" type="text">
                    <label for="fbl-rcs-margin "class="active">Margin</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="XX.X" id="fbl-raan" type="text">
                    <label for="fbl-raan "class="active">Right Ascension</label>
                  </div>
                  <div class="input-field col s12 m6 l6">
                    <input value="0.5" placeholder="0.5" id="fbl-raan-margin" type="text">
                    <label for="fbl-raan-margin "class="active">Margin</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 m6 l6">
                    <input placeholder="XX.X" id="fbl-argPe" type="text">
                    <label for="fbl-argPe "class="active">Arg of Perigee</label>
                  </div>
                  <div class="input-field col s12 m6 l6">
                    <input value="0.5" placeholder="0.5" id="fbl-argPe-margin" type="text">
                    <label for="fbl-argPe-margin "class="active">Margin</label>
                  </div>
                </div>
                <div class="center-align">
                  <button id="findByLooks-submit" class="btn btn-ui waves-effect waves-light" type="submit"
                    name="action">Find Satellite(s) &#9658;
                  </button>
                </div>
              </form>
              <div class="row center-align" style="margin-top:20px;">
                <span id="fbl-error" class="menu-selectable"></span>
              </div>
            </div>
          </div>
        </div>
      `);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-error').on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-error').hide();
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#newLaunch').on('submit', function (e) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#loading-screen').fadeIn(1000, newLaunchSubmit);
        e.preventDefault();
    });
    // Allow resizing of the side menu
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#newLaunch-menu').resizable({
        handles: 'e',
        stop: function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('height', '');
        },
        maxWidth: 450,
        minWidth: 280,
    });
    // Bottom Icon
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#bottom-icons').append(_api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.html `
        <div id="menu-find-sat" class="bmenu-item">
          <img alt="find2" src="data:image/png;base64,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">
          <span class="bmenu-title">Find Satellite</span>
          <div class="status-icon"></div>
        </div>     
      `);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#findByLooks').on('submit', function (e) {
        findByLooksSubmit();
        e.preventDefault();
    });
};
const bottomMenuClick = (iconName) => {
    if (iconName === 'menu-find-sat') {
        const { uiManager } = _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
        if (isFindByLooksMenuOpen) {
            isFindByLooksMenuOpen = false;
            uiManager.hideSideMenus();
            return;
        }
        else {
            if (settingsManager.isMobileModeEnabled)
                uiManager.searchToggle(false);
            uiManager.hideSideMenus();
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#findByLooks-menu').effect('slide', { direction: 'left', mode: 'show' }, 1000);
            isFindByLooksMenuOpen = true;
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-find-sat').addClass('bmenu-item-selected');
            return;
        }
    }
};
const hideSideMenus = () => {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#findByLooks-menu').effect('slide', { direction: 'left', mode: 'hide' }, 1000);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#menu-find-sat').removeClass('bmenu-item-selected');
    isFindByLooksMenuOpen = false;
};
const init = () => {
    // Add HTML
    _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'uiManagerInit',
        cbName: 'findSat',
        cb: uiManagerInit,
    });
    // Add JavaScript
    _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'bottomMenuClick',
        cbName: 'findSat',
        cb: bottomMenuClick,
    });
    _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.register({
        method: 'hideSideMenus',
        cbName: 'findSat',
        cb: hideSideMenus,
    });
};
const findByLooksSubmit = () => {
    const fblAzimuth = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-azimuth').val());
    const fblElevation = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-elevation').val());
    const fblRange = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-range').val());
    const fblInc = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-inc').val());
    const fblPeriod = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-period').val());
    const fblRcs = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-rcs').val());
    const fblAzimuthM = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-azimuth-margin').val());
    const fblElevationM = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-elevation-margin').val());
    const fblRangeM = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-range-margin').val());
    const fblIncM = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-inc-margin').val());
    const fblPeriodM = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-period-margin').val());
    const fblRcsM = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-rcs-margin').val());
    const fblType = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-type').val());
    const fblRaan = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-raan').val());
    const fblRaanM = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-raan-margin').val());
    const fblArgPe = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-argPe').val());
    const fblArgPeM = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fbl-argPe-margin').val());
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search').val(''); // Reset the search first
    const { uiManager } = _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    try {
        const res = searchSats(fblAzimuth, fblElevation, fblRange, fblInc, fblAzimuthM, fblElevationM, fblRangeM, fblIncM, fblPeriod, fblPeriodM, fblRcs, fblRcsM, fblType, fblRaan, fblRaanM, fblArgPe, fblArgPeM);
        if (res.length === 0) {
            uiManager.toast(`No Satellites Found`, 'critical');
        }
    }
    catch (e) {
        if (e.message === 'No Search Criteria Entered') {
            uiManager.toast(`No Search Criteria Entered`, 'critical');
        }
    }
};
const limitPossibles = (possibles, limit) => {
    const { uiManager } = _api_keepTrackApi__WEBPACK_IMPORTED_MODULE_1__.keepTrackApi.programs;
    if (possibles.length >= limit)
        uiManager.toast('Too many results, limited to 200', 'warning');
    possibles = possibles.filter((_possible, i) => i > limit - 1);
    return possibles;
};


/***/ })

}]);
//# sourceMappingURL=src_js_plugins_findSat_findSat_ts.52fe2463788d65423ae0.js.map