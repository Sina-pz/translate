import { TestBed } from '@angular/core/testing';

import { ClockCoreService } from './clock-core.service';

describe('ClockCoreService', () => {
  let service: ClockCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClockCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
