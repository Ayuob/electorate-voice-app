import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateInformationComponent } from './candidate-information.component';

describe('CandidateInformationComponent', () => {
  let component: CandidateInformationComponent;
  let fixture: ComponentFixture<CandidateInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateInformationComponent]
    });
    fixture = TestBed.createComponent(CandidateInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
