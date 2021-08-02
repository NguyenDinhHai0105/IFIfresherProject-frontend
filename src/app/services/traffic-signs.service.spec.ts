import { TestBed } from '@angular/core/testing';

import { TrafficSignsService } from './traffic-signs.service';

describe('TrafficSignsService', () => {
  let service: TrafficSignsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrafficSignsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
