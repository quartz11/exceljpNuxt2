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
                {{ $t('index.paragraph1') }}
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
                {{ $t('index.paragraph2') }}
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

    <div class="flex p-max justify-center ">
      <nuxt-link :to="localePath('register')"
        class="	content-center font-bold text-white btn bg-slate-600 hover:bg-slate-500 border-0 shadow-2xl">
        {{ $t('index.btn_inquiry') }}
        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
        </svg>
      </nuxt-link>
    </div>

    <br />
  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>
