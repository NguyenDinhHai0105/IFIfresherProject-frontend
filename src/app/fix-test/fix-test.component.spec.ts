import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixTestComponent } from './fix-test.component';

describe('FixTestComponent', () => {
  let component: FixTestComponent;
  let fixture: ComponentFixture<FixTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
