import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  CreateCustomerPayload,
  ICustomerResponse,
  IUser,
} from 'src/interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerServiceService {
  private apiUrl = 'http://188.245.61.243:7072/api/v1/customers';

  constructor(private http: HttpClient) {}

  fetchCustomers(search_text = '', page = 1): Observable<ICustomerResponse> {
    const params = new HttpParams()
      .set('search_text', search_text)
      .set('page', page.toString());

    return this.http.get<ICustomerResponse>(this.apiUrl, { params });
  }

  createCustomer(payload: CreateCustomerPayload): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}
