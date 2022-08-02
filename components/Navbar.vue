<template>
  <div class="navbar bg-base-100 lg:justify-center">
    <div class="lg:container">
      <div class="navbar-start lg:w-1/4">

        <a href="/" class="btn btn-ghost normal-case text-3xl">Excellence</a>

        <div tabindex="0" class="collapse lg:hidden">

          <a class="btn btn-ghost collapse-title ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </a>

          <ul tabindex="0" class="menu menu-compact collapse-content">
            <li><a>Item 1</a></li>
            <li tabindex="0">
              <a class="justify-between">
                Parent
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
      </div>

      <div class="navbar-end lg:w-3/4 hidden lg:flex">
        <ul class="menu menu-horizontal p-0">

          <li tabindex="0">
            <a href="/">Home
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul class="p-2 bg-base-100">
              <li><a href="">News</a></li>
            </ul>
          </li>
          <li><a>News</a></li>

          <li tabindex="0">
            <a> Overview
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul class="p-2 bg-base-100">
              <li><a>Company Overview</a></li>
              <li><a>Our History</a></li>
              <li><a>Our Philosophy</a></li>
              <li><a>Greeting</a></li>
            </ul>
          </li>

          <li tabindex="0">
            <a href="/business"> Our Business
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul class="p-2 bg-base-100">
              <li><a href="/business">Our Business</a></li>
              <li><a>Our Product</a></li>
            </ul>
          </li>

          <li><a>Join us</a></li>
          <li><a href="/contact">Contact us</a></li>

        </ul>

      </div>
    </div>
  </div>

</template>
<script>
import { ref } from 'vue';
export default {
  name: "Navbar",
  // setup() {
  //   let showMenu = ref(false);
  //   let show = ref(false);
  //   let ddnav1 = ref(false);
  //   let ddnav2 = ref(false);
  //   let ddnav3 = ref(false);
  //   let lang = ref('EN');
  //   const toggleNav = () => (showMenu.value = !showMenu.value);
  //   return { showMenu, show, ddnav1, ddnav2, ddnav3, lang, toggleNav };
  // },
};
</script>
