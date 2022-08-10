<template>
  <div>

    <div class="container w-9/12	 mx-auto">

      <h1 class="text-lg shadow-2xl text-left text-white bg-violet-800 ">&emsp;{{ $t('history.title') }}</h1>
      <div class="relative overflow-x-auto shadow-md ">
        <table class="w-full shadow-2xl text-sm text-left text-white dark:text-gray-400">
          <thead class="text-xs text-white dark:text-gray-400">
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="col" class="px-6 py-3 text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('history.row1.year') }}
              </th>
              <th scope="col" class="px-6 py-3 text-black bg-blue-300 font-normal">
                {{ $t('history.row1.text') }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('history.row2.year') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('history.row2.text') }}
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('history.row3.year') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('history.row3.text') }}
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('history.row4.year') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('history.row4.text') }}
              </td>
            </tr>

            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('history.row5.year') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('history.row5.text') }}
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('history.row6.year') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('history.row6.text') }}
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('history.row7.year') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('history.row7.text') }}
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('history.row8.year') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('history.row8.text') }}
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('history.row9.year') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('history.row9.text') }}
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('history.row10.year') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('history.row10.text1') }}
                <br />
                {{ $t('history.row10.text2') }}
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('history.row11.year') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('history.row11.text') }}
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('history.row12.year') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('history.row12.text') }}
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('history.row13.year') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('history.row13.text') }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex p-max justify-center pt-5 ">
        <nuxt-link :to="localePath('overview')"
          class="	content-center font-bold text-white btn bg-slate-600 hover:bg-slate-500 border-0 shadow-2xl">
          {{ $t('history.btn_overview') }}
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
          </svg>
        </nuxt-link>
      </div>

    </div>

  </div>
</template>
