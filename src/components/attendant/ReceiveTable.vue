<template>
  <div class="table-responsive">
    <loading :active.sync="isLoading" loader="dots" color="#499d66"></loading>
    <table class="table table-radius" v-if="orders">
      <tr class="table-light">
        <th class="text-center text-nowrap">家屬姓名</th>
        <th class="text-center text-nowrap">下單日期</th>
        <th class="text-center text-nowrap">服務時段</th>
        <th class="text-center text-nowrap">訂單金額</th>
        <th class="text-center text-nowrap">訂單狀態</th>
        <th class="text-center text-nowrap">查看照護紀錄</th>
        <th class="text-center text-nowrap">查看訂單詳細</th>
      </tr>

      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <td class="text-center text-nowrap">{{ order.x.Elders.Name }}</td>
          <td class="text-nowrap">{{ order.initTime }}</td>
          <td class="text-nowrap">
            <p>
              {{ order.startTime }} <br />
              {{ order.endTime }}
            </p>
          </td>
          <td class="text-nowrap">{{ order.x.Total | currency }}</td>
          <td class="text-nowrap">{{ order.status }}</td>
          <td class="text-nowrap">
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              @click="showCareDetail(order.x.Id)"
            >
              照護紀錄
            </button>
          </td>
          <td class="text-nowrap">
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              data-target="#orderDetail"
              @click="showOrderDetail(order.x.Id)"
            >
              訂單細節
            </button>
          </td>
        </tr>
        <!-- <tr>
          <td class="text-center text-nowrap">王伯伯</td>
          <td class="text-nowrap">2020-08-13 19:34</td>
          <td class="text-nowrap">
            <p>
              2020-08-15 <br />
              2020-08-16
            </p>
          </td>
          <td class="text-nowrap">4,000</td>
          <td class="text-nowrap">家屬終止契約</td>
          <td class="text-nowrap">
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              data-target="#careRecord"
            >
              照護紀錄
            </button>
          </td>
          <td class="text-nowrap">
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              data-target="#orderDetail"
            >
              訂單細節
            </button>
          </td>
        </tr>
        <tr>
          <td class="text-center">王伯伯</td>
          <td>2020-08-13 19:34</td>
          <td>
            <p>
              2020-08-15 <br />
              2020-08-16
            </p>
          </td>
          <td>4,000</td>
          <td>照服員終止契約</td>
          <td>
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              data-target="#orderCareRecord"
            >
              照護紀錄
            </button>
          </td>
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
        </tr> -->
      </tbody>
    </table>
    <p v-else>目前尚無進行中訂單</p>
    <modal-order-detail ref="orderDetailModal"></modal-order-detail>
    <modal-care-record-detail
      ref="orderCareDetailModal"
    ></modal-care-record-detail>
  </div>
</template>
<script>
import ModalOrderDetail from '@/components/ModalOrderDetail.vue';
import ModalCareRecordDetail from '@/components/ModalCareRecordDetail.vue';
export default {
  data() {
    return {
      isLoading: false,
      orders: [],
      statusCount: 0
    };
  },
  props: ['user-id', 'identity'],
  components: {
    ModalOrderDetail,
    ModalCareRecordDetail
  },
  created() {
    this.getProcessingData();
  },
  methods: {
    getProcessingData() {
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}AttendantsOrder04?id=${vm.userId}`;
      // const api = `${process.env.VUE_APP_APIPATH}AttendantsOrder04?id=1`;

      vm.$http
        .get(api)
        .then(res => {
          // console.log('待收款', res);
          vm.orders = res.data.order;
          vm.statusCount = res.data.count;
          vm.$emit('updateStatusCount', vm.statusCount); //更新未處理筆數數量
          vm.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    showOrderDetail(orderId) {
      this.$refs.orderDetailModal.getOrderData(orderId, this.identity);
    },
    showCareDetail(orderId) {
      this.$refs.orderCareDetailModal.getCardRecordData(orderId);
    }
  }
};
</script>
