<template>



    <NavbarMain></NavbarMain>
    <FormAvis></FormAvis>
    <EtoileAvis></EtoileAvis>
<div class=" bg-" ></div>
    <FooterMain></FooterMain>
    

</template>

<script>
// @ is an alias to /src
import NavbarMain from '@/components/NavbarMain.vue';
import FooterMain from '@/components/FooterMain.vue'
import EtoileAvis from '@/components/EtoileAvis.vue';
import FormAvis from '@/components/FormAvis.vue';



export default {
  name: 'HomeView',
  components: {
    NavbarMain,
    FooterMain,
    EtoileAvis,
    FormAvis
}
}
</script>
