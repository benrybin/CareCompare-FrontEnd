import { TestBed } from '@angular/core/testing';

import { PriceLookupService } from './price-lookup.service';

describe('PriceLookupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PriceLookupService = TestBed.get(PriceLookupService);
    expect(service).toBeTruthy();
  });
});
