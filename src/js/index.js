import '../girelloni.css';

import { elements } from './views/base';

// --- Models ------------------------------------------
//import Areas from './models/areas';
import Treks from './models/treks';

// ---- Views ------------------------------------------
import * as areasView from './views/areasView';

/**  globas state of the app 
 * - Treks
*/
const state = {};
state.treks = new Treks();

// -----------------------------------------------------
window.addEventListener('load', () => {

  var cssClass="divlight";

  state.treks.getClassificationAreas().forEach(e => {
    console.log(e); 
    areasView.renderItem(e, cssClass);
    cssClass = (cssClass === "divlight") ? "divdark" : "divlight";
  });

});


// -----------------------------------------------------
window.addEventListener('hashchange', () => {

  const id = window.location.hash.replace('#', '');
  if (id) {
    areasView.clear();
    console.log(state.treks.getTreksByArea(id));
  }
});


