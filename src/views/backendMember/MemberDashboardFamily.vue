<template>
  <div
    class="bg-white shadow-sm
                        radius-3 p-4"
  >
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
          <tr>
            <td class="text-center text-nowrap">王伯伯</td>
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
            </td>
          </tr>
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
  components: {
    ModalFamilyManage
  },
  methods: {
    addFamily() {
      $('#familyManage').modal('show');
    }
  }
};
</script>
