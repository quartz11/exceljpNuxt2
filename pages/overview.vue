<template>
  <div>

    <div class="container w-9/12 mx-auto">

      <h1 class="text-lg text-center text-white bg-violet-800 ">{{ $t('overview.title') }}</h1>
      <div class="overflow-x-auto shadow-md ">
        <table class="w-full text-sm text-left text-white dark:text-gray-400">
          <thead class="text-xs text-white uppercase dark:text-gray-400">
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="col" class="px-6 py-3 text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('overview.comp_name.head') }}
              </th>
              <th scope="col" class="px-6 py-3 text-black bg-blue-300">
                {{ $t('overview.comp_name.text') }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('overview.location.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('overview.location.text') }}
              </td>

            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('overview.establish.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('overview.establish.text') }}
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('overview.capital.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('overview.capital.text') }}
              </td>
            </tr>

            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('overview.president.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('overview.president.text') }}
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('overview.num_employees.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('overview.num_employees.text') }}
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('overview.member_organize.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('overview.member_organize.text1') }} <br />
                {{ $t('overview.member_organize.text2') }}
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('overview.bank.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('overview.bank.text1') }} <br />
                {{ $t('overview.bank.text2') }} <br />
                {{ $t('overview.bank.text3') }}
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('overview.business_regis.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('overview.business_regis.text') }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex p-max justify-center pt-5 ">
        <nuxt-link :to="localePath('history')"
          class="	content-center font-bold text-white btn bg-slate-600 hover:bg-slate-500 border-0 shadow-2xl">
          {{ $t('overview.btn_history') }}
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
          </svg>
        </nuxt-link>
      </div>

    </div>

  </div>
</template>
