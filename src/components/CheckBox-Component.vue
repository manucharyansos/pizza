<template>
  <div class="language mt-16 ml-8">
    <div class="flex justify-start items-center my-2"
         v-for="(lang, index) of selectLanguage"
         :key="index"
    >
      <input
          :id="index"
          class="mr-2.5"
          type="radio"
      >
      <label
          class="font-serif text-xl text-silver cursor-pointer"
          @click="$emit('changeLanguage', lang.val)"
          :for="index">
        {{lang.name}} - {{lang.val}}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckBox-Component",
  props: {
    selectLanguage: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>