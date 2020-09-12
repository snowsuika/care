<template>
  <div class="table-responsive-md">
    <loading :active.sync="isLoading"></loading>
    <table class="table table-radius" v-if="orders.length">
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
          <td class="text-center text-nowrap">{{ order.x.Elders.Name }}</td>
          <td class="text-center text-nowrap">{{ order.OrderInitDate }}</td>

          <td class="text-center text-nowrap">
            <p>
              {{ order.startDate }} <br />
              {{ order.endDate }}
            </p>
          </td>
          <td class="text-center text-nowrap">
            {{ order.x.Total | currency }}
          </td>
          <td class="text-center text-nowrap">
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              data-target="#orderDetail"
              @click="showOrderDetail(order.x.Id)"
            >
              查看
            </button>
          </td>

          <td class="text-center text-nowrap">
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              @click="confirmOrder(order.x.Id)"
            >
              接受訂單
            </button>
          </td>
          <td class="text-center text-nowrap">
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              @click="rejectOrder(order.x.Id)"
            >
              拒絕訂單
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>目前沒有訂單</p>
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
      const api = `${process.env.VUE_APP_APIPATH}AttendantsOrder01?id=${vm.userId}`;

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
    confirmOrder(orderId) {
      const vm = this;
      vm.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}OrderAccept?id=${orderId}`;
      vm.$http
        .patch(api)
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
            title: `已接收訂單，訂單 <b style="color:green;">等待家屬付款中</b>`
          });
          vm.getUnconfirmData();
        })
        .catch(err => {
          console.log(err);
        });
    },
    rejectOrder(orderId) {
      this.$refs.orderRejectModal.openModal(orderId);
    }
  }
};
</script>
