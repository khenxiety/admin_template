import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuestLecturerComponent } from './view-guest-lecturer.component';

describe('ViewGuestLecturerComponent', () => {
  let component: ViewGuestLecturerComponent;
  let fixture: ComponentFixture<ViewGuestLecturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGuestLecturerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuestLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
