import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsDialogComponent } from './polls-dialog.component';

describe('PollsDialogComponent', () => {
  let component: PollsDialogComponent;
  let fixture: ComponentFixture<PollsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PollsDialogComponent]
    });
    fixture = TestBed.createComponent(PollsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
