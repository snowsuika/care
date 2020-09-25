<template>
  <div
    class="modal fade"
    id="orderCareRecord"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <loading :active.sync="isLoading" loader="dots" color="#499d66"></loading>
    <div class="modal-dialog modal-lg">
      <div class="modal-content radius-2">
        <div class="modal-body p-4">
          <button
            type="button"
            class="close"
            @click="closeModal()"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="mb-3"><i class="fas fa-file-alt"></i> 填寫照護記錄表</h4>
          <p>
            說明：您只能於當天服務日填寫當天照護日誌。照護日誌會作為核發薪資依據。
          </p>

          <form>
            <div class="form-group">
              <label for="todayRecord"
                ><span class="text-danger">*</span> 請填寫今日照護日誌</label
              >
              <textarea
                class="form-control"
                v-model="Mood"
                id="todayRecord"
                rows="3"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="remarks">請填寫今日備註</label>
              <textarea
                class="form-control"
                v-model="Remark"
                id="remarks"
                rows="3"
              ></textarea>
            </div>
            <button
              class="btn btn-primary"
              @click.prevent="saveTodayCardRecord()"
            >
              儲存記錄
            </button>
          </form>
          <h5 class="mt-5">照服記錄表</h5>
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th>服務日期</th>
                <th>照服對象心情狀況</th>
                <th>填寫時間</th>
                <th>備註</th>
              </tr>
              <tr v-for="(careRecord, index) in orderCardRecords" :key="index">
                <td>{{ careRecord.date }}</td>
                <td>{{ careRecord.mood }}</td>
                <td>{{ careRecord.time }}</td>
                <td>{{ careRecord.null }}</td>
              </tr>
            </tbody>
          </table>
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
      orderCardRecords: [],
      orderId: '',
      Mood: '',
      Remark: '',
      isLoading: false
    };
  },
  created() {},
  methods: {
    getCardRecordData(orderId) {
      // console.log(orderId);
      const vm = this;
      vm.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}GetLog?id=${orderId}`; //參數是訂單的id
      // const api = `${process.env.VUE_APP_APIPATH}GetLog?id=27`; //參數是訂單的id

      vm.$http
        .get(api)
        .then(res => {
          console.log(res);
          vm.orderCardRecords = res.data;
          $('#orderCareRecord').modal('show');
          vm.orderId = orderId;
          console.log(vm.orderId);
          vm.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    saveTodayCardRecord() {
      const vm = this;
      vm.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}WriteLog`;
      vm.$http
        .post(api, {
          OrdersID: vm.orderId,
          Mood: vm.Mood,
          Remark: vm.Remark
        })
        .then(res => {
          console.log(res.data);

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
          $('#orderCareRecord').modal('hide');
          vm.Mood = '';
          vm.Remark = '';
          vm.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    closeModal() {
      this.orderId = '';
      this.Mood = '';
      this.Remark = '';
      $('#orderCareRecord').modal('hide');
    }
  }
};
</script>
