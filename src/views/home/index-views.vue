<template>
  <div>
    <!--  Categoties-->
    <div class="hidden md:flex flex-col px-10 py-12 ">
      <div class="justify-between">
        <categories-paragraph :categories="$t('categories')" :see-all="$t('see_all')"/>
      </div>
      <div class="py-2 md:hover:border-red">
        <base-carousel
            :items-to-show="6"
            :slide-data="getCategories"
            classe="category"
        />
      </div>
    </div>
    <div class="responsive_category flex md:hidden grid grid-cols-2 gap-2 px-10 py-12">
      <index-categories :categories="getCategories"/>
    </div>
    <!--Products-->
    <div class="hidden md:flex flex-col px-12 py-8">
      <div class="flex flex-row mr-auto items-center">
        <div class="prod_par_image">
          <img src="@/assets/hot-dog-pizza.png" alt="" class="w-full">
        </div>
        <h2 class="uppercase text-51 text-2xl font-semibold font-serif ml-4 dark:text-white">{{$t('pizza_hot_dog')}}</h2>
      </div>
      <div class="flex flex-wrap flex-row my-14">
        <product-card
            :data="getProducts"
            @addToBasket="addToBasket"
            :add="$t('add')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import ProductCard from "@/components/Product-Card";
import BaseCarousel from "@/views/home/carousel/Base-Carousel";
import CategoriesParagraph from "@/components/CategoriesParagraph";
import {useI18n} from "vue-i18n";
import IndexCategories from "@/views/home/categories/Index-Categories";

export default {
  components: {
    IndexCategories,
    CategoriesParagraph,
    BaseCarousel,
    ProductCard,
  },
  setup() {
    const {  locale } = useI18n({useScope: 'global'})

    return {
      locale
    }
  },
  data(){
    return {
      isDark: true,
      isActive: false,
    }
  },
  computed: {
    ...mapGetters(['getCategories', 'getProducts', 'getBasket']),
  },

  methods: {
    ...mapActions(['addBasket', 'minusProduct', 'plusProduct', 'deleteProductByIndex', 'removeAllBasket', 'findSearched']),


    dd(){},
    async addToBasket(product){
      await this.addBasket(product)
      // this.basketTotal = this.getBasket.length
    },


  },
}
</script>

<style>
nav {
  padding: 50px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  /*color: #42b983;*/
}

.prod_par_image{
  width: 50px;
  height: 50px;
}
</style>
