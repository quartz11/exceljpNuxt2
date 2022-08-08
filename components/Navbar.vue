<template>
  <div class="navbar bg-base-100 justify-center">
    <div class="container items-start">

      <!-- Collapse Manu -->
      <div class="flex-1 navbar-start collapse lg:hidden w-3/4">
        <input type="checkbox">
        <div class="collapse-title btn btn-ghost content-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <!-- Logo Collapse Manu -->
          <label class="normal-case text-3xl pl-2 pb-1 flex">
            <img src="@/assets/image/Excel_logo.png" width="32" height="32" class="py-1">
            <label class="pl-1">Excellence</label>
          </label>

        </div>

        <ul class="menu collapse-content overflow-visible w-fit">
          <li tabindex="0">
            <nuxt-link :to="localePath('index')" class="rounded-lg">
              {{ $t('navbar.home.home') }}
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
              </svg>
            </nuxt-link>
            <ul class="p-2 bg-base-100">
              <li>
                <nuxt-link :to="localePath('index')" class="rounded-lg">{{ $t('navbar.home.news') }}</nuxt-link>
              </li>
            </ul>
          </li>

          <li tabindex="0">
            <nuxt-link :to="localePath('overview')" class="rounded-lg">
              {{ $t('navbar.overview.overview') }}
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
              </svg>
            </nuxt-link>
            <ul class="p-2 bg-base-100">
              <li>
                <nuxt-link :to="localePath('/')" class="rounded-lg">{{$t('navbar.overview.company')}}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('history')" class="rounded-lg">{{$t('navbar.overview.history')}}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('motto')" class="rounded-lg">{{$t('navbar.overview.philosophy')}}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('greetings')" class="rounded-lg">{{$t('navbar.overview.greeting')}}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('employment')" class="rounded-lg">{{$t('navbar.overview.employment')}}
                </nuxt-link>
              </li>
            </ul>
          </li>

          <li tabindex="0">
            <nuxt-link :to="localePath('business')" class="rounded-lg"> {{$t('navbar.business.business')}}
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
              </svg>
            </nuxt-link>
            <ul class="p-2 bg-base-100">
              <li>
                <nuxt-link :to="localePath('business')" class="rounded-lg">{{$t('navbar.business.business')}}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('product')" class="rounded-lg">{{$t('navbar.business.product')}}</nuxt-link>
              </li>
            </ul>
          </li>

          <li>
            <nuxt-link :to="localePath('joinus')" class="rounded-lg">{{$t('navbar.joinus')}}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('contact')" class="rounded-lg">{{$t('navbar.contact')}}</nuxt-link>
          </li>
          <li class="py-3">
            &ensp;
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
        <nuxt-link :to="localePath('/')" class="btn btn-ghost normal-case text-3xl ">
          <img src="@/assets/image/Excel_logo.png" width="36" height="36" class="py-1 pr-1">
          Excellence
        </nuxt-link>
      </div>

      <!-- Navbar Manu -->
      <div class="navbar-end lg:w-3/4 hidden lg:flex">
        <ul class="menu menu-horizontal p-0">

          <li tabindex="0">
            <nuxt-link :to="localePath('index')">
              {{ $t('navbar.home.home') }}
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </nuxt-link>
            <ul class="p-2 bg-base-100">
              <li>
                <nuxt-link :to="localePath('index')">{{ $t('navbar.home.news') }}</nuxt-link>
              </li>
            </ul>
          </li>

          <li tabindex="0">
            <nuxt-link :to="localePath('overview')">
              {{ $t('navbar.overview.overview') }}
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </nuxt-link>
            <ul class="p-2 bg-base-100">
              <li>
                <nuxt-link :to="localePath('/')">{{$t('navbar.overview.company')}}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('history')">{{$t('navbar.overview.history')}}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('motto')">{{$t('navbar.overview.philosophy')}}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('greetings')">{{$t('navbar.overview.greeting')}}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('employment')">{{$t('navbar.overview.employment')}}
                </nuxt-link>
              </li>
            </ul>
          </li>

          <li tabindex="0">
            <nuxt-link :to="localePath('business')"> {{$t('navbar.business.business')}}
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </nuxt-link>
            <ul class="p-2 bg-base-100">
              <li>
                <nuxt-link :to="localePath('business')">{{$t('navbar.business.business')}}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('product')">{{$t('navbar.business.product')}}</nuxt-link>
              </li>

            </ul>
          </li>

          <li>
            <nuxt-link :to="localePath('joinus')">{{$t('navbar.joinus')}}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('contact')">{{$t('navbar.contact')}}</nuxt-link>
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
