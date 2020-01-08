import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ConferenceFormsService } from './conference-forms.service';

describe('ConferenceFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConferenceFormsService = TestBed.get(ConferenceFormsService);
    expect(service).toBeTruthy();
  });

  it('addDivisionFormGroup still needs a test. Passing for now.',() => {
    expect(true);
  });

  it('removeDivisionFormGroup still needs a test. Passing for now.',() => {
    expect(true);
  });

  it('normalize still needs a test. Passing for now.',() => {
    expect(true);
  });

  it('getConferenceForm still needs a test. Passing for now.',() => {
    expect(true);
  });

  it('setConferenceFormValues still needs a test. Passing for now.',() => {
    expect(true);
  });
});
