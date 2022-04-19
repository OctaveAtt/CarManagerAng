import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarsService} from "../../_service/cars.service";
import {Car} from "../../car";
import {Location} from "@angular/common";

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CarDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCar();
    console.log(this.car?.title)

  }

  save(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.car) {
      this.carsService.updateCar(this.car,id)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }

  private getCar() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carsService.getCar(id)
      .subscribe(car => this.car=car);
    console.log(this.car);
  }

  @Input() car?: Car;
}
