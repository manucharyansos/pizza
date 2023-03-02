<template>
  <header>
    <nav class="navbar navbar-expand-lg py-5 bg-white relative flex items-center w-full justify-between border-b-white dark:bg-mBlack">
      <router-link to="/">
        <div class="header_logo_content flex flex-row items-center justify-center cursor-pointer">
          <div class="header_logo ">
            <img src="@/assets/logo.png" alt="image" class="w-full rounded-3xl">
          </div>
          <div class="flex flex-col items-start ml-4">
            <p class="text-silver font-semibold leading-5 font-sans text-sm">Welcome to</p>
            <p class="text-red font-semibold leading-5 font-serif text-md">Pizza Hut Armenia Menu</p>
          </div>
        </div>
      </router-link>

        <div class=" hidden lg:flex flex-row delivery items-center justify-center bg-red text-white rounded-xl p-2 hover:bg-redS cursor-pointer stroke-white h-10">
           <div class="h-9 w-3/12 mt-2">
             <svg  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" xml:space="preserve" style="enable-background: new 0 0 22 22;"><g _ngcontent-kxi-c24=""><g _ngcontent-kxi-c24=""><path _ngcontent-kxi-c24="" d="M1.8,16h12.9c0.2,0,0.3-0.1,0.5-0.2l1.2-0.8c0.9-0.6,1.9-0.9,2.9-0.9h0.2c0.3,0,0.6-0.1,0.8-0.4l0.8-0.8
			c0,0-1-1.2-2.3-1.1s-2.4,1-2.4,1" class="st2 stroke-white fill-red hover:bg-redS" ></path><line _ngcontent-kxi-c24="" x1="0.8" y1="13.5" x2="7.8" y2="13.5" class="st2 stroke-white fill-white hover:bg-redS"></line><path _ngcontent-kxi-c24="" d="M1.8,16c0,0-0.6-2.5,0.5-3.8C3,11.3,4.1,11,4.1,11h6.6c0,0-0.5,1.4,0,2.1c0.5,0.7,1.1,1.1,2,1.1
			c0.6,0,1.1-0.2,1.4-0.4c0.3-0.2,0.4-0.4,0.4-0.7V9.5c0,0,0-1.4,0.8-1.6c0.7-0.2,1.8,0.9,2.3,3.3" class="st2 stroke-white fill-red hover:bg-redS"></path><path _ngcontent-kxi-c24="" d="M7.5,16.1c0,1.3-1,2.3-2.3,2.3S3,17.4,3,16.1" class="st2 stroke-white fill-white hover:bg-redS"></path><path _ngcontent-kxi-c24="" d="M19.7,14.2c0.6,0.5,1,1.3,0.9,2.2c-0.1,1.3-1.4,2.3-2.7,2.2c-1.3-0.1-2.3-1.4-2.2-2.8" class="st2 stroke-white fill-white hover:bg-redS"></path><path _ngcontent-kxi-c24="" d="M10.1,11H5.4c-0.6,0-1-0.5-1-1V9.7c0-0.6,0.5-1,1-1h4.8c0.6,0,1,0.5,1,1v0.3C11.2,10.5,10.7,11,10.1,11z" class="st2 stroke-white fill-white"></path><path _ngcontent-kxi-c24="" d="M6.9,8.5H4.1C3.5,8.5,3,7.9,3,7.3V4.5c0-0.6,0.5-1.1,1.1-1.1h2.8C7.5,3.4,8,3.9,8,4.5v2.8
			C8,7.9,7.5,8.5,6.9,8.5z" class="st2 stroke-white fill-red"></path><path _ngcontent-kxi-c24="" d="M13.3,4.8l1.5-0.3c0,0,1.5,0.7,1.5,1.6s-0.1,1.8-0.1,1.8l0.4,0.5c0,0,1.5,0,1.6-0.1c0.2-0.2,0.2-2.6,0-2.7
			c-0.6,0-1.7,0.2-1.7,0.2" class="st2 stroke-white fill-red"></path></g></g></svg>
           </div>
          <p class="mx-2 w-2/3 font-serif text-md font-normal">
            {{delivery}}
          </p>
        </div>
      <div class="flex flex-row items-center">
        <div @click="toggleDark"  class="header_dark_mode m-1 border rounded-3xl hidden lg:flex flex-row items-center relative p-1 cursor-pointer">
          <div class="bg-red bark_mode_button rounded-3xl absolute" :class="{ l_modeDin: isActive }"></div>
          <p :class="{ l_mod: isActive }" class="l_mode text-twXs float-right text-right text-51 leading-none py-1 dark:text-white">Light mode</p>
          <p v-if="isActive" :class="{ d_mod: isActive }" class="d_mode float-left text-left text-51 leading-none py-1 w-2/3 dark:text-white">Dark mode</p>
        </div>
        <div class="cursor-pointer m-1 font-semibold text-xl mx-2 dark:text-white">
          <slot name="language"></slot>
        </div>
        <router-link to="/login" class=" hidden lg:flex header_avatar m-1 cursor-pointer mx-2">
          <img src="@/assets/user.svg" alt="image" class="w-full rounded-3xl">
        </router-link>
        <div class="header_basket hidden lg:flex m-1 cursor-pointer mx-2" @click="$emit('clickBasket')">
          <img src="@/assets/basket.svg" alt="image" class="w-full rounded-3xl">
          <div class="basket_total flex items-center justify-center text-white">{{totalBasket}}</div>
        </div>
        <div class="header_bars lg:border-red dark:border-51 m-1 border-inherit cursor-pointer mx-2" @click="$emit('barsClick')">
          <img src="@/assets/burger-icon.svg" alt="image" class="rounded-xl border-inherit">
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import {useDark, useToggle} from "@vueuse/core";

export default {
  name: "Base-Header",
  data(){
    return {
      isDark: false,
      isActive: true
    }
  },
  props: {
    userIcon: {
      type: String
    },
    totalBasket: {
      type: Number
    },
    delivery: {
      type: String
    }
  },
  methods: {
    toggleDark() {
      this.isActive = !this.isActive
      this.isDark = !this.isDark;
      if(this.isDark){
        this.isDark = useDark()
      }
      useToggle(this.isDark)
    }
  }
}
</script>

<style scoped>.header_logo{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.svg{
  color: white !important;
}
.header_avatar{
  width: 20px;
  height: 20px;
}
.header_basket{
  width: 20px;
  height: 20px;
}
.header_bars{
  width: 20px;
  height: 20px;
}
.basket_total{
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #E33B41;
  position: absolute;
  top: 14px;
  right: 80px;
}
.header_dark_mode{
  width: 60px;
  height: 30px;
}
.bark_mode_button{
  width: 20px;
  height: 20px;
}
.l_mode{
  font-size: 10px;
}
.d_mode{
  font-size: 10px;
}
.l_modeDin{
  right: 5px;
}
.l_mod{
  display: none;
}
.d_mod{
  display: block;
}

.delivery{
  width: 130px;
}
</style>