<template>
  <div class="about">
    <navbar></navbar>
    <main>
      <div
        class="banner d-flex justify-content-center align-items-center bg-cover text-white"
        style="height:250px;"
      ></div>
      <div class="container py-5" style="margin-top: -120px">
        <div class="row">
          <div class="col-12 col-lg-2">
            <div class="bg-white py-3 shadow-sm radius-2 mb-3 mb-lg-0">
              <sidebar></sidebar>
            </div>
          </div>
          <div class="col-12 col-lg-10 mt-3 mt-md-0">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </main>

    <footer-bar></footer-bar>
    <!-- <modal-register-login :action="navModalAction"></modal-register-login> -->
  </div>
</template>
<script>
import Navbar from '@/components/layout/Navbar.vue';
import FooterBar from '@/components/layout/Footer.vue';
import Sidebar from '@/components/layout/Sidebar.vue';

export default {
  name: 'AttendantDashboard',
  data() {
    return {
      token: '',
      userId: '',
      userMail: '',
      identity: '',
      checkSuccess: false,
      navModalAction: ''
    };
  },
  components: {
    Navbar,
    Sidebar,
    FooterBar
    // ModalRegisterLogin
  },
  created() {
    this.token = localStorage.getItem('token');
    this.userId = localStorage.getItem('userId');
    this.userMail = localStorage.getItem('userMail');
    this.identity = localStorage.getItem('identity');

    if (!this.token) {
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss">
body {
  background-color: #f6f3ee;
}
.banner {
  background-color: gray;
  background-position: center;
  background-size: cover;
}

table.table-radius {
  border: 1px solid #c3c3c3;
  border-radius: 10px;

  border-spacing: 0px;
  border-collapse: separate;
}

table.table-radius th:first-child {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

table.table-radius th:last-child {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

table.table-radius th,
table.table-radius td {
  vertical-align: middle;
}
</style>
