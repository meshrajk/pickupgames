import { TestBed } from '@angular/core/testing';

import { PickupgamesService } from './pickupgames.service';

describe('PickupgamesService', () => {
  let service: PickupgamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PickupgamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
