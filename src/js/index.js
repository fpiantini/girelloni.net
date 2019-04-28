import '../girelloni.css';

import 'leaflet_css';
import 'leaflet_marker';
import 'leaflet_marker_2x';
import 'leaflet_marker_shadow';


import { elements } from './views/base';

// --- Models ------------------------------------------
//import Areas from './models/areas';
import Treks from './models/treks';

// ---- Views ------------------------------------------
import * as areasView from './views/areasView';
import * as treksView from './views/treksView';
import * as trekView from './views/trekView';

/**  globas state of the app 
 * - Treks
*/
const state = {};
state.treks = new Treks();

// -----------------------------------------------------
window.addEventListener('load', () => {
  redrawPageBasedOnHash()
});

window.addEventListener('hashchange', () => {
  redrawPageBasedOnHash()
});

// -----------------------------------------------------
function redrawPageBasedOnHash() {

  const id = window.location.hash.replace('#', '');

  areasView.clear();
  treksView.clear();
  trekView.clear();

  var cssClass="divlight";

  if (id) {

    const strs = id.split("__")

    if (strs[0] === "area") {

      treksView.renderPageHeader(strs[1]);

      state.treks.getTreksByArea(strs[1]).forEach(t => {
        treksView.renderItem(t, cssClass);
        cssClass = (cssClass === "divlight") ? "divdark" : "divlight";
      });
    }
    else {
      const trek = state.treks.getTrekById(strs[1]);
      if (trek) {
        trekView.renderPageHeader(trek);
        trekView.renderItem(trek);
        trekView.fillMap(trek);

        // --- FIXME -----------------------------------------------------------
        // Please note that 'layerChooserRadios' cannot be placed in base.js
        // because it does not exist in document until the renderPageHeader()
        // function is called. For this reason the following simpler line
        // cannot be used instead of the next two lines:
        //    elements.layerChooserRadios.addEventListener(.....
        // This problem can be solved adding for example the section with the
        // layerChooserRadios into the page HTML and using the display property
        // 'none' and 'block'
        const layerChooserRadios = document.querySelector('.layer-chooser-radios');
        layerChooserRadios.addEventListener('click', (event) => {
          if (event.target.type === 'radio') {
            trekView.refreshMap(trek);
          }
        }, false);
      }
    }
  }
  else {

    areasView.renderPageHeader();

    state.treks.getClassificationAreas().forEach(e => {
      areasView.renderItem(e, cssClass);
      cssClass = (cssClass === "divlight") ? "divdark" : "divlight";
    });  

  }

}

