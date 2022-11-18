import { TestBed } from '@angular/core/testing';

import { ApiWService } from './api-w.service';

describe('ApiWService', () => {
  let service: ApiWService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiWService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
