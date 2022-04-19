import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../car";
import {CarsComponent} from "../cars/cars.component";
import {CarsService} from "../../_service/cars.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private carsComp : CarsComponent,private carService:CarsService) { }

  ngOnInit(): void {
  }


  delete(car :Car){
    this.carsComp.delete(car);
    this.carService.deleteCar(car.id).subscribe();
  }

  @Input("carParam")
  car!:Car;

}
