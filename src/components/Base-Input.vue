<template>
  <div>
    <input
        class="input placeholder:italic placeholder:text-slate-400 block bg-white dark:bg-mBlack dark:text-white w-full border border-slate-200 dark:border-51 rounded-lg py-2 pl-3 pr-3 md:w-full"
        placeholder="Type the name of dish..."
        :type="type"
        :value="modelValue"
        @input="updateInput"
    />
  </div>
</template>

<script>
export default {
  name: "Base-Input",
  props: {
    type: {
      type: String
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    DiStyle: {
      type: Array
    }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
}
</script>

<style scoped>
.input{
  width: 1050px;
  /*min-width: 1050px;*/
  box-shadow: none!important;
  outline: none!important;

}
@media screen and (max-width: 1450px){
  .input{
    width: 900px;
  }
}
@media screen and (max-width: 1350px){
  .input{
    width: 700px;
  }
}
@media screen and (max-width: 1110px){
  .input{
    width: 500px;
  }
}
@media screen and (max-width: 930px){
  .input{
    width: 300px;
  }
}
</style>