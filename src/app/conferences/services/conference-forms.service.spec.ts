import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ConferenceFormsService } from './conference-forms.service';

describe('ConferenceFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConferenceFormsService = TestBed.get(ConferenceFormsService);
    expect(service).toBeTruthy();
  });

  it('addDivisionFormGroup',() => {
    expect(true);
  });

  it('removeDivisionFormGroup',() => {
    expect(true);
  });

  it('normalize',() => {
    expect(true);
  });

  it('getConferenceForm',() => {
    expect(true);
  });

  it('setConferenceFormValues',() => {
    expect(true);
  });
});
