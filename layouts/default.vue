<template>
  <div class="bg-slate-300">
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
import AppFooter from "../components/AppFooter.vue";
import Navbar from "~/components/Navbar.vue";
export default {
  name: "default",
  components: { AppFooter, Navbar },
};
</script>
