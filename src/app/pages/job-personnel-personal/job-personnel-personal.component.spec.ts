import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPersonnelPersonalComponent } from './job-personnel-personal.component';

describe('JobPersonnelPersonalComponent', () => {
  let component: JobPersonnelPersonalComponent;
  let fixture: ComponentFixture<JobPersonnelPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPersonnelPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPersonnelPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
