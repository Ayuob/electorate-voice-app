import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubmissionComponent } from './form-submission.component';

describe('FormSubmissionComponent', () => {
  let component: FormSubmissionComponent;
  let fixture: ComponentFixture<FormSubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSubmissionComponent]
    });
    fixture = TestBed.createComponent(FormSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
