<template>
  <div class="table-responsive">
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
          <td><button type="button" class="btn btn-primary">付款</button></td>
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
            <button type="button" class="btn btn-primary">取消訂單</button>
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
