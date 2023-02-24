<template>
  <div>
    <base-header/>
    feedback
    <base-footer
        :data="footerAddress"
        :info="footerInfo"
        :icon-name="social"
        />
  </div>
</template>

<script>
import BaseHeader from "@/components/layouts/Base-Header";
import BaseFooter from "@/components/layouts/Base-Footer";
export default {
  name: "FeedbackPage",
  components: {BaseHeader, BaseFooter},
  data(){
    return {
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
    }
  },
}
</script>

<style scoped>

</style>