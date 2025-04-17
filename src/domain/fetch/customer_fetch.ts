import type { CustomerModel } from "@/domain/models/customer_model";
import type { ApiResponse } from "../models/apiResponse";

const apiPath = 'http://127.0.0.1:8080/api/v1/';

export async function fetchAllCustomers(): Promise<ApiResponse<CustomerModel[]>> {
  try {
    const response = await fetch(`${apiPath}customers`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Erro ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Dados recebidos:', data);
    return data;
  } catch (error) {
    console.error('Erro ao buscar clientes:', error);
    throw error;
  }


  
}
export async function createCustomer(customer: CustomerModel): Promise<ApiResponse<CustomerModel>> {
  try {
    const response = await fetch(`${apiPath}customers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(customer),
    });

    if (!response.ok) {
      throw new Error(`Erro ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao criar cliente:', error);
    throw error;
  }
}