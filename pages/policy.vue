<template>
  <div>

    <div class="container mx-auto pb-8">
      <div class="border shadow-2xl mockup-window bg-violet-600 static">
        <div class="flex justify-center p-8 text-xl text-black shadow-2xl bg-white">
          <table class="justify-center w-full table-auto ">
            <tbody>
              <tr>
                <td class="content-center text-3xl text-center pb-6">{{ $t('policy.card_topic.head') }}</td>
              </tr>
              <tr>
                <td class="text-xl text-center pb-6">{{ $t('policy.card_topic.text') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Another box -->

    <div class="container mx-auto">
      <div class="justify-center overflow-hidden rounded-xl shadow-2xl bg-slate-50 static">
        <div class="card-header text-xl" style="background-color:blueviolet; color:white;">
          &emsp;{{ $t('policy.card_detail.head') }}
        </div>
        <div class="card-body w-full">
          <p class="text-black text-left font-bold">
            {{ $t('policy.card_detail.list[0]') }}<br /><br />
            {{ $t('policy.card_detail.list[1]') }}<br /><br />
            {{ $t('policy.card_detail.list[2]') }}<br /><br />
            {{ $t('policy.card_detail.list[3]') }}<br /><br />
            {{ $t('policy.card_detail.list[4]') }}<br /><br />
            {{ $t('policy.card_detail.list[5]') }}<br /><br />
            {{ $t('policy.card_detail.list[6]') }}<br /><br />
            {{ $t('policy.card_detail.list[7]') }}<br /><br />
          </p>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
