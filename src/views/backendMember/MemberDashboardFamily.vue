<template>
  <div
    class="bg-white shadow-sm
                        radius-3 p-4"
  >
    <loading :active.sync="isLoading" loader="dots" color="#499d66"></loading>
    <div class="text-right mb-4">
      <button
        type="button"
        class="btn btn-primary-soft text-primary"
        @click="addElder()"
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
          <!-- <th class="text-center text-nowrap">刪除</th> -->
        </tr>
        <tbody>
          <tr v-for="(elder, index) in elders" :key="index">
            <td class="text-center text-nowrap">{{ elder.x.Name }}</td>
            <td class="text-nowrap">
              <ul class="list-unstyled">
                <li>{{ elder.EldersServiceItems }}</li>
              </ul>
            </td>
            <td class="text-nowrap">{{ elder.EldersBody }}</td>
            <td class="text-center text-nowrap">
              <button
                class="btn btn-primary-soft text-primary"
                @click="editElder(elder.x.Id)"
              >
                <i class="fas fa-pen"></i> 編輯
              </button>
            </td>
            <!-- <td class="text-center text-nowrap">
              <button
                class="btn btn-primary-soft text-primary"
                @click="delElder(elder.x.Id)"
              >
                <i class="fas fa-trash-alt"></i> 刪除
              </button>
            </td> -->
          </tr>
        </tbody>
      </table>
    </div>
    <modal-family-manage
      ref="familyModal"
      :is-new="isNew"
      :user-id="userId"
      @get-elders-data="getEldersData()"
    ></modal-family-manage>
  </div>
</template>

<script>
/* global $ */
import ModalFamilyManage from '@/components/ModalFamilyManage.vue';
export default {
  data() {
    return {
      isLoading: false,
      isNew: false, //使用者的操作，是新增還是編輯
      elders: [],
      userId: ''
    };
  },
  created() {
    this.getEldersData();
  },
  components: {
    ModalFamilyManage
  },
  methods: {
    getEldersData() {
      //取得所有病患資料
      const vm = this;
      vm.isLoading = true;
      vm.userId = localStorage.getItem('userId');
      const api = `${process.env.VUE_APP_APIPATH}GetElders/?id=${vm.userId}`;

      vm.$http
        .get(api)
        .then(res => {
          // console.log('家屬管理', res);
          vm.isLoading = false;
          vm.elders = res.data.elders;
        })
        .catch(err => {
          console.log(err);
        });
    },
    addElder() {
      $('#familyManage').modal('show');
      this.isNew = true;
      this.$refs.familyModal.addElder();
    },
    editElder(ElderId) {
      $('#familyManage').modal('show');
      this.isNew = false;
      this.$refs.familyModal.getElderData(ElderId);
    }

    // delElder(elderId) {
    //   const vm = this;
    //   vm.isLoading = true;

    //   const api = `${process.env.VUE_APP_APIPATH}DeleteElder?id=${elderId}`;

    //   vm.$http
    //     .delete(api)
    //     .then(res => {
    //       if (res.data.result == '刪除成功') {
    //         vm.$swal({
    //           toast: true,
    //           position: 'top-end',
    //           showConfirmButton: false,
    //           timer: 3000,
    //           timerProgressBar: false,
    //           onOpen: toast => {
    //             toast.addEventListener('mouseenter', vm.$swal.stopTimer);
    //             toast.addEventListener('mouseleave', vm.$swal.resumeTimer);
    //           },
    //           icon: 'success',
    //           title: `已成功刪除照護對象`
    //         });

    //         vm.getEldersData();
    //         vm.isLoading = false;
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }
};
</script>
