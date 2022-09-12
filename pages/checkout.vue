
<template>
  <div>

    <div class="flex justify-center mx-auto">
      <div class="justify-center max-w-sm overflow-hidden rounded shadow-2xl bg-slate-50" style="max-width: 60rem;">
        <div class="card-header" style="background-color:blueviolet; color:white;">
          &emsp; {{ $t('register.card_head') }}
        </div>
        <div class="card-body">
          <p class="text-black card-text">
            {{ $t('register.card_text1') }}
          </p>

          <p class="text-center text-black card-text">
            {{ $t('register.card_text2') }}
            <br />
            {{ $t('register.card_text3') }} &nbsp; <a href="https://www.paypal.com/jp/webapps/mpp/home"
              class="text-blue-600 underline">For paypal</a>
          </p>
        </div>
      </div>
    </div>
    <br />

    <!-- Show input form -->
    <div class="container justify-center mx-auto space-x-4">
      <div class="border shadow-2xl mockup-window bg-violet-600">
        <div class="flex justify-center px-4 py-16 text-xl text-black shadow-2xl bg-slate-200">

          <div class="container mx-auto">
            <table class="w-full text-sm text-left text-white dark:text-gray-400">
              <thead class="text-sm text-white dark:text-gray-400">
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="w-40 px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    {{ $t('checkout.inquirytype')}}
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <p>{{ itype }}</p>
                  </td>

                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="col" class="w-40 px-6 py-3 text-sm text-white dark:bg-slate-900 auto-cols-auto">
                    {{ $t('checkout.name')}}
                  </th>
                  <th scope="col" class="px-6 py-3 text-black bg-slate-400">
                    <div v-if="$i18n.locale==='jp'">
                      <p>{{ family_name }}&nbsp; {{ first_name }} </p>
                    </div>
                    <div v-else>
                      <p>{{ first_name }} &nbsp; {{ middle_name }} &nbsp; {{ family_name }}</p>
                    </div>
                  </th>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="col" class="w-40 px-6 py-3 text-sm text-white dark:bg-slate-900 auto-cols-auto">
                    <div v-if="$i18n.locale==='jp'">
                      {{ $t('checkout.name_furigana')}}
                    </div>
                    <div v-else>
                    </div>
                  </th>
                  <th scope="col" class="px-6 py-3 text-black bg-slate-400">
                    <div v-if="$i18n.locale==='jp'">
                      <p>{{ family_name2 }}&nbsp; {{ first_name2 }} </p>
                    </div>
                    <div v-else>
                    </div>
                  </th>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="w-40 px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    {{ $t('checkout.dob')}}
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <p>{{ year }} {{ month }} {{ day }}</p>
                  </td>

                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="w-40 px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    {{ $t('checkout.sex')}}
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <p>{{ sex }}</p>
                  </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="w-40 px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    <div v-if="$i18n.locale==='jp'">
                      {{ $t('checkout.postcode')}}
                    </div>
                    <div v-else>
                      {{ $t('checkout.addressn')}}
                    </div>
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <div v-if="$i18n.locale==='jp'">
                      <p>{{ addressn }}</p>
                    </div>
                    <div v-else>
                      <p>{{ postcode }}</p>
                    </div>
                  </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="w-40 px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    {{ $t('checkout.address')}}
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <p>{{ address }}</p>
                  </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="w-40 px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    {{ $t('checkout.telphone')}}
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <p>{{ telphone }}</p>
                  </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="w-40 px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    {{ $t('checkout.email')}}
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <p>{{ email }}</p>
                  </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="w-40 px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    {{ $t('checkout.ordernum')}}
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <p>{{ ordernum }}</p>
                  </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="w-40 px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    {{ $t('checkout.payment')}}
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <p>{{ payment }}</p>
                  </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="w-40 px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    {{ $t('checkout.agree')}}
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <p>{{ privacy }}</p>
                  </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="w-40 px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    {{ $t('checkout.matter')}}
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <p style="white-space: pre-line;">{{ matter }}</p>
                  </td>
                </tr>
                <br />
              </tbody>
            </table>
          </div>
          <table>
            <thead>
              <tr>
                <th></th>
              </tr>
              <tr>
                <th>&nbsp;</th>
              </tr>
            </thead>
          </table>
          <!-- Form input -->
          <div id="inputForm1" class="container mx-auto">
            <form @submit.prevent="onCheckout" method="post">

              <table class="w-full text-sm text-left text-white dark:text-gray-400">
                <thead class="text-sm text-white dark:text-gray-400">
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="w-40 px-6 py-2 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                      <p class="text-sm"><a class="text-red-600">※</a>{{ $t('checkout.inquirytype') }}</p>
                    </th>
                    <td class="px-6 py-4 text-black bg-slate-400">
                      <select v-model="itype" id="itype"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 h-10	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>{{ $t('checkout.inquiry1') }}</option>
                        <option>{{ $t('checkout.inquiry2') }}</option>
                        <option>{{ $t('checkout.inquiry3') }}</option>
                      </select>
                      ※ {{ $t('checkout.caution') }}
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="col" class="w-40 px-6 py-3 text-sm text-white dark:bg-slate-900 auto-cols-auto">
                      <a class="text-red-600">※</a> {{ $t('checkout.name') }}
                    </th>
                    <th scope="col" class="px-6 py-3 text-black bg-slate-400">
                  <tr></tr>
                  <div v-if="$i18n.locale==='jp'">
                    <label for="family_name">{{ $t('checkout.family_name')}}</label>
                  <input v-model="family_name" id="family_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required>
                  </div>
                  <div v-else>
                    <label for="first_name">{{ $t('checkout.first_name')}}</label>
                  <input v-model="first_name" id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required>
                  </div>

                  <br />
                  <div v-if="$i18n.locale==='jp'">
                    <label for="first_name">{{ $t('checkout.first_name')}}</label>
                  <input v-model="first_name" id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required>
                    （全角）
                  </div>
                  <div v-else>
                    <label for="middle_name">{{ $t('checkout.middle_name')}}</label>
                  <input v-model="middle_name" id="middle_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                  <br />
                  <label for="family_name">{{ $t('checkout.family_name')}}</label>
                  <input v-model="family_name" id="family_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required>
                  </div>

                  </th>
                  </tr>

                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="col" class="w-40 px-6 py-3 text-sm text-white dark:bg-slate-900 auto-cols-auto">
                      <div v-if="$i18n.locale==='jp'">
                        <a class="text-red-600">※</a> {{ $t('checkout.name_furigana') }}
                      </div>
                      <div v-else></div>
                    </th>
                    <th scope="col" class="px-6 py-3 text-black bg-slate-400">
                  <tr></tr>
                  <div v-if="$i18n.locale==='jp'">
                    <label for="family_name">{{ $t('checkout.family_name')}}</label>
                  <input v-model="family_name2" id="family_name2"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required>
                  </div>
                  <div v-else>
                  </div>

                  <br />
                  <div v-if="$i18n.locale==='jp'">
                    <label for="first_name2">{{ $t('checkout.first_name')}}</label>
                  <input v-model="first_name2" id="first_name2"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required>
                    （全角）
                  </div>
                  <div v-else>
                  </div>

                  </th>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="w-40 px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                      <a class="text-red-600">※</a>{{ $t('checkout.dob')}}
                    </th>
                    <td class="px-6 py-4 text-black bg-slate-400">
                      <div>
                        <labela>{{ $t('checkout.ad')}}</labela> <input id="year" v-model="year" type="number" name="year" min="0"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-20  h-8	p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required> {{ $t('checkout.year')}}
                        <input id="month" v-model="month" type="number" name="month" min="0"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-20  h-8	p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required> {{ $t('checkout.month')}}
                        <input id="day" v-model="day" type="number" name="day" min="0"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-20  h-8	p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required> {{ $t('checkout.day')}}
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="w-40 px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                      <a class="text-red-600">※</a>{{ $t('checkout.sex')}}
                    </th>
                    <td class="px-6 py-4 text-black bg-slate-400">
                      <input type="radio" id="Sex_M" value="Male" v-model="sex"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                      <label for="Sex_M" class="ml-2 text-sm font-medium text-gray-900">{{ $t('checkout.male')}}</label>
                      &nbsp;&nbsp;
                      <input type="radio" id="Sex_F" value="Female" v-model="sex"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                      <label for="Sex_F" class="ml-2 text-sm font-medium text-gray-900">{{ $t('checkout.female')}}</label>
                      &nbsp;&nbsp;
                      <input type="radio" id="Sex_O" value="--" v-model="sex"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                      <label for="Sex_O" class="ml-2 text-sm font-medium text-gray-900">--</label>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="w-40 px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                      <div v-if="$i18n.locale==='jp'">
                        <a class="text-red-600">※</a>{{ $t('checkout.postcode')}}
                      </div>
                      <div v-else>
                        <a class="text-red-600">※</a>{{ $t('checkout.addressn')}}
                      </div>
                    </th>
                    <td class="px-6 py-4 text-black bg-slate-400">
                      <div v-if="$i18n.locale==='jp'">
                        <input v-model="postcode" id="postcode"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required>
                      </div>
                      <div v-else>
                        <input v-model="addressn" id="addressn"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="w-40 px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                      <a class="text-red-600">※</a>{{ $t('checkout.address')}}
                    </th>
                    <td class="px-6 py-4 text-black bg-slate-400">
                      <input v-model="address" id="address"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="w-40 px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                      <a class="text-red-600">※</a>{{ $t('checkout.telphone')}}
                    </th>
                    <td class="px-6 py-4 text-black bg-slate-400">
                      <input v-model="telphone" id="telphone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="w-40 px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                      <a class="text-red-600">※</a>{{ $t('checkout.email')}}
                    </th>
                    <td class="px-6 py-4 text-black bg-slate-400">
                      <input v-model="email" id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="w-40 px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                      <a class="text-red-600">※</a>{{ $t('checkout.ordernum')}}
                    </th>
                    <td class="px-6 py-4 text-black bg-slate-400">
                      <input v-model="ordernum" id="ordernum"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="w-40 px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                      <a class="text-red-600">※</a>{{ $t('checkout.payment')}}
                    </th>
                    <td class="px-6 py-4 text-black bg-slate-400">
                      <input type="radio" id="Bank" value="Bank transfer" v-model="payment"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                      <label for="Bank" class="ml-2 text-sm font-medium text-gray-900">{{ $t('checkout.bank')}}</label>
                      &nbsp;&nbsp;
                      <input type="radio" id="PayPal" value="PayPal" v-model="payment"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                      <label for="PayPal" class="ml-2 text-sm font-medium text-gray-900">{{ $t('checkout.paypal')}}</label>
                      &nbsp;&nbsp;
                      <input type="radio" id="Pay_O" value="--" v-model="payment"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                      <label for="Pay_O" class="ml-2 text-sm font-medium text-gray-900">--</label>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="w-40 px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                      <a class="text-red-600">※</a>{{ $t('checkout.privacy')}}
                    </th>
                    <td class="px-6 py-4 text-black bg-slate-400">
                      <p class="text-lg text-blue-600 underline">
                        <nuxt-link to="/policy">{{ $t('checkout.privacy')}}</nuxt-link>
                      </p>
                      <br />
                      <input type="radio" id="agree" value="I agree to the privacy policy" v-model="privacy"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                      <label for="agree" class="ml-2 text-sm font-medium text-gray-900">{{ $t('checkout.agree')}}
                        policy</label>
                      &nbsp;&nbsp;
                      <input type="radio" id="notagree" value="--" v-model="privacy"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                      <label for="notagree" class="ml-2 text-sm font-medium text-gray-900">--</label>
                      &nbsp;&nbsp;

                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="w-40 px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                      {{ $t('checkout.matter')}}
                    </th>
                    <td class="px-6 py-4 text-black bg-slate-400">
                      <textarea v-model="matter" id="matter"
                        class="block p-2.5 w-full text-sm text-black bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>

                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td>
                      <button
                        class="content-center px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded hover:bg-blue-700">
                        {{ $t('checkout.send')}}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      itype: '',
      first_name: '',
      middle_name: '',
      family_name: '',
      first_name2: '',
      family_name2: '',
      year: '',
      month: '',
      day: '',
      sex: '',
      addressn: '',
      address: '',
      telphone: '',
      email: '',
      ordernum: '',
      payment: '',
      privacy: '',
      matter: '',
      postcode: ''
    }
  },
  methods: {
    async onCheckout() {
      await axios.post('./api/checkout', {
        itype: this.itype,
        first_name: this.first_name,
        middle_name: this.middle_name,
        family_name: this.family_name,
        first_name2: this.first_name2,
        family_name2: this.family_name2,
        year: this.year,
        month: this.month,
        day: this.day,
        sex: this.sex,
        addressn: this.addressn,
        address: this.address,
        telphone: this.telphone,
        email: this.email,
        ordernum: this.ordernum,
        payment: this.payment,
        privacy: this.privacy,
        matter: this.matter,
        postcode: this.postcode
      })
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
      alert("Completed");
    }
  }
}
</script>

<style scoped>
labela {
  display: inline-block;
  width: 50px;
  text-align: left;
}
</style>
