<template>
  <div class="table-responsive">
    <table class="table table-radius">
      <tr class="table-light">
        <th scope="col">被服務對象</th>
        <th scope="col">照服人員</th>
        <th scope="col">服務時段</th>
        <th scope="col">訂單金額</th>
        <th scope="col">查看照護紀錄</th>
        <th scope="col">查看訂單詳細</th>
        <th scope="col">終止契約</th>
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
          <td>
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-toggle="modal"
              data-target="#orderCareRecord"
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
          <td>
            <button type="button" class="btn btn-primary-soft text-primary">
              終止契約
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
