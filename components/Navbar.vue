<template>
  <div class="navbar bg-base-100 justify-center">
    <div class="container items-start">

      <!-- Collapse Manu -->
      <div tabindex="0" class="flex-none navbar-start collapse lg:hidden ">
        <div class="flex-1">
          <a class="btn btn-ghost max-w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </a>
          <!-- Logo Collapse Manu -->
          <nuxt-link :to="localePath('/')" class="btn btn-ghost normal-case text-3xl ">Excellence</nuxt-link>
        </div>

        <ul class="menu collapse-content">
          <li tabindex="0">
            <span>Parent</span>
            <ul class="bg-base-100">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
              <li><a>Submenu 3</a></li>
            </ul>
          </li>

          <li class="dropdown dropdown-hover">
            <a href="/">{{$t('navbar.home.home')}}
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul class="p-2 bg-base-100 dropdown-content">
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

      <!-- Collapse Manu Languages -->
      <div class="navbar-end flex-1 lg:hidden">
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
              <li><a>Company Overview</a></li>
              <li><a>Our History</a></li>
              <li>
                <nuxt-link :to="localePath('motto')">Our Philosophy</nuxt-link>
              </li>
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
