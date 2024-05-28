import {Injectable} from '@angular/core';
import {EMPTY, Observable, of} from 'rxjs';
import {Form} from '../models/form';
import {QuestionType} from "../models/question";
import {FormResponse} from "../models/form-response";

@Injectable({
  providedIn: 'root'
})
export class FormBackendService {

  private forms: Form[] = [
    {
      id: 1,
      title: 'Sample Form 1',
      description: 'This is a sample form.',
      questions: [
        { id: 1, text: 'What is your name?', type: QuestionType.Text },
        { id: 2, text: 'How satisfied are you?', type: QuestionType.MultipleChoice,
          options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Unsatisfied', 'Very Unsatisfied'] }
      ]
    },
    // Add more sample forms as needed
  ];

  constructor() { }

  saveForm(form: Form): Observable<Form> {
    // Simulate sending the form data to the server
    // You can replace this with actual HTTP requests to a backend API
    console.log('Form sent to the server:', form);

    // Simulate a successful response from the server
    this.forms.push(form);

    // Reset the form for a new form creation
    return of(form);
  }

  // @ts-ignore
  getFormById(formId: number): Observable<Form> {
    // Simulate fetching form details from the server
    const form = this.forms.find(f => f.id === formId);
    if (form)
      return of(form);
  }

  getFormResponseDetails(responseId: number): Observable<FormResponse> {
    // Implement the logic to fetch form response details from the server
    // This could involve making an HTTP request to a specific endpoint
    // For demonstration purposes, we're using of() to simulate a response
    return of({
      id: responseId,
      formId: 1, // Replace with actual form ID
      respondentName: 'John Doe',
      submissionTime: new Date(),
      answers: [
        { questionId: 1, text: 'Response to question 1' },
        { questionId: 2, text: 'Response to question 2' },
        // Add more answers as needed
      ]
    });
  }
}
