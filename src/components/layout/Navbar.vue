<template>
  <nav
    class="navbar fixed-top navbar-expand-lg navbar-light bg-white-opacity-7"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img
          width="100"
          class="img-fluid"
          src="@/assets/images/logo.png"
          alt=""
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/searchCares"
              >尋找日照服務</router-link
            >
          </li>
          <!-- <li class="nav-item">
          <router-link class="nav-link" to="/chat">訊息</router-link>
        </li> -->
          <li class="nav-item" v-if="!userInfo.token">
            <a class="nav-link" href="#login" data-toggle="modal">會員登入</a>
          </li>
          <li class="nav-item" v-if="!userInfo.token">
            <a class="nav-link" href="#register" data-toggle="modal"
              >註冊新帳號</a
            >
          </li>

          <li class="nav-item dropdown" v-if="userInfo.token">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <!-- <i class="fa fa-user" aria-hidden="true"></i> -->
              {{ this.userInfo.mail }}
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a class="dropdown-item" href="family_admin_order.html">
                <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                我的訂單
              </a>
              <a class="dropdown-item" href="family_admin_account.html">
                <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                帳號管理
              </a>
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
                @click.prevent="signOut()"
              >
                <i
                  class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                ></i>
                登出
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        token: '',
        mail: '',
        userId: ''
      }
    };
  },
  created() {
    const vm = this;
    vm.checkAuth();
    vm.$bus.$on('checkLogin', () => {
      vm.checkAuth();
    });
  },
  methods: {
    checkAuth() {
      const vm = this;
      vm.$nextTick(() => {
        const token = localStorage.getItem('token');
        const mail = localStorage.getItem('userMail');
        const userId = localStorage.getItem('userId');
        vm.userInfo.token = token;
        vm.userInfo.mail = mail;
        vm.userInfo.userId = userId;
      });
    },
    signOut() {
      localStorage.clear();
      this.userInfo.token = '';
      this.userInfo.mail = '';
      this.userInfo.userId = '';
      this.$swal({
        // toast: true,
        // position: 'top-end',
        // showConfirmButton: false,
        // timer: 3000,
        // timerProgressBar: false,
        // onOpen: toast => {
        //   toast.addEventListener('mouseenter', this.$swal.stopTimer);
        //   toast.addEventListener('mouseleave', this.$swal.resumeTimer);
        // },
        icon: 'success',
        title: '已登出'
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .dropdown-menu li:hover .sub-menu {
//   visibility: visible;
// }
// .dropdown:hover .dropdown-menu {
//   display: block;
// }
</style>
