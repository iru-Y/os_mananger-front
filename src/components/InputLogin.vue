<template>
  <input type="text" name={{name}} id="">
</template>

<script>
export default defineComponent({
    name: "InputLogin",
    props: {
      name: {
      type: String,
      default: ""
     }
   }
 }
)


</script>

<style>

</style>