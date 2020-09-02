<template>
  <div>
    <!-- 註冊 -->
    <div
      class="modal fade"
      id="register"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content p-3 radius-3">
          <div class="modal-body">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h2 class="font-weight-bold my-3 text-center">註冊會員</h2>
            <ul
              class="nav nav-pills d-flex justify-content-center bg-white mb-3"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item text-center w-50" role="presentation">
                <a
                  class="nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                  @click="changeButton('family')"
                  >我是家屬</a
                >
              </li>
              <li class="nav-item text-center w-50" role="presentation">
                <a
                  class="nav-link"
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                  @click="changeButton('attendant')"
                  >我是照服員</a
                >
              </li>
            </ul>

            <form>
              <div class="form-group">
                <label for="registerEmail">電子信箱：</label>
                <input
                  type="email"
                  class="form-control"
                  value=""
                  v-model="email"
                  placeholder="請輸入電子信箱"
                  id="registerEmail"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="registerPassword">請輸入密碼：</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                  placeholder="請輸入密碼"
                  id="registerPassword"
                />
              </div>
              <div class="form-group">
                <label for="registerPasswordAgain">請再次輸入密碼：</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="passwordAgain"
                  placeholder="請再次輸入密碼"
                  id="registerPasswordAgain"
                />
              </div>
              <div class="text-center mt-5">
                <button
                  class="btn btn-primary w-25"
                  v-if="identity == 'family'"
                  data-dismiss="modal"
                  @click="sendData()"
                >
                  註冊(家屬)
                </button>
                <button
                  class="btn btn-primary w-25"
                  v-if="identity == 'attendant'"
                  data-dismiss="modal"
                  @click="sendData()"
                >
                  註冊(照服員)
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      identity: 'family',
      user: {
        email: '',
        password: '',
        passwordAgain: ''
      }
    };
  },
  methods: {
    changeButton(identity) {
      this.identity = identity;
    },
    sendData() {
      //       this.token = document.cookie.replace(
      //   /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      //   "$1"
      // );
      // this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;

      const api = `http://careup.rocket-coding.com/AttendantRegister`;

      this.$http
        .post(api, this.user)
        .then(res => {
          console.log(res);
          // const token = res.data.token;
          // const expired = res.data.expired;
          // //把token 存進 cookie
          // document.cookie = `token=${token};expires=${new Date(
          //   expired * 1000
          // )}`;
          // //登入成功的話轉換頁面
          // this.$router.push("/admin");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
