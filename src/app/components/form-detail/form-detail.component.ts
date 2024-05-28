import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Form } from '../../models/form';
import { FormBackendService } from '../../services/form-backend.service';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.scss']
})
export class FormDetailComponent {

  form: Form;

  constructor(
    // private route: ActivatedRoute,
    private formBackendService: FormBackendService
  ) { }

  ngOnInit(): void {
    // Retrieve form details based on the route parameter
    //  const formId = +this.route.snapshot.paramMap.get('id');
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
      });
  }



}
