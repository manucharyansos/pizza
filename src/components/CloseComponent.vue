<template>
  <div
      @click="$emit('close')"
      class="languageClos rounded-lg border p-3 cursor-pointer float-right mt-5 mr-5 dark:border-silver"
  >
    <img :src="require(`../assets/${imgURL}`)" alt="">
  </div>
</template>

<script>
export default {
  name: "CloseComponent",
  props: {
    imgURL: {
      type: String
    }
  }
}
</script>

<style scoped>
.languageClos{
  width: 45px;
  height: 45px;
}
</style>