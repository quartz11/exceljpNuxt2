<!-- <style scoped>
h1 {
  text-align: center;
}
</style> -->
<template>
  <section class="justify-center flex">
    <div class="container px-20">

      <h1 class="text-3xl text-center text-black py-5 ">
        {{ $t('motto.philosophy.header') }}
      </h1>
      <!-- CUSTOM BLOCKQUOTE -->
      <div class="p-4 text-gray-800 bg-white rounded-lg shadow-2xl max-w-8xl">
        <div class="mb-2">
          <table class=" w-full table-auto ">
            <thead>
              <tr>
                <th class="w-full "></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class=" text-xl text-center pt-8 pb-5">
                  {{ $t('motto.philosophy.topic1') }}
                </td>
              </tr>

              <tr>
                <td class="text-center">
                  {{ $t('motto.philosophy.topic1text1') }} <br />
                  {{ $t('motto.philosophy.topic1text2') }}
                </td>
              </tr>

              <tr>
                <td class="text-xl text-center pt-8 pb-5">
                  {{ $t('motto.philosophy.topic2') }}
                </td>
              </tr>

              <tr>
                <td class="text-center">
                  {{ $t('motto.philosophy.topic2text1') }} <br />
                  {{ $t('motto.philosophy.topic2text2') }}
                </td>
              </tr>

              <tr>
                <td class="text-xl text-center pt-8 pb-5">
                  {{ $t('motto.philosophy.topic3') }}
                </td>
              </tr>

              <tr>
                <td class="text-center pb-8">
                  {{ $t('motto.philosophy.topic3text1') }} <br />
                  {{ $t('motto.philosophy.topic3text2') }}
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
      <!-- END -->

      <h1 class="text-3xl text-center text-black pt-12 pb-5"> {{ $t('motto.motto.header') }} </h1>
      <!-- CUSTOM BLOCKQUOTE -->
      <div class="p-4 text-gray-800 bg-white rounded-lg shadow-2xl max-w-8xl">
        <div class="mb-2">
          <table class="justify-center w-full table-auto ">
            <thead>
              <tr>
                <th class="w-full "></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="content-center text-2xl text-center pt-8">{{ $t('motto.motto.topic1') }} </td>
              </tr>
              <tr>
                <td class="text-xl text-center pb-4">{{ $t('motto.motto.topic2') }} </td>
              </tr>

              <tr>
                <td class="text-center py-3">
                  {{ $t('motto.motto.text1') }} <br />
                  {{ $t('motto.motto.text2') }}
                </td>
              </tr>

              <tr>
                <td class="text-center py-3">
                  {{ $t('motto.motto.text3') }} <br />
                  {{ $t('motto.motto.text4') }}
                </td>
              </tr>

              <tr>
                <td class="text-center py-3">
                  {{ $t('motto.motto.text5') }} <br />
                  {{ $t('motto.motto.text6') }}
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
      <!-- END -->


    </div>
  </section>
</template>
