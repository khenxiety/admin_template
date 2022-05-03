import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJobpersonnelComponent } from './update-jobpersonnel.component';

describe('UpdateJobpersonnelComponent', () => {
  let component: UpdateJobpersonnelComponent;
  let fixture: ComponentFixture<UpdateJobpersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateJobpersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJobpersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
