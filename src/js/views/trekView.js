import { elements } from './base';
import * as lf from 'leaflet';
import * as lgpx from 'leaflet-gpx';
import  { tfKey, mpKey }  from '../config'

var L = require('leaflet');
var theMap;

// -------------------------------------------------------------------------
export const clear = () => {
  elements.trekElement.innerHTML = '';
};

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

        <p class="layer-chooser-radios normalnomargin" id="layer-chooser-radios">
          <label><input type="radio" name="basemap" value="otm" checked="checked" /> OpenTopoMap</label>
          <label><input type="radio" name="basemap" value="fum" /> 4UMaps</label>
          <label><input type="radio" name="basemap" value="hbm" /> Hike & Bike map</label>
          <label><input type="radio" name="basemap" value="osm" /> OpenStreet map</label>
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
export const fillMap = (trek) => {

  // Uncomment the next line to disable the zoom on map when
  // when scrolling with mouse wheel
  //theMap.scrollWheelZoom.disable();
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
  showTrack(trek);

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

  // TO ADD NEW BASEMAP: refer to:
  // https://leaflet-extras.github.io/leaflet-providers/preview/

  switch (basemap) {
    case 'fum':
      // 4Umaps
      theMap.addLayer(forYouMapsLayer());
      break;
    case 'otm':
      // Open topo map
      theMap.addLayer(openTopoMapLayer());
      break;
    case 'hbm':
      // Hike & Bike map
      theMap.addLayer(HikeBikeLayer());
      break;
    case 'osm':
      // OpenStreet map
      theMap.addLayer(OpenStreetMapLayer());
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
const HikeBikeLayer = () => {

    return new L.tileLayer('https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
};

// -------------------------------------------------------------------------
const OpenStreetMapLayer = () => {

  return new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
};
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
}

// -------------------------------------------------------------------------
const showTrack = (trek) => {

  const gpxfile = `treks/${trek.trackfile}`;
  new L.GPX(gpxfile, {
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
    var gpxdata = e.target;
    theMap.fitBounds(gpxdata.getBounds());

    printTrackInfo(trek, gpxdata);

  }).addTo(theMap);

};

// -------------------------------------------------------------------------
const printTrackInfo = (trek, gpxdata) => {
  
  elements.trekElement.innerHTML = '';
  const markup = `
    <div id="${trek.id}__details" class="divdark">
      <p class="inevidence">
        Informazioni sul percorso
      </p>
      <p class="normal hidden" id = "md_starttime">Orario di inizio: ${gpxdata.get_start_time()}</p>
      <p class="normalnomargin hidden" id = "md_endtime">Orario di fine: ${gpxdata.get_end_time()}</p>
      <p class="normalnomargin" id = "md_totdistance">Distanza totale: ${distanceToString(gpxdata.get_distance(), true)}</p>
      <p class="normalnomargin hidden" id = "md_movingtime">Tempo in movimento: ${deltaTimeInSecondsToString(gpxdata.get_moving_time() / 1000)}</p>
      <p class="normalnomargin" id = "md_totaltime">Tempo totale: ${deltaTimeInSecondsToString(gpxdata.get_total_time() / 1000)}</p>
      <p class="normalnomargin hidden" id = "md_movingpace">Ritmo medio in movimento: ${gpxdata.get_moving_pace()}</p>
      <p class="normalnomargin hidden" id = "md_movingspeed">Velocità media in movimento: ${gpxdata.get_moving_speed().toFixed(2)}</p>
      <p class="normalnomargin" id = "md_totalspeed">Velocità media: ${gpxdata.get_total_speed().toFixed(2)} Km/h</p>
      <p class="normalnomargin" id = "md_elevmin">Elevazione minima: ${distanceToString(gpxdata.get_elevation_min(), false)}</p>
      <p class="normalnomargin" id = "md_elevmax">Elevazione massima: ${distanceToString(gpxdata.get_elevation_max(), false)}</p>
      <p class="normalnomargin" id = "md_elevgain">Dislivello in salita: ${distanceToString(gpxdata.get_elevation_gain(), false)}</p>
      <p class="normalmarginbottom" id = "md_elevloss">Dislivello in discesa: ${distanceToString(gpxdata.get_elevation_loss(), false)}</p>
    </div>
  `;
  elements.trekElement.insertAdjacentHTML('beforeend', markup);
};

// -------------------------------------------------------------------------
const distanceToString = (dist, useKm) => {
    var retStr, n_km, n_m;

    // distance is in meters
    if (useKm) {
      n_km = Math.floor(dist / 1000);
      n_m = Math.round(dist % 1000);
      if (n_km > 0) {
        retStr = n_km + ' Km ' + n_m + 'm';
      } else {
        retStr = n_m + ' m';
      }
    } else {
      retStr = Math.round(dist) + ' m';
    }
    return retStr;
  
  };

// -------------------------------------------------------------------------
const deltaTimeInSecondsToString = (deltat) => {

  let retStr = '';
  let h = 0, m = 0, s = 0;

  if (deltat >= 3600) {
    h = Math.floor(deltat/3600);
    deltat = deltat % 3600;
  }

  if (deltat >= 60) {
    m = Math.floor(deltat/60);
    deltat = deltat % 60;
  }

  s = deltat;

  if (h > 1) {
    retStr += `${h} ore`
  }
  else if (h == 1) {
    retStr += `${h} ora`
  }

  if (m > 1) {
    if (retStr.length > 0) {
      retStr += ', ';
    }
    retStr += `${m} minuti`;
  }
  else if (m == 1) {
    if (retStr.length > 0) {
      retStr += ', ';
    }
    retStr += `${m} minuto`;
  }

  if (s > 1) {
    if (retStr.length > 0) {
      retStr += ', ';
    }
    retStr += `${s} secondi`;
  }
  else if (s == 1) {
    if (retStr.length > 0) {
      retStr += ', ';
    }
    retStr += `${s} secondo`;
  }

  return retStr;
};

