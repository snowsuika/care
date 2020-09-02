<template>
  <div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <a name="" id="" class="btn btn-primary" href="#" role="button">123</a> -->
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
      <modal-register></modal-register>
      <modal-login></modal-login>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue';
import FooterBar from '@/components/layout/Footer.vue';
import ModalRegister from '@/components/ModalRegister.vue';
import ModalLogin from '@/components/ModalLogin.vue';

export default {
  components: {
    Navbar,
    FooterBar,
    ModalRegister,
    ModalLogin
  }
};
</script>
