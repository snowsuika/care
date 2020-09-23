<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div
      class="modal fade"
      id="orderCareRecord"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content" style="border-radius: 1.25rem">
          <div class="modal-body p-4">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="mb-3"><i class="fas fa-file-alt"></i> 照護紀錄表</h4>
            <table class="table table-bordered" v-if="orderCardRecords.length">
              <tbody>
                <tr>
                  <th>服務日期</th>
                  <th>照服對象心情狀況</th>
                  <th>填寫時間</th>
                  <th>備註</th>
                </tr>
                <tr v-for="(record, index) in orderCardRecords" :key="index">
                  <td>{{ record.date }}</td>
                  <td>{{ record.mood }}</td>
                  <td>{{ record.time }}</td>
                  <td>{{ record.remark }}</td>
                </tr>
                <!-- <tr>
                <td>2020-08-11</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2020-08-12</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2020-08-13</td>
                <td></td>
                <td></td>
                <td></td>
              </tr> -->
              </tbody>
            </table>
            <p v-else>此訂單目前尚無照護紀錄</p>
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
      orderCardRecords: [],
      isLoading: false
    };
  },
  methods: {
    getCardRecordData(orderId) {
      console.log(orderId);
      const vm = this;
      vm.isLoading = true;
      vm.orderId = orderId;
      const api = `${process.env.VUE_APP_APIPATH}GetLog?id=${orderId}`; //參數是訂單的id
      // const api = `${process.env.VUE_APP_APIPATH}GetLog?id=27`; //參數是訂單的id

      vm.$http
        .get(api)
        .then(res => {
          console.log(res);
          vm.orderCardRecords = res.data;
          $('#orderCareRecord').modal('show');
          vm.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
