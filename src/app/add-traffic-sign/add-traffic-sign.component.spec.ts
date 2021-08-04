import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrafficSignComponent } from './add-traffic-sign.component';

describe('AddTrafficSignComponent', () => {
  let component: AddTrafficSignComponent;
  let fixture: ComponentFixture<AddTrafficSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrafficSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrafficSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
