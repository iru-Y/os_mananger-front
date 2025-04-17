<template>
  <AlertDialog
  :visible="showError"
  :message="errorMessage"
  @close="closeError"
/>

    <form class="form" @submit.prevent="handleSubmit">
      <InputLogin v-model="formData.full_name" imagePath="src/assets/person.svg" description="Nome"/>
      <InputLogin v-model="formData.phone" imagePath="src/assets/phone.svg" description="Telefone"/>
      <InputLogin v-model="formData.full_address" imagePath="src/assets/adress.svg" description="Endereço Completo"/>
      <InputLogin v-model="formData.email" imagePath="src/assets/email.svg" description="Email"/>
      <InputLogin
        v-model="formData.description"
        imagePath="src/assets/description.svg"
        description="Descrição do problema"
        height="200px"
      />
      <div class="button-wrapper">
        <DefaultButton
          class="submit-btn"
          subimitText="Concluído"
          type="submit"
        />
      </div>
    </form>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import DefaultButton from "@/components/DefaultButton.vue";
import InputLogin from "@/components/InputLogin.vue";
import { createCustomer, fetchAllCustomers } from "@/domain/fetch/customer_fetch";
import type { CustomerRequest } from "@/domain/models/customer_model";
import AlertDialog from "@/components/AlertDialog.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    InputLogin,
    DefaultButton,
    AlertDialog,
  },
  setup() {
    const router = useRouter();
    const formData = reactive<CustomerRequest>({
      full_name: '',
      phone: '',
      full_address: '',
      email: '',
      description: ''
    });

    const showError = ref(false);
    const errorMessage = ref('');

    const goToNextPage = () => {
      router.push('/os-detail');
    };

    const closeError = () => {
      showError.value = false;
      errorMessage.value = '';
    };

    const handleSubmit = async () => {
      try {
        const response = await createCustomer(formData);
        if (response.status === 'error') {
          errorMessage.value = response.status || 'Erro ao cadastrar o cliente. Verifique os dados e tente novamente.';
          showError.value = true;
          return;
        }

        alert('Cliente cadastrado com sucesso!');
        formData.full_name = '';
        formData.phone = '';
        formData.full_address = '';
        formData.email = '';
        formData.description = '';

        goToNextPage();
      } catch (error) {
        errorMessage.value = 'Erro de conexão. Tente novamente mais tarde.';
        showError.value = true;
      }
    };

    onMounted(() => {
      fetchAllCustomers();
      console.log("Componente HomeView montado");
    });

    return {
  formData,
  handleSubmit,
  goToNextPage,
  showError,
  errorMessage,
  closeError,
};
}});
</script>

<style>
.form {
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

.submit-btn {
  display: flex;
  justify-content: end;
  align-items: end;
}

.button-wrapper {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>
