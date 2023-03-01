<template>
  <div>
    <!--  Top main-->
    <div class="flex flex-row px-12 mt-16 w-full ">
      <div class="float-left">
        <base-button>
          <span>{{$t('all_products')}}</span>
        </base-button>
      </div>
      <div class="flex flex-row float-right ml-auto relative input_component">
        <base-input
            type="text"
            v-model:modelValue="searchable"
        />
        <div class="searchImg bg-red rounded-xl ml-4" @click="searchFilter">
          <img src="@/assets/searchWhite.svg" alt="">
        </div>
        <!--      Searched Product-->
        <template v-if="isSearch">
          <div class="absolute duration-70 top-0 z-30 py-6 flex flex-row flex-wrap justify-start border border-silver-200 dark:border-51 rounded-bl-2xl rounded-br-2xl my-14 bg-white dark:bg-mBlack w-full">
            <search-product :data="filteredList()"
            />
          </div>
        </template>
      </div>
    </div>
    <!--  Categoties-->
    <div class="flex flex-col px-10 py-12 justify-between">
      <categories-paragraph :categories="$t('categories')" :see-all="$t('see_all')"/>
    </div>
    <div class="py-2 px-6 md:hover:border-red">
      <base-carousel
          :items-to-show="6"
          :slide-data="getCategories"
          classe="category"
      />
    </div>
    <!--Products-->
    <div class="flex flex-col px-12 py-8">
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
        />
      </div>
    </div>
  </div>
</template>

<script>

import BaseInput from "@/components/Base-Input";
import BaseButton from "@/components/Base-Button";
import { mapGetters, mapActions } from "vuex"
import ProductCard from "@/components/Product-Card";
import SearchProduct from "@/views/home/search/Search-Product";
import BaseCarousel from "@/views/home/carousel/Base-Carousel";
import CategoriesParagraph from "@/components/CategoriesParagraph";
import {useI18n} from "vue-i18n";

export default {
  components: {
    CategoriesParagraph,
    BaseCarousel,
    SearchProduct,
    ProductCard,
    BaseButton,
    BaseInput,
  },
  setup() {
    const {  locale } = useI18n({useScope: 'global'})

    return {
      locale
    }
  },
  data(){
    return {
      searchable: '',
      isDark: true,
      isActive: false,
      isSearch: false,
    }
  },
  computed: {
    ...mapGetters(['getCategories', 'getProducts', 'getBasket']),
  },
  watch: {
    searchable(val){
      if (val.length > 2){
        setTimeout(()=>{
          this.isSearch = true
        }, 2000)
      }else {
        this.isSearch = false
      }
    }
  },
  methods: {
    ...mapActions(['addBasket', 'minusProduct', 'plusProduct', 'deleteProductByIndex', 'removeAllBasket', 'findSearched']),


    dd(){
      alert(213)
    },
    async addToBasket(product){
      await this.addBasket(product)
      // this.basketTotal = this.getBasket.length
    },

    filteredList() {
      return this.getProducts.filter((product) => {
        return product.name
            .toLowerCase()
            .includes(this.searchable.toLowerCase())
      })
    },
    searchFilter(){
      if (this.searchable !== ''){
        this.filteredList().map((a) => {
          this.findSearched(a)
          this.$router.push(`/edit/${a.id}`)
        })
      }
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
  color: #42b983;
}
.searchImg{
  width: 40px;
  height: 40px;
  padding: 10px;
}
.prod_par_image{
  width: 50px;
  height: 50px;
}
/*.input_component{*/
/*  width: 60rem;*/
/*  min-width: 60rem;*/
/*}*/
</style>
