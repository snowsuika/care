<template>
  <div
    class="modal fade"
    id="orderDetail"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <loading :active.sync="isLoading" loader="dots" color="#6A9232"></loading>
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
          <table class="table table-bordered" v-if="orderData">
            <tbody>
              <tr>
                <th class="bg-light text-nowrap">訂單狀態</th>
                <td colspan="3">
                  {{ orderData.OrderStatus }}
                </td>
              </tr>
              <tr v-if="orderData.Cancel !== null">
                <th class="bg-light text-nowrap">拒接理由</th>
                <td colspan="3">
                  {{ orderData.Cancel }}
                </td>
              </tr>

              <tr>
                <th class="bg-light text-nowrap">訂單金額</th>
                <td colspan="3">{{ orderData.Total | currency }}</td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap ">下單時間</th>
                <td>
                  {{ orderData.initTime }}
                </td>
                <th class="bg-light text-nowrap">服務期間</th>
                <td>
                  {{ orderData.StartDate.substr(0, 10) }}~
                  {{ orderData.EndDate.substr(0, 10) }}
                </td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap">付款方式</th>
                <td>信用卡</td>
                <th class="bg-light text-nowrap">雇用時段</th>
                <td>{{ attendantsData.AttendantsServiceTime }}</td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap">付款狀態</th>
                <td>
                  {{
                    orderData.Status == '11' || orderData.Status == '10'
                      ? '未付款'
                      : '已付款'
                  }}
                </td>
                <th class="bg-light text-nowrap">雇用照服員</th>
                <td>
                  {{ attendantsData.Name }}
                  <router-link to="/carePage/Attendants.Id"
                    >檢視照服員個人資料</router-link
                  >
                </td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap">訂單備註</th>
                <td colspan="3">
                  {{ orderData.Remark }}
                </td>
              </tr>
            </tbody>
          </table>
          <h4 class="mb-3"><i class="fas fa-house-user"></i> 家屬資料</h4>
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th class="bg-light text-nowrap">被服務對象姓名</th>
                <td>{{ elderData.Name }}</td>
                <th class="bg-light text-nowrap">年齡</th>
                <td>{{ elderData.Age }}</td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap">性別</th>
                <td>{{ elderData.Gender == '1' ? '男' : '女' }}</td>
                <th class="bg-light text-nowrap">緊急聯絡人</th>
                <td>{{ elderData.Urgent }}</td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap">身高</th>
                <td>{{ elderData.Height }} 公分</td>
                <th class="bg-light text-nowrap">與被照顧對象關係</th>
                <td>{{ elderData.Relationship }}</td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap">體重</th>
                <td>{{ elderData.Weight }} 公斤</td>
                <th class="bg-light text-nowrap">緊急聯絡電話</th>
                <td>{{ elderData.Phone }}</td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap">照護地點</th>
                <td colspan="3">
                  ( {{ elderData.Place == '1' ? '居家照顧' : '醫院照護' }})
                  {{ elderData.Address }}
                </td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap">身體狀況</th>
                <td colspan="3">{{ elderData.EldersBody }}</td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap">家中已有設備</th>
                <td colspan="3">{{ elderData.EldersEquipment }}</td>
              </tr>
              <tr>
                <th class="bg-light text-nowrap">需服務項目</th>
                <td colspan="3">{{ elderData.EldersServiceItems }}</td>
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
      orderData: '',
      attendantsData: '',
      elderData: '',
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
          console.log('res.data', res.data);
          //訂單資訊
          vm.orderData = {
            OrderStatus: res.data.OrderStatus,
            initTime: res.data.initTime,
            ...res.data.order
          };
          //照服員資訊
          vm.attendantsData = {
            AttendantsService: res.data.AttendantsService,
            AttendantsServiceTime: res.data.AttendantsServiceTime,
            ...res.data.order.Attendants
          };
          //病患資訊
          vm.elderData = {
            EldersBody: res.data.EldersBody.toString(),
            EldersEquipment: res.data.EldersEquipment.toString(),
            EldersServiceItems: res.data.EldersServiceItems.toString(),

            ...res.data.order.Elders
          };

          vm.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
