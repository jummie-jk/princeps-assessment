export interface IUser {
  name: string;
  email: string;
  phoneNumber: string;
  status: string;
  joined_at: string;
}

export interface ICustomerResponse {
  data: IUser[];
  total: number;
  page: number;
}

export interface CreateCustomerPayload {
  firstname: string;
  lastname: string;
  telephone: string;
  bvn: string;
  dob: string;
  residential_address: string;
  state: string;
  bankcode: string;
  accountnumber: string;
  company_id: string;
  email: string;
  city: string;
  country: string;
  id_card: string | null;
  voters_card: string | null;
  drivers_licence: string | null;
}
