<template>
   <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeView from './view/HomeView.vue';
export default {
    name: "App",
    components: {
      HomeView
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap');
:root {
  --cor-1: #0b1739;
  --cor-4: #343b4f;
  font-family: "Mona Sans", sans-serif;
  font-weight: normal;
 
  background-color: var(--cor-1);
}
p{
  color: white;
}
#app {
 
}
.body{
  display: flex;
  background: var(--cor-1);
}
</style>
