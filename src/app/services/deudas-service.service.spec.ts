import { TestBed } from '@angular/core/testing';

import { DeudasServiceService } from './deudas-service.service';

describe('DeudasServiceService', () => {
  let service: DeudasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeudasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
