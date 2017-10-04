import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
  constructor() {}

  tempData = [{
    icon: 'shopping_basket',
    name: 'TOTAL ORDERS',
    change: 0.07,
    dataPoints: [0, 5, 30, 44, 45, 67],
    total: 622
  }, {
    icon: 'style',
    name: 'PRODUCTS SOLD',
    change: 0.11,
    dataPoints: [200, 800, 1300, 2700, 1900, 2300, 2800],
    total: 5098
  }, {
    icon: 'monetization_on',
    name: 'REVENUE $',
    change: 0.05,
    dataPoints: [29.9, 90, 116, 47.6, 50, 24],
    total: 32945
  }, {
    icon: 'loyalty',
    name: 'TOP SELLER',
    change: 0.24,
    dataPoints: [0, 4, 20, 10, 3, 13],
    total: 38,
    brand: 'DEWALT',
    product: 'Drill Bit Set'
  }];
}
