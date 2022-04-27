import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobpersonnelComponent } from './view-jobpersonnel.component';

describe('ViewJobpersonnelComponent', () => {
  let component: ViewJobpersonnelComponent;
  let fixture: ComponentFixture<ViewJobpersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewJobpersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJobpersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
