import { elements } from './base';
import * as lf from 'leaflet';
import * as lgpx from 'leaflet-gpx';
import  { tfKey, mpKey }  from '../config'

var L = require('leaflet');
var theMap;

// -------------------------------------------------------------------------
export const renderPageHeader = (item) => {

  const markup = `

    <div class="divdark" id="mapbox">
      <div class="divmap" id="mapid" style="height: 610px; width:100%"></div>
      <p class='inevidence'>${item.title}</p>
    </div>
    <div class="divlight" id="mapbox">
    <form action="#" method="post" class="mapLayerChooser" id="mapLayerChooserForm">
      <fieldset class="mapLayerChooser">
        <legend class="mapLayerChooser">Tipo di mappa base</legend>

        <p class="layer-chooser-radios" id="layer-chooser-radios">
          <label><input type="radio" name="basemap" value="otm" checked="checked" /> OpenTopoMap</label>
          <label><input type="radio" name="basemap" value="fum" /> 4UMaps</label>
          <label><input type="radio" name="basemap" value="tf" /> ThunderForest Landscape</label>
          <label><input type="radio" name="basemap" value="mb" /> MapBox</label>
        </p>
      </fieldset>
    </form>
  </div>
`;
  elements.mainPageHeader.insertAdjacentHTML('beforeend', markup);
  
  theMap = new L.map('mapid');

};

// -------------------------------------------------------------------------
export const renderItem = (item) => {
  
  const markup = `
    <div id="${item.id}__details">
      <p class="trek_details">TO BE COMPLETED. Trek ID = ${item.id}</p>
    </div>
  `;
  elements.trekElement.insertAdjacentHTML('beforeend', markup);
};

// -------------------------------------------------------------------------
export const clear = () => {
  elements.trekElement.innerHTML = '';
};

// -------------------------------------------------------------------------
export const fillMap = (trek) => {

  theMap.scrollWheelZoom.disable();

  redrawMap(trek);

};

// -------------------------------------------------------------------------
export const refreshMap = (trek) => {
  redrawMap(trek);
}
// -------------------------------------------------------------------------
const redrawMap = (trek) => {

  showLayers(trek);

};

// -------------------------------------------------------------------------
const showLayers = (trek) => {

  showSelectedBaseMap(getSelectedBaseMap());
  showTrack(trek.trackfile);

};

// -------------------------------------------------------------------------
const getSelectedBaseMap = () => {

  let val = 'otm';

  // --- FIXME -----------------------------------------------------------
  // Please note that 'mapLayerChooser' cannot be placed in base.js
  // because it does not exist in document until the renderPageHeader()
  // function is called. For this reason the following simpler line
  // cannot be used instead of the next two lines:
  //    const radios = elements.mapLayerChooserForm.elements['basemap'];
  // This problem can be solved adding for example the section with the
  // mapLayerChooser into the page HTML and using the display property
  // 'none' and 'block'
  const mapform = document.querySelector('.mapLayerChooser');
  const radios = mapform.elements['basemap'];
  // ---------------------------------------------------------------------

  for (var i = 0, len = radios.length; i < len; i = i + 1) {
    if (radios[i].checked === true) {
      val = radios[i].value;
      break;
    }
  }

  return val;
};

// -------------------------------------------------------------------------
const showSelectedBaseMap = (basemap) => {

  clearLayers();

  switch (basemap) {
    case 'fum':
      // 4Umaps
      theMap.addLayer(forYouMapsLayer());
      break;
    case 'otm':
      // Open topo map
      theMap.addLayer(openTopoMapLayer());
      break;
    case 'tf':
      // Thunderforest landscape
      theMap.addLayer(thunderForestLandscapeLayer());
      break;
    case 'mb':
      // Mapbox
      theMap.addLayer(mapBoxLayer());
      break;
    default:
      // impossible... Uses Mapbox
      theMap.addLayer(mapBoxLayer());
      break;
  }
};

// -------------------------------------------------------------------------
const clearLayers = () => {
  theMap.eachLayer(layer => {
    theMap.removeLayer(layer);
  });
};

// -------------------------------------------------------------------------
const forYouMapsLayer = () => {
  return L.tileLayer('https://tileserver.4umaps.com/{z}/{x}/{y}.png',
    {
      maxZoom: 17,
      attribution: 'Map data: &copy; <a   href="https://www.4umaps.com/">4UMaps</a>'
    });
};

// -------------------------------------------------------------------------
const openTopoMapLayer = () => {
  return L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    {
      maxZoom: 17,
      attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://entopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });
};

// -------------------------------------------------------------------------
const thunderForestLandscapeLayer = () => {
  return L.tileLayer('https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={apikey}',  {
    attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    apikey: 'e9fb11ac45734d7f9475e22de47d93e7',
    maxZoom: 22
  });
};

// -------------------------------------------------------------------------
const mapBoxLayer = () => {

  const mpUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mpKey;

  const mpAttrib = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>';

  return new L.tileLayer(mpUrl,
    {
      attribution: mpAttrib,
      id: 'mapbox.streets'
    });
};

// -------------------------------------------------------------------------
const showTrack = (tfile) => {

  var gpx = `treks/${tfile}`;
  new L.GPX(gpx, {
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
  }).on('loaded', (e) => {
    var gpx = e.target;
    theMap.fitBounds(gpx.getBounds());

    //printTrackInfo(gpx);

  }).addTo(theMap);

};
