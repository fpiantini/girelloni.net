import '../girelloni.css';
//import homeImg from '../homeimg.png';

// --- Models ------------------------------------------
import Areas from './models/areas'

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

 