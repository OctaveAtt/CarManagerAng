import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { CarsComponent } from './_composants/cars/cars.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarComponent } from './_composants/car/car.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {CreateCarComponent} from "./_composants/create-car/create-car.component";
import {RouterModule} from "@angular/router";
import {AppRouterModule} from "./app-router.module";
import {NavbarComponent} from "./navbar/navbar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {CarDetailsComponent} from "./_composants/cardetails/cardetails.component";
import {CarSearchComponent} from "./_composants/carsearch/car-search.component";
import {MatListModule} from "@angular/material/list";
import {CarsPipe} from "./carPipes/cars.pipe";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {CarsDatePipe} from "./carPipes/cars-date.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    CreateCarComponent,
    NavbarComponent,
    CarDetailsComponent,
    CarSearchComponent,
    CarsPipe,
    CarsDatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    AppRouterModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatListModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
