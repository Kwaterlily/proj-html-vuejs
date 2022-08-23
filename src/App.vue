<template>
  <div id="app">
    <TheHeader :links="menuLinks" font-awesome-icon icon="phone" />
    <TheJumbotron />
    <TheFooter />
    <BaseFooterBelow />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheJumbotron from './components/TheJumbotron.vue';
import TheFooter from './components/TheFooter.vue';
import BaseFooterBelow from './components/BaseFooterBelow.vue';


export default {
  name: 'App',
  components: {
    TheHeader,
    TheJumbotron,
    TheFooter,
    BaseFooterBelow,
  },
  data(){
    return{
      menuLinks: [
        { id: 1, url: "#", text: "Open Hours:", day: "Mon-Sat -", hour: "9:00 -18:00", active: false },
        { id: 2, url: "#", icon: "phone", number: "+1(305) 1234-5678", mail_icon: "mail", mail: "hello@example.com", f_icon: "facebook", t_icon: "twitter", l_icon: "", active: false }
      ]
    }
  }
};
</script>

<style lang="scss">
@import "./assets/sass/style.scss"
</style>
