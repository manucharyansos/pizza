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
          <div class="category_name uppercase absolute z-10 bottom-0 flex items-center justify-center text-white font-serif text-lg font-semibold">
            <p class="flex text-center content-center items-center justify-center m-auto">{{slide.name}}</p>
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
export default {
  name: "Base-Carousel",
  components: {
    Carousel,
    Slide,
    Navigation
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
  width: 208px;
  min-width: 208px;
  height: 208px;
}

.category_name{
  background: rgba(0,0,0,.5);
  width: 100%;
  height: 60px;
}
</style>