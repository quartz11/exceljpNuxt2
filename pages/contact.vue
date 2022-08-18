<template>
  <section class="container mx-auto">
    <h1 class="text-3xl text-black text-center py-8 ">{{ $t('contact.header') }}</h1>

    <!-- CUSTOM BLOCKQUOTE -->
    <div class="p-8 text-gray-800 bg-white rounded-lg shadow ">
      <table class="w-full table-fixed border-separate border-spacing-y-4 border-spacing-x-2">
        <tbody>
          <tr>
            <td class="text-right font-bold">{{ $t('contact.table[0].title') }}</td>
            <td class="text-left">{{ $t('contact.table[0].mail') }}</td>
          </tr>
          <tr>
            <td class="text-right font-bold">{{ $t('contact.table[1].title') }}</td>
            <td class="text-left">{{ $t('contact.table[1].mail') }}</td>
          </tr>
          <tr>
            <td class="text-right font-bold">{{ $t('contact.table[2].title') }}</td>
            <td class="text-left">{{ $t('contact.table[2].mail') }}</td>
          </tr>
          <tr>
            <td class="text-right font-bold">{{ $t('contact.table[3].title') }}</td>
            <td class="text-left">{{ $t('contact.table[3].mail') }}</td>
          </tr>
        </tbody>
      </table>

      <img class="w-1/3 mx-auto py-4" src="/access_en.png" />

      <div class="text-center py-6">
        <p class="text-xl py-2">{{ $t('contact.detail[0]') }}</p>
        <p>{{ $t('contact.detail[1]') }}</p>
        <p>{{ $t('contact.detail[2]') }}</p>
        <p>{{ $t('contact.detail[3]') }}</p>
        <p>{{ $t('contact.detail[4]') }}</p>
        <p>{{ $t('contact.detail[5]') }}</p>
      </div>
    </div>
    <!-- END -->
  </section>
</template>
