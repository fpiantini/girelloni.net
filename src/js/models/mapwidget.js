import * as lf from 'Leaflet';
import  { tfKey }  from './config'

// ----------------------------------------------------------------------------------------
export default class MapWidget {

    // --------------------------------------------------------------------------
    constructor() {

      this.gMap = new lf.L.map('gMap');
      this.mymap.scrollWheelZoom.disable();

    }






    // --------------------------------------------------------------------------
    domap(trekdata) {
      var mymap, mapform, tid, tfile;

      tid = getTrackIdFromURL();
      tfile = treks[tid - 1].trackfile;

      updatePageWithTrackInfo(tid);

      mapform = document.getElementById('mapLayerChooserForm');

      // assign onclick function to radio button used
      // to select basemap
      //basemapRadios = mapform.elements['basemap'];
      //basemapRadios = mapform.elements.basemap;

      document.getElementById('layer-chooser-radios').
        addEventListener('click', function (event) {
          if (event.target.type === 'radio') {
            redrawMap(L, mymap, mapform, tfile);
          }
        }, false);

      redrawMap(L, mymap, mapform, tfile);
    }






  // -------------------------------------------------------------------------
  // PRIVATE METHODS
  // -------------------------------------------------------------------------
  clearLayers() {
    this.gMap.eachLayer(l => {
      map.removeLayer(l);
    });
  };

  // -------------------------------------------------------------------------
  forYouMapsLayer() {
    return lf.L.tileLayer('https://tileserver.4umaps.com/{z}/{x}/{y}.png',
      {
        maxZoom: 17,
        attribution: 'Map data: &copy; <a   href="https://www.4umaps.com/">4UMaps</a>'
      });
  };

  // -------------------------------------------------------------------------
  openTopoMapLayer() {
    return lf.L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 17,
        attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
      });
  };

  // -------------------------------------------------------------------------
  thunderForestLandscapeLayer() {
    return lf.L.tileLayer('https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={apikey}',  {
      attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      apikey: `${tfKey}`,
      maxZoom: 22
    });
  };

  // -------------------------------------------------------------------------
  mapBoxLayer() {

    var mpKey, mpUrl, mpAttrib;
  
    // save my MapBox key
    mpKey = 'pk.eyJ1Ijoicm9kbWNiYW4iLCJhIjoiY2ptNHQ2c3N1MGducTNxbzRydGUwZzdtMSJ9.jILIRcBlfcJTPZztynaKwQ';
    mpUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mpKey;

    mpAttrib = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>';

    return new L.tileLayer(mpUrl,
      {
        attribution: mpAttrib,
        id: 'mapbox.streets'
      });
  };


}
