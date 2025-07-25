import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerModalComponent } from './create-customer-modal.component';

describe('CreateCustomerModalComponent', () => {
  let component: CreateCustomerModalComponent;
  let fixture: ComponentFixture<CreateCustomerModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreateCustomerModalComponent]
    });
    fixture = TestBed.createComponent(CreateCustomerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
