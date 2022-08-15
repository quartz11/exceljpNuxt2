<template>
  <div>

    <!-- First Box -->

    <div class="container lg:w-3/4 mx-auto mb-8">
      <div class="overflow-hidden rounded shadow-2xl bg-slate-50">
        <div class="card-header text-xl" style="background-color:blueviolet; color:white;">
          &emsp; {{ $t('campus.first_box.card_head') }}
        </div>
        <div class="card-body w-full">
          <table>
            <thead>
              <tr>
                <th>
                  <p class="text-black text-left text-2xl py-3">{{ $t('campus.first_box.card_topic') }}</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-black text-left	">
                <p class="py-3">
                  {{ $t('campus.first_box.text[0]') }} <br /><br />
                  {{ $t('campus.first_box.text[1]') }}
                </p>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- 2nd Box -->

    <div class="container lg:w-3/4 mx-auto mb-8">
      <h1 class="text-lg text-left text-white bg-violet-800 ">
        &emsp; {{ $t('campus.second_box.card_head') }}
      </h1>
      <div class="relative overflow-x-auto shadow-md ">
        <table class="w-full text-sm text-left text-white dark:text-gray-400">
          <thead class="text-xs text-white dark:text-gray-400">
            <tr class="border-b border-gray-200 dark:border-gray-700 ">
              <th scope="col" class="px-6 py-3 text-sm font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('campus.second_box.row1.head') }}
              </th>
              <th scope="col" class="px-6 py-3 text-black text-sm font-medium bg-blue-300">
                {{ $t('campus.second_box.row1.text') }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('campus.second_box.row2.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('campus.second_box.row2.text[0]') }} <br />
                {{ $t('campus.second_box.row2.text[1]') }} <br />
                {{ $t('campus.second_box.row2.text[2]') }} <br />
                {{ $t('campus.second_box.row2.text[3]') }} <br />
              </td>

            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('campus.second_box.row3.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('campus.second_box.row3.text[0]') }} <br />
                {{ $t('campus.second_box.row3.text[1]') }} <br />
                {{ $t('campus.second_box.row3.text[2]') }} <br />
                {{ $t('campus.second_box.row3.text[3]') }} <br />
                {{ $t('campus.second_box.row3.text[4]') }} <br />
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('campus.second_box.row4.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('campus.second_box.row4.text[0]') }} <br />
                {{ $t('campus.second_box.row4.text[1]') }} <br />
                {{ $t('campus.second_box.row4.text[2]') }} <br />
                {{ $t('campus.second_box.row4.text[3]') }} <br />
              </td>
            </tr>

            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('campus.second_box.row5.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('campus.second_box.row5.text') }}
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('campus.second_box.row6.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('campus.second_box.row6.text[0]') }} <br />
                {{ $t('campus.second_box.row6.text[1]') }} <br />
                {{ $t('campus.second_box.row6.text[2]') }} <br />
                {{ $t('campus.second_box.row6.text[3]') }} <br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 3rd Box-->

    <div class="container lg:w-3/4 mx-auto mb-8">
      <h1 class="text-lg text-left text-white bg-violet-800 ">
        &emsp; {{ $t('campus.third_box.card_head') }}
      </h1>
      <div class="relative overflow-x-auto shadow-md ">
        <table class="w-full text-sm text-left text-white dark:text-gray-400">
          <thead class="text-xs text-white dark:text-gray-400">
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="col" class="px-6 py-3 text-sm text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('campus.third_box.row1.head') }}
              </th>
              <th scope="col" class="px-6 py-3 text-black text-sm	 font-normal	 bg-blue-300">
                {{ $t('campus.third_box.row1.text') }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('campus.third_box.row2.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('campus.third_box.row2.text') }}
              </td>

            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('campus.third_box.row3.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                <table>
                  <tr>
                    <td>{{ $t('campus.third_box.row3.text[0]') }}</td>
                    <td class="pl-6">{{ $t('campus.third_box.row3.salary[0]') }}</td>
                  </tr>
                  <tr>
                    <td>{{ $t('campus.third_box.row3.text[1]') }}</td>
                    <td class="pl-6">{{ $t('campus.third_box.row3.salary[1]') }}</td>
                  </tr>
                  <tr>
                    <td>{{ $t('campus.third_box.row3.text[2]') }}</td>
                    <td class="pl-6">{{ $t('campus.third_box.row3.salary[2]') }}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('campus.third_box.row5.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('campus.third_box.row5.text[0]') }} <br />
                {{ $t('campus.third_box.row5.text[1]') }} <br />
              </td>
            </tr>

            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('campus.third_box.row6.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('campus.third_box.row6.text[0]') }} <br />
                {{ $t('campus.third_box.row6.text[1]') }} <br />
                {{ $t('campus.third_box.row6.text[2]') }} <br />
                {{ $t('campus.third_box.row6.text[3]') }} <br />
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('campus.third_box.row7.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('campus.third_box.row7.text[0]') }} <br />
                {{ $t('campus.third_box.row7.text[1]') }} <br />
                {{ $t('campus.third_box.row7.text[2]') }} <br />
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('campus.third_box.row8.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('campus.third_box.row8.text[0]') }} <br />
                {{ $t('campus.third_box.row8.text[1]') }} <br />
              </td>

            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('campus.third_box.row9.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('campus.third_box.row9.text') }}
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('campus.third_box.row10.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('campus.third_box.row10.text[0]') }} <br />
                {{ $t('campus.third_box.row10.text[1]') }} <br />
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('campus.third_box.row11.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('campus.third_box.row11.text[0]') }} <br />
                {{ $t('campus.third_box.row11.text[1]') }} <br />
                {{ $t('campus.third_box.row11.text[2]') }} <br />
                {{ $t('campus.third_box.row11.text[3]') }} <br />
                {{ $t('campus.third_box.row11.text[4]') }} <br />
                {{ $t('campus.third_box.row11.text[5]') }} <br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
    </div>

    <!-- 4th Box -->

    <div class="container lg:w-3/4 mx-auto mb-8">
      <div class="justify-center overflow-hidden rounded shadow-2xl bg-slate-50">
        <div class="card-header text-xl" style="background-color:blueviolet; color:white;">
          &emsp; {{ $t('campus.fourth_box.card_head') }}
        </div>
        <div class="card-body w-full">
          <table>
            <thead>
              <tr>
                <th>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <p class="text-black text-left	">
                  {{ $t('campus.fourth_box.text[0]') }} <br />
                  {{ $t('campus.fourth_box.text[1]') }} <br /><br />
                  {{ $t('campus.fourth_box.text[2]') }} <br />
                  {{ $t('campus.fourth_box.text[3]') }} <br />
                  {{ $t('campus.fourth_box.text[4]') }} <br />
                  {{ $t('campus.fourth_box.text[5]') }} <br />
                  {{ $t('campus.fourth_box.text[6]') }} <br />
                  {{ $t('campus.fourth_box.text[7]') }} <br /><br />
                  {{ $t('campus.fourth_box.text[8]') }} <br />
                  {{ $t('campus.fourth_box.text[9]') }} <br />
                  &emsp;{{ $t('campus.fourth_box.text[10]') }} <br />
                  &emsp;{{ $t('campus.fourth_box.text[11]') }} <br />
                  {{ $t('campus.fourth_box.text[12]') }} <br />
                  {{ $t('campus.fourth_box.text[13]') }} <br />
                  {{ $t('campus.fourth_box.text[14]') }} <br /><br />
                  {{ $t('campus.fourth_box.text[15]') }} <br />
                  {{ $t('campus.fourth_box.text[16]') }} <br />
                  {{ $t('campus.fourth_box.text[17]') }} <br />
                  {{ $t('campus.fourth_box.text[18]') }} <br />
                </p>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <br />

  </div>
</template>
