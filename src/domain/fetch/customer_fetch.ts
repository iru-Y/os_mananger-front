import type { CustomerModel } from "@/domain/models/customer_model";

const apiPath = 'http://localhost:8080/api/v1';

export async function fetchAllCustomers(): Promise<CustomerModel[]> {
  const response = await fetch(`${apiPath}/customers`);

  if (!response.ok) {
    throw new Error(`Erro ${response.status}`);
  }

  const data = await response.json();
  
  console.log('Dados recebidos:', data);
  
  return data;
}
