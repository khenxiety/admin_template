import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJobpersonnelComponent } from './delete-jobpersonnel.component';

describe('DeleteJobpersonnelComponent', () => {
  let component: DeleteJobpersonnelComponent;
  let fixture: ComponentFixture<DeleteJobpersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteJobpersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteJobpersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
