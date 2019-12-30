import { TestBed } from '@angular/core/testing';

import { ConferenceDataService } from './conference-data.service';

describe('ConferenceDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConferenceDataService = TestBed.get(ConferenceDataService);
    expect(service).toBeTruthy();
  });
});
