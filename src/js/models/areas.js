export default class Areas {

  constructor() {
    this.areasJsonList =
    [
      '{"name": "Italia", "page": "italia"}',
      '{"name": "Islanda", "page": "islanda"}'
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

