import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PriceLookup } from './price-lookup';
import {Procedure} from "src/app/procedure"
import { DescripHolder } from './descrip-holder';

@Injectable({
  providedIn: 'root'
})
export class AutofillService {
  private url = "http://localhost:8080/procedures/search?search=";
  constructor(private http: HttpClient) { }

  search(queryString: string) {
    let sendTo = this.url + queryString;
    console.log(sendTo);
    return this.http.get<DescripHolder>(sendTo);
  }
}
