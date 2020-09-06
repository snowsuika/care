<template>
  <div
    class="modal fade"
    id="orderDetail"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
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
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th>訂單狀態</th>
                <td colspan="3">待家屬付款中</td>
              </tr>
              <tr>
                <th>訂單金額</th>
                <td colspan="3">$1,000 * 4日 = 4,000</td>
              </tr>
              <tr>
                <th>下單時間</th>
                <td>2020-08-05 18:34</td>
                <th>服務期間</th>
                <td>2020-08-10 ~ 2020-08-13</td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td>尚未付款</td>
                <th>雇用照服員</th>
                <td>張小姐 <a href="career.html">檢視照服員個人資料</a></td>
              </tr>
              <tr>
                <th>付款方式</th>
                <td>尚未付款</td>
                <th></th>
                <td></td>
              </tr>
              <tr>
                <th>訂單備註</th>
                <td colspan="3">
                  我 9:00 要上班，所以需要您於 9:00
                  之前到。另外提醒一下爺爺對海鮮過敏
                </td>
              </tr>
            </tbody>
          </table>
          <h4 class="mb-3"><i class="fas fa-house-user"></i> 家屬資料</h4>
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th>被服務對象姓名</th>
                <td>陳珼召</td>
                <th>年齡</th>
                <td>87</td>
              </tr>
              <tr>
                <th>性別</th>
                <td>男</td>
                <th>緊急聯絡人</th>
                <td>陳家淑</td>
              </tr>
              <tr>
                <th>身高</th>
                <td>178 公分</td>
                <th>與被照顧對象關係</th>
                <td>祖父女</td>
              </tr>
              <tr>
                <th>體重</th>
                <td>87 公斤</td>
                <th>緊急聯絡電話</th>
                <td>0912-345678</td>
              </tr>
              <tr>
                <th>照護地點</th>
                <td colspan="3">(居家照顧) 高雄市前鎮區復興四路12號</td>
              </tr>
              <tr>
                <th>身體狀況</th>
                <td colspan="3">骨折、尿失禁</td>
              </tr>
              <tr>
                <th>家中已有設備</th>
                <td colspan="3">拐杖、成人紙尿布</td>
              </tr>
              <tr>
                <th>需服務項目</th>
                <td colspan="3">身心靈陪伴及安全維護、協助如廁</td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-center">
            <button
              class="btn btn-primary-soft text-primary mr-2"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#rejectOrder"
            >
              拒絕此訂單
            </button>
            <button class="btn btn-primary">
              確認接收此單
            </button>
          </div>
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
