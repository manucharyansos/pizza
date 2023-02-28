<template>
  <div class="dark:bg-mBlack edit_page">
    <div class="flex flex-row mt-16 p-12">
      <product-card
          :data="getSearched"
      />
    </div>
  </div>

</template>

<script>
import ProductCard from "@/components/Product-Card";
import { mapGetters } from "vuex";

export default {
  name: "View-Page",
  components: { ProductCard },
  computed: {
    ...mapGetters(['getSearched'])
  },
  methods: {
    dd(){}
  }
}
</script>

<style scoped>
.edit_page{
  height: 100vh;
}
</style>