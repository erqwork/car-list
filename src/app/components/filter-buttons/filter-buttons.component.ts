import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarsService } from '../../shared/services/cars.service';
import { Car } from '../../shared/models/Car';

@Component({
  selector: 'filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.css']
})
export class FilterButtonsComponent implements OnInit {  
  public filterOptions: any[] = [];
  public filteredCars: Car[];
  private fullList: Car[];
  public isError: boolean;
  private error = { 
    message: ''
  }

  constructor(private _carsServ: CarsService) { }
  
  ngOnInit() {
    this._carsServ.getCarList().subscribe(res => {
      this.filteredCars = res;
    });

    this.fullList = this.filteredCars;
  }

  createFilterArr(filt: string) {
    filt = (filt.replace(/\s+/g, '') || "");
    
    if (filt.includes(',')) {
      let tempArr = filt.split(',');

      tempArr.forEach((f: string) => {
        this.filterOptions.push({name: f, valid: true});
      });
    } else {
      filt ?
        this.filterOptions.push({name: filt, valid: true}) :
        this.showError();
    }
    
    this.filterArr(this.filterOptions);
  }

  showError() {
    this.isError = true;
    this.filterOptions = []; 
    this.error.message = "Sorry, no options found.";
    this._carsServ.setCarList(this.fullList);   
    console.log('Sorry, no options found.');
  }

  filterArr(filtOpts: any[]): void {
    const colorArr = ['gray', 'silver', 'black', 'white', 'red'];

    if (filtOpts.length > 0) {
      this.isError = false;
      filtOpts.forEach(fOpts => {
        if (colorArr.includes(fOpts.name)) {
          this.filteredCars = this.filteredCars.filter(car => car.color.toLowerCase() === fOpts.name);        
        } else if (fOpts.name === 'sunroof') {
          this.filteredCars = this.filteredCars.filter(car => car.hasSunroof );
        } else if (fOpts.name === '4wheeldrive' || fOpts.name === 'fourwheeldrive') {
          this.filteredCars = this.filteredCars.filter(car => car.isFourWheelDrive);
        } else if (fOpts.name === 'lowmiles' || fOpts.name === 'lowmileage') {
          this.filteredCars = this.filteredCars.filter( car => car.hasLowMiles);
        } else if (fOpts.name === 'powerwindows') {
          this.filteredCars = this.filteredCars.filter( car => car.hasPowerWindows);
        } else if (fOpts.name === 'navigation' || fOpts.name === 'satnav') {
          this.filteredCars = this.filteredCars.filter( car => car.hasNavigation);
        } else if (fOpts.name === 'heatedseats') {
          this.filteredCars = this.filteredCars.filter( car => car.hasHeatedSeats);
        } else {  
          fOpts.valid = false;
          this.showError();
        }      
      });
      
      this.filterOptions.some(fOpts => fOpts.valid !== false && this.filteredCars.length > 0) ?
        this._carsServ.setCarList(this.filteredCars) :      
        this.showError();       

    } else {
      this.filterOptions = [];
      this._carsServ.setCarList(this.fullList);      
    }    
  }

  removeOptionFilter(opt: string) {  
    this.filterOptions = this.filterOptions.filter(o => o.name !== opt);
    this.filterArr(this.filterOptions);
  }

}
