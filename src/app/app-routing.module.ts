import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConferenceCreateComponent } from './conferences/components/conference-create/conference-create.component';
import { ConferenceListComponent }   from './conferences/components/conference-list/conference-list.component';
import { ConferenceUpdateComponent }   from './conferences/components/conference-update/conference-update.component';


const routes: Routes = [
  {
    path: 'conference/create',
    component: ConferenceCreateComponent
  },
  {
    path: 'conference/edit/:id',
    component: ConferenceUpdateComponent
  },
  {
    path: 'conference/list',
    component: ConferenceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
