<template>
  <div>
    <div class="flex flex-row items-center">
      <div class="flex flex-row justify-center items-center">
        <div class="category_img">
          <img src="@/assets/categories.svg" alt="">
        </div>
        <p class="text-51 text-xl font-semibold font-serif leading-6 dark:text-white">{{categories}}</p>
      </div>
      <div class="flex flex-row items-center float-right ml-auto mr-2">
        <router-link to="/categories" class="text-red cursor-pointer text-lg font-serif font-normal mr-6">{{seeAll}}</router-link>
        <div>
          <button class="rbtn border border-silver rounded-tl-lg rounded-bl-lg hover:text-red font-semibold text-silver">
            <font-awesome-icon icon="fa-solid fa-chevron-left" />
          </button>
          <button class="rbtn border border-silver rounded-tr-lg rounded-br-lg hover:text-red font-semibold text-silver">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "CategoriesParagraph",
  props: {
    seeAll: {
      type: String
    },
    categories: {
      type: String
    }
  }
}
</script>

<style scoped>

.category_img{
  width: 60px;
  height: 60px;
  padding: 10px;
}
.rbtn{
  width: 40px;
  height: 40px;
}
</style>