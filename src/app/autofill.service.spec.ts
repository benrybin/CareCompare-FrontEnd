import { TestBed } from '@angular/core/testing';

import { AutofillService } from './autofill.service';

describe('AutofillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutofillService = TestBed.get(AutofillService);
    expect(service).toBeTruthy();
  });
});
