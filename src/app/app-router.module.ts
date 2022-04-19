import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CarsComponent} from "./_composants/cars/cars.component";
import {CreateCarComponent} from "./_composants/create-car/create-car.component";
import {CarDetailsComponent} from "./_composants/cardetails/cardetails.component";

const routes:Routes = [
  { path: 'detail/:id',
    component: CarDetailsComponent
  },
  {
    path: '',
    component: CarsComponent
  },
  {
    path: 'create-car',
    component: CreateCarComponent
  },{
    path:'**',
    redirectTo:''
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
