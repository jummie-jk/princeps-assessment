import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersDashboardComponent } from './customers-dashboard.component';

describe('CustomersDashboardComponent', () => {
  let component: CustomersDashboardComponent;
  let fixture: ComponentFixture<CustomersDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomersDashboardComponent]
    });
    fixture = TestBed.createComponent(CustomersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
