<template>
  <div class="dark:bg-mBlack">
    <div class="sticky top-0 bg-white z-20">
      <base-header :delivery="$t('delivery')" :total-basket="basketTotal" @clickBasket="openBasket" @barsClick="bars">
        <template v-slot:language>
        <span
            class="font-semibold font-xl text-silver dark:text-white"
            @click="openLanguage">
          {{ language }}
        </span>
        </template>
      </base-header>
    </div>
    <template v-if="isOpenLanguage">
      <div class="w-full flex flex-row fixed h-full bars_div z-50 top-0">
        <div class="bars_div w-9/12" @click="isOpenLanguage = !isOpenLanguage"></div>
        <div class="w-3/12 fixed z-30 top-0 right-0 h-full bg-white border border-l-silver-200 dark:border-51 dark:bg-mBlack">
          <close-component
              @close="openLanguage"
              imgURL="close.svg"
          />
          <div>
            <check-box-component
                v-model:modelValue="language"
                :select-language="selectLanguage"
                @changeLanguage="changeLanguage"
            />
          </div>
        </div>
      </div>
    </template>
    <!--      Bars -->
    <div v-if="isBars">
      <div class="w-full flex flex-row fixed h-full bars_div z-50 top-0">
        <div class="bars_div w-7/12 lg:w-8/12 xl:w-9/12" @click="isBars = !isBars"></div>
        <div class="bars_div w-5/12 lg:w-4/12 xl:w-3/12 shadow-2xl bg-white dark:bg-mBlack dark:border-silver">
          <close-component
              @close="isBars = !isBars"
              imgURL="close.svg"
          />
          <div class="flex flex-row p-5 mt-32 block xl:hidden">
            <div class="bars_image">
              <img src="@/assets/myOrders.svg" class="w-full" alt="">
            </div>
           <p class="text-51 dark:text-white text-2xl font-serif ml-2">{{$t('orders')}} </p>
          </div>
          <div class="flex flex-row p-5 mt-0 xl:mt-32">
            <div class="bars_image">
              <img src="@/assets/feedback.svg" class="w-full" alt="">
            </div>
            <router-link to="/feedback" class="text-51 dark:text-white text-2xl font-serif ml-2">{{$t('feedback')}}</router-link>
          </div>
        </div>
      </div>
    </div>
    <template v-if="isOpenBasket">
      <div class="w-2/5 fixed z-30 top-0 right-0 bg-white border dark:border-silver border-l shadow dark:bg-mBlack">
        <close-component
            @close="openBasket"
            imgURL="close.svg"
        />
        <div class="flex flex-row justify-between items-center mt-24 px-6">
          <p class="text-51 dark:text-white text-lg font-semibold font-serif">{{$t('basket')}}</p>
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
              <template v-if="locale === 'en'">
                <p>{{basket.name.en}}</p>
              </template>
              <template v-if="locale === 'am'">
                <p>{{basket.name.am}}</p>
              </template>
              <template v-if="locale === 'ru'">
                <p>{{basket.name.ru}}</p>
              </template>
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
            {{$t('finish')}}
          </button>
        </div>
      </div>
    </template>

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
    <router-view/>
    <base-footer
        :data="footerAddress"
        :info="footerInfo"
        :icon-name="social"
        @socialIcon="goSocial"
    />
    <responsive-footer :delivery="$t('delivery')"/>
  </div>
</template>

<script>
import BaseHeader from "@/layout/header/Index-Header";
import BaseFooter from "@/layout/footer/Index-Footer";
import CloseComponent from "@/components/CloseComponent";
import CheckBoxComponent from "@/components/CheckBox-Component";
import {mapActions, mapGetters} from "vuex";
import {useI18n} from "vue-i18n";
import BaseInput from "@/components/Base-Input";
import BaseButton from "@/components/Base-Button";
import SearchProduct from "@/views/home/search/Search-Product";
import ResponsiveFooter from "@/layout/footer/Responsive-Footer";

export default {
  name: "index-layout",
  components: {
    ResponsiveFooter,
    BaseFooter,
    BaseHeader,
    CloseComponent,
    CheckBoxComponent,
    SearchProduct,
    BaseButton,
    BaseInput,
  },
  setup() {
    const {  locale } = useI18n({useScope: 'global'})

    return {
      locale
    }
  },
  data() {
    return {
      isSearch: false,
      searchable: '',
      isBars: false,
      basketTotal: 0,
      isOpenLanguage: false,
      language: 'HY',
      isOpenBasket: false,
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
        { id: 1, name: 'fa-brands fa-facebook-f', val: 'facebook'},
        { id: 2, name: 'fa-brands fa-instagram', val: 'instagram'},
      ],
      selectLanguage: [
        {id: 1, name: 'ՀԱՅԵՐԵՆ', val: 'am', lang: 'HY'},
        {id: 2, name: 'ENGLISH(US)', val: 'en', lang: 'EN'},
        {id: 3, name: 'РУССКИЙ', val: 'ru', lang: 'RU'},
      ],
    }
  },
  watch: {
    basketTotal(){
      this.basketTotal = this.getBasket.length
    },
    searchable(val){
      console.log(val)
      if (val.length > 2){
        setTimeout(()=>{
          this.isSearch = true
        }, 2000)
      }else {
        this.isSearch = false
      }
    }
  },
  computed: {
    ...mapGetters(['getBasket', 'getProducts'])
  },
  methods: {
    ...mapActions(['addBasket', 'minusProduct', 'plusProduct', 'deleteProductByIndex', 'removeAllBasket', 'findSearched']),
    openBasket(){
      if (this.getBasket.length > 0){
        this.isOpenBasket = !this.isOpenBasket
      }
    },
    bars(){
      this.isBars = true
    },
    openLanguage(){
      this.isOpenLanguage = !this.isOpenLanguage
    },
    changeLanguage(languages){
      localStorage.setItem('lang', languages.val)
      this.language = languages.lang
      this.locale = languages.val
      setTimeout(() =>{
        this.isOpenLanguage =false
      }, 300)
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
    goSocial(val){
      window.location.href = `http://${val}.com`
    },
    filteredList() {
      return this.getProducts.filter((product) => {
        if (this.locale === 'am'){
          return product.name.am
              .toLowerCase()
              .includes(this.searchable.toLowerCase())
        }
        if (this.locale === 'en'){
          return product.name.en
              .toLowerCase()
              .includes(this.searchable.toLowerCase())
        }
        if (this.locale === 'ru'){
          return product.name.ru
              .toLowerCase()
              .includes(this.searchable.toLowerCase())
        }
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
  }
}
</script>

<style scoped>

.bars_image{
  width: 40px;
  height: 40px;
}
.bars_div{
  height: 100vh;
}
.basket_product_image{
  width: 110px;
}

.basket_delete{
  width: 30px;
}
.searchImg{
  width: 40px;
  height: 40px;
  padding: 10px;
}
</style>