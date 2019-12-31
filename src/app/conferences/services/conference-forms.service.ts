import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { Conference } from '../model/conference';
import { Division } from '../model/division'


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
		  conference_type: ['', Validators.required],
		  conference_divisions: this.fb.array([])
	  });

    this.addDivisionFormGroup ();
  }


  addDivisionFormGroup ()
  {
    let control = <FormArray>this.conferenceForm.controls.conference_divisions;

    control.push(
      this.fb.group({
        division_name: ['', Validators.required],
        division_type: ['', Validators.required]
      })
    )

  }

  removeDivisionFormGroup (index)
  {
      let control = <FormArray>this.conferenceForm.controls.conference_divisions;
      control.removeAt(index)
  }

  normalize()
  {
    let conference : Conference  = new Conference();
    if ( this.conferenceForm && this.conferenceForm.status==='VALID') {

      Object.keys(this.conferenceForm.controls).forEach((key: string)=> {
        const abstractControl = this.conferenceForm.get(key);
        if (abstractControl instanceof FormControl) {
          console.log ('Key ' + key + 'is set to ' + abstractControl.value);
          conference[key] = abstractControl.value;
        } else if (abstractControl instanceof FormArray){
            console.log ( 'Key ' + key + 'is a FormArray.');
            conference[key] = [];
            Object.keys(abstractControl.controls).forEach ( (key: string) => {
              console.log ( 'Key = ' + key);
            });

            for (let i=0; i<abstractControl.controls.length; i++) {
                const division : Division = new Division();
                const obj = abstractControl.controls[i].value;
                Object.getOwnPropertyNames(obj).forEach(
                      function (val, idx, array) {
                          console.log(val + ' -> ' + obj[val]);
                          division[val] = obj[val];
                      }
                );

                conference[key].push ( division );
            }

        } else {
          console.log ( 'Key ' + key + 'is a nested FormGroup.  Ignoring for now');
        }
      });

      console.log ( Object.getOwnPropertyNames(conference));
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
