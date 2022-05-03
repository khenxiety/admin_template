import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGuestsComponent } from './delete-guests.component';

describe('DeleteGuestsComponent', () => {
  let component: DeleteGuestsComponent;
  let fixture: ComponentFixture<DeleteGuestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGuestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
