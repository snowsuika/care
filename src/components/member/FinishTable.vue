<template>
  <div class="table-responsive">
    <loading :active.sync="isLoading"></loading>
    <table class="table table-radius" v-if="orders">
      <tbody>
        <tr class="table-light">
          <th class="text-center text-nowrap">被服務對象</th>
          <th class="text-center text-nowrap">照服人員</th>
          <th class="text-center text-nowrap">服務時段</th>
          <th class="text-center text-nowrap">訂單金額</th>
          <th class="text-center text-nowrap">訂單狀態</th>
          <th class="text-center text-nowrap">查看照護紀錄</th>
          <th class="text-center text-nowrap">查看訂單詳細</th>
        </tr>
      </tbody>
      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <td class="text-center">{{ order.x.Elders.Name }}</td>
          <td>
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
          <td>
            <p>
              {{ order.x.StartDate }} <br />
              {{ order.x.EndDate }}
            </p>
          </td>
          <td>{{ order.x.Total | currency }}</td>
          <td>{{ order.status }}</td>
          <td>
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              @click="showCareDetail(order.x.Id)"
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
          <td>已取消</td>
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
          <td>照服員拒收訂單</td>
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
    <p v-else>目前尚無已完成訂單</p>
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
      orders: []
    };
  },
  props: ['user-id', 'identity'],
  components: {
    ModalOrderDetail,
    ModalCareRecordDetail
  },
  created() {
    this.getFinishData();
  },
  methods: {
    getFinishData() {
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}MemberOrder05?id=${vm.userId}`;
      // const api = `${process.env.VUE_APP_APIPATH}MemberOrder05?id=1`;

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
    showOrderDetail(orderId) {
      this.$refs.orderDetailModal.getOrderData(orderId, this.identity);
    },
    showCareDetail(orderId) {
      this.$refs.orderCareDetailModal.getCardRecordData(orderId);
    }
  }
};
</script>
