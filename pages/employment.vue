<template>
  <div>
    <div class="flex justify-center mx-auto">
      <div class="container overflow-hidden rounded shadow-2xl bg-slate-50 w-11/12">
        <div class="card-header" style="background-color:blueviolet; color:white;">&nbsp;</div>
        <div class="card-body w-full">
          <table>
            <thead>
              <th class="text-black w-1/4 lg:px-8 " style="text-align: -webkit-center;">
                <img src="/boss.jpg" />
                <p>{{ $t('employment.pic_name') }}</p>
                <p>{{ $t('employment.pic_title') }}</p>
              </th>
              <th class="text-black w-3/4 lg:px-8">
                <h1 class="lg:text-3xl text-2xl">
                  {{ $t('employment.topic') }}
                </h1>
              </th>
            </thead>
          </table>
          <br />
          <table>
            <thead>
              <th class="text-black text-left">
                <p class="py-3">{{ $t('employment.text1') }}</p>
                <p class="py-3">{{ $t('employment.text2') }}</p>
                <p class="py-3">{{ $t('employment.text3') }}</p>
              </th>
            </thead>
          </table>
        </div>
      </div>
    </div>

    <!-- 3 button -->

    <div class="flex justify-center mx-auto my-6">
      <div class="container overflow-hidden rounded shadow-2xl bg-slate-50 w-11/12">

        <div class="card-body text-black">

          <table class="table-auto justify-center">
            <thead>
              <tr>
                <td class="text-center text-xl text-blue-600 btn-ghost p-4 rounded-lg" style="text-align: -webkit-center;">
                  <nuxt-link :to="localePath('campus')">
                    <img width="290" height="290" src="/recruit.jpg" />
                    {{ $t('employment.job1') }}
                  </nuxt-link>
                </td>
                <td class="text-center text-xl text-blue-600 btn-ghost p-4 rounded-lg" style="text-align: -webkit-center;">
                  <nuxt-link :to="localePath('midcareer')">
                    <img width="290" height="290" src="/recruit.jpg" />
                    {{ $t('employment.job2') }}
                  </nuxt-link>
                </td>
                <td class="text-center text-xl text-blue-600 btn-ghost p-4 rounded-lg" style="text-align: -webkit-center;">
                   <nuxt-link :to="localePath('empinter1')">
                    <img width="290" height="290" src="/recruit.jpg" />
                    {{ $t('employment.job3') }}
                  </nuxt-link>
                </td>
              </tr>
            </thead>
          </table>

        </div>
      </div>


    </div>

  </div>
</template>
