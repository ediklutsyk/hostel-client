import { TestBed } from '@angular/core/testing';

import { RequestsDataService } from './requests-data.service';

describe('RequestsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestsDataService = TestBed.get(RequestsDataService);
    expect(service).toBeTruthy();
  });
});
