<template>
  <div>
    <div class="card shadow-sm">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs" id="nav-tab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="nav-orderWaitconfirm-tab"
              data-toggle="tab"
              href="#orderWaitconfirm"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
              >待照服員確認中
              <span class="badge badge-pill badge-secondary text-white"
                >2</span
              ></a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="nav-orderProcess-tab"
              data-toggle="tab"
              href="#orderProcess"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
              >訂單處理中
              <span class="badge badge-pill badge-secondary text-white"
                >2</span
              ></a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="nav-orderService-tab"
              data-toggle="tab"
              href="#orderService"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
              >服務進行中
              <span class="badge badge-pill badge-secondary text-white"
                >2</span
              ></a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="nav-orderEvaluate-tab"
              data-toggle="tab"
              href="#orderEvaluate"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
              >待評價中
              <span class="badge badge-pill badge-secondary text-white"
                >2</span
              ></a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="nav-orderFinish-tab"
              data-toggle="tab"
              href="#orderFinish"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
              >已完成</a
            >
          </li>
        </ul>
      </div>
      <div class="card-body">
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="orderWaitconfirm"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div class="table-responsive">
              <table class="table table-radius">
                <tr class="table-light">
                  <th scope="col">被服務對象</th>
                  <th scope="col">照服人員</th>
                  <th scope="col">服務時段</th>
                  <th scope="col">訂單金額</th>
                  <th scope="col">查看訂單詳細</th>
                  <th scope="col">取消訂單</th>
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
                        data-target="#orderDetail"
                      >
                        訂單細節
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-primary">
                        取消訂單
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="orderProcess"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
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
                    <td>
                      <button type="button" class="btn btn-primary">
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
                      <button type="button" class="btn btn-primary">
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
          </div>
          <div
            class="tab-pane fade"
            id="orderService"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
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
                      <button
                        type="button"
                        class="btn btn-primary-soft text-primary"
                      >
                        終止契約
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="orderEvaluate"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <table class="table table-radius">
              <tr class="table-light">
                <th scope="col">被服務對象</th>
                <th scope="col">照服人員</th>
                <th scope="col">服務時段</th>
                <th scope="col">訂單金額</th>
                <th scope="col">查看照護紀錄</th>
                <th scope="col">查看訂單詳細</th>
                <th scope="col">填寫評價</th>
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
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#evaluation"
                    >
                      填寫評價
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
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#evaluation"
                    >
                      填寫評價
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="tab-pane fade"
            id="orderFinish"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <table class="table table-radius">
              <tr class="table-light">
                <th scope="col">被服務對象</th>
                <th scope="col">照服人員</th>
                <th scope="col">服務時段</th>
                <th scope="col">訂單金額</th>
                <th scope="col">訂單狀態</th>
                <th scope="col">查看照護紀錄</th>
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
                  <td>已完成</td>
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
                  <td>已取消</td>
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
                  <td>照服員拒收訂單</td>
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
