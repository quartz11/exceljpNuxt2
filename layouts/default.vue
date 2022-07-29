<template>
  <div style="background-color:LightGray;">
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
import Dropdown from "../components/Dropdown.vue";
import AppFooter from "../components/AppFooter.vue";
export default {
  name: "default",
  components: { Navbar, Dropdown, AppFooter},
};
</script>
