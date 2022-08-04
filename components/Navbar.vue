<template>
  <div class="navbar bg-base-100 lg:justify-center">
    <div class="lg:container">
      <div class="navbar-start lg:w-1/4 w-1 flex-1">

        <nuxt-link :to="localePath('/')" class="btn btn-ghost normal-case text-3xl">Excellence</nuxt-link>

        <div tabindex="0" class="collapse lg:hidden">

          <a class="btn btn-ghost collapse-title ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </a>

          <ul tabindex="0" class="menu menu-compact collapse-content">
            <li tabindex="0">
              <a href="/">{{$t('navbar.home.home')}}
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2 bg-base-100">
                <li><a href="">{{$t('navbar.home.news')}}</a></li>
              </ul>
            </li>

            <li tabindex="0">
              <a> {{$t('navbar.overview.overview')}}
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2 bg-base-100">
                <li><a>{{$t('navbar.overview.company')}}</a></li>
                <li><a>{{$t('navbar.overview.history')}}</a></li>
                <li><a>{{$t('navbar.overview.philosophy')}}</a></li>
                <li><a>{{$t('navbar.overview.greeting')}}</a></li>
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
              <li><nuxt-link to="/overview">Company Overview</nuxt-link></li>
              <li><nuxt-link to="/history">Our History</nuxt-link></li>
              <li><nuxt-link :to="localePath('motto')">Our Philosophy</nuxt-link></li>
              <li><nuxt-link to="/greetings">Greeting</nuxt-link></li>
            </ul>
          </li>

          <li tabindex="0">
            <a href="/business"> Our Business
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul class="p-2 bg-base-100">
              <li><nuxt-link to="/business">Our Business</nuxt-link></li>
              <li><nuxt-link to="/product">Our Product</nuxt-link></li>
            </ul>
          </li>

          <li><nuxt-link to="/joinus">Join us</nuxt-link></li>
          <li><nuxt-link to="/contact">Contact us</nuxt-link></li>

          <li tabindex="0" class="dropdown-end" >
            <a >
              <font-awesome-icon icon="fa-solid fa-language" class="text-2xl" />
            </a>
            <ul class="p-2 bg-base-100 dropdown-content">
              <li><nuxt-link :to="switchLocalePath('jp')">日本語</nuxt-link></li>
              <li><nuxt-link :to="switchLocalePath('en')">English</nuxt-link></li>
              <li><nuxt-link :to="switchLocalePath('th')">ภาษาไทย</nuxt-link></li>
              <li><nuxt-link :to="switchLocalePath('cn')">中文</nuxt-link></li>
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
