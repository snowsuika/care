/* eslint-disable vue/no-parsing-error */
<template>
  <div class="card shadow-sm radius-3">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs" id="nav-tab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: orderStatus == 'unconfirm' }"
            @click="changeStatus('unconfirm')"
            data-toggle="tab"
            role="tab"
            >未確認訂單
            <span class="badge badge-pill badge-secondary text-white"
              >2</span
            ></a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: orderStatus == 'processing' }"
            @click="changeStatus('processing')"
            data-toggle="tab"
            role="tab"
            >訂單處理中
            <span class="badge badge-pill badge-secondary text-white"
              >2</span
            ></a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: orderStatus == 'serviceing' }"
            @click="changeStatus('serviceing')"
            data-toggle="tab"
            role="tab"
            >進行中
            <span class="badge badge-pill badge-secondary text-white"
              >2</span
            ></a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: orderStatus == 'waitmoney' }"
            @click="changeStatus('waitmoney')"
            data-toggle="tab"
            role="tab"
            >待收款
            <span class="badge badge-pill badge-secondary text-white"
              >2</span
            ></a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: orderStatus == 'finish' }"
            @click="changeStatus('finish')"
            data-toggle="tab"
            role="tab"
            >已完成
            <span class="badge badge-pill badge-secondary text-white"
              >2</span
            ></a
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
      orderStatus: 'unconfirm'
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
