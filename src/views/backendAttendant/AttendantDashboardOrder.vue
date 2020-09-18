/* eslint-disable vue/no-parsing-error */
<template>
  <div class="card shadow-sm radius-3">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs" id="nav-tab" role="tablist">
        <li v-for="(item, index) in tabStatus" :key="index" class="nav-item">
          <a
            class="nav-link"
            :class="{ active: orderStatus == `${item.orderStatus}` }"
            @click="changeStatus(`${item.orderStatus}`)"
            data-toggle="tab"
            role="tab"
            >{{ item.tabName }}
            <span class="badge badge-pill badge-secondary text-white">{{
              item.badge
            }}</span></a
          >
        </li>
      </ul>
    </div>
    <div class="card-body">
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane show active">
          <div class="table-responsive-md">
            <div
              :is="orderStatus"
              :user-id="userId"
              :identity="identity"
              @updateStatusCount="updateStatusCount"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line vue/no-parsing-error
import Unconfirm from '@/components/attendant/UnconfirmTable.vue';
import Processing from '@/components/attendant/ProcessingTable.vue';
import Serviceing from '@/components/attendant/ServiceingTable.vue';
import Receive from '@/components/attendant/ReceiveTable.vue';
import Finish from '@/components/attendant/FinishTable.vue';

export default {
  data() {
    return {
      orderStatus: 'unconfirm',
      tabStatus: [
        { tabName: '未確認訂單', orderStatus: 'unconfirm', badge: 0 },
        { tabName: '訂單處理中', orderStatus: 'processing', badge: 0 },
        { tabName: '進行中', orderStatus: 'serviceing', badge: 0 },
        { tabName: '待收款', orderStatus: 'receive', badge: 0 },
        { tabName: '已完成', orderStatus: 'finish', badge: 0 }
      ]
    };
  },
  props: ['user-id', 'identity'],
  components: {
    Unconfirm,
    Processing,
    Serviceing,
    Receive,
    Finish
  },
  created() {
    this.getOrderStatusCount();
  },
  methods: {
    getOrderStatusCount() {
      const vm = this;
      let APIarr = [];
      for (let i = 1; i < 6; i++) {
        APIarr.push(
          `${process.env.VUE_APP_APIPATH}AttendantsOrder0${i}?id=${vm.userId}`
        );
      }
      const [Waitconfirm, Processing, Serviceing, Rating, Finish] = APIarr;
      const requestWaitconfirm = vm.$http.get(Waitconfirm);
      const requestProcessing = vm.$http.get(Processing);
      const requestServiceing = vm.$http.get(Serviceing);
      const requestRating = vm.$http.get(Rating);
      const requestFinish = vm.$http.get(Finish);
      vm.isLoading = true;
      vm.$http
        .all([
          requestWaitconfirm,
          requestProcessing,
          requestServiceing,
          requestRating,
          requestFinish
        ])
        .then(
          vm.$http.spread((...res) => {
            const statusCount = res.map(item => {
              return item.data.count;
            });
            vm.tabStatus.forEach((item, index) => {
              item.badge = statusCount[index];
            });
            vm.isLoading = false;
          })
        );
    },
    updateStatusCount(count) {
      const vm = this;
      vm.tabStatus.forEach(item => {
        if (item.orderStatus == vm.orderStatus) {
          item.badge = count;
        }
      });
    },
    changeStatus(orderStatus) {
      this.orderStatus = orderStatus;
    }
  }
};
</script>
