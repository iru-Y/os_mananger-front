<template>
  <div class="group-input">
    <div class="group-info">
      <img :src="imagePath" alt="">
      <p class="description">{{ description }}</p>
    </div>
    <input class="input-field" type="text" :name="name" >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "InputLogin",
  props: {
    name: {
      type: String,
      default: ""
    },
    imagePath: {
      type: String,
      default: ""
    },
   
    description: {
      type: String,
      default: "Sem descrição"
    }
  }
})
</script>

<style>
.group-input {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
}

.group-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  margin-right: 20px;
}

.input-field {
  border: 1px solid var(--cor-4);
  border-radius: 4px;
  padding: 5px;
  height: 42px;
  min-width: 150px;
  width: 769px;
  caret-color: white;
  outline: none;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: none;
  transition: none;
}

.input-field:hover,
.input-field:focus,
.input-field:active,
.input-field:focus-visible,
.input-field:focus-within,
.input-field:-moz-focusring {
  border: 1px solid var(--cor-4);
  outline: none;
  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: none;
  caret-color: white;
}

.input-field::-webkit-input-placeholder {
  color: #aaa;
}

.input-field::-moz-placeholder {
  color: #aaa;
}

img {
  width: 24px;
  height: 24px;
  margin-right: 5px;
}

.description {
  margin: 0;
  white-space: nowrap;
  font-size: 12px;
}
</style>