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
            <div :is="orderStatus"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line vue/no-parsing-error
import Unconfirm from '@/components/OrderAttendantUnconfirm.vue';
// eslint-disable-next-line vue/no-parsing-error
import Processing from '@/components/OrderAttendantProcessing.vue';
// eslint-disable-next-line vue/no-parsing-error
import Serviceing from '@/components/OrderAttendantServiceing.vue';
// eslint-disable-next-line vue/no-parsing-error
import Waitmoney from '@/components/OrderAttendantWaitmoney.vue';
// eslint-disable-next-line vue/no-parsing-error
import Finish from '@/components/OrderAttendantFinish.vue';

export default {
  data() {
    return {
      orderStatus: 'unconfirm',
      tabStatus: [
        { tabName: '未確認訂單', orderStatus: 'unconfirm', badge: 2 },
        { tabName: '訂單處理中', orderStatus: 'processing', badge: 2 },
        { tabName: '進行中', orderStatus: 'serviceing', badge: 2 },
        { tabName: '待收款', orderStatus: 'waitmoney', badge: 2 },
        { tabName: '已完成', orderStatus: 'finish', badge: 0 }
      ]
    };
  },
  components: {
    Unconfirm,
    Processing,
    Serviceing,
    Waitmoney,
    Finish
  },
  methods: {
    changeStatus(orderStatus) {
      this.orderStatus = orderStatus;
    }
  }
};
</script>
