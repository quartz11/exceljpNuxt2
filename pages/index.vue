<template>
  <div>

    <div>
      <h2>
        TEST LANGUAGE Welcome - {{ $t('welcome') }}
        <br />
        TEST LANGUAGE Home - {{ $t('navbar.home.home') }}
      </h2>
    </div>

    <section class="py-5">
      <div class="container mx-auto">
        <div class="row">
          <div class="mx-auto col-lg-6">

            <!-- CUSTOM BLOCKQUOTE -->
            <blockquote class="p-5 bg-white rounded shadow-2xl blockquote blockquote-custom">
              <div class="shadow-2xl blockquote-custom-icon bg-info"></div>
              <p class="mt-2 mb-0 text-black font-italic">"The pursuit of happiness discretion both sides of all
                employees.
                To provide the best of ICT services to customers,
                It will contribute to the realization of a livable peace society."</p>

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
              <p class="mt-2 mb-0 text-black font-italic">We will continue to all employees growth beneath the the
                management philosophy. And we have stacked the day-to-day study in order to continue to be a company
                that will contribute to the world.
                Also,beneath the idea of“Making the first person before you make things.”we have the human resources
                development as one of the important themes.
                Learn the technology, to learn philosophy.Then growing employees voluntarily each person was, and will
                continue to further growth by learn sometimes gathered.
                Its employees and by mutual cooperation, the force will be the companies able to contribute to the world
                become a greater force.
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
          <div class="card-header" style="background-color:blueviolet; color:white;">&nbsp;&nbsp; Partners Recruiting
          </div>
          <div class="card-body">
            <h5 class="text-black card-title">We are looking for a partner.</h5>
            <p class="text-black card-text">The Company is looking for a partner who can both perform software
              development.
              Interested in our business areas, if there is a possibility you'll find cooperation, thank you for your
              consideration.
              We are, for the sake of technology provided by customers satisfaction is, without having to stick to our
              own,
              widely flexibility in seeking business partners, and we believe Let's build a relationship of
              collaboration.

              And entered into a partnership for the purpose acquisition and the business strengthening of business
              opportunities
              both to expand business opportunities by sharing technology and know-how of each other, why not continue
              to grow together.</p>
          </div>
        </div>

      </div>
      <br />
    </div>
<br />

<div class="h-2 grid grid-cols-3 gap-64	content-center">
  <div></div>
  <div>
    <nuxt-link to="/register">
        <button
          class="content-center px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded hover:bg-blue-700">
          Inquiry form
        </button>
      </nuxt-link>
      </div>
  <div></div>
</div>
<br />

  </div>
</template>

<script>
export default {
  layout: 'default'
}
</script>
