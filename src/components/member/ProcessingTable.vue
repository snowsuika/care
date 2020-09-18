<template>
  <div class="table-responsive">
    <loading :active.sync="isLoading"></loading>

    <!-- 傳送到金流 Form 表單 -->
    <form
      method="post"
      id="toNewebpayFrom"
      action="https://ccore.spgateway.com/MPG/mpg_gateway"
    >
      <input
        type="hidden"
        :name="item.Key"
        :value="item.Value"
        v-for="(item, index) in NewebpayData"
        :key="index"
      />
    </form>

    <table class="table table-radius" v-if="orders">
      <tr class="table-light">
        <th class="text-center text-nowrap">被服務對象</th>
        <th class="text-center text-nowrap">照服人員</th>
        <th class="text-center text-nowrap">服務時段</th>
        <th class="text-center text-nowrap">訂單金額</th>
        <th class="text-center text-nowrap">訂單狀態</th>
        <th class="text-center text-nowrap">付款</th>
        <th class="text-center text-nowrap">取消訂單</th>
        <th class="text-center text-nowrap">查看訂單詳細</th>
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
            />{{ order.x.Attendants.Name }}
          </td>
          <td class="text-center">
            <p>
              {{ order.startDate }} <br />
              {{ order.endDate }}
            </p>
          </td>
          <td class="text-center">{{ order.x.Total | currency }}</td>
          <td class="text-center">{{ order.OrderStatus }}</td>
          <td class="text-center">
            <button
              type="button"
              class="btn btn-primary"
              @click="payInfoToBack(order.x.Id)"
            >
              付款
            </button>
          </td>
          <td class="text-center">
            <button
              type="button"
              class="btn btn-primary btn-primary-soft text-primary"
              @click="cancelOrder(order.x.Id)"
            >
              取消訂單
            </button>
          </td>
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
        </tr>
      </tbody>
    </table>
    <p v-else>目前沒有處理中訂單</p>
    <modal-order-detail ref="orderDetailModal"></modal-order-detail>
  </div>
</template>

<script>
/* global $ */
import ModalOrderDetail from '@/components/ModalOrderDetail.vue';
export default {
  data() {
    return {
      isLoading: false,
      orders: [],
      statusCount: 0,
      NewebpayData: []
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
      const api = `${process.env.VUE_APP_APIPATH}MemberOrder02?id=${vm.userId}`;

      vm.$http
        .get(api)
        .then(res => {
          console.log('家屬處理中', res);
          vm.orders = res.data.orders;
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
    payInfoToBack(orderId) {
      console.log(orderId);
      const vm = this;
      // const api = `http://36b2fa41bb08.ngrok.io/SpgatewayPayBill`;
      const api = `http://careup.rocket-coding.com/SpgatewayPayBill`;
      vm.$http
        .post(api, {
          OrderId: orderId
        })
        .then(res => {
          console.log(res);
          vm.NewebpayData = res.data;
          setTimeout(() => {
            $('#toNewebpayFrom').trigger('submit');
          }, 0);
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
          vm.getProcessingData();
          vm.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
