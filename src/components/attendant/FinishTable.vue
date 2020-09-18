<template>
  <div class="table-responsive">
    <loading :active.sync="isLoading"></loading>
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
              @click="showCardRecord(order.x.Id)"
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
          <td class="text-center">王伯伯</td>
          <td>張照服</td>
          <td>
            <p>
              2020-08-15 <br />
              2020-08-16
            </p>
          </td>
          <td>4,000</td>
          <td>完成訂單</td>
          <td>
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              data-target="#careRecord"
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
        </tr>
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
          <td>家屬<br />終止契約</td>
          <td>
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              data-target="#careRecord"
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
        </tr>
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
          <td>照服員<br />終止契約</td>
          <td>
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              data-target="#careRecord"
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
    <p v-else>目前尚無已完成訂單</p>
    <modal-order-detail ref="orderDetailModal"></modal-order-detail>
    <modal-care-record ref="orderCardRecordModal"></modal-care-record>
  </div>
</template>

<script>
import ModalOrderDetail from '@/components/ModalOrderDetail.vue';
import ModalCareRecord from '@/components/ModalCareRecord.vue';
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
    ModalCareRecord
  },
  created() {
    this.getFinishData();
  },
  methods: {
    getFinishData() {
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}AttendantsOrder05?id=${vm.userId}`;
      // const api = `${process.env.VUE_APP_APIPATH}AttendantsOrder05?id=1`;

      vm.$http
        .get(api)
        .then(res => {
          console.log('已完成', res);
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
    showCardRecord(orderId) {
      this.$refs.orderCardRecordModal.getCardRecordData(orderId);
    }
  }
};
</script>
