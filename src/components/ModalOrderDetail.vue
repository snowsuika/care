<template>
  <div
    class="modal fade"
    id="orderDetail"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <loading :active.sync="isLoading"></loading>
    <div class="modal-dialog modal-lg">
      <div class="modal-content radius-2">
        <div class="modal-body p-4">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="mb-3"><i class="fas fa-file-alt"></i> 訂單資訊</h4>
          <table class="table table-bordered" v-if="orderData.Id">
            <tbody>
              <tr>
                <th class="bg-light text-nowrap">訂單狀態</th>
                <td colspan="3" class="text-danger">
                  (記得跟後端討論呈現方式){{ orderData.Status }}
                </td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap">訂單金額</th>
                <td colspan="3">{{ orderData.Total | currency }}</td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap ">下單時間</th>
                <td class=" text-danger">
                  {{ orderData.InitDate }}（再請後端幫忙）
                </td>
                <th class="bg-light text-nowrap">服務期間</th>
                <td>
                  {{ orderData.servicePeriod[0] }}<br />
                  {{
                    orderData.servicePeriod[orderData.servicePeriod.length - 1]
                  }}
                </td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap">付款狀態</th>
                <td>信用卡</td>
                <th class="bg-light text-nowrap">雇用照服員</th>
                <td>
                  {{ Attendants.Name }}
                  <router-link to="/carePage/Attendants.Id"
                    >檢視照服員個人資料</router-link
                  >
                </td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap">付款方式</th>
                <td>尚未付款</td>
                <th></th>
                <td></td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap">訂單備註</th>
                <td colspan="3">
                  {{ orderData.Comment }}
                </td>
              </tr>
            </tbody>
          </table>
          <h4 class="mb-3"><i class="fas fa-house-user"></i> 家屬資料</h4>
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th class="bg-light text-nowrap">被服務對象姓名</th>
                <td>{{ Elders.Name }}</td>
                <th class="bg-light text-nowrap">年齡</th>
                <td>{{ Elders.Age }}</td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap">性別</th>
                <td>{{ Elders.Gender == '1' ? '男' : '女' }}</td>
                <th class="bg-light text-nowrap">緊急聯絡人</th>
                <td>{{ Elders.Urgent }}</td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap">身高</th>
                <td>{{ Elders.Height }} 公分</td>
                <th class="bg-light text-nowrap">與被照顧對象關係</th>
                <td>{{ Elders.Relationship }}</td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap">體重</th>
                <td>{{ Elders.Weight }} 公斤</td>
                <th class="bg-light text-nowrap">緊急聯絡電話</th>
                <td>{{ Elders.Phone }}</td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap">照護地點</th>
                <td colspan="3">{{ Elders.Place }}{{ Elders.Address }}</td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap">身體狀況</th>
                <td colspan="3">{{ Elders.body }}</td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap">家中已有設備</th>
                <td colspan="3">{{ Elders.equipment }}</td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap">需服務項目</th>
                <td colspan="3">{{ Elders.serviceItems }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary-soft text-primary"
            data-dismiss="modal"
          >
            關閉視窗
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderData: {
        servicePeriod: []
      },
      Attendants: {},
      Elders: {},
      identity: '',
      isLoading: false
    };
  },

  methods: {
    getOrderData(orderId, identity) {
      const vm = this;

      vm.isLoading = true;
      vm.identity = identity;
      const api = `${process.env.VUE_APP_APIPATH}CheckOrder?id=${orderId}`;
      vm.$http
        .get(api)
        .then(res => {
          console.log(res);
          vm.orderData = res.data.order;
          vm.Attendants = res.data.order.Attendants;
          vm.Elders = res.data.order.Elders;
          vm.Elders.body = res.data.EldersBody.toString();
          vm.Elders.equipment = res.data.EldersEquipment.toString();
          vm.Elders.serviceItems = res.data.EldersServiceItems.toString();
          vm.orderData.servicePeriod = res.data.date;

          vm.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
