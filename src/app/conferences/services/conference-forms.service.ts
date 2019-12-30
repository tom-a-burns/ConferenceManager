import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
//import { Conference } from '../model/conference';

@Injectable({
  providedIn: 'root'
})
export class ConferenceFormsService {

  conferenceForm : FormGroup;

  constructor(private fb : FormBuilder)
  {
	  this.conferenceForm = this.fb.group({
		  conference_name: ['', Validators.required ],
		  conference_abbr: ['', [Validators.required, Validators.minLength(3)]],
		  conference_type: ['', Validators.required]
	  });

  }

  normalize()
  {
    let conference = new Object();
    if ( this.conferenceForm) {

    }

    return conference;
  }

  getConferenceForm ()
  {
    return this.conferenceForm;
  }

  setConferenceFormValues ( data )
  {
    this.conferenceForm.controls['conference_name'].setValue ( data.conference_name);
    this.conferenceForm.controls['conference_abbr'].setValue ( data.conference_abbr);
  }
}
