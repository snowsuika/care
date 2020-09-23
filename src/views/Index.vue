<template>
  <div class="mainTemplate">
    <header class="bg-white border-bottom shadow-sm">
      <!-- 上方選單 -->
      <navbar></navbar>
    </header>
    <main>
      <router-view
        :is-login="isLogin"
        :identity="identity"
        :user-id="userId"
      ></router-view>
    </main>
    <footer-bar></footer-bar>
    <modal-register-login :action="navModalAction"></modal-register-login>
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
      identity: '',
      userId: ''
    };
  },
  components: {
    Navbar,
    FooterBar,
    ModalRegisterLogin
  },
  methods: {}
};
</script>
