<template>
  <div
    class="bg-white shadow-sm
                        radius-3 p-4"
  >
    <loading :active.sync="isLoading" loader="dots" color="#499d66"></loading>
    <h4 class="mb-3">修改會員密碼</h4>

    <validation-observer ref="observer" v-slot="{ invalid }">
      <form
        class="mx-auto"
        style="max-width:600px"
        @submit.prevent="submitForm"
      >
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-4 col-form-label"
            >電子信箱</label
          >
          <div class="col-sm-8">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              id="staticEmail"
              :value="account"
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="password" class="col-sm-4 col-form-label"
            ><span class="text-danger">*</span>請輸入密碼：</label
          >

          <div class="col-sm-8">
            <validation-provider
              rules="required|min:6|password:@再次輸入新密碼"
              v-slot="{ errors, classes }"
            >
              <input
                type="password"
                name="新密碼"
                v-model.number="password"
                class="form-control"
                :class="classes"
                id="password"
              />

              <div v-if="errors[0]" class="invalid-feedback">
                {{ errors[0] }}
              </div>
            </validation-provider>
          </div>
        </div>

        <div class="form-group row">
          <label for="confirmPassword" class="col-sm-4 col-form-label"
            ><span class="text-danger">*</span>請再次輸入密碼：</label
          >
          <div class="col-sm-8">
            <validation-provider
              name="再次輸入新密碼"
              rules="required|min:6|"
              v-slot="{ errors, classes }"
            >
              <input
                type="password"
                name="再次輸入新密碼"
                v-model.number="confirmPassword"
                class="form-control"
                :class="classes"
                id="confirmPassword"
              />
              <div v-if="errors[0]" class="invalid-feedback">
                {{ errors[0] }}
              </div>
            </validation-provider>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="invalid"
            @click.prevent="changePassword()"
          >
            確定修改
          </button>
        </div>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import { extend } from 'vee-validate';

extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: '兩次密碼沒有相同'
});

export default {
  data() {
    return {
      account: '',
      password: '',
      confirmPassword: '',
      isLoading: false
    };
  },
  props: ['user-id', 'identity'],
  created() {
    this.getAccountData();
  },
  methods: {
    getAccountData() {
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/Getmember?Id=${vm.userId}`;
      vm.$http
        .get(api)
        .then(res => {
          vm.account = res.data.result;
          vm.isLoading = false;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    changePassword() {
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/EditMemberRegister`;
      vm.$http
        .patch(api, {
          Id: vm.userId,
          Password: vm.password
        })
        .then(res => {
          console.log(res);
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
            title: `密碼已成功修改`
          });
          vm.isLoading = false;
          vm.password = '';
          vm.confirmPassword = '';
          vm.$refs.observer.reset();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
