import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsManagementComponent } from './polls-management.component';

describe('PollsManagementComponent', () => {
  let component: PollsManagementComponent;
  let fixture: ComponentFixture<PollsManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PollsManagementComponent]
    });
    fixture = TestBed.createComponent(PollsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
