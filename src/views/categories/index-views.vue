<template>
  <div class="dark:bg-mBlack">
    <div class="px-8 dark:bg-mBlack">
      <categories-carousel :slide-data="getCategories" :itemsToShow="10" />
      <div class="flex flex-row py-12">
        <product-card :data="getProducts"></product-card>
      </div>
    </div>
  </div>
</template>
<script>
import CategoriesCarousel from "@/views/categories/carousel/indexComponent"
import { mapGetters } from "vuex";
import ProductCard from "@/components/Product-Card";

export default {
  name: 'Categories-View',
  components: { ProductCard,  CategoriesCarousel },
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