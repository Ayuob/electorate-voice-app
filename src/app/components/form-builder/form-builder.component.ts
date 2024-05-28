import { Component, OnInit } from '@angular/core';
import { Form} from '../../models/form' // Update the path based on your project structure
import {  Question, QuestionType } from '../../models/question'
import {FormBackendService} from "../../services/form-backend.service"; // Update the path based on your project structure

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  form: Form = new Form();
  questionTypes = Object.values(QuestionType);// Enum values for question types
  newQuestion: Question = new Question();

  constructor(protected formBackendService: FormBackendService) { }

  ngOnInit(): void {
    // Initialize the form or load existing form data if needed
    this.form.questions=[];

  }

  // addQuestion(): void {
  //   // Validate and add the new question to the form
  //   if (this.newQuestion.text && this.newQuestion.type) {
  //     this.form.questions.push(this.newQuestion);
  //     this.newQuestion = new Question(); // Clear the new question for the next input
  //   }
  // }
  addQuestion(question: Question): void {
    // Add the new question to the form
    this.form.questions.push(question);
  }


  removeQuestion(index: number): void {
    // Remove a question from the form
    this.form.questions.splice(index, 1);
  }

  saveForm(): void {
    this.formBackendService.saveForm(this.form)
      .subscribe((savedForm: Form) => {
        console.log('Form saved:', savedForm);
        // Reset the form for a new form creation
        this.form = new Form();
        this.form.questions= [];
      });
  }
}
