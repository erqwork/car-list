import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { SingleCarComponent } from './components/single-car/single-car.component';
import { FilterButtonsComponent } from './components/filter-buttons/filter-buttons.component';

// TODO: import any modules that will be used in the app

@NgModule({
  declarations: [ 
    AppComponent,
    CarListComponent,
    SingleCarComponent,
    FilterButtonsComponent
  ],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
