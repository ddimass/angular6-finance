import { TestBed, inject } from '@angular/core/testing';

import { PivotService } from './pivot.service';

describe('PivotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PivotService]
    });
  });

  it('should be created', inject([PivotService], (service: PivotService) => {
    expect(service).toBeTruthy();
  }));
});
