<template>

  <div>

    <div class="container mx-auto">

      <div class="shadow-2xl bg-slate-50 flex flex-col overflow-hidden rounded-2xl lg:card-side items-center mb-6">
        <figure>
          <img width="350" height="350" src="/productpic/medical.jpg">
        </figure>
        <div class="card-body">
          <h2 class="text-black card-title">
            <nuxt-link :to="localePath('/products/P1treatment')">
              {{ $t('product.card1.title') }}
            </nuxt-link>
          </h2>
          <p class="text-black">
            {{ $t('product.card1.text') }}
          </p>
          <p class="text-black">
            {{ $t('product.pa_intro') }}
            <nuxt-link :to="localePath('/products/P1treatment')">
              <label class="text-sky-600">
                {{ $t('product.card1.intro') }}
              </label>
            </nuxt-link>
          </p>
        </div>
      </div>

      <div class="shadow-2xl bg-slate-50 flex flex-col overflow-hidden rounded-2xl lg:card-side items-center mb-6">
        <figure>
          <img width="350" height="350" src="/productpic/warehouse.jpg">
        </figure>
        <div class="card-body">
          <h2 class="text-black card-title">
            <nuxt-link :to="localePath('/products/p2warehouse')">
              {{ $t('product.card2.title') }}
            </nuxt-link>
          </h2>
          <p class="text-black">
            {{ $t('product.card2.text') }}
          </p>
          <p class="text-black">
            {{ $t('product.pa_intro') }}
            <nuxt-link :to="localePath('/products/p2warehouse')">
              <label class="text-sky-600">
                {{ $t('product.card2.intro') }}
              </label>
            </nuxt-link>
          </p>
        </div>
      </div>

      <div class="shadow-2xl bg-slate-50 flex flex-col overflow-hidden rounded-2xl lg:card-side items-center mb-6">
        <figure>
          <img width="350" height="350" src="/productpic/groupware.jpg">
        </figure>
        <div class="card-body">
          <h2 class="text-black card-title">
            <nuxt-link :to="localePath('/products/p3ebase')">
              {{ $t('product.card3.title') }}
            </nuxt-link>
          </h2>
          <p class="text-black">
            {{ $t('product.card3.text') }}
          </p>
          <p class="text-black">
            {{ $t('product.pa_intro') }}
            <nuxt-link :to="localePath('/products/p3ebase')">
              <label class="text-sky-600">
                {{ $t('product.card3.intro') }}
              </label>
            </nuxt-link>
          </p>
        </div>
      </div>

      <div class="shadow-2xl bg-slate-50 flex flex-col overflow-hidden rounded-2xl lg:card-side items-center mb-6">
        <figure>
          <img width="350" height="350" src="/productpic/hotelReservation.jpg">
        </figure>
        <div class="card-body">
          <h2 class="text-black card-title">
            <nuxt-link :to="localePath('/products/p4reservation')">
              {{ $t('product.card4.title') }}
            </nuxt-link>
          </h2>
          <p class="text-black">
            {{ $t('product.card4.text') }}
          </p>
          <p class="text-black">
            {{ $t('product.pa_intro') }}
            <nuxt-link :to="localePath('/products/p4reservation')">
              <label class="text-sky-600">
                {{ $t('product.card4.intro') }}
              </label>
            </nuxt-link>
          </p>
        </div>
      </div>

    </div>

  </div>

</template>
