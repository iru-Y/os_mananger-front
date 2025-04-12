<template>
<button >
</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: "DefaultButton",
    props: {}
});
</script>

<style lang="css" scoped>
button{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px;
gap: 8px;
width: 93px;
height: 30;
background: linear-gradient(128.49deg, #CB3CFF 19.86%, #7F25FB 68.34%);
border-radius: 4px;
}
</style>