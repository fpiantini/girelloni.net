import '../girelloni.css';

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
      console.log("This should be a page of a trek.");
      const trek = state.treks.getTrekById(strs[1]);
      console.log(trek);
      if (trek) {
        trekView.renderPageHeader(trek);
        trekView.renderItem(trek);
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

