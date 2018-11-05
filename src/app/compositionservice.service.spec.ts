import { TestBed } from '@angular/core/testing';

import { CompositionserviceService } from './compositionservice.service';

describe('CompositionserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompositionserviceService = TestBed.get(CompositionserviceService);
    expect(service).toBeTruthy();
  });
});
