import { elements } from './base';
import * as lf from 'leaflet';
import  { tfKey, mpKey }  from '../config'

var L = require('leaflet');

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

        <p>
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
export const fillMap = (item) => {

  console.log('fillMap() called');
  var mymap = new L.map('mapid');
  mymap.scrollWheelZoom.disable();

  redrawMap(mymap);

};

// -------------------------------------------------------------------------
const redrawMap = (map) => {

  console.log('redrawMap() called');
  showLayers(map);

};

// -------------------------------------------------------------------------
const showLayers = (map) => {

  console.log('showLayers() called');
  showSelectedBaseMap(map, 'otm');
  //showTrack(lf.L, map, track);

};

// -------------------------------------------------------------------------
const showSelectedBaseMap = (map, basemap) => {
  clearLayers(map);

  switch (basemap) {
    case 'fum':
      // 4Umaps
      map.addLayer(forYouMapsLayer());
      break;
    case 'otm':
      // Open topo map
      map.addLayer(openTopoMapLayer());
      break;
    case 'tf':
        // Thunderforest landscape
      map.addLayer(thunderForestLandscapeLayer());
      break;
    case 'mb':
      // Mapbox
      map.addLayer(mapBoxLayer());
      break;
    default:
      // impossible... Uses Mapbox
      map.addLayer(mapBoxLayer());
      break;
  }
};

// -------------------------------------------------------------------------
const clearLayers = (map) => {
  map.eachLayer(layer => {
    map.removeLayer(layer);
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






