import { TestBed } from '@angular/core/testing';

import { CloudServiceService } from './cloud-service.service';

describe('CloudServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CloudServiceService = TestBed.get(CloudServiceService);
    expect(service).toBeTruthy();
  });
});
