<template>
  <div class="body">
  <div class="customers-view" v-for="(customer, index) in customers" :key="customer.id">
    <p>Nome:      {{  customer.full_name }}</p>
    <p>Telefone:  {{  customer.phone }}</p>
    <p>Email:     {{  customer.email }}</p>
    <p>Endereço:  {{  customer.full_address }}</p>
    <p>Descrição: {{  customer.description }}</p>
  </div>
  </div>
</template>

<script lang="ts">
import { fetchAllCustomers } from '@/domain/fetch/customer_fetch';
import type { CustomerResponse } from '@/domain/models/customer_model';
import { onMounted, reactive, ref } from 'vue';

export default {
  setup() {
    const customers = ref<CustomerResponse[]>([]);

    onMounted(async () => {
      const response = await fetchAllCustomers();
      if (response && response.data.length > 0) {
        customers.value = response.data;
      }
    });

    return {
      customers
    };
  },
};
</script>

<style lang="css" scoped>
.body {
  max-width: 1000px;
  margin: auto;
  align-items: center;
  border: 1px solid var(--cor-4);
  border-radius: 12px;
  padding: 20px;
}

.customers-view{
  border: 1px solid var(--cor-4);
  border-radius: 12px;
  width: 90%;
  margin: 20px;
  padding: 20px;
  
}
</style>