<template>
  <div>
    <div class="dark:bg-mBlack">
      <!--  Header-->
      <div class="sticky top-0 bg-white z-20">
        <base-header :total-basket="basketTotal" @clickBasket="openBasket" @barsClick="bars">
          <template v-slot:language>
        <span
            class="font-semibold font-xl text-silver dark:text-white"
            @click="openLanguage">
          {{ language }}
        </span>
          </template>
        </base-header>
      </div>

      <!--  Top main-->
      <div class="flex flex-row px-12 mt-16">
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

      <!--  Categoties-->

      <div class="flex flex-col px-10 py-12 justify-between">
        <div class="flex flex-row items-center">
          <div class="flex flex-row justify-center items-center">
            <div class="category_img">
              <img src="@/assets/categories.svg" alt="">
            </div>
            <p class="text-51 text-xl font-semibold font-serif leading-6 dark:text-white">ԿԱՏԵԳՈՐԻԱՆԵՐ</p>
          </div>
          <div class="flex flex-row items-center float-right ml-auto mr-2">
            <p class="text-red cursor-pointer text-lg font-serif font-normal mr-6">Տեսնել բոլորը</p>
            <div>
              <button class="rbtn border border-silver rounded-tl-lg rounded-bl-lg hover:text-red font-semibold text-silver">
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
              </button>
              <button @click="slid" class="rbtn border border-silver rounded-tr-lg rounded-br-lg hover:text-red font-semibold text-silver">
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
        <div class="categories flex flex-row overflow-hidden">
          <div :class="{ active: isActive }" class="category cursor-pointer overflow-hidden rounded-3xl m-4 relative" v-for="category of getCategories" :key="category.id">
            <template v-if="category.imageName">
              <img
                  :src="require(`@/assets/${category.imageName}`)"
                  alt="image"
                  class="w-full h-full rounded-3xl duration-700 hover:scale-110"
              >
            </template>
            <div class="category_name uppercase absolute z-10 bottom-0 flex items-center justify-center text-white font-serif text-lg font-semibold">
              <p class="flex text-center content-center items-center justify-center m-auto">{{category.name}}</p>
            </div>
          </div>
        </div>
      </div>

      <!--Products-->

      <div class="flex flex-col px-12 py-8">
        <div class="flex flex-row mr-auto items-center">
          <div class="prod_par_image">
            <img src="@/assets/hot-dog-pizza.png" alt="" class="w-full">
          </div>
          <h2 class="uppercase text-51 text-2xl font-semibold font-serif ml-4 dark:text-white">ՊԻՑՑԱ ՀՈԹ-ԴՈԳ</h2>
        </div>
        <div class="flex flex-row my-14">
          <product-card
              :data="getProducts"
              @addToBasket="addToBasket"
          />
        </div>
      </div>

      <template v-if="isOpenLanguage">
        <div class="w-1/5 fixed z-30 top-0 right-0 h-full bg-white border border-l-silver dark:bg-mBlack">
          <close-component
              @close="openLanguage"
              imgURL="close.svg"
          />
          <check-box-component :select-language="selectLanguage" @changeLanguage="changeLanguage"/>
        </div>
      </template>

<!--      Bars -->

      <div v-if="isBars">
        <div class="w-full flex flex-row fixed h-full bars_div z-50 top-0">
          <div class="bars_div w-9/12" @click="isBars = !isBars"></div>
          <div class="bars_div w-3/12 shadow-2xl bg-white dark:bg-mBlack">
            <close-component
                @close="isBars = !isBars"
                imgURL="close.svg"
            />
            <div class="flex flex-row mt-32 p-5">
              <div class="bars_image">
                <img src="@/assets/feedback.svg" class="w-full" alt="">
              </div>
              <router-link to="/feedback" class="text-51 dark:text-white text-2xl font-serif ml-2">Հետադարձ կապ</router-link>
            </div>
          </div>
        </div>
      </div>

      <template v-if="isOpenBasket">
        <div class="w-2/5 fixed z-30 top-0 right-0 bg-white border border-l shadow dark:bg-mBlack">
          <close-component
              @close="openBasket"
              imgURL="close.svg"
          />
          <div class="flex flex-row justify-between items-center mt-24 px-6">
            <p class="text-51 dark:text-white text-lg font-semibold font-serif">ԶԱՄԲՅՈՒՂ</p>
            <div class="basket_delete p-1.5 border border-red rounded-lg cursor-pointer" @click="removeBasket">
              <img src="@/assets/delete.svg" alt="">
            </div>
          </div>
          <div class="flex flex-col px-2 py-6" v-for="(basket, index) of getBasket" :key="basket.id">
            <div class="flex flex-row pb-4 border-b items-center justify-between px-2">
              <div class="basket_product_image w-3/12">
                <img :src="require(`@/assets/${basket.image}`)" alt="">
              </div>
              <div class="flex items-start justify-start w-7/12">
                <p class="mb-8 ml-2 text-sm text-mBlack dark:text-white font-serif">{{basket.name}}</p>
              </div>
              <div class="basket_quantity flex flex-row items-center justify-center w-3/12">
                <button class="flex items-center justify-center text-red text-xl font-bold m-3 p-2 rounded-lg" @click="minusToBasket(index)">
                  <font-awesome-icon icon="fa-solid fa-minus" />
                </button>
                <span class="text-xl text-mBlack font-serif dark:text-white">{{basket.quantity}}</span>
                <button class="flex items-center justify-center text-red text-xl font-bold m-3 p-2 rounded-lg" @click="plusToBasket(index)">
                  <font-awesome-icon icon="fa-solid fa-plus" />
                </button>
              </div>
              <div class="basket_price w-2/12">
                <p class="text-51 dark:text-white">{{basket.price}}</p>
              </div>
              <div>
                <button class="basket_one_product_delete border rounded-lg py-2 px-3 dark:text-white" @click="deleteFromBasket(index)">
                  <font-awesome-icon icon="fa-solid fa-x" />
                </button>
              </div>
            </div>
          </div>

          <div class="basketButton flex justify-center">
            <button class="w-full bg-red p-3 rounded-lg m-8 text-white hover:bg-redS">
              Ավարտել
            </button>
          </div>
        </div>
      </template>

      <base-footer
          :data="footerAddress"
          :info="footerInfo"
          :icon-name="social"
          @socialIcon="dd"
      />
    </div>

  </div>
</template>

<script>
import BaseHeader from "@/components/layouts/Base-Header";
import BaseFooter from "@/components/layouts/Base-Footer";
import CloseComponent from "@/components/CloseComponent";
import CheckBoxComponent from "@/components/CheckBox-Component";
import BaseInput from "@/components/Base-Input";
import BaseButton from "@/components/Base-Button";
import { mapGetters, mapActions } from "vuex"
import ProductCard from "@/components/Product-Card";
import SearchProduct from "@/components/Search-Product";



export default {
  components: {
    SearchProduct,
    ProductCard, BaseButton, BaseInput, CheckBoxComponent, CloseComponent, BaseHeader, BaseFooter},
  data(){
    return {
      isBars: false,
      searchable: '',
      isDark: true,
      isActive: false,
      isOpenLanguage: false,
      isOpenBasket: false,
      language: 'HY',
      selectLanguage: [
        {id: 1, name: 'ՀԱՅԵՐԵՆ', val: 'HY'},
        {id: 2, name: 'ENGLISH(US)', val: 'EN'},
        {id: 3, name: 'РУССКИЙ', val: 'RU'},
      ],
      footerAddress: [
        { id: 1, text: '1 Northern Ave, Երևան, Հայաստան', iconClass: 'fa-solid fa-location-dot'},
        { id: 2, text: 'MEGA MALL ARMENIA, Gai Avenue, Yerevan, Armenia', iconClass: 'fa-solid fa-location-dot'},
        { id: 3, text: 'Yerevan Mall Food court, Arshakunyats Avenue, Yerevan, Armenia', iconClass: 'fa-solid fa-location-dot'},
        { id: 4, text: '5 Կոմիտասի պողոտա, Երևան, Հայաստան', iconClass: 'fa-solid fa-location-dot'},
        { id: 5, text: '17, 1 Erebuni St, Yerevan, Armenia', iconClass: 'fa-solid fa-location-dot'},
        { id: 6, text: '15 Tigran Mets Ave, Yerevan 0010, Armenia', iconClass: 'fa-solid fa-location-dot'},
        { id: 7, text: '8 Vahram Papazyan St, Yerevan 0012, Armenia', iconClass: 'fa-solid fa-location-dot'},
      ],
      footerInfo: [
        { id: 1, infoIcon: 'fa-solid fa-phone', val: '060505505'},
        { id: 2, infoIcon: 'fa-solid fa-envelope', val: 'delivery@derjavas.am'}
      ],
      social: [
        { id: 1, name: 'fa-brands fa-facebook-f'},
        { id: 2, name: 'fa-brands fa-instagram'},
      ],
      basketTotal: 0,
      isSearch: false,
      searched: []
    }
  },
  computed: {
    ...mapGetters(['getCategories', 'getProducts', 'getBasket']),
    // filteredList() {
    //   return this.getProducts.filter((product) => {
    //     return product.name
    //         .toLowerCase()
    //         .includes(this.searchable.toLowerCase())
    //   })
    // },
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
    openLanguage(){
      this.isOpenLanguage = !this.isOpenLanguage
    },
    changeLanguage(val){
      this.language = val
    },
    dd(){
      alert(213)
    },
    async addToBasket(product){
      await this.addBasket(product)
      this.basketTotal = this.getBasket.length
    },
    openBasket(){
      if (this.getBasket.length > 0){
        this.isOpenBasket = !this.isOpenBasket
      }
    },
    minusToBasket(index){
      this.minusProduct(index)
    },
    plusToBasket(index){
      this.plusProduct(index)
    },
    deleteFromBasket(index){
      this.deleteProductByIndex(index)
      if (this.getBasket.length < 1){
        this.isOpenBasket = false
        this.basketTotal = this.getBasket.length
      }
    },
    removeBasket(){
      this.removeAllBasket()
      this.isOpenBasket = false
      this.basketTotal = this.getBasket.length
    },
    slid(){
      this.isActive = true
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
    bars(){
      this.isBars = true
    },
    cell(){
      this.$router.push('/feedback')
    }

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

.bars_image{
  width: 40px;
  height: 40px;
}
.header_logo{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.searchImg{
  width: 40px;
  height: 40px;
  padding: 10px;
}

.category_img{
  width: 60px;
  height: 60px;
  padding: 10px;
}

.categories{
  width: 1450px;
}

.category{
  width: 208px;
  min-width: 208px;
  height: 208px;
}

.rbtn{
  width: 40px;
  height: 40px;
}

.category_name{
  background: rgba(0,0,0,.5);
  width: 100%;
  height: 60px;
}

.prod_par_image{
  width: 50px;
  height: 50px;
}
.basket_plus{
  width: 30px;
  height: 30px;
}

.basket_pluse_button{
  height: 46px;
  width: 195px;
}

.basket_plus{
  /*width: 212px;*/
}

.price{
  width: 100px;
}
.basket_product_image{
  width: 110px;
}

.basket_delete{
  width: 30px;
}
.active{
  right: 235px;
}
.bars_div{
  height: 100vh;
}
</style>
