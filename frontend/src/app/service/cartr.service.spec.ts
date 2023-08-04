import { TestBed } from '@angular/core/testing';

import { CartrService } from './cartr.service';

describe('CartrService', () => {
  let service: CartrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
