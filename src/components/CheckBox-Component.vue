<template>
  <div class="language mt-16 ml-8">
    <div class="flex justify-start items-center my-2"
         v-for="(lang, index) of selectLanguage"
         :key="index"
    >
<!--      <input-->
<!--          :id="index"-->
<!--          class="mr-2.5"-->
<!--          type="radio"-->
<!--      >-->
<!--      <label-->
<!--          class="font-serif text-xl text-silver cursor-pointer"-->
<!--          @click="$emit('changeLanguage', lang.val)"-->
<!--          :for="index">-->
<!--        {{lang.name}} - {{lang.val}}-->
<!--      </label>-->

      <div class="flex items-center mb-4">
        <input
            :id="index"
            type="radio"
            :value="modelValue"
            @input="switchLanguage"
            name="default-radio"
            @click="$emit('changeLanguage', lang.val)"
            class="mr-2.5">
        <label :for="index" class="font-serif text-xl text-silver cursor-pointer">{{lang.name}} - {{lang.val}}</label>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "CheckBox-Component",
  props: {
    selectLanguage: {
      type: Array
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    id: {
      type: Number
    }
  },
  methods: {
    switchLanguage(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
}
</script>

<style scoped>

</style>