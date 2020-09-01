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

      <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
      <modal-register></modal-register>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ModalRegister from '@/components/ModalRegister.vue';

export default {
  components: {
    Navbar,
    ModalRegister
  }
};
</script>

<style lang="scss">
.banner {
  background-color: gray;
  height: 570px;
  /* background-image: url(images/2886653_s.jpg); */
  background-position: center;
  background-size: cover;
}

.客戶評價 .col-md-3 {
  margin-left: -4px;
}

body .carousel-indicators li {
  background-color: #fae56d;
}

body .carousel-indicators {
  bottom: 0;
}

body .carousel-control-prev-icon,
body .carousel-control-next-icon {
  background-color: #fae56d;
}
</style>
