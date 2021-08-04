import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTrafficSignComponent } from './all-traffic-sign.component';

describe('AllTrafficSignComponent', () => {
  let component: AllTrafficSignComponent;
  let fixture: ComponentFixture<AllTrafficSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTrafficSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTrafficSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
