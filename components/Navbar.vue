<template>
  <div>
    <nav class="relative px-4 py-4 flex justify-between items-center bg-sky-700">
      <div class="md:container md:l-auto">

        <a class="text-sm text-white hover:text-slate-400" href="#">Home</a>

      </div>
    </nav>
    <b-navbar toggleable="lg" type="dark" class="navbar navbar-dark bg-primary" variant="info">
      <b-container>
        <b-navbar-brand href="/">Excellence Inc. Ltd.</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>

              <b-navbar-nav>
                <b-nav-item-dropdown text=Home>
                  <b-dropdown-item href="/">News</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text=Overview>
                  <b-dropdown-item href="/">Company Overview</b-dropdown-item>
                  <b-dropdown-item href="/">Our History</b-dropdown-item>
                  <b-dropdown-item href="/">Our Philosophy</b-dropdown-item>
                  <b-dropdown-item href="/">Greeting</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text=Business>
                  <b-dropdown-item href="/">Our Business</b-dropdown-item>
                  <b-dropdown-item href="/">Our Product</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item href="/">Join us</b-nav-item>

                <b-nav-item href="/contact">Contact us</b-nav-item>

              </b-navbar-nav>

            </b-nav-form>

            <b-nav-item-dropdown :text="lang" class=" rounded" right>
              <b-dropdown-item @click="() => this.lang = 'JP'">JP</b-dropdown-item>
              <b-dropdown-item @click="() => this.lang = 'EN'">EN</b-dropdown-item>
              <b-dropdown-item @click="() => this.lang = 'TH'">TH</b-dropdown-item>
              <b-dropdown-item @click="() => this.lang = 'CH'">CH</b-dropdown-item>
            </b-nav-item-dropdown>

            <!-- Using 'button-content' slot -->
            <!--
          <b-nav-item-dropdownav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdownav-item-dropdown>
          -->

          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <br />

    <div class="d-flex flex-row-reverse bd-highlight">
      <b-col cols="1">
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-col>
      <b-col cols="2">
        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
      </b-col>
    </div>

  </div>


</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      lang: 'EN'
    }
  },

  methods: {

  }

};
</script>
