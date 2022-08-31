<template>
  <div>

    <!-- First Box -->

    <div class="flex justify-center mx-auto">
      <div class="justify-center overflow-hidden rounded shadow-2xl bg-slate-50 w-11/12">
        <div class="card-body w-full">
          <table>
            <thead>
              <th class="text-black w-80">
                <div class="flex justify-center">
                  <img width="150" height="150" src="/emp/shimizu.gif" />
                </div>
                <br />
                <p>{{ $t('empinter1.role') }}</p>
                <br />
                {{ $t('empinter1.name') }}
              </th>
              <th class="w-screen text-black">
                <p class="text-2xl">
                  {{ $t('empinter1.headbox') }}
                </p>
              </th>
            </thead>
          </table>
        </div>
      </div>
    </div>
    <br />
    <!-- Table -->


    <div class="flex justify-center mx-auto">
      <div class="justify-center overflow-hidden rounded bg-transparent w-11/12">
        <div class="card-body w-full">
          <table>
            <thead>
              <th class="text-black w-80">
              </th>
            </thead>

            <tbody>
              <tr>
                <th class="bg-blue-600 text-white text-left h-8	">
                  &nbsp; {{ $t('empinter1.row1head') }}
                </th>
              </tr>
              <tr>
                <th class="bg-slate-50 text-black text-left px-6">
                  <br />
                  &nbsp; {{ $t('empinter1.row1detail') }}
                  <br />
                  <br />
                </th>
              </tr>
              <tr>
                <th class="bg-blue-600 text-white text-left h-8	">
                  &nbsp;  {{ $t('empinter1.row2head') }}
                </th>

              </tr>
              <tr>
                <th class="bg-slate-50 text-black text-left px-6">
                  <br />
                  &nbsp;  {{ $t('empinter1.row2detail') }}
                  <br />
                  <br />
                </th>
              </tr>
              <tr>
                <th class="bg-blue-600 text-white text-left h-8	">
                  &nbsp;  {{ $t('empinter1.row3head') }}
                </th>

              </tr>
              <tr>
                <th class="bg-slate-50 text-black text-left px-6">
                  <br />
                  &nbsp;  {{ $t('empinter1.row3detail') }}
                  <br />
                  <br />
                </th>
              </tr>
              <tr>
                <th class="bg-blue-600 text-white text-left h-8	">
                  &nbsp;  {{ $t('empinter1.row4head') }}
                </th>

              </tr>
              <tr>
                <th class="bg-slate-50 text-black text-left px-6">
                  <br />
                  &nbsp;  {{ $t('empinter1.row4detail') }}
                  <br />
                  <br />
                </th>
              </tr>
              <tr>
                <th class="bg-blue-600 text-white text-left h-8	">
                  &nbsp;  {{ $t('empinter1.row5head') }}
                </th>

              </tr>
              <tr>
                <th class="bg-slate-50 text-black text-left px-6">
                  <br />
                  &nbsp;  {{ $t('empinter1.row5detail') }}
                  <br />
                  <br />
                </th>
              </tr>
              <tr>
                <th class="bg-blue-600 text-white text-left h-8	">
                  &nbsp;  {{ $t('empinter1.row6head') }}
                </th>

              </tr>
              <tr>
                <th class="bg-slate-50 text-black text-left px-6">
                  <br />
                  &nbsp;  {{ $t('empinter1.row6detail') }}
                  <br />
                  <br />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <br />

    <!-- Other interview -->
    <div class="flex justify-center mx-auto">
      <table>
        <thead>
          <tr>
            <th>
              <nuxt-link to="/">
                <p class="text-xl text-blue-600 underline">{{ $t('empinter1.other') }}</p>
              </nuxt-link>
            </th>
          </tr>
          <tr>
            <th>
              <p class="text-black">{{ $t('empinter1.otherdesc') }}</p>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>
