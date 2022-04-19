import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Car} from "../car";
import {CreateCar} from "../createcar";

const CAR_URL = 'http://localhost:3000/cars'
@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http : HttpClient) { }

  getCars():Observable<Car[]>{
    return this.http.get<Car[]>(CAR_URL,this.httpOptions);
  }

  savePokemon(car: CreateCar):Observable<Car>{
    console.log("let's");
    return this.http.post<Car[]>(CAR_URL+"addPokemons",car,this.httpOptions).pipe(
      tap(_ => this.log(`created car name=${car.title}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }

  deleteCar(id: number): Observable<Car> {
    const url = `${CAR_URL}?id=${id}`;

    return this.http.delete<Car>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted car id=${id}`)),
      catchError(this.handleError<Car>('deleteCar'))
    );
  }

  searchCar(term: string): Observable<Car[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Car[]>(`${CAR_URL}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Car[]>('searchHeroes', []))
    );
  }

  updateCar(car: Car,id:number): Observable<any> {
    return this.http.put(CAR_URL+"/"+id, car, this.httpOptions).pipe(
      tap(_ => this.log(`updated car id=${car.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }


  getCar(id: number): Observable<Car> {
    const url = `${CAR_URL}/${id}`;
    console.log(url);
    return this.http.get<Car>(url).pipe(
      tap(_ => this.log(`car`)),
      catchError(this.handleError<Car>(`getCar id=${id}`))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Access-Control-Allow-Origin':'*','Content-Type': 'application/json' })
  };

  saveCar(car: CreateCar) {
    return this.http.post<Car[]>(CAR_URL,car,this.httpOptions).pipe(
      tap(_ => this.log(`created pokemon name=${car.title}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
}
