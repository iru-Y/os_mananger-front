<template>
    <div v-if="visible" class="error-dialog">
      <div class="overlay" @click="close"></div>
      <div class="dialog">
        <h2 class="title">Erro</h2>
        <p class="message">{{ message }}</p>
        <button class="close-btn" @click="close">Fechar</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';


  defineProps<{
    visible: boolean;
    message: string;
    name: "AlertDialog"
  }>();
  
  const emit = defineEmits(['close']);
  
  const close = () => emit('close');
  </script>
  
  <style scoped>
  .error-dialog {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
  }
  
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
  }
  
  .dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--cor-1);
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    width: 300px;
    text-align: center;
  }
  
  .title {
    color: var(--cor-2);
    margin-bottom: 8px;
  }
  
  .message {
    color: var(--cor-3);
    margin-bottom: 16px;
  }
  
  .close-btn {
    background: var(--cor-4);
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
  }
  </style>
  