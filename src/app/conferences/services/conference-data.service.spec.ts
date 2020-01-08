import { TestBed } from '@angular/core/testing';

import { ConferenceDataService } from './conference-data.service';

describe('ConferenceDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConferenceDataService = TestBed.get(ConferenceDataService);
    expect(service).toBeTruthy();
  });

  it('addConference() still needs a test. Passing for now.',() => {
    expect(true);
  });

  it('updateConference() still needs a test. Passing for now.',() => {
    expect(true);
  });

  it('getConferenceList() still needs a test. Passing for now.',() => {
    expect(true);
  });

  it('getConference() still needs a test. Passing for now.',() => {
    expect(true);
  });
});
