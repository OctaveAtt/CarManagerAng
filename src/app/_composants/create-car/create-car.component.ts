import { Component, OnInit } from '@angular/core';
import {CarsService} from "../../_service/cars.service";
import {CreateCar} from "../../createcar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  constructor(private carService: CarsService,private fb: FormBuilder) { }


  car!:CreateCar;
  ngOnInit(): void {
  }
  newCar: FormGroup = this.fb.group({
    title:[this.car?.title, [Validators.required]],
    address:[this.car?.address, [Validators.required]],
    model:[this.car?.model, [Validators.required]],
    model_year:[this.car?.model_year, [Validators.required]],
    issuance: [this.car?.issuance, [Validators.required]],
    mileage:[this.car?.mileage, [Validators.required]],
    fuel:[this.car?.fuel, [Validators.required]],
    color:[this.car?.color, [Validators.required]],
    number_doors:[this.car?.numbers_doors, [Validators.required]],
    horse_power:[this.car?.horse_power, [Validators.required]],
    price: [this.car?.price, [Validators.required]],
    pictures: [this.car?.pictures, [Validators.required]],
    sold:[this.car?.sold, [Validators.required]]
  });



  createCar(){
    let car: CreateCar;
    car = {
      title:this.newCar.value.title,
      address:this.newCar.value.address,
      model:this.newCar.value.model,
      model_year:this.newCar.value.model_year,
      issuance: this.newCar.value.issuance,
      mileage:this.newCar.value.mileage,
      fuel:this.newCar.value.fuel,
      color:this.newCar.value.color,
      numbers_doors:this.newCar.value.number_doors,
      horse_power:this.newCar.value.horse_power,
      price: this.newCar.value.price,
      pictures: this.newCar.value.pictures,
      sold:this.newCar.value.sold
    };

    this.carService.saveCar(car).subscribe({
      next: ok =>{
        console.log("oui")
      },
      complete: () => {
        console.log("fait")
      },
      error: ()=>{
        console.log("nop")
      }
    });
    console.log(car);
  }


}
