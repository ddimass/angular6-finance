import { TestBed, inject } from '@angular/core/testing';

import { PairsService } from './pairs.service';

describe('PairsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PairsService]
    });
  });

  it('should be created', inject([PairsService], (service: PairsService) => {
    expect(service).toBeTruthy();
  }));
});
