import { Component, OnInit } from '@angular/core';
import Conference from '../../model/conference';
import { ConferenceDataService } from '../../services/conference-data.service';


@Component({
  selector: 'app-conference-list',
  templateUrl: './conference-list.component.html',
  styleUrls: ['./conference-list.component.css']
})
export class ConferenceListComponent implements OnInit {

  conferences: Conference[];

  constructor(private cds: ConferenceDataService ) { }

  ngOnInit() {
    this.cds
      .getConferenceList()
      .subscribe((data: Conference[]) => {
        this.conferences = data;
    });
  }

}
