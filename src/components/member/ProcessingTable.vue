<template>
  <div class="table-responsive">
    <loading :active.sync="isLoading"></loading>

    <form
      method="post"
      id="forr"
      ref="forr"
      action="https://ccore.spgateway.com/MPG/mpg_gateway"
    >
      <input
        name="MerchantID"
        id=""
        class="btn btn-primary"
        type="hidden"
        value="MS113893343"
      />
      <input
        name="TradeInfo"
        id=""
        class="btn btn-primary"
        type="hidden"
        value="ef63e0f893ccd9b7e6a88ed2cdf7b6d8e6692d8bff2883ff0d2e96b9f7893a2ed514532f99bc12729632aa21d9061bd738f889d6c94d8016f6cfb19607e7a350d2c724d4768c8132516e9cb4c9aebee1c28b5a9a53292961654154c6552033345ab0cec48ee8b7adcb681bf1a9149090b3056164fd2ffd6d715e061eb9af9e9e24dbee9c9c4ab004a17601a2eb78d689366068b6f4df2b2dc5ea6e671b135bd543165d30fcefb30691239d6998dddaf5a8e7cb7b2deaf8cbe455d672a5b890a45749772f57f01023a03307951134dd9d861336cae474fcbefdb6db1ea66ccb1257aab53c735a6b0243670a196632cf456a0ae5226f8ce41474c9d3abac3eca5a346e1d5097f8c4bcde58e7b1369a31b976e74b2cd7668c79f01b9321b3934f77b132bac6833f1f2029314f0fa2d2244bd0398cfd985719f891769a5bd7059891aebf246d0288fde33b1c11d75a460a172babdf43da595eee5b5ec0103feb9b0f"
      />
      <input
        name="TradeSha"
        id=""
        class="btn btn-primary"
        type="hidden"
        value="5FD46CABA02C9E56A1F952598FAEA906C3575D96AD570E4BDC84D8EB844F7531"
      />
      <input
        name="Version"
        id=""
        class="btn btn-primary"
        type="hidden"
        value="1.5"
      />
      <input
        name=""
        id="ss"
        ref="subutn"
        class="btn btn-primary"
        type="submit"
        value="go"
      />
    </form>

    <table class="table table-radius">
      <tr class="table-light">
        <th scope="col">被服務對象</th>
        <th scope="col">照服人員</th>
        <th scope="col">服務時段</th>
        <th scope="col">訂單金額</th>
        <th scope="col">訂單狀態</th>
        <th scope="col">可執行動作</th>
        <th scope="col">查看訂單詳細</th>
      </tr>

      <tbody>
        <tr>
          <td class="text-center">王伯伯</td>
          <td>張照服</td>
          <td>
            <p>
              2020-08-15 <br />
              2020-08-16
            </p>
          </td>
          <td>4,000</td>
          <td>未付款</td>
          <td>
            <button type="button" class="btn btn-primary" @click="seadToback()">
              付款
            </button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              data-target="#orderDetail"
            >
              訂單細節
            </button>
          </td>
        </tr>
        <tr>
          <td class="text-center">王伯伯</td>
          <td>張照服</td>
          <td>
            <p>
              2020-08-15 <br />
              2020-08-16
            </p>
          </td>
          <td>4,000</td>
          <td>已付款</td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              @click="cancelOrder(8)"
            >
              取消訂單
            </button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              data-target="#orderDetail"
            >
              訂單細節
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// /* global $ */
export default {
  data() {
    return {
      isLoading: false,
      getData: {},
      resData: []
    };
  },
  created() {
    // const vm = this;
    // const api = `${process.env.VUE_APP_APIPATH}get?amount=123&ProductName=12`; //參數是訂單Id
    // // vm.isLoading = true;
    // vm.$http
    //   .get(api)
    //   .then(res => {
    //     console.log(res);
    //     vm.getData = res.data;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },
  methods: {
    seadToback() {
      const vm = this;

      const api = `http://careup.rocket-coding.com/SpgatewayPayBill`;
      vm.$http
        .post(api, {
          OrderId: '2'
        })
        .then(res => {
          console.log(res);
          // vm.resData = res.data;
          // console.log(vm.$refs.subutn);
          // $('#forr').trigger('submit');
          // $('#ss').trigger('click');
        })
        .catch(err => {
          console.log(err);
        });
    }

    // cancelOrder(orderId) {
    //   const vm = this;
    //   vm.isLoading = true;
    //   const api = `${process.env.VUE_APP_APIPATH}CancelOrder?Id=${orderId}`; //參數是訂單Id
    //   vm.$http
    //     .patch(api)
    //     .then(res => {
    //       console.log(res);

    //       vm.$swal({
    //         toast: true,
    //         position: 'top-end',
    //         showConfirmButton: false,
    //         timer: 3000,
    //         timerProgressBar: false,
    //         onOpen: toast => {
    //           toast.addEventListener('mouseenter', vm.$swal.stopTimer);
    //           toast.addEventListener('mouseleave', vm.$swal.resumeTimer);
    //         },
    //         icon: 'success',
    //         title: `${res.data.result}`
    //       });
    //       vm.isLoading = false;
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
    // pay() {
    //   var formData = new FormData();
    //   formData.append('MerchantID', 'MS113893343');
    //   formData.append(
    //     'TradeInfo',
    //     'ef63e0f893ccd9b7e6a88ed2cdf7b6d8e6692d8bff2883ff0d2e96b9f7893a2ed514532f99bc12729632aa21d9061bd794693905a731481e43265a83538aa3519666177f294efbc7b35f8023871cd546f9fcfea3a18a334749116eea8b518239ca862e0e2ae107958ce5264f051e2565d2ee64dde6ee8c5fa03246e9ecc7f703d429de60a33acecf91799912bbd2e961884e880f1d1eeeb1541fea26891c06f9948e0167b5814a836697b8f701fd5c2acc7203990398d6129df4b930c358a16119b5470b3d8f5829bb40a74822c5345b2a9df0c6e1e8dee0ee469ca6044c9f3c77fff705fc24f691ce4622d71e3d93ef01444213b15f3fad0873e777393a971577a3377129782bcebd573426aabd283e2afea8253c2b181ccdeb69898b75ecd952b4cc336b97a65fbcb90d2eb25ac7dc3ae2c6eab55fefae33bc6af8b005d97e3820c5e92edbd12c527e3011ecee33bf3224852edc4eadc4ee436dfc276e4e7550cf3132bc592f7efaf04d6f7360e78376369c9208ff24cddbc5e6ac6e86248a'
    //   );
    //   formData.append(
    //     'TradeSha',
    //     '519FE7370ED760F23CA54A7F73D0AE65AEB8B621592CB020DC84FC99A3FDB565'
    //   );
    //   formData.append('Version', '1.5');

    //   var xhr = new XMLHttpRequest();
    //   xhr.withCredentials = true;

    //   xhr.addEventListener('readystatechange', function() {
    //     if (this.readyState === 4) {
    //       console.log(this.responseText);
    //     }
    //   });

    //   xhr.open('POST', 'https://ccore.spgateway.com/MPG/mpg_gateway');
    //   xhr.setRequestHeader(
    //     'Cookie',
    //     'PHPSESSID=85268324b375859d54ca010a052beb74'
    //   );

    //   xhr.send(data);
    // }
  }
};
</script>
