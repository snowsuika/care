<template>
  <div class="table-responsive">
    <loading :active.sync="isLoading" loader="dots" color="#6A9232"></loading>

    <table class="table table-radius" v-if="orders">
      <tr class="table-light">
        <th class="text-center text-nowrap">被服務對象</th>
        <th class="text-center text-nowrap">照服人員</th>
        <th class="text-center text-nowrap">服務時段</th>
        <th class="text-center text-nowrap">訂單金額</th>
        <th class="text-center text-nowrap">查看照護紀錄</th>
        <th class="text-center text-nowrap">查看訂單詳細</th>
        <!-- <th class="text-center text-nowrap">終止契約</th> -->
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
          <td class="text-center">
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              @click="showCareDetail(order.x.Id)"
            >
              照護紀錄
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
          <!-- <td>
            <button type="button" class="btn btn-primary-soft text-primary">
              終止契約
            </button>
          </td> -->
        </tr>
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
    this.getServiceingData();
  },
  methods: {
    getServiceingData() {
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}MemberOrder03?id=${vm.userId}`;
      // const api = `${process.env.VUE_APP_APIPATH}MemberOrder03?id=3`;

      vm.$http
        .get(api)
        .then(res => {
          console.log('服務中', res);
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
    showCareDetail(orderId) {
      this.$refs.orderCareDetailModal.getCardRecordData(orderId);
    }
  }
};
</script>
