<template>
 <div class="body">
  <div class="form">
    <InputLogin imagePath= "src/assets/person.svg" description="Nome"/>
    <InputLogin imagePath= "src/assets/phone.svg" description="Telefone"/>
    <InputLogin imagePath= "src/assets/adress.svg" description="Endereço Completo"/>
    <InputLogin imagePath= "src/assets/email.svg" description="Email"/>
    <div class="button-wrapper">
        <DefaultButton class="submit-btn" />
      </div>
  </div>
 
 </div>
</template>

<script lang="ts">
import DefaultButton from "@/components/DefaultButton.vue";
import InputLogin from "@/components/InputLogin.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    InputLogin, DefaultButton
  }
})

</script>

<style>

.form {
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--cor-4);
  border-radius: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
}
.submit-btn{
  display: flex;
  flex-direction: flex;
  justify-content: end;
  align-items: end;
}.button-wrapper {
  display: flex;
  width: 100%; 
  justify-content: flex-end;
  margin-top: 10px;
}
</style>

