<template>
  <div>
    <div class="flex justify-center mx-auto">
      <div class="container overflow-hidden rounded shadow-2xl bg-slate-50 w-11/12">
        <div class="card-header" style="background-color:blueviolet; color:white;">&emsp; {{ $t('greeting.card_head') }}</div>
        <div class="card-body w-full">
          <table>
            <thead>
              <th class="text-black w-1/4 lg:px-8 px-4" style="text-align: -webkit-center;">
                <img  src="http://1excellence.com/official/img/common/boss.jpg"/>
                <p>{{ $t('greeting.pic_name') }}</p>
                <p>{{ $t('greeting.pic_title') }}</p>
              </th>
              <th class="text-black w-3/4 lg:px-8 px-4">
                <p>{{ $t('greeting.greeting1') }}</p>
                <p class="underline">{{ $t('greeting.greeting2') }}</p>
                <p>{{ $t('greeting.greeting3') }}</p>
              </th>
            </thead>
          </table>
          <table class="mt-5">
            <thead>
              <th class="text-black text-left">
                <p class="py-3">{{ $t('greeting.text1') }}</p>
                <p class="py-3">{{ $t('greeting.text2') }}</p>
                <p class="py-3">{{ $t('greeting.text3') }}</p>
                <p class="py-3">{{ $t('greeting.text4') }}</p>
                <p class="py-3">{{ $t('greeting.text5') }}</p>
              </th>
            </thead>
          </table>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
