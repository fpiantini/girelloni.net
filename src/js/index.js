import '../girelloni.css';

import * as lgpx from 'leaflet-gpx';
import * as g from 'chart.js';

import 'leaflet_css';
import 'leaflet_marker';
import 'leaflet_marker_2x';
import 'leaflet_marker_shadow';


import { elements } from './views/base';

// --- Models ------------------------------------------
//import Areas from './models/areas';
import Treks from './models/treks';
import MapWidget from './models/mapwidget';

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

  elements.mapBox.classList.add('hidden');
  elements.altitudeGraph.classList.add('hidden');
  areasView.clear();
  treksView.clear();
  trekView.clear();

  var cssClass="divlight";

  if (id) {

    const strs = id.split("__")

    if (strs[0] === "area") {

      // ------------------------------------- This is the AREA page -----
    
      treksView.renderPageHeader(strs[1]);
      state.treks.getTreksByArea(strs[1]).forEach(t => {
        treksView.renderItem(t, cssClass);
        cssClass = (cssClass === "divlight") ? "divdark" : "divlight";
      });

    }
    else {
      // ------------------------------------- This is the TREK page -----
      const trek = state.treks.getTrekById(strs[1]);
      if (trek) {
        redrawTrekPage(trek);
      }
      // -----------------------------------------------------------------
    }
  }
  else {

    // ---------------------------------------- This is the main page -----
    areasView.renderPageHeader();

    state.treks.getClassificationAreas().forEach(e => {
      areasView.renderItem(e, cssClass);
      cssClass = (cssClass === "divlight") ? "divdark" : "divlight";
    });  

  }

}

// -----------------------------------------------------
function redrawTrekPage(trek) {

  trekView.preparePage(trek.id, trek.title);

  state.map = new MapWidget('mapid');

  // add the track and display additional info
  // when it is loaded
  const trackfile= `treks/${trek.trackfile}`;
  new lgpx.GPX(trackfile, {
    async: true,
    //marker_options: {
    //  startIconUrl: 'pin-icon-start.png',
    //  endIconUrl: 'pin-icon-end.png',
    //  shadowUrl: 'pin-shadow.png'
    //},
    polyline_options: {
      color: 'darkred',
      opacity: 0.75,
      weight: 3,
      lineCap: 'round'
    }
  }).on('loaded', (ev) => {

    const gpxData = ev.target;
    state.map.fitBounds(gpxData.getBounds());
  
    trekView.printTrackInfo(trek, gpxData)
  
    console.log(gpxData.get_elevation_data()[0]);
    plotAltitudeGraph(gpxData);

  })
  .addTo(state.map.getMap());

}

// -----------------------------------------------------
function plotAltitudeGraph(gpxData) {
  var ctx = elements.altitudeGraphCanvas.getContext('2d');
  var myChart = new g.Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Altitude',
            data: [12, 19, 3, 5, 2, 3]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  });
}