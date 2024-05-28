import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormListComponent } from './components/form-list/form-list.component';
import { FormDetailComponent } from './components/form-detail/form-detail.component';
import { FormSubmissionComponent } from './components/form-submission/form-submission.component';
import { QuestionBuilderComponent } from './components/question-builder/question-builder.component';
import { ResponseListComponent } from './components/response-list/response-list.component';
import { ResponseDetailComponent } from './components/response-detail/response-detail.component';
import { UserAuthenticationComponent } from './components/user-authentication/user-authentication.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { AuthGuardComponent } from './components/auth-guard/auth-guard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormBackendService} from "./services/form-backend.service";
import { LoginComponent } from './components/user/login/login.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {ElectorDashboardComponent} from "./elector/elector-dashboard/elector-dashboard.component";
import { PollsManagementComponent } from './poll/polls-management/polls-management.component';
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {PollsDialogComponent} from "./poll/polls-dialog/polls-dialog.component";
import { ConfirmDialogComponent } from './layout/confirm-dialog/confirm-dialog.component';
import { CandidateInformationComponent } from './candidate/candidate-information/candidate-information.component';
import { CandidateCardComponent } from './candidate/candidate-card/candidate-card.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { FilterPipe } from './candidate/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    FormListComponent,
    FormDetailComponent,
    FormSubmissionComponent,
    QuestionBuilderComponent,
    ResponseListComponent,
    ResponseDetailComponent,
    UserAuthenticationComponent,
    UserRegistrationComponent,
    AuthGuardComponent,
    LoginComponent,
    AdminDashboardComponent,
    ElectorDashboardComponent,
    PollsManagementComponent,
    PollsDialogComponent,
    ConfirmDialogComponent,
    CandidateInformationComponent,
    CandidateCardComponent,
    FilterPipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatCardModule,
        MatTableModule,
        MatDialogModule,
        MatSortModule,
        MatFormFieldModule,
        MatToolbarModule

    ],
  providers: [FormBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
