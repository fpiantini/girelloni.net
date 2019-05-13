import { elements } from './base';

// *********************************************************************************
// *** PUBLIC FUNCTIONS
// *********************************************************************************
// -------------------------------------------------------------------------
export const clear = () => {
  elements.trekData.innerHTML = '';
  elements.mapElement.innerHTML = '';
  elements.altitudeGraph.innerHTML = '';

};

// -------------------------------------------------------------------------
export const preparePage = (tId, tTitle) => {

  const markupMap = `
    <div class="divdark" id="mapbox">
      <div class="divmap" id="mapid"></div>
      <p class='inevidence' id='mapTitle'>${tTitle}</p>
    </div>
  `;
  elements.mapElement.insertAdjacentHTML('beforeend', markupMap);

  const markupGraph = `
    <div class="divdark" id="altitudegraph">
      <canvas id="altitudegraphcanvas" style="height: 400px; width:100%"></canvas>
    </div>
  `;
  elements.altitudeGraph.insertAdjacentHTML('beforeend', markupGraph);

};


// -------------------------------------------------------------------------
export const printTrackInfo = (trekId, gpxdata) => {
  elements.trekData.innerHTML = '';
  const markup = `
    <div id="${trekId}__details" class="divlight">
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
      <p class="normalnomargin" id = "md_elevmin">Elevazione minima: ${distanceToString(gpxdata.get_elevation_min(), false)} s.l.m.</p>
      <p class="normalnomargin" id = "md_elevmax">Elevazione massima: ${distanceToString(gpxdata.get_elevation_max(), false)} s.l.m.</p>
      <p class="normalnomargin" id = "md_elevgain">Dislivello in salita: ${distanceToString(gpxdata.get_elevation_gain(), false)}</p>
      <p class="normalmarginbottom" id = "md_elevloss">Dislivello in discesa: ${distanceToString(gpxdata.get_elevation_loss(), false)}</p>
    </div>
  `;
  elements.trekData.insertAdjacentHTML('beforeend', markup);
};

// -------------------------------------------------------------------------
const distanceToString = (dist, useKm) => {
    var retStr, n_km, n_m;

    // distance is in meters
    if (useKm) {
      n_km = Math.floor(dist / 1000);
      n_m = Math.round(dist % 1000);
      if (n_km > 0) {
        retStr = n_km + ' Km ' + n_m + ' m';
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
  let h = 0, m = 0;

  if (deltat >= 3600) {
    h = Math.floor(deltat/3600);
    deltat = deltat % 3600;
  }

  if (deltat >= 60) {
    m = Math.floor(deltat/60);
    deltat = deltat % 60;
  }

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

  return retStr;
};
