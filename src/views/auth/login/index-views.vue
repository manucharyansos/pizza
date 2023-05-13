<template>
  <div class="m-24 flex flex-row">

  </div>
</template>

<script>

import {useI18n} from "vue-i18n"
export default {
  setup() {
    const {  locale } = useI18n({useScope: 'global'})

    return {
      locale
    }
  },
  data(){
    return {
      language: 'am'
    }
  },
  methods: {
    dd(){
      this.locale === 'en' ? this.locale = 'ru' : this.locale = 'en'
      console.log(this.language)
      if (this.language === 'en'){
        this.locale = 'en'
      }
      if (this.language === 'ru'){
        this.locale = 'ru'
      }
      if (this.language === 'am'){
        this.locale = 'am'
      }
    }
  }
}
</script>

<style scoped>

</style>