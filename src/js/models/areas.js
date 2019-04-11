export default class Areas {

  constructor() {
    this.areasJsonList =
    [
      '{"name": "Toscana", "page": "toscana"}',
      '{"name": "Italia", "page": "italia"}',
      '{"name": "Mondo", "page": "mondo"}'
    ];

    this.areasList = [];
    this.areasJsonList.forEach(e => {

      this.areasList.push(JSON.parse(e));

    });
  }

  getAreas() {
    return this.areasList;
  }
}

