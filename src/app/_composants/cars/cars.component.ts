import { Component, OnInit } from '@angular/core';
import {Car} from "../../car";
import {CarsService} from "../../_service/cars.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  sortByOrder:string ='ASC';
  sortDateByOrder: string ='ASC';
  constructor(private carService:CarsService) { }

  ngOnInit(): void {
    this.getCars();
    console.log(this.cars);
  }

  cars : Car[] = [];

  getCars(): void{
    this.carService.getCars().subscribe({
      next: cars =>{
        this.cars = cars
      },
      error: err => {
        console.log(err)
      },
      complete:() => {
        console.log('complete')
      }
    })

  }

  delete(car:Car){
    this.cars = this.cars.filter(h => h !== car);
  }


  sortOn() {
    this.sortByOrder = this.sortByOrder ==='ASC'? 'DESC' : 'ASC';
    console.log(this.sortByOrder);
  }

  sortDate() {
    this.sortDateByOrder = this.sortDateByOrder ==='ASC'? 'DESC' : 'ASC';
    console.log(this.sortByOrder);
  }
}
