<template>
  <div>

    <!-- <div>
      <h2>
        TEST LANGUAGE Welcome - {{ $t('welcome') }}
        <br />
        TEST LANGUAGE Home - {{ $t('navbar.home.home') }}
      </h2>
    </div> -->

    <section class="py-5">
      <div class="container mx-auto">
        <div class="row">
          <div class="mx-auto col-lg-6">

            <!-- CUSTOM BLOCKQUOTE -->
            <blockquote class="p-5 bg-white rounded shadow-2xl blockquote blockquote-custom">
              <div class="shadow-2xl blockquote-custom-icon bg-info"></div>
              <p class="mt-2 mb-0 text-black font-italic content-center">
                {{ $t('index.pa_1') }}
              </p>

            </blockquote>
            <!-- END -->

          </div>
        </div>
      </div>
    </section>


    <section class="py-5">
      <div class="container mx-auto">
        <div class="row">
          <div class="mx-auto col-lg-6">

            <!-- CUSTOM BLOCKQUOTE -->
            <blockquote class="p-5 bg-white rounded shadow-2xl blockquote blockquote-custom">
              <div class="shadow-2xl blockquote-custom-icon bg-info"></div>
              <p class="mt-2 mb-0 text-black font-italic">
                {{ $t('index.pa_2') }}
              </p>

            </blockquote>
            <!-- END -->

          </div>
        </div>
      </div>
    </section>
    <br />

    <div class="container mx-auto">
      <div class="mx-auto col-lg-6">

        <div class="w-full overflow-hidden rounded shadow-2xl bg-slate-50">
          <div class="card-header" style="background-color:blueviolet; color:white;">
            &emsp; {{ $t('index.card_head') }}
          </div>
          <div class="card-body">
            <h5 class="text-black card-title">{{ $t('index.card_title') }}</h5>
            <p class="text-black card-text">
              {{ $t('index.card_text') }}
            </p>
          </div>
        </div>

      </div>
      <br />
    </div>
    <br />


    <div class="flex justify-center">
      <table>
        <thead>
          <tr>
            <th class="w-1/3"></th>
            <th class="w-1/3">
              <nuxt-link to="/register">
                <button
                  class="w-full	 content-center px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded hover:bg-blue-700 mx-2">
                  Inquiry form
                </button>
              </nuxt-link>
            </th>
            <th class="w-1/3"></th>
          </tr>
        </thead>
      </table>
    </div>

    <br />

  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>
