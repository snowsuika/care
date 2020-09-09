<template>
  <div
    class="bg-white shadow-sm
                        radius-3 p-4"
  >
    <loading :active.sync="isLoading"></loading>
    <div class="text-right mb-4">
      <button
        type="button"
        class="btn btn-primary-soft text-primary"
        @click="addFamily()"
      >
        <i class="fas fa-plus"></i> 新增被照護對象
      </button>
    </div>
    <div class="table-responsive">
      <table class="table table-radius">
        <tr class="table-light">
          <th class="text-center text-nowrap">被服務對象</th>
          <th class="text-nowrap">需服務項目</th>
          <th class="text-nowrap">身體狀況</th>
          <th class="text-center text-nowrap">編輯</th>
          <th class="text-center text-nowrap">刪除</th>
        </tr>
        <tbody>
          <tr v-for="(item, index) in allElders" :key="index">
            <td class="text-center text-nowrap">{{ item.Name }}</td>
            <td class="text-nowrap">
              <ul class="list-unstyled">
                <li>{{ item.ServiceItems }}</li>
              </ul>
            </td>
            <td class="text-nowrap">{{ item.Body }}</td>
            <td class="text-center text-nowrap">
              <button class="btn btn-primary-soft text-primary">
                <i class="fas fa-pen"></i> 編輯
              </button>
            </td>
            <td class="text-center text-nowrap">
              <button class="btn btn-primary-soft text-primary">
                <i class="fas fa-trash-alt"></i> 刪除
              </button>
            </td>
          </tr>
          <!-- <td class="text-center text-nowrap">王伯伯</td>
            <td class="text-nowrap">
              <ul class="list-unstyled">
                <li>協助如廁</li>
                <li>身心靈陪伴及安全維護</li>
              </ul>
            </td>
            <td class="text-nowrap">無法行動</td>
            <td class="text-center text-nowrap">
              <button class="btn btn-primary-soft text-primary">
                <i class="fas fa-pen"></i> 編輯
              </button>
            </td>
            <td class="text-center text-nowrap">
              <button class="btn btn-primary-soft text-primary">
                <i class="fas fa-trash-alt"></i> 刪除
              </button>
            </td> -->
        </tbody>
      </table>
    </div>
    <modal-family-manage></modal-family-manage>
  </div>
</template>

<script>
/* global $ */
import ModalFamilyManage from '@/components/ModalFamilyManage.vue';
export default {
  data() {
    return {
      isLoading: false,
      allElders: {},
      userId: ''
    };
  },
  created() {
    this.getAllElders();
  },
  components: {
    ModalFamilyManage
  },
  methods: {
    addFamily() {
      $('#familyManage').modal('show');
    },
    editFamily(ElderId) {
      console.log(ElderId);
    },
    getAllElders() {
      const vm = this;
      vm.isLoading = true;
      vm.userId = localStorage.getItem('userId');
      const api = `${process.env.VUE_APP_APIPATH}GetElders/?id=${this.userId}`;
      console.log(api);
      vm.$http
        .get(api)
        .then(res => {
          console.log(res);
          vm.isLoading = false;
          vm.allElders = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
