<style scoped>
h6 {
  text-align: center;
}
</style>
<template>
  <!-- FOOTER -->



  <footer class="bg-white dark:bg-gray-900">
    <div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">Focus Topics</h2>
        <ul class="text-gray-500 dark:text-gray-400">
          <li class="mb-1">
            <a href="#" class=" hover:underline">News</a>
          </li>
          <li class="mb-1">
            <a href="https://www.excellence-blog.com/" class="hover:underline">Blog</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">Services and Products </h2>
        <ul class="text-gray-500 dark:text-gray-400">
          <li class="mb-1">
            <nuxt-link to ="/business" class="hover:underline">Business</nuxt-link>
          </li>
          <li class="mb-1">
            <nuxt-link to ="/product" class="hover:underline">Product</nuxt-link>
          </li>
          <li class="mb-1">
            <nuxt-link to="/" class="hover:underline">Import agency</nuxt-link>
          </li>
          <li class="mb-1">
            <a href="http://1excellence.com/productdemo/ebase/ebase.jsp" class="hover:underline">e-base</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">Company Guide</h2>
        <ul class="text-gray-500 dark:text-gray-400">
          <li class="mb-1">
            <nuxt-link to="/greetings" class="hover:underline">Greeting</nuxt-link>
          </li>
          <li class="mb-1">
            <nuxt-link to ="/overview" class="hover:underline">Overview</nuxt-link>
          </li>
          <li class="mb-1">
            <nuxt-link to="/motto" class="hover:underline">Philosophy and Motto</nuxt-link>
          </li>
          <li class="mb-1">
            <nuxt-link to="/policy" class="hover:underline">Privacy Policy</nuxt-link>
          </li>
          <li class="mb-1">
            <nuxt-link to="/employment" class="hover:underline">Employment</nuxt-link>
          </li>
          <li class="mb-1">
            <nuxt-link to ="/contact" class="hover:underline">Contact</nuxt-link>
          </li>
          <li class="mb-1">
            <nuxt-link to="/joinus" class="hover:underline">Join us</nuxt-link>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">Related Sites</h2>
        <ul class="text-gray-500 dark:text-gray-400">
          <li class="mb-1">
            <a href="https://www.excelsiam.com/" class="hover:underline">Excellence Siam</a>
          </li>
          <li class="mb-1">
            <a href="https://1excellence.com/ebase6/DQube" class="hover:underline">Employee e-base</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-center">
      <span class="text-sm text-center text-gray-500 dark:text-gray-300">© 2015 <a
          href="https://1excellence.com//">Excellence co.,Ltd. All Rights Reserved.</a>
      </span>

    </div>
  </footer>




</template>
