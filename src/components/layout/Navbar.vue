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
              class="btn btn-primary text-white radius-5 nav-link"
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
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXFxcX////CwsLGxsb7+/vT09PJycn19fXq6urb29ve3t7w8PDOzs7n5+f5+fnt7e30nlkBAAAFHUlEQVR4nO2dC5qqMAyFMTwUBdz/bq+VYYrKKJCkOfXmXwHna5uTpA+KwnEcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3EcA2iO9cdIc5PUdO257y+BU39u66b4HplE3fk6VIcnqmNfl1+gksr6+iIucjl3WYukor7+re6Hoe1y1UhNO3zUd+fUFRmKpOa0Tt6dY5ubRCrOG/QFLk1WGmnt/JxzykcjdZ/jyxJDLlOV2l36AtcsJJb9boG3YcR3DuqODIE3ztYKPkDdmwRmpUToUaSaq++AvRgZMWbOpbQW8hdCAm8ZDugoikzREdCJ2okJPBx6azFLNOwoOgcxojJ98JkaTSJxMpklKrCAKhZGI0drTY/wU5lXoJYibannV9NYy4oozNEAkPHTjop+DTDxVGkIgYJNoyQQJtiIW+EMjGAjm649AjGIaqswcEFQKJ2QPlJbqytki6ZXAAZRJ52J2McaUowzAfs+uFzrYhnzaapphiPWdaJWShqxjqa6kTTQ205TVbsfMa6htL0iYOsXpJrQjHSmCkv1QGPtiHqlYcQ21Gj7fcDU8xOEUuNgSltPzexh+HqFlanCBHZ4OLhCV+gK/3OF6vWvucLv98MUOY2pwu/PS/+D2qJU7pYGbOvDFDW+bbON9p3o3oRxn0bfLgZTgSn6pSfrtr56qLHemtHPTK2319SzGvtjQ9qeb39WgS66Cm073nd0U1PzDdJCO3Gzn6TKpl9Zq7ujGWsQhlA3NwWIMwG9zM08Y/tBrR9VWeczv5CSQuuUNKIUTk23ZJ5RKfVhjnkXotfWIlgX2BSCDYbZR+QTcLhb3dKZDUY2M0d4KWItwhHRah/zsrOgKw4wycwjcgEVcgQDQo23CqSiWEJkFAfod2oE1uIFdA1OsCPqFXYNTjCfb8Ez+iX2x5sKLlVbhtqdDcar9ZevhnbZxoBUD35k23t0d304LYs1ELVbnfFaZ/REJJX9niP8Q19moZGo3m8XR/yBvOnjFfsXcI2c8ZuNo7WMP5HQh6yRGrlmFOJTnyTcT+zRlqPUBI2gTVWNUzUna1ERgecgF4GpNBQ38jGqxVLzQA1A31Rrhk6Yz9QEh/WND0GnuG9huhiTXJkxfAizTHLr6cbJKN6UCU6x/2DTRE1xEeEXi3O0ZUqBN4nJRzHhFB1JPlFTBZlI2kQ8zc3KJ1Le8DIRmFJiknuVS6RK4Ej/JtBfJErDSzOBiY4wJHX6Z1I4v1GUmdCPNirnLLeg3oJLcbX5PcpHNbRvOa1A956QmRPOUXVF+zkaUJynpkYR0bOMJH2nNej1pqyV/aKkz9jr5yj5vrXXz1F5SQLACiMapmierj2ikLyleKdlA/I/2oFxiglxx9B+mHwz0lf34IZQfhDRhlD6bhvgEAoPYooHkTczSIZTLC+cEExsoNKZiGBiY9cCfo/Y/SjIOBMQizWWTe73CMUasJx7jlD+DdKdWUKoY4PRYFtGpO0G1Lx4RaadgTtJhf4fiGqGIwKWCGuGIwKWqP+7IxYCzygjR9IAO5pC7Da9g70TBVpWRNgFBlgT8RV2WxHbKwJMv4BOaEaYaU2K16yZMN/qgV+G7IWIvwyZCxHeDQMsR8wg0DBDDXB5H2EV+hkEGmaoySHQsEJNFoGGFWrAq98JRhUMX1iMMMqLLEIpK5jCbd4vw9nSt/72lewXiN6jmdjfq8Hdknlk92ZwJnbIMMRM7JBhiFlUFoHd1UWaP1QKsPsHA5mkNB+Smn9JqV3wskatnQAAAABJRU5ErkJggg=="
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .dropdown-menu li:hover .sub-menu {
//   visibility: visible;
// }
// .dropdown:hover .dropdown-menu {
//   display: block;
// }
</style>
