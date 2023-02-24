<template>
  <div class="" v-for="product of data" :key="product.id">
    <div class="flex justify-center product_content border border-silver-700 rounded-lg relative mx-6">
      <div class="product_image border-b-silver my-6 absolute overflow-hidden" v-if="product.image">
        <img :src="require(`@/assets/${product.image}`)" alt="" class="w-full h-full rounded-3xl duration-700 hover:scale-110">
      </div>
      <h2 class="flex flex-wrap items-center justify-center dark:text-white text-51 text-md p-4 font-serif font-semibold mt-56 uppercase text-center">{{product.name}}</h2>
      <div class="flex flex-row basket_pluse_button absolute -bottom-8">
        <div class="price flex items-center justify-center rounded-tl-2xl rounded-bl-2xl p-2 bg-51 text-white">{{product.price}} AMD</div>
        <button @click="$emit('addToBasket', product)" class="bg-red text-white flex items-center justify-center rounded-tr-2xl rounded-br-2xl p-1 hover:bg-redS">
          <img src="@/assets/basketPlus.svg" alt="" class=" -ml-3 basket_plus">
          Ավելացնել
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product-Card",
  props: {
    data: {
      type: Array
    }
  }
}
</script>

<style scoped>
.product_content{
  width: 245px;
  height: 330px;
}
</style>