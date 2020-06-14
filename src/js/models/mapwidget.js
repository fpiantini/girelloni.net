import * as lf from "leaflet";

// 20200614: The ThunderForest and MapBox layers are disabled because
// current site design exposed API keys. Additionally the MapBox layer
// doesn't work anymore (API key stolen??)
// When the security issue will be fixed, the layers can be enabled again.
// Search for "//--API--"
//--API-- import  { tfKey, mpKey }  from '../config'

// ----------------------------------------------------------------------------------------
export default class MapWidget {
  // --------------------------------------------------------------------------
  constructor(mapid) {
    this.otmLayer = this.openTopoMapLayer();
    this.fumLayer = this.forYouMapsLayer();
    this.hbLayer = this.HikeBikeLayer();
    this.mriLayer = this.mapRefugesInfoLayer();
    this.osmLayer = this.OpenStreetMapLayer();
    //--API-- this.tfLayer  = this.thunderForestLandscapeLayer();
    //--API-- this.mbLayer  = this.mapBoxLayer();
    this.wmtLayer = this.waymarkedTrailsLayer();

    // define the Map object
    this.gMap = new lf.map(mapid, {
      layers: [this.otmLayer],
    });

    this.baseMaps = {
      OpenTopoMap: this.otmLayer,
      "4YouMap": this.fumLayer,
      "Hike&BikeMap": this.hbLayer,
      MapsRefugesInfo: this.mriLayer,
      OpenStreetMap: this.osmLayer,
      //--API-- "ThunderForest":    this.tfLayer,
      //--API-- "MapBox":           this.mbLayer,
    };

    this.overlaysMaps = {
      WayMarkedTrails: this.wmtLayer,
    };

    lf.control.layers(this.baseMaps, this.overlaysMaps).addTo(this.gMap);
  }

  // -------------------------------------------------------------------------
  fitBounds(latLngBounds) {
    this.gMap.fitBounds(latLngBounds);
  }

  // -------------------------------------------------------------------------
  getMap() {
    return this.gMap;
  }

  // -------------------------------------------------------------------------
  getGpxData() {
    return this.gpxData;
  }

  // -------------------------------------------------------------------------
  forYouMapsLayer() {
    return lf.tileLayer("https://tileserver.4umaps.com/{z}/{x}/{y}.png", {
      maxZoom: 17,
      attribution:
        'Map data: &copy; <a   href="https://www.4umaps.com/">4UMaps</a>',
    });
  }

  // -------------------------------------------------------------------------
  openTopoMapLayer() {
    return lf.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
      maxZoom: 17,
      attribution:
        'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://entopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    });
  }

  // -------------------------------------------------------------------------
  HikeBikeLayer() {
    return new lf.tileLayer(
      "https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    );
  }

  // -------------------------------------------------------------------------
  OpenStreetMapLayer() {
    return new lf.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    );
  }

  // -------------------------------------------------------------------------
  //--API-- thunderForestLandscapeLayer() {
  //--API--   return lf.tileLayer(
  //--API--     "https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={apikey}",
  //--API--     {
  //--API--       attribution:
  //--API--         '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  //--API--       apikey: tfKey,
  //--API--       maxZoom: 22,
  //--API--     }
  //--API--   );
  //--API-- }

  // -------------------------------------------------------------------------
  //--API-- mapBoxLayer() {
  //--API--   const mpUrl =
  //--API--     "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=" +
  //--API--     mpKey;
  //--API--   const mpAttrib =
  //--API--     'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
  //--API--     '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  //--API--     'Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>';
  //--API--   return new lf.tileLayer(mpUrl, {
  //--API--     attribution: mpAttrib,
  //--API--     id: "mapbox.streets",
  //--API--   });
  //--API-- }

  // -------------------------------------------------------------------------
  mapRefugesInfoLayer() {
    return lf.tileLayer(" http://maps.refuges.info/hiking/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://maps.refuges.info/">MapsRefugesInfo</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 22,
    });
  }

  // -------------------------------------------------------------------------
  waymarkedTrailsLayer() {
    return lf.tileLayer(
      "https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png",
      {
        maxZoom: 17,
        attribution:
          'Map data: <a href="https://hiking.waymarkedtrails.org/">WaymarkedTrails hiking</a>',
      }
    );
  }
}
