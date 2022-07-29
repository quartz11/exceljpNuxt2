<template>
  <div style="background-color:LightGray;">
    <TestNavbar />
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
import TestNavbar from "../components/TestNavbar.vue";
export default {
  name: "default",
  components: { Navbar, AppFooter, TestNavbar },
};
</script>
