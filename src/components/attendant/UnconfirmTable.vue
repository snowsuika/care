<template>
  <div class="table-responsive-md">
    <loading :active.sync="isLoading"></loading>
    <table class="table table-radius">
      <tr class="table-light">
        <th class="text-center text-nowrap" scope="col">家屬姓名</th>
        <th class="text-center text-nowrap" scope="col">下單日期</th>
        <th class="text-center text-nowrap" scope="col">服務時段</th>
        <th class="text-center text-nowrap" scope="col">訂單金額</th>
        <th class="text-center text-nowrap" scope="col">訂單詳細</th>
        <th class="text-center text-nowrap" scope="col">接受訂單</th>
        <th class="text-center text-nowrap" scope="col">拒絕訂單</th>
      </tr>

      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <td class="text-center text-nowrap">{{ order.Elders.Name }}</td>
          <td class="text-center text-nowrap">2020-09-03 18:34</td>
          <!-- <td class="text-nowrap">{{ order.Elders.InitDate }}</td> -->
          <td class="text-nowrap">
            <p>
              {{ order.StartDate }} <br />
              {{ order.EndDate }}
            </p>
          </td>
          <td class="text-nowrap">{{ order.Total | currency }}</td>
          <td class="text-nowrap">
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              data-target="#orderDetail"
              @click="showOrderDetail(order.Id)"
            >
              查看
            </button>
          </td>

          <td class="text-nowrap">
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
            >
              接受訂單
            </button>
          </td>
          <td class="text-nowrap">
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              @click="rejectOrder(order.Id)"
            >
              拒絕訂單
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <modal-order-detail ref="orderDetailModal"></modal-order-detail>
    <modal-reject-order
      ref="orderRejectModal"
      @get-order-data="getUnconfirmData()"
    ></modal-reject-order>
  </div>
</template>

<script>
import ModalOrderDetail from '@/components/ModalOrderDetail.vue';
import ModalRejectOrder from '@/components/ModalRejectOrder.vue';
export default {
  data() {
    return {
      orders: []
    };
  },
  props: ['user-id', 'identity'],
  components: {
    ModalOrderDetail,
    ModalRejectOrder
  },
  created() {
    this.getUnconfirmData();
  },
  methods: {
    getUnconfirmData() {
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}AttendantsGet10?id=${vm.userId}`;

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
      this.$refs.orderDetailModal.getOrderData(orderId);
    },
    rejectOrder(orderId) {
      this.$refs.orderRejectModal.openModal(orderId);
    }
  }
};
</script>
