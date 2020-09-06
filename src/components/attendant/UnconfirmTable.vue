<template>
  <div>
    <div class="table-responsive-md">
      <table class="table table-radius">
        <tr class="table-light">
          <th class="text-nowrap" scope="col">家屬姓名</th>
          <th class="text-nowrap" scope="col">下單日期</th>
          <th class="text-nowrap" scope="col">服務時段</th>
          <th class="text-nowrap" scope="col">訂單金額</th>
          <th class="text-nowrap" scope="col">查看並確認訂單</th>
        </tr>

        <tbody>
          <tr>
            <td class="text-center text-nowrap">王伯伯</td>
            <td class="text-nowrap">2020-08-13 19:34</td>
            <td class="text-nowrap">
              <p>
                2020-08-15 <br />
                2020-08-16
              </p>
            </td>
            <td class="text-nowrap">4,000</td>
            <td class="text-nowrap">
              <button
                type="button"
                class="btn btn-primary-soft text-primary"
                data-toggle="modal"
                @click="openModal()"
              >
                查看並確認訂單
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <modal-order-detail></modal-order-detail>
  </div>
</template>

<script>
/* global $ */
import ModalOrderDetail from '@/components/ModalOrderDetail.vue';
export default {
  components: {
    ModalOrderDetail
  },
  methods: {
    openModal() {
      $('#orderDetail').modal('show');
    }
  }
};
</script>
