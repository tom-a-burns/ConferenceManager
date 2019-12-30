import { TestBed } from '@angular/core/testing';

import { ConferenceFormsService } from './conference-forms.service';

describe('ConferenceFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConferenceFormsService = TestBed.get(ConferenceFormsService);
    expect(service).toBeTruthy();
  });
});
