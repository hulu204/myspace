<template>
  <!-- <nav-bar></nav-bar>
  <router-view></router-view> -->
  <div class="home">
    <div class="container">
      <div class="card">
        <div class="card-body">
          首页
        </div>
      </div>

    </div>
    
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
</style>
