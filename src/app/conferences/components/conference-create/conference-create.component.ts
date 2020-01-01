import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConferenceDataService } from '../../services/conference-data.service';
import { ConferenceFormsService } from '../../services/conference-forms.service';

@Component({
  selector: 'app-conference-create',
  templateUrl: './conference-create.component.html',
  styleUrls: ['./conference-create.component.css']
})
export class ConferenceCreateComponent implements OnInit {

	theForm: FormGroup;

  constructor ( private cfs: ConferenceFormsService,
                private cds: ConferenceDataService,
                private route: ActivatedRoute,
                private router: Router)
  {
     this.theForm = this.cfs.getConferenceForm();
  }

  addConference ( ) {
    let conference = this.cfs.normalize();
	  this.cds.addConference ( conference )
	        .subscribe((data:any) => {
              console.log('Navigating to conference list');
              this.router.navigate(['conference/list']);
          });
  }

  addDivision() {
    this.cfs.addDivisionFormGroup();
  }

  removeDivision( index : number) {
    this.cfs.removeDivisionFormGroup(index)
  }

  ngOnInit () {
    this.theForm.reset();
  }
}
