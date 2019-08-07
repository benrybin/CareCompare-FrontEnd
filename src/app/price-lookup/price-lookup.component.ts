import { Component, OnInit } from '@angular/core';
import {PriceLookupService} from "src/app/price-lookup.service";
import {PriceLookup} from "src/app/price-lookup";
import {distinctUntilChanged} from 'rxjs/internal/operators/distinctUntilChanged';
import {debounceTime, map} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { AutofillService } from '../autofill.service';
import {Observable} from 'rxjs';
import {RequestPriceLookup} from "src/app/request-price-lookup"
import { Procedure } from '../procedure';
import { DescripHolder } from '../descrip-holder';
@Component({
  selector: 'app-price-lookup',
  templateUrl: './price-lookup.component.html',
  styleUrls: ['./price-lookup.component.css']
})
export class PriceLookupComponent implements OnInit {
code:String;
prices: PriceLookup[];
zip:Number;
autofill: AutofillService;
results: DescripHolder;
queryField: FormControl = new FormControl();

  constructor(private priceLookupService:PriceLookupService,autofill:AutofillService) { 
    this.autofill = autofill;
  }

  ngOnInit() {
    this.queryField.valueChanges
      .subscribe(queryField => this.autofill.search(queryField)
        .subscribe(data => {this.results = data
          console.log(this.results)

        }
        
        ));
        
    
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
   search = (text$: Observable<String>) =>
  text$.pipe(
    debounceTime(200),
     distinctUntilChanged(),
     map(term => term.length < 2 ? []
      : this.results.holder.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
   )
}
