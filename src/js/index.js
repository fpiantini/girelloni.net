import '../girelloni.css';

import { elements } from './views/base';

// --- Models ------------------------------------------
import Areas from './models/areas';
import Treks from './models/treks';

// ---- Views ------------------------------------------
import * as areasView from './views/areasView';

/**  globas state of the app 
 * - Areas
*/
const state = {};

// -----------------------------------------------------
window.addEventListener('load', () => {

  var cssClass="divlight";

  state.areas = new Areas();
  state.areas.getAreas().forEach(e => {

    areasView.renderItem(e, cssClass);
    cssClass = (cssClass === "divlight") ? "divdark" : "divlight";

  });

});


// -----------------------------------------------------
window.addEventListener('hashchange', () => {

  const id = window.location.hash.replace('#', '');
  if (id) {
    areasView.clear();
    var treks = new Treks();
    console.log(treks.getTreksByArea(id));
  }
});


