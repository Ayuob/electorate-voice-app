
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDetailComponent } from './components/form-detail/form-detail.component';
import { FormSubmissionComponent } from './components/form-submission/form-submission.component';
import {ResponseDetailComponent} from "./components/response-detail/response-detail.component";

const routes: Routes = [
  { path: 'forms/:id', component: FormDetailComponent },
  { path: 'forms/:id/submit', component: FormSubmissionComponent },
  { path: 'forms/:formId/responses/:responseId', component: ResponseDetailComponent },
  // Add more routes as needed
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
