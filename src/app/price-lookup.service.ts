import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PriceLookup} from "src/app/price-lookup";
import { Procedure } from './procedure';
@Injectable({
  providedIn: 'root'
})
export class PriceLookupService {
  private url = "http://localhost:8080";
  private zipurl = "https://www.zipcodeapi.com/rest/rJ3AtCRWJ879dNoVLiVAO09pyeWOr9wDSDLeiBx0U6MmThf9HLjA65RlPyhFIgy7/distance.json/"
  
  constructor(private http:HttpClient) { }

  public getPrices(code:String,zip:String): Observable<PriceLookup[]>{
    if(zip==""){zip="19711"};
    return this.http.get<PriceLookup[]>(this.url + "/pricerequest?code=" + code +"&zip=" + zip);
  }
  public getzipDistance(hospZip:String,enterZip:String){
    return this.http.get<Number>(this.zipurl + hospZip + "/" + enterZip + "/mile");
  }
  public searchProcs(procs:String){

    return this.http.get<Procedure[]>(this.url + "/procedures/search/");
  }
}
