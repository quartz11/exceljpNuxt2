
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
            {{ $t('register.card_text3') }}
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
                  <th scope="col" class="px-6 py-3 text-sm text-white w-60 dark:bg-slate-900 auto-cols-auto">
                    {{ $t('register.name')}}
                  </th>
                  <th scope="col" class="px-6 py-3 text-black bg-slate-400">
                   <div v-if="$i18n.locale==='jp'">
                    <p>{{ family_name  }} &nbsp; {{ first_name}}</p>
                  </div>
                  <div v-else-if="$i18n.locale==='cn'">
                    <p>{{ family_name  }} &nbsp; {{ first_name}}</p>
                  </div>
                    <div v-else>
                      <p>{{ first_name }} &nbsp; {{ middle_name }} &nbsp; {{ family_name }}</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    <div v-if="$i18n.locale ==='jp'">
                      {{ $t('register.name_furigana')}}
                    </div>
                    <div v-else-if="$i18n.locale ==='cn'">
                      {{ $t('register.name_pinyin')}}
                    </div>
                    <div v-else>
                    </div>
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <div v-if="$i18n.locale ==='jp'">
                      {{ family_name2 }} &nbsp;  {{ first_name2 }}
                    </div>
                    <div v-else-if="$i18n.locale ==='cn'">
                      {{ family_name2 }} &nbsp;  {{ first_name2 }}
                    </div>
                    <div v-else>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    {{ $t('register.age')}}
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <p>{{ age }}</p>
                  </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    {{ $t('register.sex')}}
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <p>{{ sex }}</p>
                  </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    <div v-if="$i18n.locale==='jp'">
                      {{ $t('register.postcode')}}
                      </div>
                      <div v-else>
                        {{ $t('register.country')}}
                      </div>
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <div v-if="$i18n.locale==='jp'">
                      <p>{{ postcode }}</p>
                    </div>
                    <div v-else>
                      <p>{{ country }}</p>
                    </div>
                  </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    {{ $t('register.addressn')}}
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <p>{{ addressn }}</p>
                  </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    {{ $t('register.address')}}
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <p>{{ address }}</p>
                  </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    {{ $t('register.telphone')}}
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <p>{{ telphone }}</p>
                  </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    {{ $t('register.email')}}
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <p>{{ email }}</p>
                  </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                    {{ $t('register.matter')}}
                  </th>
                  <td class="px-6 py-4 text-black bg-slate-400">
                    <p style="white-space: pre-line;">{{ matter }}</p>
                  </td>
                </tr>
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
            <form @submit.prevent="onSubmit" method="post">

              <table class="w-full text-sm text-left text-white dark:text-gray-400">
                <thead class="text-sm text-white dark:text-gray-400">
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="col" class="px-6 py-3 text-sm text-white dark:bg-slate-900 auto-cols-auto"
                      id="nfirst_name">
                      {{ $t('register.name')}}
                    </th>
                    <th scope="col" class="px-6 py-3 text-black bg-slate-400">
                  <tr></tr>

                  <div v-if="$i18n.locale === 'jp'">
                    <label for="family_name">{{ $t('register.family_name')}}</label>
                    <input v-model="family_name" id="family_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required>
                    <label for="first_name">{{ $t('register.first_name')}}</label>
                    <input v-model="first_name" id="first_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required>
                    ????????????
                  </div>
                  <div v-else-if="$i18n.locale === 'cn'">
                    <label for="family_name">{{ $t('register.family_name')}}</label>
                    <input v-model="family_name" id="family_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required>
                    <label for="first_name">{{ $t('register.first_name')}}</label>
                    <input v-model="first_name" id="first_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required>
                  </div>
                  <div v-else>
                    <label for="first_name">{{ $t('register.first_name')}}</label>
                    <input v-model="first_name" id="first_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required>

                    <label for="middle_name">{{ $t('register.middle_name')}}</label>
                    <input v-model="middle_name" id="middle_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <label for="family_name">{{ $t('register.family_name')}}</label>
                    <input v-model="family_name" id="family_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required>
                    <br />
                  </div>
                  </th>
                  </tr>


                </thead>
                <tbody>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                      <div v-if="$i18n.locale === 'jp'">
                        {{ $t('register.name_furigana')}}
                      </div>
                      <div v-else-if="$i18n.locale === 'cn'">
                        {{ $t('register.name_pinyin')}}
                      </div>
                      <div v-else></div>
                    </th>
                    <td class="px-6 py-4 text-black bg-slate-400">
                      <div v-if="$i18n.locale === 'jp'">
                        <label for="family_name2">{{ $t('register.family_name')}}</label>
                        <input v-model="family_name2" id="family_name2"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required>
                        <label for="first_name2">{{ $t('register.first_name')}}</label>
                        <input v-model="first_name2" id="first_name2"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required>
                      </div>
                      <div v-else-if="$i18n.locale === 'cn'">
                        <label for="family_name2">{{ $t('register.family_name')}}</label>
                        <input v-model="family_name2" id="family_name2"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required>
                        <label for="first_name2">{{ $t('register.first_name')}}</label>
                        <input v-model="first_name2" id="first_name2"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8	 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                      {{ $t('register.age')}}
                    </th>
                    <td class="px-6 py-4 text-black bg-slate-400">
                      <input id="age" v-model="age" type="number" name="age" min="0"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20  h-8	p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                      {{ $t('register.sex')}}
                    </th>
                    <td class="px-6 py-4 text-black bg-slate-400">
                      <input type="radio" id="Sex_M" value="Male" v-model="sex"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                      <label for="Sex_M" class="ml-2 text-sm font-medium text-gray-900">{{ $t('register.male')}}</label>
                      &nbsp;&nbsp;
                      <input type="radio" id="Sex_F" value="Female" v-model="sex"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                      <label for="Sex_F" class="ml-2 text-sm font-medium text-gray-900">{{
                      $t('register.female')}}</label>
                      &nbsp;&nbsp;
                      <input type="radio" id="Sex_O" value="--" v-model="sex"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                      <label for="Sex_O" class="ml-2 text-sm font-medium text-gray-900">--</label>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                      <div v-if="$i18n.locale==='jp'">
                        {{ $t('register.postcode')}}
                      </div>
                      <div v-else>
                        {{ $t('register.country')}}
                      </div>
                    </th>
                    <td class="px-6 py-4 text-black bg-slate-400">
                      <div v-if="$i18n.locale==='jp'">
                        <input v-model="postcode" id="postcode"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required>
                      </div>
                      <div v-else>
                        <input v-model="country" id="country"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required>
                      </div>
                    </td>
                  </tr>

                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                      {{ $t('register.addressn')}}
                    </th>
                    <td class="px-6 py-4 text-black bg-slate-400">
                      <input v-model="addressn" id="addressn"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                      {{ $t('register.address')}}
                    </th>
                    <td class="px-6 py-4 text-black bg-slate-400">
                      <input v-model="address" id="address"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                      {{ $t('register.telphone')}}
                    </th>
                    <td class="px-6 py-4 text-black bg-slate-400">
                      <input v-model="telphone" id="telphone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                      {{ $t('register.email')}}
                    </th>
                    <td class="px-6 py-4 text-black bg-slate-400">
                      <input v-model="email" id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-8 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-white dark:bg-slate-900 auto-cols-auto">
                      {{ $t('register.matter')}}
                    </th>
                    <td class="px-6 py-4 text-black bg-slate-400">
                      <textarea v-model="matter" id="matter"
                        class="block p-2.5 w-full text-sm text-black bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>

                    </td>
                  </tr>
                  <br />
                  <tr>
                    <button
                      class="content-center px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded hover:bg-blue-700"
                      v-on:click="message = 'Register Successful'">
                      {{ $t('register.send')}}
                    </button>
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
      first_name: '',
      middle_name: '',
      family_name: '',
      age: '',
      sex: '',
      country: '',
      addressn: '',
      address: '',
      telphone: '',
      email: '',
      matter: '',
      first_name2: '',
      family_name2: '',
      postcode: ''
    }
  },
  methods: {
    async onSubmit() {
      await axios.post('./api/register', {
        first_name: this.first_name,
        middle_name: this.middle_name,
        family_name: this.family_name,
        age: this.age,
        sex: this.sex,
        country: this.country,
        addressn: this.addressn,
        address: this.address,
        telphone: this.telphone,
        email: this.email,
        matter: this.matter,
        first_name2: this.first_name2,
        family_name2: this.family_name2,
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
