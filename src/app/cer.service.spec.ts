import { TestBed, inject } from '@angular/core/testing';

import { CerService } from './cer.service';

describe('CerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CerService]
    });
  });

  it('should be created', inject([CerService], (service: CerService) => {
    expect(service).toBeTruthy();
  }));
});
