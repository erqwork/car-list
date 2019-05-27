import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/shared/models/Car';

@Component({
  selector: 'single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.css']
})
export class SingleCarComponent implements OnInit {
  @Input() car: Car;

  constructor() { }

  ngOnInit() {
  }

}
