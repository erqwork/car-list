import { Injectable } from '@angular/core';
import { Car } from '../models/Car';
import { BehaviorSubject } from 'rxjs';
import { carData } from '../mock-data/cars-data';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  public carList = new BehaviorSubject<Car[]>(carData);

  constructor() {
  }

  getCarList() {
    return this.carList.asObservable();
  }

  setCarList(carList: Car[]) {
    this.carList.next(carList);
  }

  // TODO: methods to return data from json file or create an in memory web api
}
