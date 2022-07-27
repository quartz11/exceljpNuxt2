<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="navbar navbar-dark bg-primary" variant="info">
      <b-navbar-brand href="#">Excellence Inc. Ltd.</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>

        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/">Business</b-nav-item>
          <b-nav-item href="/">Development</b-nav-item>
          <b-nav-item href="/">Overview</b-nav-item>
          <b-nav-item href="/">News</b-nav-item>
          <b-nav-item href="/">Philosophy and Motto</b-nav-item>
          <b-nav-item href="/">Contact</b-nav-item>
          <b-nav-item href="/">Greeting</b-nav-item>
          <b-nav-item href="/">Employment</b-nav-item>
          <b-nav-item href="/">Access</b-nav-item>

        </b-navbar-nav>

          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
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
};
</script>
