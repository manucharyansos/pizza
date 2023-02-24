<template>
  <div class="" v-for="product of data" :key="product.id">
    <div class="flex flex-col items-center search_product_content border border-silver-200 dark:border-51 rounded-lg relative mx-2">
      <div class="search_product_image border-b-silver-200 absolute overflow-hidden mt-4" v-if="product.image">
        <img :src="require(`@/assets/${product.image}`)" alt="" class="w-full h-full duration-700 hover:scale-110">
      </div>
      <h2 class="flex flex-wrap items-center justify-center text-51 dark:text-white text-sm font-serif font-semibold mt-44 uppercase text-center">{{product.name}}</h2>
      <div class="price flex items-center justify-center text-sm rounded-lg p-2 dark:text-white">{{product.price}} AMD</div>
      <button @click="$emit('addToBasket', product)" class="bg-red text-white text-sm flex items-center justify-center rounded-lg p-1 hover:bg-redS">
        Ավելացնել
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search-Product",
  props: {
    data: {
      type: Array
    }
  }
}
</script>

<style scoped>
.search_product_content{
  width: 175px;
  height: 300px;
}
</style>