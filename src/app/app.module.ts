import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConferenceCreateComponent } from './conferences/components/conference-create/conference-create.component';
import { ConferenceListComponent } from './conferences/components/conference-list/conference-list.component';
import { ConferenceUpdateComponent } from './conferences/components/conference-update/conference-update.component';
import { ConferenceDataService } from './conferences/services/conference-data.service';
import { ConferenceFormsService } from './conferences/services/conference-forms.service';


@NgModule({
  declarations: [
    AppComponent,
    ConferenceCreateComponent,
    ConferenceListComponent,
    ConferenceUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ConferenceDataService,
    ConferenceFormsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
