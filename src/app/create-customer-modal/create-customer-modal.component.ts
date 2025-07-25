import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CustomerServiceService } from '../services/customer-service.service';

@Component({
  selector: 'app-create-customer-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-customer-modal.component.html',
  styleUrls: ['./create-customer-modal.component.css'],
})
export class CreateCustomerModalComponent {
  @Output() close = new EventEmitter();
  @Output() created = new EventEmitter();
  customerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerServiceService
  ) {

    // TODO: Hardcoded some values for test purpose
    this.customerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      telephone: ['', Validators.required],
      bvn: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      dob: ['', Validators.required],
      residential_address: ['', Validators.required],
      state: ['', Validators.required],
      bankcode: ['058', Validators.required],
      accountnumber: ['0167457616', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      country: ['', Validators.required],
      id_card: ['', [Validators.required, this.urlValidator]],
      voters_card: [''],
      drivers_licence: [''],
      state_id: [36],
      country_id: [1],
    });
  }

  submit() {
    if (this.customerForm.invalid) {
      this.customerForm.markAllAsTouched();
      return;
    }
    const payload = this.customerForm.value;
    this.customerService.createCustomer(payload).subscribe({
      next: () => {
        this.created.emit();
        this.close.emit();
      },
      error: (err) => console.error('Create customer failed', err),
    });
  }

  urlValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;
    const urlPattern = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
    return urlPattern.test(value) ? null : { invalidUrl: true };
  }
}
