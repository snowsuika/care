<template>
  <div class="table-responsive">
    <table class="table table-radius">
      <tr class="table-light">
        <th class="text-nowrap" scope="col">家屬姓名</th>
        <th class="text-nowrap" scope="col">下單日期</th>
        <th class="text-nowrap" scope="col">服務時段</th>
        <th class="text-nowrap" scope="col">訂單金額</th>
        <th class="text-nowrap" scope="col">訂單狀態</th>
        <th class="text-nowrap" scope="col">查看照護紀錄</th>
        <th class="text-nowrap" scope="col">查看訂單詳細</th>
      </tr>

      <tbody>
        <tr>
          <td class="text-center text-nowrap">王伯伯</td>
          <td class="text-nowrap">張照服</td>
          <td class="text-nowrap">
            <p>
              2020-08-15 <br />
              2020-08-16
            </p>
          </td>
          <td class="text-nowrap">4,000</td>
          <td class="text-nowrap">已拒絕</td>
          <td class="text-nowrap">
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              data-target="#careRecord"
            >
              照護紀錄
            </button>
          </td>
          <td class="text-nowrap">
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
          <td>完成訂單</td>
          <td>
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              data-target="#careRecord"
            >
              照護紀錄
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
          <td>家屬<br />終止契約</td>
          <td>
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              data-target="#careRecord"
            >
              照護紀錄
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
          <td>照服員<br />終止契約</td>
          <td>
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              data-target="#careRecord"
            >
              照護紀錄
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
