<template>
  <div class="footer_content flex flex-row justify-between p-12">
    <div class="flex flex-col justify-start items-start text-white ">
      <div v-for="item of data" :key="item.id" class="flex flex-row items-center cursor-pointer">
        <div class="locationImage mr-2">
          <img src="@/assets/location.svg" alt="">
        </div>
        <span>{{item.text}}</span>
      </div>
    </div>
    <div class="flex flex-row justify-start text-white mr-auto cursor-pointer">
      <div class="m-2" v-for="item of info" :key="item.id">
        <font-awesome-icon :icon="item.infoIcon" />
        <span class="ml-3">{{item.val}}</span>
      </div>
    </div>
    <div class="flex flex-row justify-end text-xl">
      <div @click="$emit('socialIcon', item.name)" v-for="item of iconName" :key="item.id" class="socialIcons cursor-pointer text-white bg-mSilver flex justify-center items-center m-2">
        <font-awesome-icon :icon="item.name" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Base-Footer",
  props: {
    data: {
      type: Array
    },
    info: {
      type: Array
    },
    iconName: {
      type: Array
    },
  }
}
</script>

<style scoped>
  .footer_content{
    background-color: #3d3d3d;
    height: 300px;

  }

  .socialIcons{
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  .locationImage{
    width: 20px;
    height: 30px;
  }
</style>