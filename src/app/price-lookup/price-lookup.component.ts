import { Component, OnInit } from '@angular/core';
import {PriceLookupService} from "src/app/price-lookup.service";
import {PriceLookup} from "src/app/price-lookup"

@Component({
  selector: 'app-price-lookup',
  templateUrl: './price-lookup.component.html',
  styleUrls: ['./price-lookup.component.css']
})
export class PriceLookupComponent implements OnInit {
code:String;
prices: PriceLookup[];
zip:Number;
  constructor(private priceLookupService:PriceLookupService) { }

  ngOnInit() {
    
  }
  


  captureCode(code:String,zip:Number){
    this.code = code;
    this.zip = zip;
    this.priceLookupService.getPrices(code,zip).subscribe(prices => 
      {this.prices=prices;
        
        
      });
    

  }
  zipcodeDistance(zip:String){
    

  }
}
