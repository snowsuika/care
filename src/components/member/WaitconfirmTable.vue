<template>
  <div class="table-responsive-md">
    <loading :active.sync="isLoading"></loading>
    <table
      class="table table-radius"
      v-if="orders"
    >
      <tr class="table-light">
        <th class="text-center text-nowrap">被服務對象</th>
        <th class="text-center text-nowrap">照服人員</th>
        <th class="text-center text-nowrap">服務時段</th>
        <th class="text-center text-nowrap">訂單金額</th>
        <th class="text-center text-nowrap">查看訂單詳細</th>
        <th class="text-center text-nowrap">取消訂單</th>
      </tr>

      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <td class="text-center">{{ order.x.Elders.Name }}</td>
          <td class="text-center">
            <img
              width="40"
              height="40"
              v-if="order.x.Attendants.Photo"
              :src="
                `http://careup.rocket-coding.com/Uploads/` +
                  `${order.x.Attendants.Photo}`
              "
              alt="..."
              class="rounded-circle objectFit"
            />
            <img
              width="40"
              height="40"
              v-else
              src="@/assets/images/noPhoto.png"
              alt="..."
              class="rounded-circle"
            />
            {{ order.x.Attendants.Name }}
          </td>
          <td class="text-center objectFit">
            <p>
              {{ order.startDate }} <br />
              {{ order.endDate }}
            </p>
          </td>
          <td class="text-center">{{ order.x.Total | currency }}</td>
          <td class="text-center">
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
          <td class="text-center">
            <button
              type="button"
              class="btn btn-primary"
              @click="cancelOrder(order.x.Id)"
            >
              取消訂單
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>目前沒有訂單</p>
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
  created() {
    this.getWaitConfirmData();
  },
  components: {
    ModalOrderDetail
  },
  methods: {
    getWaitConfirmData() {
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}MemberOrder01?id=${vm.userId}`;

      vm.$http
        .get(api)
        .then(res => {
          console.log(res);
          vm.orders = res.data.order;
          vm.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    cancelOrder(orderId) {
      const vm = this;
      vm.isLoading = true;
      console.log(orderId);
      const api = `${process.env.VUE_APP_APIPATH}CancelOrder?Id=${orderId}`; //參數是訂單Id
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
            title: `成功取消訂單`
          });
          vm.getWaitConfirmData();
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
