import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTestModalComponent } from './all-test-modal.component';

describe('AllTestModalComponent', () => {
  let component: AllTestModalComponent;
  let fixture: ComponentFixture<AllTestModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTestModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
