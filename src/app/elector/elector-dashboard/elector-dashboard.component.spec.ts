import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectorDashboardComponent } from './elector-dashboard.component';

describe('ElectorDashboardComponent', () => {
  let component: ElectorDashboardComponent;
  let fixture: ComponentFixture<ElectorDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectorDashboardComponent]
    });
    fixture = TestBed.createComponent(ElectorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
