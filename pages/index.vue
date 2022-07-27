<template>
  <div>
    <Navbar />
    <Dropdown />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Dropdown from "../components/Dropdown.vue";
export default {
  name: "IndexPage",
  components: { Navbar, Dropdown },
};
</script>
