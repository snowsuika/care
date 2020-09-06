<template>
  <div>
    <div class="card shadow-sm">
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
  </div>
</template>

<script>
import Waitconfirm from '@/components/member/WaitconfirmTable.vue';
import Processing from '@/components/member/ProcessingTable.vue';
import Serviceing from '@/components/member/ServiceingTable.vue';
import Rating from '@/components/member/RatingTable.vue';
import Finish from '@/components/member/FinishTable.vue';

export default {
  data() {
    return {
      orderStatus: 'waitconfirm',
      tabStatus: [
        { tabName: '待照服員確認中', orderStatus: 'waitconfirm', badge: 2 },
        { tabName: '訂單處理中', orderStatus: 'processing', badge: 2 },
        { tabName: '服務進行中', orderStatus: 'serviceing', badge: 2 },
        { tabName: '待評價中', orderStatus: 'rating', badge: 2 },
        { tabName: '已完成', orderStatus: 'finish', badge: 0 }
      ]
    };
  },
  components: {
    Waitconfirm,
    Processing,
    Serviceing,
    Rating,
    Finish
  },
  methods: {
    changeStatus(orderStatus) {
      this.orderStatus = orderStatus;
    }
  }
};
</script>
