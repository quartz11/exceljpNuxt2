<template>

  <div>

    <div class="container mx-auto">

      <div class="shadow-2xl bg-slate-50 flex flex-col overflow-hidden rounded-2xl lg:card-side items-center mb-6">
        <figure>
          <img width="350" height="350" src="/businesspic/dispatch.jpg">
        </figure>
        <div class="card-body">
          <h2 class="text-black card-title">
            {{ $t('business.card1.title') }}
          </h2>
          <p class="text-black">
            {{ $t('business.card1.text') }}
          </p>
          <div class="card-actions">
            <nuxt-link :to="localePath('/business1/B1Dispatch')">
              <button class="btn btn-primary">
                {{ $t('business.btn_moreinfo') }}
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="shadow-2xl bg-slate-50 flex flex-col overflow-hidden rounded-2xl lg:card-side items-center mb-6">
        <figure>
          <img width="350" height="350" src="/businesspic/package.jpg">
        </figure>
        <div class="card-body">
          <h2 class="text-black card-title">
            <nuxt-link :to="localePath('/product')">
              <p class="text-black">{{ $t('business.card2.title') }}</p>
            </nuxt-link>
          </h2>
          <p class="text-black">
            {{ $t('business.card2.text') }}
          </p>
          <nuxt-link :to="localePath('/products/p1treatment')">
            <p class="text-sky-600">{{ $t('business.card2.product[0]') }}</p>
          </nuxt-link>
          <nuxt-link :to="localePath('/products/p2warehouse')">
            <p class="text-sky-600">{{ $t('business.card2.product[1]') }}</p>
          </nuxt-link>
          <nuxt-link :to="localePath('/products/p3ebase')">
            <p class="text-sky-600">{{ $t('business.card2.product[2]') }}</p>
          </nuxt-link>
          <nuxt-link :to="localePath('/products/p4reservation')">
            <p class="text-sky-600">{{ $t('business.card2.product[3]') }}</p>
          </nuxt-link>
        </div>
      </div>

      <div class="shadow-2xl bg-slate-50 flex flex-col overflow-hidden rounded-2xl lg:card-side items-center mb-6">
        <figure>
          <img width="350" height="350" src="/businesspic/given.jpg">
        </figure>
        <div class="card-body">
          <h2 class="text-black card-title">
            {{ $t('business.card3.title') }}
          </h2>
          <p class="text-black">
            {{ $t('business.card3.text') }}
          </p>
          <div class="card-actions">
            <nuxt-link :to="localePath('/business1/B2Outsource')">
              <button class="btn btn-primary">
                {{ $t('business.btn_moreinfo') }}
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="shadow-2xl bg-slate-50 flex flex-col overflow-hidden rounded-2xl lg:card-side items-center mb-6">
        <figure>
          <img width="350" height="350" src="/businesspic/offshore.jpg">
        </figure>
        <div class="card-body">
          <h2 class="text-black card-title">
            {{ $t('business.card4.title') }}
          </h2>
          <p class="text-black">
            {{ $t('business.card4.text') }}
          </p>
          <div class="card-actions">
            <nuxt-link :to="localePath('/business1/B3Offshoe')">
              <button class="btn btn-primary">
                {{ $t('business.btn_moreinfo') }}
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="shadow-2xl bg-slate-50 flex flex-col overflow-hidden rounded-2xl lg:card-side items-center mb-6">
        <figure>
          <img width="350" height="350" src="/businesspic/consult.jpg">
        </figure>
        <div class="card-body">
          <h2 class="text-black card-title">
            {{ $t('business.card5.title') }}
          </h2>
          <p class="text-black">
            {{ $t('business.card5.text') }}
          </p>
          <div class="card-actions">
            <nuxt-link :to="localePath('/business1/B4Consult')">
              <button class="btn btn-primary">
                {{ $t('business.btn_moreinfo') }}
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
      <br />

      <div class="shadow-2xl bg-slate-50 flex flex-col overflow-hidden rounded-2xl lg:card-side items-center mb-6">
        <figure>
          <img width="350" height="350" src="/businesspic/translate.jpg">
        </figure>
        <div class="card-body">
          <h2 class="text-black card-title">
            {{ $t('business.card6.title') }}
          </h2>
          <p class="text-black">
            {{ $t('business.card6.text') }}
          </p>
          <div class="card-actions">
            <nuxt-link :to="localePath('/business1/B5Trans')">
              <button class="btn btn-primary">
                {{ $t('business.btn_moreinfo') }}
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
      <br />

      <div class="shadow-2xl bg-slate-50 flex flex-col overflow-hidden rounded-2xl lg:card-side items-center mb-6">
        <figure>
          <img width="350" height="350" src="/businesspic/siamorder.jpg">
        </figure>
        <div class="card-body">
          <h2 class="text-black card-title">
            {{ $t('business.card7.title') }}
          </h2>
          <p class="text-black">
            {{ $t('business.card7.text') }}
          </p>
          <div class="card-actions">
            <nuxt-link :to="localePath('/business1/B6Import')">
              <button class="btn btn-primary">
                {{ $t('business.btn_moreinfo') }}
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
      <br />

    </div>

  </div>

</template>
