<template>
  <nav class="l-nav navbar fixed-top navbar-expand-lg navbar-light shadow">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img
          width="100"
          class="img-fluid"
          src="@/assets/images/logo.svg"
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
              <span class="l-nav__enTitle text-center d-none d-md-block"
                >FIND CARES</span
              >
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/question"
              >常見問題
              <span class="l-nav__enTitle text-center d-none d-md-block"
                >Q&A</span
              >
            </router-link>
          </li>
          <li
            class="nav-item"
            v-if="userInfo.token && userInfo.identity == 'attendant'"
          >
            <router-link
              class="nav-link position-relative"
              :to="'/carePage/' + userInfo.userId"
              ><i class="fas fa-bell"></i> 未回訊息
              <span
                class="bageReply badge badge-pill badge-secondary text-white"
                >{{ notification }}</span
              >
              <span class="l-nav__enTitle text-center d-none d-md-block"
                >NO REPLY</span
              >
            </router-link>
          </li>

          <li class="nav-item" v-if="!userInfo.token">
            <a class="nav-link" @click="RegisterLoginModal('register')"
              >註冊新帳號
              <span class="l-nav__enTitle text-center d-none d-md-block"
                >SIGN IN</span
              ></a
            >
          </li>
          <li class="nav-item" v-if="!userInfo.token">
            <a
              class="nav-link text-primary"
              @click="RegisterLoginModal('login')"
            >
              會員登入
              <span class="l-nav__enTitle text-center d-none d-md-block"
                >LOGIN IN</span
              >
            </a>
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
              <!-- <i class="fas fa-user-circle"></i> -->
              <img
                v-if="userInfo.photo && userInfo.photo !== 'null'"
                width="30"
                height="30"
                :src="
                  `http://careup.rocket-coding.com/Uploads/` +
                    `${userInfo.photo}`
                "
                alt="..."
                class="rounded-circle objectFit"
              />
              <img
                class="rounded-circle objectFit"
                width="30"
                height="30"
                v-else
                src="@/assets/images/noPhoto.png"
              />
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
        photo: '',
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
        const photo = localStorage.getItem('photo');
        const identity = localStorage.getItem('identity');
        vm.userInfo.token = token;
        vm.userInfo.mail = mail;
        vm.userInfo.userId = userId;
        vm.userInfo.photo = photo;
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
      this.userInfo.photo = '';
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
          console.log(res.data);
          if (!res.data.message) {
            let allQuizs = res.data; // 問與答
            let UnReplayNum = 0;
            allQuizs.forEach(element => {
              if (element.QuestionAnswers.length < 1) {
                UnReplayNum = UnReplayNum + 1;
              }
            });

            vm.notification = UnReplayNum;
          }

          vm.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
