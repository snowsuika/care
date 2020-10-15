<template>
  <div>
    <loading :active.sync="isLoading" loader="dots" color="#499d66"></loading>
    <!-- 拒收訂單理由 -->
    <div
      class="modal fade"
      id="rejectOrder"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content radius-2">
          <div class="modal-body">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h3 class="text-center py-4">
              是否確定拒絕此訂單？
            </h3>
            <form>
              <div class="form-group">
                <label for="rejectReason"
                  ><span class="text-danger">*</span>請輸入拒絕訂單理由</label
                >
                <textarea
                  id="rejectReason"
                  class="form-control"
                  v-model="rejectReson"
                  name=""
                  rows="3"
                ></textarea>
              </div>
              <div class="text-center">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="sendRejectOrder()"
                >
                  確定送出
                </button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-dismiss="modal"
            >
              關閉視窗
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */

export default {
  data() {
    return {
      orderId: '',
      rejectReson: '',
      isLoading: false
    };
  },

  methods: {
    openModal(orderId) {
      const vm = this;
      vm.orderId = orderId;
      $('#rejectOrder').modal('show');
    },
    sendRejectOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}OrderReject`;
      vm.isLoading = true;
      vm.$http
        .patch(api, {
          Id: vm.orderId,
          Cancel: vm.rejectReson
        })
        .then(res => {
          // console.log(res);
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
          $('#rejectOrder').modal('hide');
          vm.orderId = '';
          vm.rejectReson = '';
          vm.isLoading = false;
          this.$emit('get-order-data');
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
