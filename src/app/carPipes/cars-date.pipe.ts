import { Pipe, PipeTransform } from '@angular/core';
import {Car} from "../car";

@Pipe({
  name: 'sortByCarsDate'
})
export class CarsDatePipe implements PipeTransform {

  transform( cars: any[],order:string) {
    if(order === 'DESC'){
      return cars.sort((a:any,b:any) => new Date(b.issuance).getTime() - new Date(a.issuance).getTime());
    } else {
      return cars.sort((a:any,b:any)=> new Date(a.issuance).getTime() - new Date(b.issuance).getTime());
    }
  }

}
