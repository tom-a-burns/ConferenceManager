import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConferenceDataService {

  uri = 'http://localhost:4000/conference';

  constructor(private http: HttpClient) { }

  addConference(conference) {
    console.log('Creating new conference...');
    return this.http.post(`${this.uri}/add`, conference);
  }

  updateConference(conference_name, conference_abbr, id) {
     const obj = {
        conference_name: conference_name,
        conference_abbr: conference_abbr
     };
     console.log('Updating conference...');
     return this.http.post(`${this.uri}/update/${id}`, obj);
  }

  getConferenceList() {
    console.log('Retrieving conference list...');
    return this.http.get(`${this.uri}/list`);
  }

  getConference( id ) {
    console.log('Retrieving conference...');
    return this.http.get(`${this.uri}/edit/${id}`);
  }
}
