import { TestBed } from '@angular/core/testing';

import { ApisharedService } from './apishared.service';

describe('ApisharedService', () => {
  let service: ApisharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApisharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
