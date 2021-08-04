import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrafficSignComponent } from './update-traffic-sign.component';

describe('UpdateTrafficSignComponent', () => {
  let component: UpdateTrafficSignComponent;
  let fixture: ComponentFixture<UpdateTrafficSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTrafficSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTrafficSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
