<template>
  <div>
    <button class="bg-mBlack hover:bg-red text-white py-2 px-8 rounded-xl dark:bg-mSilver dark:hover:bg-red">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "Base-Button"
}
</script>

<style scoped>
button {
  width: 250px;
}
</style>