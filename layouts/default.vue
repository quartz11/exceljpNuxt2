<template>
  <div style="background-color:whitesmoke">
    <Navbar />
    <br />
    <Nuxt />
    <br />
    <v-footer>
      <AppFooter />
    </v-footer>
  </div>

</template>

<script>
import Navbar from "../components/Navbar.vue";
import AppFooter from "../components/AppFooter.vue";
export default {
  name: "default",
  components: { Navbar, AppFooter},
};
</script>
