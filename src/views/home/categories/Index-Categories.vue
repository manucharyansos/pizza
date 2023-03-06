<template>
  <div
      class="category cursor-pointer overflow-hidden rounded-3xl m-1 relative block h-auto"
      v-for="category of categories"
      :key="category.id"
  >
    <template v-if="category.imageName">
      <img
          :src="require(`@/assets/${category.imageName}`)"
          alt="image"
          class="category_img w-full h-full rounded-3xl duration-700 hover:scale-110"
      >
    </template>
    <div class="category_name uppercase absolute z-10 bottom-0 flex items-center justify-center text-white font-serif text-md md:text-lg font-semibold">
      <template v-if="locale === 'en'">
        <p class="flex text-center content-center items-center justify-center m-auto">{{category.name.en}}</p>
      </template>
      <template v-if="locale === 'am'">
        <p class="flex text-center content-center items-center justify-center m-auto">{{category.name.am}}</p>
      </template>
      <template v-if="locale === 'ru'">
        <p class="flex text-center content-center items-center justify-center m-auto">{{category.name.ru}}</p>
      </template>
    </div>
  </div>
</template>

<script>
import {useI18n} from "vue-i18n";
export default {
  name: "Index-Categories",
  setup() {
    const {  locale } = useI18n({useScope: 'global'})

    return {
      locale
    }
  },
  props: {
    categories: {
      type: Array
    }
  }
}
</script>

<style scoped>
.category_img{
  /*width: 21rem;*/
  height: 21rem;
}

.category_name{
  background: rgba(0,0,0,.5);
  width: 100%;
  height: 3.5rem;
}
@media screen and (max-width: 664px){
.category_img{
  height: 15rem;
}
}
</style>