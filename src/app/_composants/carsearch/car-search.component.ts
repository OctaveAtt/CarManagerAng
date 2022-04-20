import { Component, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, map, Observable, of, Subject, switchMap} from "rxjs";
import {Car} from "../../car";
import {CarsService} from "../../_service/cars.service";
import {CarsComponent} from "../cars/cars.component";

@Component({
  selector: 'app-carsearch',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit {

  cars$!: Observable<Car[]>;
  private searchTerms = new Subject<string>();

  lowerLimit:number = 0;
  upperLimit:number = 100000000;

  cars:Car[] = this.carsComponent.cars


  constructor(private carsService: CarsService,private carsComponent:CarsComponent) {}


  search(term: string): void {
    this.searchTerms.next(term);
  }


  setBound(low:string,upper:string ){
    console.log(low+"/"+upper)
    this.lowerLimit = low ==="" ? 0 : parseInt(low);
    this.upperLimit = upper ==="" ?0 :parseInt(upper);
  }




  // Push a search term into the observable stream.
  ngOnInit(): void {
    this.cars$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.carsService.searchCar(term)),
      map(places => {
        // Here goes some condition, apply it to your use case, the condition only will return when condition matches
        console.log(this.upperLimit+"//"+this.lowerLimit);
        return places.filter(place => place.price>this.lowerLimit && place.price<this.upperLimit);
      })
    );
  }




}
