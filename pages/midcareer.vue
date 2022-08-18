<template>
  <div>

    <!-- First Box -->

    <div class="container lg:w-3/4 mx-auto mb-8">
      <div class="overflow-hidden rounded shadow-2xl bg-slate-50">
        <div class="card-header text-xl" style="background-color:blueviolet; color:white;">
          &emsp; {{ $t('midcareer.first_box.card_head') }}
        </div>
        <div class="card-body w-full">
          <table>
            <thead>
              <tr>
                <th>
                  <p class="text-black text-left text-2xl py-3">{{ $t('midcareer.first_box.card_topic') }}</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <p class="text-black text-left py-3">
                  {{ $t('midcareer.first_box.text[0]') }} <br /><br />
                  {{ $t('midcareer.first_box.text[1]') }}
                </p>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <br />

    <!-- 2nd Box -->

    <div class="container lg:w-3/4 mx-auto mb-8">
      <h1 class="text-lg text-left text-white bg-violet-800 ">
        &emsp; {{ $t('midcareer.second_box.card_head') }}
      </h1>
      <div class="relative overflow-x-auto shadow-md ">
        <table class="w-full text-sm text-left text-white dark:text-gray-400">
          <thead class="text-xs text-white dark:text-gray-400">
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="col" class="px-6 py-3 text-sm	 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('midcareer.second_box.row1.head') }}
              </th>
              <th scope="col" class="px-6 py-3 text-black text-sm	 font-medium bg-blue-300">
                {{ $t('midcareer.second_box.row1.text') }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('midcareer.second_box.row2.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('midcareer.second_box.row2.text') }}
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('midcareer.second_box.row3.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('midcareer.second_box.row3.text[0]') }} <br />
                {{ $t('midcareer.second_box.row3.text[1]') }} <br />
                {{ $t('midcareer.second_box.row3.text[2]') }} <br />
                {{ $t('midcareer.second_box.row3.text[3]') }} <br />

              </td>

            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('midcareer.second_box.row4.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('midcareer.second_box.row4.text[0]') }} <br />
                {{ $t('midcareer.second_box.row4.text[1]') }} <br />
                {{ $t('midcareer.second_box.row4.text[2]') }} <br />
                {{ $t('midcareer.second_box.row4.text[3]') }} <br />
                {{ $t('midcareer.second_box.row4.text[4]') }} <br />
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('midcareer.second_box.row5.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('midcareer.second_box.row5.text[0]') }} <br />
                {{ $t('midcareer.second_box.row5.text[1]') }} <br />
                {{ $t('midcareer.second_box.row5.text[2]') }} <br />
                {{ $t('midcareer.second_box.row5.text[3]') }} <br />
                {{ $t('midcareer.second_box.row5.text[4]') }} <br />
                {{ $t('midcareer.second_box.row5.text[5]') }} <br />
                {{ $t('midcareer.second_box.row5.text[6]') }} <br />
                {{ $t('midcareer.second_box.row5.text[7]') }} <br />
                {{ $t('midcareer.second_box.row5.text[8]') }} <br />
                {{ $t('midcareer.second_box.row5.text[9]') }} <br />
              </td>
            </tr>

            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('midcareer.second_box.row6.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('midcareer.second_box.row6.text') }}
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('midcareer.second_box.row7.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('midcareer.second_box.row7.text[0]') }} <br />
                {{ $t('midcareer.second_box.row7.text[1]') }} <br />
                {{ $t('midcareer.second_box.row7.text[2]') }} <br />
                {{ $t('midcareer.second_box.row7.text[3]') }} <br />
                {{ $t('midcareer.second_box.row7.text[4]') }} <br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />

    </div>

    <!-- 3rd Box-->

    <div class="container lg:w-3/4 mx-auto mb-8">
      <h1 class="text-lg text-left text-white bg-violet-800 ">
        &emsp; {{ $t('midcareer.third_box.card_head') }}
      </h1>
      <div class="relative overflow-x-auto shadow-md ">
        <table class="w-full text-sm text-left text-white dark:text-gray-400">
          <thead class="text-xs text-white dark:text-gray-400">
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="col" class="px-6 py-3 text-sm text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('midcareer.third_box.row1.head') }}
              </th>
              <th scope="col" class="px-6 py-3 text-black text-sm	 font-normal	 bg-blue-300">
                {{ $t('midcareer.third_box.row1.text') }}

              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('midcareer.third_box.row2.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('midcareer.third_box.row2.text') }}
              </td>

            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('midcareer.third_box.row3.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('midcareer.third_box.row3.text[0]') }}<br />
                {{ $t('midcareer.third_box.row3.text[1]') }}<br />
                {{ $t('midcareer.third_box.row3.text[2]') }}<br />
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('midcareer.third_box.row4.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('midcareer.third_box.row4.text[0]') }}<br />
                {{ $t('midcareer.third_box.row4.text[1]') }}<br />
              </td>
            </tr>

            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('midcareer.third_box.row5.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('midcareer.third_box.row5.text[0]') }}<br />
                {{ $t('midcareer.third_box.row5.text[1]') }}<br />
                {{ $t('midcareer.third_box.row5.text[2]') }}<br />
                {{ $t('midcareer.third_box.row5.text[3]') }}<br />

              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('midcareer.third_box.row6.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('midcareer.third_box.row6.text[0]') }}<br />
                {{ $t('midcareer.third_box.row6.text[1]') }}<br />
                {{ $t('midcareer.third_box.row6.text[2]') }}<br />
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('midcareer.third_box.row7.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('midcareer.third_box.row7.text[0]') }}<br />
                {{ $t('midcareer.third_box.row7.text[1]') }}<br />
              </td>

            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('midcareer.third_box.row8.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('midcareer.third_box.row8.text') }}
              </td>

            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('midcareer.third_box.row9.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('midcareer.third_box.row9.text[0]') }}<br />
                {{ $t('midcareer.third_box.row9.text[1]') }}<br />
              </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-violet-600 auto-cols-auto">
                {{ $t('midcareer.third_box.row10.head') }}
              </th>
              <td class="px-6 py-4 text-black bg-blue-300">
                {{ $t('midcareer.third_box.row10.text[0]') }}<br />
                {{ $t('midcareer.third_box.row10.text[1]') }}<br />
                {{ $t('midcareer.third_box.row10.text[2]') }}<br />
                {{ $t('midcareer.third_box.row10.text[3]') }}<br />
                {{ $t('midcareer.third_box.row10.text[4]') }}<br />
                {{ $t('midcareer.third_box.row10.text[5]') }}<br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
    </div>

    <!-- 4th Box -->

    <div class="flex justify-center mx-auto">
      <div class="justify-center overflow-hidden rounded shadow-2xl bg-slate-50 w-9/12">
        <div class="card-header text-xl" style="background-color:blueviolet; color:white;">
          &emsp; {{ $t('midcareer.fourth_box.card_head') }}
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
                  {{ $t('midcareer.fourth_box.text[0]') }} <br />
                  {{ $t('midcareer.fourth_box.text[1]') }} <br /><br />
                  {{ $t('midcareer.fourth_box.text[2]') }} <br />
                  {{ $t('midcareer.fourth_box.text[3]') }} <br />
                  {{ $t('midcareer.fourth_box.text[4]') }} <br />
                  {{ $t('midcareer.fourth_box.text[5]') }} <br />
                  {{ $t('midcareer.fourth_box.text[6]') }} <br />
                  {{ $t('midcareer.fourth_box.text[7]') }} <br /><br />
                  {{ $t('midcareer.fourth_box.text[8]') }} <br />
                  {{ $t('midcareer.fourth_box.text[9]') }} <br />
                  &emsp;{{ $t('midcareer.fourth_box.text[10]') }} <br />
                  &emsp;{{ $t('midcareer.fourth_box.text[11]') }} <br />
                  {{ $t('midcareer.fourth_box.text[12]') }} <br />
                  {{ $t('midcareer.fourth_box.text[13]') }} <br />
                  {{ $t('midcareer.fourth_box.text[14]') }} <br /><br />
                  {{ $t('midcareer.fourth_box.text[15]') }} <br />
                  {{ $t('midcareer.fourth_box.text[16]') }} <br />
                  {{ $t('midcareer.fourth_box.text[17]') }} <br />
                  {{ $t('midcareer.fourth_box.text[18]') }} <br />
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
