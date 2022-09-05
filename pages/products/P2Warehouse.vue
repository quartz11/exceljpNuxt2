<template>
  <div>

    <!-- First Box-->

    <div class="flex justify-center mx-auto">
      <div class="justify-center w-2/3 overflow-hidden bg-transparent rounded">
        <div class="w-full card-body">
          <table>
            <thead>
              <tr>
                <th class="text-2xl text-left text-black w-80">
                  {{ $t('p2warehouse.head')}}
                </th>
              </tr>
              <br />
              <tr>
                <div class="flex justify-center mx-auto">
                  <img src="/productpic/warehouse.jpg" width="300" height="300" />
                </div>
              </tr>
            </thead>
            <br />
            <tbody>
              <tr>
                <td class="px-6 text-xl text-left text-white shadow-2xl bg-violet-500">
                  <br />
                  {{ $t('p2warehouse.firstbox[0]')}}
                  <br />
                  {{ $t('p2warehouse.firstbox[1]')}}
                  <br />
                  <br />
                </td>
              </tr>
              <br />
              <br />
              <tr>
                <td class="px-6 text-xl text-left text-white shadow-2xl bg-zinc-500">
                  <br />
                  <p class="px-4 text-left">{{ $t('p2warehouse.secondbox[0]')}}</p>
                  <br />
                  <p class="px-8 text-left">{{ $t('p2warehouse.secondbox[1]')}}</p>
                  <p class="px-8 text-left">{{ $t('p2warehouse.secondbox[2]')}}</p>
                  <br />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- 2nd Box -->

    <div class="flex justify-center mx-auto">
      <div class="justify-center w-4/5 overflow-hidden bg-transparent rounded">
        <div class="w-full card-body">
          <table>
            <thead>
              <tr>
                <th>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="h-10 px-6 text-xl text-left text-black bg-blue-400 ">
                  {{ $t('p2warehouse.row1.head')}}
                </td>
              </tr>
              <tr>
                <td class="px-6 text-lg text-left text-black bg-slate-50">
                  <br />
                  <p class="px-8 text-left"><a>● </a>{{ $t('p2warehouse.row1.detail[0]')}}</p>
                  <p class="px-8 text-left"><a>● </a>{{ $t('p2warehouse.row1.detail[1]')}}</p>
                  <p class="px-8 text-left"><a>● </a>{{ $t('p2warehouse.row1.detail[2]')}}</p>
                  <p class="px-8 text-left"><a>● </a>{{ $t('p2warehouse.row1.detail[3]')}}</p>
                  <br />
                </td>
              </tr>
              <tr>
                <td class="h-10 px-6 text-xl text-left text-black bg-blue-400 ">
                  {{ $t('p2warehouse.row2.head')}}
                </td>
              </tr>
              <tr>
                <td class="px-6 text-lg text-left text-black bg-slate-50">
                  <br />
                  <p class="px-8 text-left"><a>● </a>{{ $t('p2warehouse.row2.detail[0]')}}</p>
                  <p class="px-8 text-left"><a>● </a>{{ $t('p2warehouse.row2.detail[1]')}}</p>
                  <br />
                </td>
              </tr>
              <tr>
                <td class="h-10 px-6 text-xl text-left text-black bg-blue-400 ">
                  {{ $t('p2warehouse.row3.head')}}
                </td>
              </tr>
              <tr>
                <td class="px-6 text-lg text-left text-black bg-slate-50">
                  <br />
                  <p class="px-8 text-left"><a>● </a>{{ $t('p2warehouse.row3.detail[0]')}}</p>
                  <p class="px-8 text-left"><a>● </a>{{ $t('p2warehouse.row3.detail[1]')}}</p>
                  <br />
                </td>
              </tr>
              <tr>
                <td class="h-10 px-6 text-xl text-left text-black bg-blue-400 ">
                  {{ $t('p2warehouse.row4.head')}}
                </td>
              </tr>
              <tr>
                <td class="px-6 text-lg text-left text-black bg-slate-50">
                  <br />
                  <p class="px-8 text-left"><a>● </a>{{ $t('p2warehouse.row4.detail[0]')}}</p>
                  <br />
                </td>
              </tr>
              <tr>
                <td class="h-10 px-6 text-xl text-left text-black bg-blue-400 ">
                  {{ $t('p2warehouse.row5.head')}}
                </td>
              </tr>
              <tr>
                <td class="px-6 text-lg text-left text-black bg-slate-50">
                  <br />
                  <p class="px-8 text-left"><a>● </a> {{ $t('p2warehouse.row5.detail[0]')}}</p>
                  <br />
                  <p class="px-4 left">{{ $t('p2warehouse.row5.detail[1]')}}</p>
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
    <div class="flex justify-center w-1/3 mx-auto">
      <table>
        <thead>
          <tr>
            <th class="text-2xl text-center text-black">
              {{ $t('productlist.other')}}
            </th>
          </tr>
        </thead>
        <br />
        <tbody class="text-center">
          <tr>
            <td>
              <nuxt-link to="/products/P1treatment">
                <p class="text-lg text-black underline">{{ $t('productlist.list[0]')}}</p>
              </nuxt-link>
            </td>
          </tr>
          <tr>
            <td>
              <nuxt-link to="/products/p2warehouse">
                <p class="text-lg text-black underline">{{ $t('productlist.list[1]')}}</p>
              </nuxt-link>
            </td>
          </tr>
          <tr>
            <td>
              <nuxt-link to="/products/p3ebase">
                <p class="text-lg text-black underline">{{ $t('productlist.list[2]')}}</p>
              </nuxt-link>
            </td>
          </tr>
          <tr>
            <td>
              <nuxt-link to="/products/p4reservation">
                <p class="text-lg text-black underline">{{ $t('productlist.list[3]')}}</p>
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>
