<template>
<button @click='handleClick'>
    {{ subimitText }}
</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: "DefaultButton",
    props: {
        subimitText: {
            type: String,
            default: "botão"
        },

    },
    emits: ["click"],
    setup (props, {emit}) {
        const handleClick = () => {
            console.log('clicado')
            emit("click")
        }
        return {handleClick}
    }
});
</script>

<style lang="css" scoped>
button{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px;
color: white;
gap: 8px;
width: 93px;
height: 30;
background: linear-gradient(128.49deg, #CB3CFF 19.86%, #7F25FB 68.34%);
border-color: transparent;
border-radius: 4px;
}
</style>