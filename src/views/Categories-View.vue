<template>
  <div class="dark:bg-mBlack">
    <base-header/>
    <div class="px-8 dark:bg-mBlack">
      <div class="flex flex-row py-12 px-8 mt-16">
        <div class="float-left">
          <base-button>
            <span>ԲՈԼՈՐ ԱՊՐԱՆՔՆԵՐԸ</span>
          </base-button>
        </div>
        <div class="flex flex-row float-right ml-auto relative">
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
              <search-product
                  :data="filteredList()"
              />
            </div>
          </template>
        </div>
      </div>
      <categories-carousel :slide-data="getCategories" :itemsToShow="10" />
      <div class="flex flex-row py-12">
        <product-card :data="getProducts"></product-card>
      </div>
    </div>
    <base-footer/>
  </div>
</template>
<script>
import BaseHeader from "@/components/layouts/Base-Header";
import BaseFooter from "@/components/layouts/Base-Footer";
import CategoriesCarousel from "@/components/Categories-Carousel";
import { mapGetters } from "vuex";
import ProductCard from "@/components/Product-Card";
import SearchProduct from "@/components/Search-Product";
import BaseButton from "@/components/Base-Button";
import BaseInput from "@/components/Base-Input";

export default {
  name: 'Categories-View',
  components: {SearchProduct, ProductCard, BaseFooter, BaseHeader, CategoriesCarousel, BaseButton, BaseInput },
  computed: {
    ...mapGetters(['getCategories', 'getProducts'])
  },
  data() {
    return {
      isSearch: false,
    }
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
    filteredList() {
      // return this.getProducts.filter((product) => {
      //   return product.name
      //       .toLowerCase()
      //       .includes(this.searchable.toLowerCase())
      // })
    },
  }
}
</script>