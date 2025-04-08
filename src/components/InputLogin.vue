<template>
  <div>
    <img :src="imagePath" alt="">
    <input class="" type="text" :name="name" :placeholder="placeholder">
  </div>
</template>

<script lang="ts">
export default {
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
    placeholder: {
      type: String,
      default: "Digite aqui"
    }
  }
}
</script>

<style>
div {
  border: 1px;
  border-color: var(--cor-4);
}
</style>