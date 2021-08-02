import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficSignsComponent } from './traffic-signs.component';

describe('TrafficSignsComponent', () => {
  let component: TrafficSignsComponent;
  let fixture: ComponentFixture<TrafficSignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficSignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficSignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
