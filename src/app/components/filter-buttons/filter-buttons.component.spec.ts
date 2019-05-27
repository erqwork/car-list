import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarsService } from '../../shared/services/cars.service';

import { FilterButtonsComponent } from './filter-buttons.component';

fdescribe('FilterButtonsComponent', () => {
  let component: FilterButtonsComponent;
  let fixture: ComponentFixture<FilterButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterButtonsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngoninit inits', () => {
    component.ngOnInit();
    expect(component['fullList'][0].make).toBe('Chevy');
  });

  it('creates a filter array', () => {
    const filt = '';
    spyOn(component, 'showError');

    component.createFilterArr(filt);
    expect(component.showError).toHaveBeenCalled();
  });

  it('shows error', () => {
    component.showError();
    expect(component['isError']).toBe(true);
  });

  it('goes in the filter array', () => {
    const filterOpt = [{name: 'red', valid: true}];
    spyOn(component['_carsServ'], 'setCarList');

    component.filterArr(filterOpt);
    expect(component['_carsServ'].setCarList).toHaveBeenCalled();
  });

  it('option removed', () => {
    const opt = 'red';
    spyOn(component, 'filterArr');
    component.removeOptionFilter(opt);
    expect(component.filterArr).toHaveBeenCalled();
  });
});
