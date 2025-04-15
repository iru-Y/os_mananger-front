export interface CustomerModel {
    email: string;
    full_address: string;
    full_name: string;
    phone: string;
    description: string
  }

  export interface CustomerRequest {
    email: string;
    full_address: string;
    full_name: string;
    phone: string;
    description: string
  }

  export interface CustomerResponse {
    id: string;
    email: string;
    full_address: string;
    full_name: string;
    phone: string;
    description: string
  }