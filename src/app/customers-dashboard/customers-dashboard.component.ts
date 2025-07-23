import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../shared/top-bar/top-bar.component';
import { SideBarComponent } from '../shared/side-bar/side-bar.component';
import { CustomerServiceService } from '../services/customer-service.service';
import { ICustomerResponse, IUser } from 'src/interfaces/user.interface';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { CreateCustomerModalComponent } from '../create-customer-modal/create-customer-modal.component';

@Component({
  selector: 'app-customers-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    TopBarComponent,
    SideBarComponent,
    CreateCustomerModalComponent,
  ],
  templateUrl: './customers-dashboard.component.html',
  styleUrls: ['./customers-dashboard.component.css'],
})
export class CustomersDashboardComponent implements OnInit {
  customers: any;
  total = 0;
  page = 1;
  pageSize = 10;
  searchText = '';
  openModal = false;
  searchSubject = new Subject<string>();

  constructor(private customerService: CustomerServiceService) {}

  ngOnInit(): void {
    this.addSearchDebounce();
    this.fetchCustomers();
  }

  // Fetch customer
  fetchCustomers(): void {
    this.customerService.fetchCustomers(this.searchText, this.page).subscribe({
      next: (res: any) => {
        this.customers = res.data.data;
        this.total = res.total;
      },
      error: (err) => {
        console.error('Error loading customers', err);
      },
    });
  }

  onSearch(value: string) {
    this.searchSubject.next(value);
  }

  onPageChange(newPage: number) {
    this.page = newPage;
    this.fetchCustomers();
  }

  onPageSizeChange(newSize: number) {
    this.pageSize = newSize;
    this.page = 1;
    this.fetchCustomers();
  }

  refreshCustomerList() {
    this.page = 1;
    this.fetchCustomers();
  }

  // Debounce to prevent the api from being called too frequently
  addSearchDebounce() {
    this.searchSubject
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((searchText) => {
        this.searchText = searchText;
        this.page = 1;
        this.fetchCustomers();
      });
  }
}
