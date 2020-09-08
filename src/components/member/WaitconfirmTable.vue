<template>
  <div class="table-md-responsive">
    <table class="table table-radius">
      <tr class="table-light">
        <th scope="col">被服務對象</th>
        <th scope="col">照服人員</th>
        <th scope="col">服務時段</th>
        <th scope="col">訂單金額</th>
        <th scope="col">查看訂單詳細</th>
        <th scope="col">取消訂單</th>
      </tr>

      <tbody>
        <tr>
          <td class="text-center">王伯伯</td>
          <td>張照服</td>
          <td>
            <p>
              2020-08-15 <br />
              2020-08-16
            </p>
          </td>
          <td>4,000</td>
          <td>
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              data-target="#orderDetail"
            >
              訂單細節
            </button>
          </td>
          <td>
            <button type="button" class="btn btn-primary">取消訂單</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    cancelOrder() {
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}CancelOrder?Id=8`;
      vm.$http
        .post(api, {
          email: vm.email,
          password: vm.password
        })
        .then(res => {
          console.log(res);
          if (res.data.message == '登入成功') {
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
              title: `${res.data.message}`
            });
            vm.isLoading = false;
            localStorage.setItem('token', `${res.data.token}`);
            localStorage.setItem('userId', `${res.data.Id}`);
            localStorage.setItem('userMail', `${res.data.Email}`);
            localStorage.setItem('identity', this.identity);
            this.$bus.$emit('checkLogin');
          } else {
            console.log(res.data.message);
            vm.$swal({
              // toast: true,
              // position: 'top-end',
              // showConfirmButton: false,
              // timer: 3000,
              // timerProgressBar: false,
              // onOpen: toast => {
              //   toast.addEventListener('mouseenter', vm.$swal.stopTimer);
              //   toast.addEventListener('mouseleave', vm.$swal.resumeTimer);
              // },
              icon: 'error',
              title: `${res.data.message}，請重新登入`
            });
            vm.isLoading = false;
          }

          vm.email = '';
          vm.password = '';
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
