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
  redrawPageBasedOnHash();
});

window.addEventListener('hashchange', () => {
  redrawPageBasedOnHash();
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

  let map = new MapWidget('mapid');

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
    map.fitBounds(gpxData.getBounds());
  
    trekView.printTrackInfo(trek, gpxData)
  
    plotAltitudeGraph(gpxData.get_elevation_data(), document.querySelector('#altitudegraphcanvas'));

  })
  .addTo(map.getMap());

}

// -----------------------------------------------------
function plotAltitudeGraph(eleData, el) {
  var ctx = el.getContext('2d');
  var myChart = new g.Chart(ctx, {
    type: 'line',
    data: {
        labels: extractDistancesFromGpxData(eleData),
        datasets: [{
          label: 'Altitudine',
          backgroundColor: "#0a5f0a",
          data: extractAltitudesFromGpxData(eleData)
        }]
    },
    options: {
      legend: {
        labels: {
            fontColor: "#fdf6e3",
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: "#fdf6e3",
            maxTicksLimit: 20,
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: "#fdf6e3",
          }
        }]
      }
    }
  });
}

// -----------------------------------------------------
function extractDistancesFromGpxData(eleData) {

  var distances = [];
  for (var i = 0; i < eleData.length; i++) {
     distances.push(eleData[i][0].toFixed(3));
  }
  return distances;

}

// -----------------------------------------------------
function extractAltitudesFromGpxData(eleData) {
  var altitudes = [];
  for (var i = 0; i < eleData.length; i++) {
    altitudes.push(eleData[i][1].toFixed(0));
  }
  return altitudes;
}
