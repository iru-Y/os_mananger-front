<template>
  <div class="body">
    <p > {{  formData.data.full_name }}</p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </div>
</template>

<script lang="ts">
import type { ApiResponse } from '@/domain/models/apiResponse';
import { fetchAllCustomers } from '@/domain/fetch/customer_fetch';
import type { CustomerResponse } from '@/domain/models/customer_model';
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const feature = ref();

    const router = useRouter();
    const formData = reactive<ApiResponse<CustomerResponse>>({
    status: '',
    data:{
      id: '',
      full_name: '',
      phone: '',
      full_address: '',
      email: '',
      description: ''
    }
    });
//     onMounted(async () => {
//   const response = await fetchAllCustomers();
//   if (response && response.data.length > 0) {
//     formData.status = response.status;
//     formData.data = response.data[0];
//   }
// });

    return {
      feature,
      formData
    };
  },
};
</script>

<style lang="css" scoped>
.body {
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: center;
  border: 1px solid var(--cor-4);
  border-radius: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  margin: 0px 0px 120px 0px;
}
</style>