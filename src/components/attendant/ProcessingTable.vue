<template>
  <div class="table-responsive">
    <loading :active.sync="isLoading"></loading>
    <table class="table table-radius">
      <tr class="table-light">
        <th class="text-center text-nowrap">家屬姓名</th>
        <th class="text-center text-nowrap">下單日期</th>
        <th class="text-center text-nowrap">服務時段</th>
        <th class="text-center text-nowrap">訂單金額</th>
        <th class="text-center text-nowrap">家屬付款狀態</th>
        <th class="text-center text-nowrap">查看訂單詳細</th>
      </tr>

      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <td class="text-center text-nowrap">{{ order.x.Elders.Name }}</td>
          <td class="text-nowrap">{{ order.OrderInitDate }}</td>
          <td class="text-nowrap">
            <p>
              {{ order.startDate }} <br />
              {{ order.endDate }}
            </p>
          </td>
          <td class="text-nowrap">{{ order.x.Total | currency }}</td>
          <td class="text-nowrap">{{ order.OrderStatus }}</td>

          <td class="text-nowrap">
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              data-target="#orderDetail"
              @click="showOrderDetail(order.x.Id)"
            >
              查看訂單細節
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <modal-order-detail ref="orderDetailModal"></modal-order-detail>
  </div>
</template>

<script>
import ModalOrderDetail from '@/components/ModalOrderDetail.vue';
export default {
  data() {
    return {
      isLoading: false,
      orders: []
    };
  },
  props: ['user-id', 'identity'],
  components: {
    ModalOrderDetail
  },
  created() {
    this.getProcessingData();
  },
  methods: {
    getProcessingData() {
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}AttendantsOrder02?id=${vm.userId}`;

      vm.$http
        .get(api)
        .then(res => {
          console.log(res);
          vm.orders = res.data;
          vm.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    showOrderDetail(orderId) {
      this.$refs.orderDetailModal.getOrderData(orderId, this.identity);
    }
  }
};
</script>
