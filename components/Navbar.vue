<template>
  <div class="navbar bg-base-100 justify-center">
    <div class="container items-start">

      <!-- Collapse Manu -->
      <div class="flex-1 navbar-start collapse lg:hidden w-3/4">
        <input type="checkbox" class="peer" />
        <div class="collapse-title btn btn-ghost content-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <!-- Logo Collapse Manu -->
          <label class="normal-case text-3xl pl-5 pb-1">Excellence</label>
        </div>

        <ul class="menu collapse-content overflow-visible w-fit items-start">
          <li tabindex="0">
            <nuxt-link :to="localePath('/')" class="rounded-lg">
              {{ $t('navbar.home.home') }}
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
              </svg>
            </nuxt-link>
            <ul class="p-2 bg-base-100">
              <li>
                <nuxt-link :to="localePath('/')" class="rounded-lg">{{ $t('navbar.home.news') }}</nuxt-link>
              </li>
            </ul>
          </li>

          <li tabindex="0">
            <a> Overview
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
              </svg>
            </a>
            <ul class="p-2 bg-base-100">
              <li>
                <nuxt-link to="/overview">Company Overview</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/history">Our History</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('motto')">Our Philosophy</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/greetings">Greeting</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/employment">Employment</nuxt-link>
              </li>
            </ul>
          </li>

          <li tabindex="0">
            <a href="/business"> Our Business
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
              </svg>
            </a>
            <ul class="p-2 bg-base-100">
              <li>
                <nuxt-link to="/business">Our Business</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/product">Our Product</nuxt-link>
              </li>
            </ul>
          </li>

          <li>
            <nuxt-link to="/joinus">Join us</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">Contact us</nuxt-link>
          </li>
        </ul>
      </div>

      <!-- Collapse Manu Languages -->
      <div class="navbar-end flex-none lg:hidden w-1/4">
        <div class="dropdown dropdown-end float-right">
          <label tabindex="0" class="btn btn-ghost m-1">
            <font-awesome-icon icon="fa-solid fa-language" class="text-2xl" />
          </label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32">
            <li>
              <nuxt-link :to="switchLocalePath('jp')">日本語</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="switchLocalePath('th')">ภาษาไทย</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="switchLocalePath('cn')">中文</nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Logo Manu -->
      <div class="navbar-start w-1/4 flex-1 hidden lg:flex">
        <nuxt-link :to="localePath('/')" class="btn btn-ghost normal-case text-3xl ">Excellence</nuxt-link>
      </div>

      <!-- Navbar Manu -->
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

          <li tabindex="0">
            <a> Overview
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul class="p-2 bg-base-100">
              <li>
                <nuxt-link to="/overview">Company Overview</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/history">Our History</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('motto')">Our Philosophy</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/greetings">Greeting</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/employment">Employment</nuxt-link>
              </li>
            </ul>
          </li>

          <li tabindex="0">
            <a href="/business"> Our Business
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul class="p-2 bg-base-100">
              <li>
                <nuxt-link to="/business">Our Business</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/product">Our Product</nuxt-link>
              </li>
            </ul>
          </li>

          <li>
            <nuxt-link to="/joinus">Join us</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">Contact us</nuxt-link>
          </li>

          <li tabindex="0" class="dropdown-end">
            <a>
              <font-awesome-icon icon="fa-solid fa-language" class="text-2xl" />
            </a>
            <ul class="p-2 bg-base-100 dropdown-content">
              <li>
                <nuxt-link :to="switchLocalePath('jp')">日本語</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="switchLocalePath('th')">ภาษาไทย</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="switchLocalePath('cn')">中文</nuxt-link>
              </li>
            </ul>
          </li>

        </ul>

      </div>
    </div>
  </div>

</template>
<script>
import { ref } from 'vue';

export default {
  name: "Navbar",


};
</script>
