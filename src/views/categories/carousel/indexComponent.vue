<template>
  <Carousel :settings="settings" :breakpoints="breakpoints" :itemsToShow="itemsToShow">
    <Slide v-for="slide in slideData" :key="slide">
      <div class="carousel__item">
        <div class="category cursor-pointer overflow-hidden rounded-3xl m-4 relative">
          <template v-if="slide.imageName">
            <img
                :src="require(`@/assets/${slide.imageName}`)"
                alt="image"
                class="w-full h-full rounded-3xl duration-700 hover:scale-110"
            >
          </template>
          <div class="category_name uppercase absolute z-10 bottom-0 flex items-center justify-center text-white font-serif text-sm font-semibold">
            <template v-if="locale === 'en'">
              <p class="flex text-center content-center items-center justify-center m-auto">{{slide.name.en}}</p>
            </template>
            <template v-if="locale === 'am'">
              <p class="flex text-center content-center items-center justify-center m-auto">{{slide.name.am}}</p>
            </template>
            <template v-if="locale === 'ru'">
              <p class="flex text-center content-center items-center justify-center m-auto">{{slide.name.ru}}</p>
            </template>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import {useI18n} from "vue-i18n";
export default {
  name: "Categories-Carousel",
  components: {
    Carousel,
    Slide,
    Navigation
  },
  setup() {
    const {  locale } = useI18n({useScope: 'global'})

    return {
      locale
    }
  },
  props: {
    slideData: {
      type: Array
    },
    itemsToShow: {
      type: Number
    }
  },
  data() {
    return {
      searched: [],
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      breakpoints: {
        700: {
          itemsToShow: 3.5,
          snapAlign: 'absolute',
        },
        1024: {
          itemsToShow: this.itemsToShow,
          snapAlign: 'start',
        },
      },
    }
  }
}
</script>

<style scoped>
.category{
  width: 108px;
  min-width: 108px;
  height: 108px;
}

.category_name{
  background: rgba(0,0,0,.5);
  width: 100%;
  height: 40px;
}
</style>