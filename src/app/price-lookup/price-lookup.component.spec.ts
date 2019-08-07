import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceLookupComponent } from './price-lookup.component';

describe('PriceLookupComponent', () => {
  let component: PriceLookupComponent;
  let fixture: ComponentFixture<PriceLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
