import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder, FormControl, Validators } from '@angular/forms';
import { Conference } from '../model/conference';

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
    let conference : Conference  = new Conference();
    if ( this.conferenceForm && this.conferenceForm.status==='VALID') {

      Object.keys(this.conferenceForm.controls).forEach((key: string)=> {
        const abstractControl = this.conferenceForm.get(key);
        if (abstractControl instanceof FormGroup) {
          console.log ( 'Key ' + key + 'is a nested FormGroup.  Ignoring for now');
        } else {
          console.log ('Key ' + key + 'is set to ' + abstractControl.value);
          conference[key] = abstractControl.value;
        }
      });

      if ( conference instanceof Conference) {
        console.log ( 'Yes');
      } else {
        console.log ( 'Nope');
      }

      console.log ( Object.getOwnPropertyNames(conference));

      //const nameCtl : FormControl = this.conferenceForm.get('conference_name');
      //const abbrCtl = this.conferenceForm.get('conference_abbr');


      //conference.conference_name = nameCtl.value;
      //conference.conference_abbr = this.conferenceForm.controls['conference_abbr'].getValue();
      //conference.conference_type = this.conferenceForm.controls['conference_type'].getValue();
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
