<template>
  <div>
    <nav class="px-6 py-8 dark:bg-slate-700 ">
      <div class="md:flex flex-wrap md:justify-between md:items-center container mx-auto">
        <div class="flex items-center justify-between">
          <router-link to="/"
            class="flex  font-bold md:text-2xl dark:text-gray-100 hover:text-slate-300 focus:text-slate-300 whitespace-nowrap">
            <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-10" alt="LOGO" />
            <span class="self-center text-4xl">Excellence</span>
          </router-link>
          <!-- Mobile menu button -->
          <div @click="toggleNav" class="flex md:hidden">
            <button type="button" class="
              text-gray-100
              hover:text-slate-300
              focus:text-slate-300
              focus:outline-none 
            ">
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                </path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul :class="showMenu ? 'flex' : 'hidden'"
          class=" flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">

          <li class="text-gray-100 hover:text-slate-300">Home</li>

          <li class="text-gray-100 hover:text-slate-300">News</li>

          <li>
            <div class="relative">
              <!-- Dropdown toggle button -->
              <button @click="ddnav1 = !ddnav1"
                class=" flex items-center text-gray-100 hover:text-slate-300 focus:text-slate-300 focus:outline-none ">
                <span class="mr-4">Overview</span>
                <svg class="w-5 h-5 text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </button>

              <!-- Dropdown menu -->
              <div v-show="ddnav1" class=" py-2 mt-2 bg-slate-700 rounded-md shadow-xl lg:absolute lg:left-0 w-44 ">
                <router-link to="/"
                  class=" block px-4 py-2 text-sm text-indigo-100 hover:bg-slate-600 hover:text-indigo-100 ">
                  Company Overview
                </router-link>
                <router-link to="/"
                  class=" block px-4 py-2 text-sm text-indigo-100 hover:bg-slate-600 hover:text-indigo-100 ">
                  Our History
                </router-link>
                <router-link to="/"
                  class=" block px-4 py-2 text-sm text-indigo-100 hover:bg-slate-600 hover:text-indigo-100 ">
                  Our Philosophy
                </router-link>
                <router-link to="/"
                  class=" block px-4 py-2 text-sm text-indigo-100 hover:bg-slate-600 hover:text-indigo-100 ">
                  Greeting
                </router-link>
              </div>
            </div>
          </li>

          <li>
            <div class="relative">
              <!-- Dropdown toggle button -->
              <button @click="ddnav2 = !ddnav2"
                class=" flex items-center text-gray-100 hover:text-slate-300 focus:text-slate-300 focus:outline-none ">
                <span class="mr-4">Our Business</span>
                <svg class="w-5 h-5 text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </button>

              <!-- Dropdown menu -->
              <div v-show="ddnav2" class=" py-2 mt-2 bg-slate-700 rounded-md shadow-xl lg:absolute lg:left-0 w-44 ">
                <router-link to="/"
                  class=" block px-4 py-2 text-sm text-indigo-100 hover:bg-slate-600 hover:text-indigo-100 ">
                  Our Business
                </router-link>
                <router-link to="/"
                  class=" block px-4 py-2 text-sm text-indigo-100 hover:bg-slate-600 hover:text-indigo-100 ">
                  Our Product
                </router-link>
              </div>
            </div>
          </li>

          <li class="text-gray-100 hover:text-slate-300">Join us</li>

          <li class="text-gray-100 hover:text-slate-300">Contact us</li>

          <li>
            <div class="relative">
              <!-- Dropdown toggle button -->
              <button @click="ddnav3 = !ddnav3" 
                class=" flex items-center text-gray-100 hover:text-slate-300 focus:text-slate-300 focus:outline-none ">
                <span class="">{{lang}}</span>
              </button>

              <!-- Dropdown menu -->
              <div v-show="ddnav3" class=" py-2 mt-2 bg-slate-700 rounded-md shadow-xl absolute w-12 ">
                <button @click="lang = 'JP'; ddnav3 = false"
                  class=" block px-4 py-2 text-sm text-indigo-100 hover:bg-slate-600 hover:text-indigo-100 ">
                  JP
                </button>
                <button @click="lang = 'EN'; ddnav3 = false"
                  class=" block px-4 py-2 text-sm text-indigo-100 hover:bg-slate-600 hover:text-indigo-100 ">
                  EN
                </button>
                <button @click="lang = 'TH'; ddnav3 = false"
                  class=" block px-4 py-2 text-sm text-indigo-100 hover:bg-slate-600 hover:text-indigo-100 ">
                  TH
                </button>
                <button @click="lang = 'CH'; ddnav3 = false"
                  class=" block px-4 py-2 text-sm text-indigo-100 hover:bg-slate-600 hover:text-indigo-100 ">
                  CH
                </button>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  name: "Navbar",
  setup() {
    let showMenu = ref(false);
    let show = ref(false);
    let ddnav1 = ref(false);
    let ddnav2 = ref(false);
    let ddnav3 = ref(false);    
    let lang = ref('EN');
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, show, ddnav1, ddnav2, ddnav3, lang, toggleNav };
  },
};
</script>
