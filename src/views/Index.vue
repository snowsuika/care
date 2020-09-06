<template>
  <div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <a name="" id="" class="btn btn-primary" href="#" role="button">123</a> -->
    <loading :active.sync="isLoading" />
    <div class="home">
      <header class="bg-white border-bottom shadow-sm">
        <!-- 上方選單 -->
        <navbar></navbar>
      </header>
      <main>
        <router-view></router-view>
      </main>
      <footer-bar></footer-bar>
      <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
      <modal-register-login :action="navModalAction"></modal-register-login>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue';
import FooterBar from '@/components/layout/Footer.vue';
import ModalRegisterLogin from '@/components/ModalRegisterLogin.vue';

export default {
  data() {
    return {
      navModalAction: '',
      isLogin: false,
      isLoading: false
    };
  },
  components: {
    Navbar,
    FooterBar,
    ModalRegisterLogin
  }
};
</script>
