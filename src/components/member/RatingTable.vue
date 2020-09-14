<template>
  <div class="table-responsive">
    <loading :active.sync="isLoading"></loading>
    <table class="table table-radius" v-if="orders.length">
      <tbody>
        <tr class="table-light">
          <th class="text-center text-nowrap">被服務對象</th>
          <th class="text-center text-nowrap">照服人員</th>
          <th class="text-center text-nowrap">服務時段</th>
          <th class="text-center text-nowrap">訂單金額</th>
          <th class="text-center text-nowrap">查看照護紀錄</th>
          <th class="text-center text-nowrap">查看訂單詳細</th>
          <th class="text-center text-nowrap">填寫評價</th>
        </tr>
      </tbody>
      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <td class="text-center">{{ order.Elders.Name }}</td>
          <td class="text-center">{{ order.Attendants.Name }}</td>
          <td>
            <p>
              {{ order.StartDate }} <br />
              {{ order.EndDate }}
            </p>
          </td>
          <td>{{ order.Total | currency }}</td>
          <td>
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              @click="showCareDetail(order.Id)"
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
              @click="showOrderDetail(order.Id)"
            >
              訂單細節
            </button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#evaluation"
              @click="showEvaluation(order.Id)"
            >
              填寫評價
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
          <td>
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#evaluation"
            >
              填寫評價
            </button>
          </td>
        </tr> -->
      </tbody>
    </table>
    <p v-else>目前尚無進待評價訂單</p>
    <modal-order-detail ref="orderDetailModal"></modal-order-detail>
    <modal-care-record-detail
      ref="orderCareDetailModal"
    ></modal-care-record-detail>
    <modal-evaluation ref="orderEvaluationModal"></modal-evaluation>
  </div>
</template>

<script>
import ModalOrderDetail from '@/components/ModalOrderDetail.vue';
import ModalCareRecordDetail from '@/components/ModalCareRecordDetail.vue';
import ModalEvaluation from '@/components/ModalEvaluation.vue';
export default {
  data() {
    return {
      isLoading: false,
      orders: []
    };
  },
  props: ['user-id', 'identity'],
  components: {
    ModalOrderDetail,
    ModalCareRecordDetail,
    ModalEvaluation
  },
  created() {
    this.getRatingData();
  },
  methods: {
    getRatingData() {
      const vm = this;
      vm.isLoading = true;
      // const api = `${process.env.VUE_APP_APIPATH}MemberOrder04?id=${vm.userId}`;
      const api = `${process.env.VUE_APP_APIPATH}MemberOrder04?id=1`;

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
    },
    showCareDetail(orderId) {
      this.$refs.orderCareDetailModal.getCardRecordData(orderId);
    },
    showEvaluation(orderId) {
      this.$refs.orderEvaluationModal.openEvaluationModal(orderId);
    }
  }
};
</script>
