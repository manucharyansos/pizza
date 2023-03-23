<template>
  <div class="language mt-16 ml-8">
    <div class="flex justify-start items-center my-2"
         v-for="(language, index) of selectLanguage"
         :key="index"
    >
      <div class="flex items-center mb-4">
        <input
            :id="index"
            type="radio"
            :value="modelValue"
            @input="switchLanguage"
            name="default-radio"
            @click="$emit('changeLanguage', language)"
            class="mr-2.5">
        <label
            :for="index"
            class="font-serif text-base md:text-xl text-silver cursor-pointer"
        >
          {{language.name}} - {{language.lang}}
        </label>
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