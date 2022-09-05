<template>
  <div>

    <!-- First Box-->

    <div class="flex justify-center mx-auto">
      <div class="justify-center overflow-hidden rounded bg-transparent w-11/12">
        <div class="card-body w-full">
          <table>
            <thead>
              <tr>
                <th class="text-black w-80 text-center text-2xl">
                  {{ $t('b7otherdevelop.head')}}
                </th>
              </tr>
            </thead>
            <br />
            <tbody>

            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- 2nd Box -->

    <div class="flex justify-center mx-auto">
      <div class="justify-center overflow-hidden rounded bg-transparent w-11/12">
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
                <td class=" text-left bg-blue-400 text-black text-xl px-6 h-10">
                  {{ $t('b7otherdevelop.row1.head')}}
                </td>
              </tr>
              <tr>
                <td class="text-left bg-slate-50 text-black text-lg px-6">
                  <br />
                  {{ $t('b7otherdevelop.row1.detail[0]')}}
                  <br />
                  {{ $t('b7otherdevelop.row1.detail[1]')}}
                  <br />
                  {{ $t('b7otherdevelop.row1.detail[2]')}}
                  <br />
                  {{ $t('b7otherdevelop.row1.detail[3]')}}
                  <br />
                  <br />
                </td>
              </tr>
              <br />
              <tr>
                <td class=" text-left bg-blue-400 text-black text-xl px-6 h-10">
                  {{ $t('b7otherdevelop.row2.head') }}
                </td>
              </tr>
              <tr>
                <td class="text-left bg-slate-50 text-black text-lg px-6">
                  <br />
                  {{ $t('b7otherdevelop.row2.detail[0]') }}
                  <br />
                  {{ $t('b7otherdevelop.row2.detail[1]') }}
                  <br />
                  {{ $t('b7otherdevelop.row2.detail[2]') }}
                  <br />
                  {{ $t('b7otherdevelop.row2.detail[3]') }}
                  <br />
                  <br />
                </td>
              </tr>
              <br />
              <tr>
                <td class=" text-left bg-blue-400 text-black text-xl px-6 h-10">
                  {{ $t('b7otherdevelop.row3.head') }}
                </td>
              </tr>
              <tr>
                <td class="text-left bg-slate-50 text-black text-lg px-6">
                  <br />
                  {{ $t('b7otherdevelop.row3.detail[0]') }}
                  <br />
                  {{ $t('b7otherdevelop.row3.detail[1]') }}
                  <br />
                  <br />
                </td>
              </tr>
              <br />
              <tr>
                <td class=" text-left bg-blue-400 text-black text-xl px-6 h-10">
                  {{ $t('b7otherdevelop.row4.head') }}
                </td>
              </tr>
              <tr>
                <td class="text-left bg-slate-50 text-black text-lg px-6">
                  <br />
                  {{ $t('b7otherdevelop.row4.detail[0]') }}
                  <br />
                  {{ $t('b7otherdevelop.row4.detail[1]') }}
                  <br />
                  {{ $t('b7otherdevelop.row4.detail[2]') }}
                  <br />
                  <br />
                </td>
              </tr>
              <br />
              <tr>
                <td class=" text-left bg-blue-400 text-black text-xl px-6 h-10">
                  {{ $t('b7otherdevelop.row5.head') }}
                </td>
              </tr>
              <tr>
                <td class="text-left bg-slate-50 text-black text-lg px-6">
                  <br />
                  {{ $t('b7otherdevelop.row5.detail[0]') }}
                  <br />
                  {{ $t('b7otherdevelop.row5.detail[1]') }}
                  <br />
                  {{ $t('b7otherdevelop.row5.detail[2]') }}
                  <br />
                  <br />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <br />
    <!-- Business Footer -->
    <div class="flex justify-center mx-auto w-1/3">
      <table>
        <thead>
          <tr>
            <th class="text-black text-center text-2xl">
              {{ $t('b1dispatch.intro.intro') }}
            </th>
          </tr>
        </thead>
        <br />
        <tbody class="text-center">
          <tr>
            <td>
              <nuxt-link to="/business1/B1Dispatch">
                <p class="text-black text-lg">{{ $t('b1dispatch.intro.dispatch') }}</p>
              </nuxt-link>
            </td>
          </tr>
          <tr>
            <td>
              <nuxt-link to="/product">
                <p class="text-black text-lg">{{ $t('b1dispatch.intro.development') }}</p>
              </nuxt-link>
            </td>
          </tr>
          <tr>
            <td>
              <nuxt-link to="/business1/B2Outsource">
                <p class="text-black text-lg">{{ $t('b1dispatch.intro.outsource') }}</p>
              </nuxt-link>
            </td>
          </tr>
          <tr>
            <td>
              <nuxt-link to="/business1/B3Offshore">
                <p class="text-black text-lg">{{ $t('b1dispatch.intro.offshore') }}</p>
              </nuxt-link>
            </td>
          </tr>
          <tr>
            <td>
              <nuxt-link to="/business1/B4consult">
                <p class="text-black text-lg">{{ $t('b1dispatch.intro.consult') }}</p>
              </nuxt-link>
            </td>
          </tr>
          <tr>
            <td>
              <nuxt-link to="/business1/B5Trans">
                <p class="text-black text-lg">{{ $t('b1dispatch.intro.translate') }}</p>
              </nuxt-link>
            </td>
          </tr>
          <tr>
            <td>
              <nuxt-link to="/business1/B6Import">
                <p class="text-black text-lg">{{ $t('b1dispatch.intro.import') }}</p>
              </nuxt-link>
            </td>
          </tr>
          <tr>
            <td>
              <nuxt-link to="/business1/B7otherdevelop">
                <p class="text-black text-lg">{{ $t('b1dispatch.intro.otherdevelop') }}</p>
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>
