import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPersonnelComponent } from './job-personnel.component';

describe('JobPersonnelComponent', () => {
  let component: JobPersonnelComponent;
  let fixture: ComponentFixture<JobPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
