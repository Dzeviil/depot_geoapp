<template>
  
  
      <NavbarMain></NavbarMain>
      <FormInscription></FormInscription>
      <FooterMain></FooterMain>
      
  </template>
  
  <script>
  // @ is an alias to /src
  import NavbarMain from '@/components/NavbarMain.vue';
  import FormInscription from '@/components/FormInscription.vue';
  import FooterMain from '@/components/FooterMain.vue'
  
  
  export default {
    name: 'HomeView',
    components: {
      NavbarMain,
      FormInscription,
      FooterMain
  }
  }
  </script>
  