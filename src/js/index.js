import * as areasView from './views/areasView';

var areasList;

// -----------------------------------------------------
areasList =
[ 
  '{"name": "Toscana", "page": "toscana.html"}',
  '{"name": "Italia", "page": "italia.html"}',
  '{"name": "Mondo", "page": "mondo.html"}'
];



// -----------------------------------------------------
window.addEventListener('load', () => {
  var cssClass="divlight";
  areasList.forEach(element => {
    const area = JSON.parse(element);
    //console.log(element);

    areasView.renderItem(area, cssClass);

    cssClass = (cssClass === "divlight") ? "divdark" : "divlight";

  });
});

