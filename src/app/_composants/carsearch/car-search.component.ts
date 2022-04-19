import { Component, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap} from "rxjs";
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

  cars:Car[] = this.carsComponent.cars


  constructor(private carsService: CarsService,private carsComponent:CarsComponent) {}

  // Push a search term into the observable stream.
  ngOnInit(): void {
    this.cars$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.searchCar(term)),
    );
  }

  searchCar(pokemonName: string):Observable<Car[]> {
    if (pokemonName) {
      const regex = new RegExp(pokemonName, 'gi');
      this.cars$ =  of(this.cars.filter(p => p.title.match(regex)));
    }
      return this.cars$;

  }


}
