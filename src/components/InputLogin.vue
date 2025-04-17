<template>
  <div class="group-input">
    <div class="group-info">
      <img :src="imagePath" alt="">
      <p class="description">{{ description }}</p>
    </div>
    <textarea
      class="input-field"
      :name="name"
      :style="{ width, height }"
      :value="modelValue"
      @input="onInput"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "InputLogin",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
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
    },
    width: {
      type: String,
      default: "750px"
    },
    height: {
      type: String,
      default: "25px"
    }
  },
  methods: {
    onInput(e: Event) {
      const input = e.target as HTMLTextAreaElement;
      this.$emit('update:modelValue', input.value);
    }
  }
});
</script>

<style>
.group-input {
  display: flex;
  flex-direction: row;
  align-items: start;
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
  min-width: 120px;
  caret-color: white;
  color: white;
  outline: none;
  background-color: transparent;
  box-shadow: none;
  transition: none;
  resize: none;
  line-height: 1.4;
  vertical-align: top;
  font-family: inherit;
}

.input-field:hover,
.input-field:focus,
.input-field:active,
.input-field:focus-visible,
.input-field:focus-within,
.input-field:-moz-focusring {
  border: 1px solid var(--cor-4);
  outline: none;
  color: white;
  box-shadow: none;
  caret-color: white;
}

.input-field::placeholder {
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
