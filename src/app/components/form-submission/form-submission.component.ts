import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Form } from '../../models/form';
import { FormBackendService } from '../../services/form-backend.service';

@Component({
  selector: 'app-form-submission',
  templateUrl: './form-submission.component.html',
  styleUrls: ['./form-submission.component.scss']
})
export class FormSubmissionComponent {

  form: Form;
  formData: any = {};

  constructor(
    private route: ActivatedRoute,
    private formBackendService: FormBackendService
  ) { }

  ngOnInit(): void {
    // Retrieve form details based on the route parameter
    // const formId = +this.route.snapshot.paramMap.get('id');
    const formId = 1;

    if (formId) {
      this.getFormDetails(formId);
    }
  }

  getFormDetails(formId: number): void {
    // Retrieve form details from the backend service
    this.formBackendService.getFormById(formId)
      .subscribe((form: Form) => {
        this.form = form;
        this.initializeFormData();
      });
  }

  initializeFormData(): void {
    // Initialize formData with empty values for each question
    this.form.questions.forEach(question => {
      this.formData[question.id] = '';
    });
  }

  submitForm(): void {
    // Handle form submission logic here
    // You can send the formData to the backend service for processing
    console.log('Form submitted:', this.formData);

    // Reset the form data for a new submission
    this.initializeFormData();
  }

}
