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
        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
          {{ $t('footer.focus_topic[0]') }}
        </h2>
        <ul class="text-gray-500 dark:text-gray-400">
          <li class="mb-1">
            <nuxt-link :to="localePath('/')" class=" hover:underline">{{ $t('footer.focus_topic[1]') }}</nuxt-link>
          </li>
          <li class="mb-1">
            <a href="https://www.excellence-blog.com/" class="hover:underline">{{ $t('footer.focus_topic[2]') }}</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">{{ $t('footer.service_product[0]') }} </h2>
        <ul class="text-gray-500 dark:text-gray-400">
          <li class="mb-1">
            <nuxt-link :to="localePath('business')" class="hover:underline">{{ $t('footer.service_product[1]') }}</nuxt-link>
          </li>
          <li class="mb-1">
            <nuxt-link :to="localePath('product')" class="hover:underline">{{ $t('footer.service_product[2]') }}</nuxt-link>
          </li>
          <li class="mb-1">
            <nuxt-link :to="localePath('/')" class="hover:underline">{{ $t('footer.service_product[3]') }}</nuxt-link>
          </li>
          <li class="mb-1">
            <a href="http://1excellence.com/productdemo/ebase/ebase.jsp" class="hover:underline">{{ $t('footer.service_product[4]') }}</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">{{ $t('footer.company_guide[0]') }}</h2>
        <ul class="text-gray-500 dark:text-gray-400">
          <li class="mb-1">
            <nuxt-link :to="localePath('greetings')" class="hover:underline">{{ $t('footer.company_guide[1]') }}</nuxt-link>
          </li>
          <li class="mb-1">
            <nuxt-link :to="localePath('overview')" class="hover:underline">{{ $t('footer.company_guide[2]') }}</nuxt-link>
          </li>
          <li class="mb-1">
            <nuxt-link :to="localePath('motto')" class="hover:underline">{{ $t('footer.company_guide[3]') }}</nuxt-link>
          </li>
          <li class="mb-1">
            <nuxt-link :to="localePath('policy')"  class="hover:underline">{{ $t('footer.company_guide[4]') }}</nuxt-link>
          </li>
          <li class="mb-1">
            <nuxt-link :to="localePath('employment')" class="hover:underline">{{ $t('footer.company_guide[5]') }}</nuxt-link>
          </li>
          <li class="mb-1">
            <nuxt-link :to="localePath('contact')" class="hover:underline">{{ $t('footer.company_guide[6]') }}</nuxt-link>
          </li>
          <li class="mb-1">
            <nuxt-link :to="localePath('joinus')"  class="hover:underline">{{ $t('footer.company_guide[7]') }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">{{ $t('footer.related_site[0]') }}</h2>
        <ul class="text-gray-500 dark:text-gray-400">
          <li class="mb-1">
            <a href="https://www.excelsiam.com/" class="hover:underline">{{ $t('footer.related_site[1]') }}</a>
          </li>
          <li class="mb-1">
            <a href="https://1excellence.com/ebase6/DQube" class="hover:underline">{{ $t('footer.related_site[2]') }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-center">
      <span class="text-sm text-center text-gray-500 dark:text-gray-300">© 2015 
        <a href="https://1excellence.com//">Excellence co.,Ltd. All Rights Reserved.</a>
      </span>

    </div>
  </footer>
  
</template>
