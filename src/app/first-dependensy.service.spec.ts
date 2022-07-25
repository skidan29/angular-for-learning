import { TestBed } from '@angular/core/testing';

import { FirstDependensyService } from './first-dependensy.service';

describe('FirstDependensyService', () => {
  let service: FirstDependensyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstDependensyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
