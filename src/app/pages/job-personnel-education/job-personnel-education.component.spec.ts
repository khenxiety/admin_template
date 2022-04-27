import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPersonnelEducationComponent } from './job-personnel-education.component';

describe('JobPersonnelEducationComponent', () => {
  let component: JobPersonnelEducationComponent;
  let fixture: ComponentFixture<JobPersonnelEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPersonnelEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPersonnelEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
