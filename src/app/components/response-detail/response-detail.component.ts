import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Form} from '../../models/form';
import { Question, QuestionType } from '../../models/question';
import { FormBackendService } from '../../services/form-backend.service';
import { FormResponse } from '../../models/form-response';

@Component({
  selector: 'app-response-detail',
  templateUrl: './response-detail.component.html',
  styleUrls: ['./response-detail.component.scss']
})

export class ResponseDetailComponent implements OnInit {
  form: Form;
  responseId: number;
  formResponse: FormResponse;

  constructor(
    private route: ActivatedRoute,
    private formBackendService: FormBackendService
  ) { }

  ngOnInit(): void {
  // this.route.paramMap.subscribe(param =>{
  //   if (param){
  //
  //     // this.responseId = param.get('dd').
  //   }
  //   })
    this.responseId = 1;

    if (this.responseId) {
      this.getResponseDetails(this.responseId);
    }
  }

  getResponseDetails(responseId: number): void {
    // Fetch form details and user responses from the backend service
    this.formBackendService.getFormResponseDetails(responseId)
      .subscribe((response: FormResponse) => {
        this.formResponse = response;
        // this.form = response.form; // Assuming the form details are nested in the FormResponse
      });
  }

  getQuestionText(questionId: number) {
    // get Q text from any service
  }
}


