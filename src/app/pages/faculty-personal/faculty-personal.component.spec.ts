import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyPersonalComponent } from './faculty-personal.component';

describe('FacultyPersonalComponent', () => {
  let component: FacultyPersonalComponent;
  let fixture: ComponentFixture<FacultyPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
