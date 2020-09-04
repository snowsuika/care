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
                  @click="confirmIdentity('family')"
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
                  @click="confirmIdentity('attendant')"
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
                  data-dismiss="modal"
                  @click="register()"
                >
                  註冊
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
      email: '',
      password: '',
      passwordAgain: ''
    };
  },

  methods: {
    confirmIdentity(identity) {
      this.identity = identity;
    },
    register() {
      const vm = this;

      let identity =
        this.identity == 'family' ? 'MemberRegister' : 'AttendantRegister';
      const api = `${process.env.VUE_APP_APIPATH}${identity}`;

      vm.$http
        .post(api, {
          email: vm.email,
          password: vm.password
        })
        .then(res => {
          console.log(res);
          if (res.status == '200') {
            vm.$swal({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: false,
              onOpen: toast => {
                toast.addEventListener('mouseenter', vm.$swal.stopTimer);
                toast.addEventListener('mouseleave', vm.$swal.resumeTimer);
              },
              icon: 'success',
              title: '已成功註冊，請先登入'
            });
            vm.email = '';
            vm.password = '';
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
