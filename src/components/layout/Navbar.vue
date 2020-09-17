<template>
  <nav
    class="navbar fixed-top navbar-expand-lg navbar-light shadow bg-white-opacity-7"
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
              >尋找日照服務
            </router-link>
          </li>
          <!-- <li class="nav-item" v-if="userInfo.token">
            <router-link class="nav-link" to="/chat"
              ><i class="fas fa-comment-dots"></i> 訊息</router-link
            >
          </li> -->
          <li
            class="nav-item"
            v-if="userInfo.token && userInfo.identity == 'attendant'"
          >
            <router-link class="nav-link" :to="'/carePage/' + userInfo.userId"
              ><i class="fas fa-bell"></i> ({{ notification }})</router-link
            >
          </li>

          <li class="nav-item" v-if="!userInfo.token">
            <a class="nav-link" @click="RegisterLoginModal('register')"
              >註冊新帳號</a
            >
          </li>
          <li class="nav-item ml-lg-4" v-if="!userInfo.token">
            <button
              class="btn btn-primary text-white radius-4 nav-link"
              @click="RegisterLoginModal('login')"
            >
              會員登入
            </button>
          </li>
          <li class="nav-item dropdown" v-if="userInfo.token">
            <a
              class="nav-link dropdown-toggle poin"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-user-circle"></i>
              {{ this.userInfo.mail }}
            </a>
            <!-- 家屬端登入 -->
            <div
              class="dropdown-menu dropdown-menu-right"
              v-if="userInfo.identity == 'member'"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <router-link class="dropdown-item" to="/memberAdmin/order"
                ><i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                我的訂單</router-link
              >
              <router-link class="dropdown-item" to="/memberAdmin/familyManage"
                ><i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                家屬管理</router-link
              >
              <router-link class="dropdown-item" to="/memberAdmin/accountManage"
                ><i class="fas fa-key fa-sm fa-fw mr-2 text-gray-400"></i>
                修改密碼</router-link
              >

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
            <!-- 照服員端登入 -->
            <div
              class="dropdown-menu dropdown-menu-right"
              v-if="userInfo.identity == 'attendant'"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <router-link class="dropdown-item" to="/attendantAdmin/order"
                ><i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                我的訂單</router-link
              >
              <router-link class="dropdown-item" to="/attendantAdmin/profire"
                ><i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                個人資料</router-link
              >
              <router-link
                class="dropdown-item"
                to="/attendantAdmin/accountManage"
                ><i class="fas fa-key fa-sm fa-fw mr-2 text-gray-400"></i>
                修改密碼</router-link
              >

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
/* global $ */
export default {
  data() {
    return {
      userInfo: {
        token: '',
        mail: '',
        userId: '',
        identity: ''
      },
      notification: ''
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
    RegisterLoginModal(action) {
      $('#registerLogin').modal('show');
      this.$parent.$data.navModalAction = action;
    },
    checkAuth() {
      const vm = this;
      vm.$nextTick(() => {
        const token = localStorage.getItem('token');
        const mail = localStorage.getItem('userMail');
        const userId = localStorage.getItem('userId');
        const identity = localStorage.getItem('identity');
        vm.userInfo.token = token;
        vm.userInfo.mail = mail;
        vm.userInfo.userId = userId;
        vm.userInfo.identity = identity;
        if (vm.userInfo.token) {
          this.$parent.$data.isLogin = true;
          this.$parent.$data.identity = identity;
          this.$parent.$data.userId = userId;
        }
        if (vm.userInfo.identity == 'attendant') {
          vm.getQuizQuantity(userId);
        }
      });
    },
    signOut() {
      localStorage.clear();
      this.userInfo.token = '';
      this.userInfo.mail = '';
      this.userInfo.userId = '';
      this.userInfo.identity = '';
      this.$swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: false,
        onOpen: toast => {
          toast.addEventListener('mouseenter', this.$swal.stopTimer);
          toast.addEventListener('mouseleave', this.$swal.resumeTimer);
        },
        icon: 'success',
        title: '已登出'
      });
      this.$parent.$data.isLogin = false;
      this.$parent.$data.identity = '';
      this.$parent.$data.userId = '';
      this.$route.path !== '/' ? this.$router.push('/') : false;
    },
    getQuizQuantity(userId) {
      const vm = this;

      vm.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}AttendantsGetQuiz?id=${userId}`;
      vm.$http
        .get(api)
        .then(res => {
          let allQuizs = res.data; // 問與答
          let filterUnReplay = allQuizs.filter(item => {
            return (item.QuestionAnswers.length = 0);
          });
          console.log('allQuizs', allQuizs); //所有問與答
          console.log('filterUnReplay', filterUnReplay);
          vm.notification = filterUnReplay.length;
          vm.isLoading = false;
        })
        .catch(err => {
          console.log(err);
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
