<template>
  <div class="body">
   <form class="form" @submit.prevent="handleSubmit">
     <InputLogin v-model="formData.full_name" imagePath="src/assets/person.svg" description="Nome"/>
     <InputLogin v-model="formData.phone" imagePath="src/assets/phone.svg" description="Telefone"/>
     <InputLogin v-model="formData.full_address" imagePath="src/assets/adress.svg" description="Endereço Completo"/>
     <InputLogin v-model="formData.email" imagePath="src/assets/email.svg" description="Email"/>
     <InputLogin v-model="formData.description" imagePath="src/assets/description.svg"
      description="Descrição do problema" height="200px"/>
     <div class="button-wrapper">
       <DefaultButton 
         class="submit-btn" 
         subimitText="Concluído"
         type="submit"
       />
     </div>
   </form>
  </div>
 </template>
 
 <script lang="ts">
 import DefaultButton from "@/components/DefaultButton.vue";
 import InputLogin from "@/components/InputLogin.vue";
 import { createCustomer, fetchAllCustomers } from "@/domain/fetch/customer_fetch";
import type { CustomerRequest } from "@/domain/models/customer_model";
 import { defineComponent, onMounted, reactive } from "vue";
 import { useRouter } from "vue-router";
 
 export default defineComponent({
   name: "HomeView",
   components: {
     InputLogin, 
     DefaultButton
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
     const goToNextPage = () => {
       router.push('/login');
     };
     
     const handleSubmit = async () => {
       try {
        const response = await createCustomer(formData);
        if (response.status != 'success') {
          console.error("Error ao cadastrar o cliente, verifique se o sistema está no ar, ou os campos estão preenchidos corretamente.")
        } 
         alert('Cliente cadastrado com sucesso!');
         Object.assign(formData);
         goToNextPage();
       } catch (error) {
         alert('Erro ao cadastrar cliente');
       }
     };
 
     onMounted(() => {
       fetchAllCustomers();
       console.log("Componente HomeView montado");
     });
     
     return { 
       goToNextPage,
       formData,
       handleSubmit 
     };
   }
 });
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
.submit-btn{
  display: flex;
  flex-direction: flex;
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

