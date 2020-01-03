import { TestBed } from '@angular/core/testing';

import { ConferenceDataService } from './conference-data.service';

describe('ConferenceDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConferenceDataService = TestBed.get(ConferenceDataService);
    expect(service).toBeTruthy();
  });

  it('addConference()',() => {
    expect(true);
  });

  it('updateConference()',() => {
    expect(true);
  });

  it('getConferenceList()',() => {
    expect(true);
  });

  it('getConference()',() => {
    expect(true);
  });
});
