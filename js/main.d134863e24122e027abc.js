/*! For license information please see main.d134863e24122e027abc.js.LICENSE.txt */
          <div id="nav-mobile">
            <div id="jday"></div>
            <div id="${this.divContainerId}" data-position="bottom" data-delay="50" data-tooltip="Time Menu">
              <div id="datetime-text" class="waves-effect waves-light">Placeholder Text</div>
              <div id="datetime-input">
                <form id="datetime-input-form">
                  <input type="text" id="${this.dateTimeInputTbId}" readonly="true" />
                </form>
              </div>
            </div>
        </div>
          `)}uiManagerFinal(){(0,i.Gn)("datetime-text").addEventListener("click",this.datetimeTextClick.bind(this)),c()("#datetime-input-form").on("change",(e=>{this.datetimeInputFormChange(),e.preventDefault()}));const e=this;c()("#datetime-input-tb").datetimepicker({dateFormat:"yy-mm-dd",timeFormat:"HH:mm:ss",timezone:"+0000",gotoCurrent:!0,addSliderAccess:!0,sliderAccessArgs:{touchonly:!1}}).on("change.dp",(function(){if(e.isEditTimeOpen){(0,i.Gn)("datetime-input").style.display="none",e.isEditTimeOpen=!1;try{a.bD.getUiManager().updateNextPassOverlay(!0)}catch(e){}}}))}datetimeInputFormChange(e){const t=a.bD.getTimeManager(),n=a.bD.getColorSchemeManager();let r;r=e||c()(`#${this.dateTimeInputTbId}`).datepicker("getDate");const l=new Date,s=(0,o.Bk)(t.simulationTimeObj);(0,i.Gn)("jday").innerHTML=s.toString(),t.changeStaticOffset(r.getTime()-l.getTime()),n.setColorScheme(settingsManager.currentColorScheme,!0),t.calculateSimulationTime(),t.lastBoxUpdateTime=t.realTime;try{a.bD.getPlugin(h._).lastOverlayUpdateTime=1*t.realTime-7e3,a.bD.getUiManager().updateNextPassOverlay(!0)}catch(e){}}}p.PLUGIN_NAME="Top Menu";const m=new p},769:(e,t,n)=>{"use strict";n.d(t,{s:()=>d,x:()=>h});var a=n(2573),i=n(5460);const o=n.p+"../img/debug.png";var r=n(9640),l=n(7727),s=n(2007),c=n.n(s),u=n(9959);class d extends u.c{constructor(){super(d.PLUGIN_NAME),this.isErudaVisible=!1,this.bottomIconImg=o,this.bottomIconElementName="menu-debug",this.bottomIconLabel="Debug",this.dragOptions={isDraggable:!0,minWidth:300,maxWidth:500},this.helpTitle="Debug Menu",this.helpBody=r.bD.html`The Debug Menu is used for debugging the app. It is probably not very useful unless you are assisting me with debugging an issue
  <br><br>
  Open Debug Menu allows you to access the console even when it is blocked by the browser. This is useful for debugging issues that only occur in the browser console.
  <br><br>
  Run Gremlins will run a series of tests to try to break the app. This kind of fuzz testing is useful for testing the app's robustness.`,this.sideMenuElementName="debug-menu",this.sideMenuElementHtml=r.bD.html`
    <div id="debug-menu" class="side-menu-parent start-hidden text-select">
      <div id="debug-content" class="side-menu">
        <div class="row">
          <h5 class="center-align">Debug Menu</h5>
          <div class="center-align row">
            <button id="debug-console" class="btn btn-ui waves-effect waves-light" type="button">Open Debug Menu &#9658;</button>
          </div>
          <div class="center-align row">
            <button id="debug-gremlins" class="btn btn-ui waves-effect waves-light" type="button">Unleash Gremlins &#9658;</button>
          </div>
        </div>
        <div class="row">
          <h6 class="center-align">Camera</h5>
          <div class="center-align row">
            <span id="debug-camera-position-x"></span>
          </div>
          <div class="center-align row">
            <span id="debug-camera-position-y"></span>
          </div>
          <div class="center-align row">
            <span id="debug-camera-position-z"></span>
          </div>
          <div class="center-align row">
            <span id="debug-camera-distance-from-earth"></span>
          </div>
          <div class="center-align row">
            <button id="debug-cam-to-center" class="btn btn-ui waves-effect waves-light" type="button">Draw Cam to Center Line &#9658;</button>
          </div>
          <div class="center-align row">
            <button id="debug-cam-to-sat" class="btn btn-ui waves-effect waves-light" type="button">Draw Cam to Sat Line &#9658;</button>
          </div>
        </div>
        <div class="row">
          <h6 class="center-align">Satellite</h5>
          <div class="center-align row">
            <span id="debug-sat-position-x"></span>
          </div>
          <div class="center-align row">
            <span id="debug-sat-position-y"></span>
          </div>
          <div class="center-align row">
            <span id="debug-sat-position-z"></span>
          </div>
        </div>
    </div>
            <div class="sat-info-section-header">Object Data</div>
            <div class="sat-info-row">
              <div class="sat-info-key" data-position="top" data-delay="50"
                data-tooltip="Type of Object">Type</div>
              <div class="sat-info-value" id="sat-type">PAYLOAD</div>
            </div>
            <div class="sat-info-row sat-only-info">
              <div class="sat-info-key" data-position="top" data-delay="50"
                data-tooltip="Country That Owns the Object">Country</div>
              <div class="sat-info-value" id="sat-country">COUNTRY</div>
            </div>
            <div class="sat-info-row" id="sat-site-row">
              <div class="sat-info-key" data-position="top" data-delay="50"
                data-tooltip="Location Where Object Launched From">Launch Site</div>
              <div class="sat-info-value">
                <div id="sat-site">SITE</div>
                <div id="sat-sitec">LAUNCH COUNTRY</div>
              </div>
              </div>
            <div class="sat-info-row">
              <div class="sat-info-key" data-position="top" data-delay="50"
                data-tooltip="Space Lift Vehicle That Launched Object">Rocket</div>
              <div class="sat-info-value menu-selectable" id="sat-vehicle">VEHICLE</div>
            </div>
            <div class="sat-info-row sat-only-info">
            <div class="sat-info-key" data-position="top" data-delay="50"
              data-tooltip="Configuration of the Rocket">
              Configuration
            </div>
            <div class="sat-info-value" id="sat-configuration">
              NO DATA
            </div>
          </div>
          <div class="sat-info-row sat-only-info">
            <div class="sat-info-key" data-position="top" data-delay="50"
              data-tooltip="Radar Cross Section - How reflective the object is to a radar">
              RCS
            </div>
            <div class="sat-info-value" data-position="top" data-delay="50" id="sat-rcs">NO DATA</div>
          </div>
          <div class="sat-info-row sat-only-info">
            <div class="sat-info-key" data-position="top" data-delay="50"
              data-tooltip="Standard Magnitude - Smaller Numbers Are Brighter">
              Standard Mag
            </div>
            <div class="sat-info-value" id="sat-stdmag">
              NO DATA
            </div>
          </div>
          `)}static createSecondaryData(){(0,c.Gn)("sat-infobox").insertAdjacentHTML("beforeend",r.bD.html`
          <div id="secondary-sat-info">
            <div class="sat-info-section-header">Secondary Satellite</div>
            <div class="sat-info-row">
              <div class="sat-info-key" data-position="top" data-delay="50"
                data-tooltip="Linear Distance from Secondary Satellite">
                Linear
              </div>
              <div class="sat-info-value" id="sat-sec-dist">xxxx km</div>
            </div>
            <div class="sat-info-row">
              <div class="sat-info-key" data-position="top" data-delay="50"
                data-tooltip="Radial Distance">
                Radial
              </div>
              <div class="sat-info-value" id="sat-sec-rad">XX deg</div>
            </div>
            <div class="sat-info-row">
              <div class="sat-info-key" data-position="top" data-delay="50"
                data-tooltip="In-Track Distance from Secondary Satellite">
                In-Track
              </div>
              <div class="sat-info-value" id="sat-sec-intrack">XX deg</div>
            </div>
            <div class="sat-info-row">
              <div class="sat-info-key" data-position="top" data-delay="50"
                data-tooltip="Cross-Track Distance from Secondary Satellite">
                Cross-Track
              </div>
              <div class="sat-info-value" id="sat-sec-crosstrack">xxxx km</div>
            </div>
          </div>
          `)}static createOrbitalData(){(0,c.Gn)("ui-wrapper").insertAdjacentHTML("beforeend",r.bD.html`
            <div id="sat-infobox" class="text-select satinfo-fixed start-hidden">
              <div id="sat-info-top-links">
                <div id="sat-info-title" class="center-text sat-info-section-header">
                  <img id="sat-add-watchlist" src="${a}"/>
                  <img id="sat-remove-watchlist" src="${i}"/>
                  <span id="sat-info-title-name">
                    This is a title
                  </span>
                </div>
                <div id="all-objects-link" class="link sat-infobox-links sat-only-info" data-position="top" data-delay="50"
                data-tooltip="Find Related Objects">Find all objects from this launch...</div>