<template>
  <div>

    <div class="container mx-auto">

      <div class="border shadow-2xl mockup-window bg-violet-600 mb-8">
        <div class="text-center p-4 py-8 text-black shadow-2xl bg-slate-100">

          <p class="text-4xl py-4 ">{{ $t('joinus.card1.title') }}</p>

          <p class="text-2xl py-4">{{ $t('joinus.card1.sub_title') }}</p>

          <p class="text-xl py-2">{{ $t('joinus.card1.text1') }}</p>

          <p class="py-2">{{ $t('joinus.card1.text2') }}</p>

        </div>
      </div>

      <!-- Another Box-->

      <div class="border shadow-2xl mockup-window bg-violet-600">
        <div class="flex p-4 py-8 text-black shadow-2xl bg-slate-100">

          <div class="container mx-autotext-sm text-center text-sm font-bold">

            <!-- Group 1 -->
            <p class="text-xl pb-2">{{ $t('joinus.card2.left_side[0].title') }}</p>
            <p>{{ $t('joinus.card2.left_side[0].text') }}</p>
            <a v-bind:href="'mailto:'+$t('joinus.card2.left_side[0].mail')" class="text-blue-800">
              {{ $t('joinus.card2.left_side[0].mail') }}
            </a>

            <!-- Group 2 -->
            <p class="text-xl pt-8 pb-2">{{ $t('joinus.card2.left_side[1].title') }}</p>
            <p>{{ $t('joinus.card2.left_side[1].text1') }}</p>
            <a v-bind:href="'mailto:'+$t('joinus.card2.left_side[1].mail1')" class="text-blue-800 ">
              {{ $t('joinus.card2.left_side[1].mail1') }}
            </a>
            <p>{{ $t('joinus.card2.left_side[1].text2') }}</p>
            <a v-bind:href="'mailto:'+$t('joinus.card2.left_side[1].mail2')" class="text-blue-800">
              {{ $t('joinus.card2.left_side[1].mail2') }}
            </a>

            <!-- Group 3 -->
            <p class="text-xl pt-8 pb-2">{{ $t('joinus.card2.left_side[2].title') }}</p>
            <p>{{ $t('joinus.card2.left_side[2].text') }}</p>
            <a v-bind:href="'mailto:'+$t('joinus.card2.left_side[2].mail')" class="text-blue-800 ">
              {{ $t('joinus.card2.left_side[2].mail') }}
            </a>
            <p>{{ $t('joinus.card2.left_side[2].tel') }}</p>
            <p>{{ $t('joinus.card2.left_side[2].fax') }}</p>

          </div>
          <br />
          <div class="container mx-auto">
            <p class="text-2xl text-center text-black">Recruiting Requirements</p>
            <br />
            <table class="w-full text-sm text-left text-white dark:text-gray-400">
              <thead class="text-sm text-white dark:text-gray-400">
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="col" class="px-6 py-3 text-sm text-white dark:bg-slate-900 auto-cols-auto">
                    Business
                  </th>
                  <th scope="col" class="px-6 py-3 text-black bg-slate-400">
                    System Outsourcing
                    <br />
                    Network construction and design
                    <br />
                    Operations management and introduction deployment
                    <br />
                    Internet connection
                    <br />
                    Hardware repair and Simple Network construction
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    Area targeted
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    Japan a location for companies and corporate-like, towards the individual
                  </td>

                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    Skills and experience of finding
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    Software system development
                    <br />
                    (VB, C, JAVA, Perl, ORACLE other languages)
                    <br />
                    Construction of infrastructure
                    <br />
                    Project management
                    <br />
                    ※ Is not limited to the above, we look forward to hearing from those who have a variety of
                    techniques.
                  </td>
                </tr>
                <br />
                <nuxt-link to="/register">
                  <button
                    class="content-center px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded hover:bg-blue-700">
                    Inquiry form
                  </button>
                </nuxt-link>
              </tbody>
            </table>

          </div>

        </div>
      </div>
    </div>

  </div>
</template>
