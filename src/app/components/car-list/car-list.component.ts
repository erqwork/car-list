import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/shared/services/cars.service';

@Component({
  selector: 'car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  public cars: any;
  
  constructor(private _carsServ: CarsService) { }
  
  ngOnInit() {    
    this.cars = (this._carsServ.getCarList() || []);
  }
}
