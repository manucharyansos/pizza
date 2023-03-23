<template>
  <div class="flex flex-row h-24 w-full bg-white fixed bottom-0 md:hidden px-6 z-50">
<!--    basic-->
    <div class=" flex flex-col mx-auto items-center justify-center footer_basic w-2/12">
      <div class="footer_img my-2">
        <img src="@/assets/home.svg" alt="" class="w-full">
      </div>
      <p class="text-center mx-2 font-serif md:text-xl font-normal text-51">{{ $t('chief') }}</p>
    </div>
<!--    about us-->
    <div class=" flex flex-col mx-auto items-center justify-center footer_about w-2/12">
      <div class="footer_img my-2">
        <img src="@/assets/aboutUs.svg" alt="" class="w-full">
      </div>
      <p class="text-center mx-2 font-serif text-xl font-normal text-51">{{$t('about')}}</p>
    </div>
<!--    delivery-->
    <div class=" flex flex-col items-center justify-center footer_delivery bg-mBlue rounded-full mx-auto w-2/12">
      <div class=" flex flex-col items-center justify-center my-auto lg:hidden flex-row delivery text-white rounded-xl p-2 cursor-pointer stroke-white">
        <div class="delivery_img flex">
          <svg  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" xml:space="preserve" style="enable-background: new 0 0 22 22;"><g _ngcontent-kxi-c24=""><g _ngcontent-kxi-c24=""><path _ngcontent-kxi-c24="" d="M1.8,16h12.9c0.2,0,0.3-0.1,0.5-0.2l1.2-0.8c0.9-0.6,1.9-0.9,2.9-0.9h0.2c0.3,0,0.6-0.1,0.8-0.4l0.8-0.8
			c0,0-1-1.2-2.3-1.1s-2.4,1-2.4,1" class="st2 stroke-white fill-mBlue hover:bg-redS" ></path><line _ngcontent-kxi-c24="" x1="0.8" y1="13.5" x2="7.8" y2="13.5" class="st2 stroke-white fill-mBlue"></line><path _ngcontent-kxi-c24="" d="M1.8,16c0,0-0.6-2.5,0.5-3.8C3,11.3,4.1,11,4.1,11h6.6c0,0-0.5,1.4,0,2.1c0.5,0.7,1.1,1.1,2,1.1
			c0.6,0,1.1-0.2,1.4-0.4c0.3-0.2,0.4-0.4,0.4-0.7V9.5c0,0,0-1.4,0.8-1.6c0.7-0.2,1.8,0.9,2.3,3.3" class="st2 stroke-white fill-mBlue"></path><path _ngcontent-kxi-c24="" d="M7.5,16.1c0,1.3-1,2.3-2.3,2.3S3,17.4,3,16.1" class="st2 stroke-white fill-mBlue"></path><path _ngcontent-kxi-c24="" d="M19.7,14.2c0.6,0.5,1,1.3,0.9,2.2c-0.1,1.3-1.4,2.3-2.7,2.2c-1.3-0.1-2.3-1.4-2.2-2.8" class="st2 stroke-white fill-mBlue"></path><path _ngcontent-kxi-c24="" d="M10.1,11H5.4c-0.6,0-1-0.5-1-1V9.7c0-0.6,0.5-1,1-1h4.8c0.6,0,1,0.5,1,1v0.3C11.2,10.5,10.7,11,10.1,11z" class="st2 stroke-white fill-white"></path><path _ngcontent-kxi-c24="" d="M6.9,8.5H4.1C3.5,8.5,3,7.9,3,7.3V4.5c0-0.6,0.5-1.1,1.1-1.1h2.8C7.5,3.4,8,3.9,8,4.5v2.8
			C8,7.9,7.5,8.5,6.9,8.5z" class="st2 stroke-white fill-mBlue"></path><path _ngcontent-kxi-c24="" d="M13.3,4.8l1.5-0.3c0,0,1.5,0.7,1.5,1.6s-0.1,1.8-0.1,1.8l0.4,0.5c0,0,1.5,0,1.6-0.1c0.2-0.2,0.2-2.6,0-2.7
			c-0.6,0-1.7,0.2-1.7,0.2" class="st2 stroke-white fill-mBlue"></path></g></g></svg>
        </div>
        <p class="text-center mx-2 font-serif text-xl font-normal">
          {{delivery}}
        </p>
      </div>
    </div>
<!--    basket-->
    <div class=" flex flex-col mx-auto items-center justify-center footer_about w-2/12">
      <div class="footer_img my-2">
        <img src="@/assets/basket.svg" alt="" class="w-full">
      </div>
      <p class="text-center mx-2 font-serif text-xl font-normal text-51">{{$t('basket')}}</p>
    </div>
<!--    լօգին-->
    <div class=" flex flex-col mx-auto items-center justify-center footer_about w-2/12">
      <div class="footer_img my-2">
        <img src="@/assets/user.svg" alt="" class="w-full">
      </div>
      <p class="text-center mx-2 font-serif text-xl font-normal text-51">{{$t('enter')}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Responsive-Footer",
  props: {
    delivery: {
      type: String
    }
  }
}
</script>

<style scoped>
.footer_delivery{
  width: 150px;
  height: 150px;
}
.delivery_img{
  width: 60px;
  height: 60px;
}
.footer_img{
  width: 30px;
  height: 30px;
}
</style>