<template>
  <div>
    <div
      class="banner d-flex justify-content-center align-items-center text-white"
    ></div>
    <!-- 照服員 -->
    <div class="container py-5">
      <router-link to="/searchCares">回上一頁</router-link>

      <div class="row">
        <div class="col-12 col-md-8">
          <div class="bg-white p-4" style="border-radius: 10px">
            <h4 class="my-3">照服員基本資料</h4>
            <div class="基本資料 d-flex mb-4">
              <img
                width="120"
                height="120"
                src="https://attach.setn.com/newsimages/2020/08/02/2697335-PH.jpg"
                alt="..."
                class="rounded-circle"
              />
              <div class="ml-3">
                <p>
                  超過十年的照顧經驗，人稱亞洲照顧王。沒有我不能駕馭的病患
                  或老人，請放心交給我超過十年的照顧經驗，人稱亞洲照顧王。沒有我不能駕馭的病患
                  或老人，請放心交給我。
                </p>

                <i class="fas fa-map-marker-alt text-primary"></i>
                服務地點：高雄市 前鎮區、三民區、苓雅區、小港區<br />
                <i class="far fa-clock text-primary"></i>
                服務時段：傍晚(15:00-23:00)
              </div>
            </div>
            <hr />
            <div class="相關資格 mb-4">
              <h5 class="mb-3">相關資格</h5>
              <ul class="list-unstyled ml-4">
                <li>
                  <i class="fas fa-check text-primary mr-2"></i>照顧服務員證照
                </li>
                <li>
                  <i class="fas fa-check text-primary mr-2"></i>照服員結業證書
                </li>
                <li>
                  <i class="fas fa-check text-primary mr-2"></i
                  >體檢表(含B肝表面抗原、胸部Ｘ光)
                </li>
              </ul>
            </div>
            <div class="服務項目 mb-4">
              <h5 class="mb-3">服務項目</h5>
              <ul class="row no-gutters ml-4 list-unstyled">
                <li class="col-12 col-md-6 mb-2">
                  <i class="fas fa-check-circle text-primary"></i> 協助如廁
                </li>
                <li class="col-12 col-md-6 mb-2">
                  <i class="fas fa-check-circle text-primary"></i>
                  協助進食、用藥（按醫囑給藥）
                </li>
                <li class="col-12 col-md-6 mb-2">
                  <i class="fas fa-check-circle text-primary"></i> 代購物品
                </li>
                <li class="col-12 col-md-6 mb-2">
                  <i class="fas fa-check-circle text-primary"></i>
                  備餐（限被照顧者及其伴侶）
                </li>
                <li class="col-12 col-md-6 mb-2">
                  <i class="fas fa-check-circle text-primary"></i>
                  身心靈陪伴及安全維護
                </li>
                <li class="col-12 col-md-6 mb-2">
                  <i class="fas fa-check-circle text-primary"></i>
                  環境整理、洗衣（限被照顧者）
                </li>
              </ul>
            </div>
            <hr />
            <div class="評價">
              <div class="d-flex mb-2">
                <h5 class="mr-3">10 則評價</h5>
              </div>
              <div style="max-height: 200px;overflow-y: auto">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex align-baseline border-bottom mb-2">
                      <h6>謝先生 的家屬</h6>
                      <div class="rating ml-3">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                      </div>
                    </div>
                    <p class="mb-0">
                      專業不足可以學習，但態度永遠是進步的動力，虛心求教，觀我學習，以同理，愛心，耐心服務，才是專業的一環，也是作為居服師成功的典範!
                    </p>
                  </div>
                </div>
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex align-baseline border-bottom mb-2">
                      <h6>謝先生 的家屬</h6>
                      <div class="rating ml-3">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                      </div>
                    </div>
                    <p class="mb-0">
                      專業不足可以學習，但態度永遠是進步的動力，虛心求教，觀我學習，以同理，愛心，耐心服務，才是專業的一環，也是作為居服師成功的典範!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mt-3 mt-md-0">
          <div class="bg-white p-4" style="border-radius: 10px">
            <h3>預約服務</h3>
            <p class="h5">$1,000 / 日</p>
            <form class="mt-4">
              <div class="form-row">
                <div class="form-group col-6">
                  <label for="inputEmail4">開始服務日期</label>
                  <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="form-group col-6">
                  <label for="inputPassword4">結束服務日期</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                  />
                </div>
              </div>
            </form>
            <p class="text-secondary h5 mb-5">$1,000 元 * 4 日 = 4,000元</p>
            <a
              href="chat.html"
              class="btn btn-primary-soft text-primary btn-lg btn-block"
              >傳送訊息 <i class="fas fa-comment-dots"></i
            ></a>
            <button
              class="btn btn-primary btn-lg btn-block"
              data-toggle="modal"
              data-target="#bookingCareer"
            >
              預約日照服務
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="bookingCareer"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content radius-4">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="modal-body">
            <div id="app">
              <form-wizard
                :title="title"
                :subtitle="subtitle"
                :color="color"
                :next-button-text="nextButtonText"
                :back-button-text="backButtonText"
                :finish-button-text="finishButtonText"
                @on-complete="onComplete"
              >
                <tab-content title="服務對象基本資料">
                  <div class="row justify-content-center mt-4">
                    <div class="col-12 col-lg-6">
                      <h4 class="mb-3">被服務對象基本資料</h4>
                      <form>
                        <div class="form-group">
                          <label for="userName">服務對象姓名</label>
                          <input
                            type="text"
                            class="form-control"
                            id="userName"
                            v-model="userName"
                            placeholder="請輸入被服務對象姓名"
                          />
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="sex">性別</label>
                            <select id="sex" class="form-control" v-model="sex">
                              <option selected>請選擇</option>
                              <option value="man">男</option>
                              <option value="woman">女</option>
                            </select>
                          </div>
                          <div class="form-group col-md-6">
                            <label for="age">年齡：</label>
                            <input
                              type="number"
                              class="form-control"
                              id="age"
                              placeholder="請輸入年齡"
                            />
                          </div>
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="height">身高：</label>
                            <input
                              type="number"
                              class="form-control"
                              id="height"
                              placeholder="請輸入身高"
                            />
                          </div>
                          <div class="form-group col-md-6">
                            <label for="bodyWeight">體重：</label>
                            <input
                              type="number"
                              class="form-control"
                              id="bodyWeight"
                              placeholder="請輸入體重"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="col-12 col-lg-6">
                      <h4 class="mb-3">照護地點</h4>
                      <div
                        class="custom-control custom-radio custom-control-inline"
                      >
                        <input
                          type="radio"
                          id="customRadioInline1"
                          name="customRadioInline1"
                          class="custom-control-input"
                          checked
                        />
                        <label
                          class="custom-control-label"
                          for="customRadioInline1"
                          >居家照顧</label
                        >
                      </div>
                      <div
                        class="custom-control custom-radio custom-control-inline"
                      >
                        <input
                          type="radio"
                          id="customRadioInline2"
                          name="customRadioInline1"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="customRadioInline2"
                          >醫院照護</label
                        >
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">照護地址：</label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="請輸入照護地址"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                  </div>
                </tab-content>
                <tab-content title="需服務項目">
                  <div class="row mt-4">
                    <div class="col-md-6">
                      <h4 class="mb-4">服務對象身體狀況</h4>
                      <div class="row">
                        <ul class="row no-gutters ml-4 list-unstyled">
                          <li class="col-12 col-md-6 mb-2">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="conditions_01"
                              />
                              <label
                                class="custom-control-label"
                                for="conditions_01"
                                >糖尿病</label
                              >
                            </div>
                          </li>
                          <li class="col-12 col-md-6 mb-2">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="conditions_02"
                              />
                              <label
                                class="custom-control-label"
                                for="conditions_02"
                                >骨折</label
                              >
                            </div>
                          </li>
                          <li class="col-12 col-md-6 mb-2">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="conditions_03"
                              />
                              <label
                                class="custom-control-label"
                                for="conditions_03"
                                >高血壓</label
                              >
                            </div>
                          </li>
                          <li class="col-12 col-md-6 mb-2">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="conditions_04"
                              />
                              <label
                                class="custom-control-label"
                                for="conditions_04"
                                >身心障礙</label
                              >
                            </div>
                          </li>
                          <li class="col-12 col-md-6 mb-2">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="conditions_05"
                              />
                              <label
                                class="custom-control-label"
                                for="conditions_05"
                                >行動不便</label
                              >
                            </div>
                          </li>
                          <li class="col-12 col-md-6 mb-2">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="conditions_06"
                              />
                              <label
                                class="custom-control-label"
                                for="conditions_06"
                                >精神疾病</label
                              >
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <h4 class="mb-3">
                        <i class="fas fa-wheelchair text-primary"></i> 已有設備
                      </h4>
                      <div class="row">
                        <ul class="row no-gutters ml-4 list-unstyled">
                          <li class="col-12 col-md-6 mb-2">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="equipment_01"
                              />
                              <label
                                class="custom-control-label"
                                for="equipment_01"
                                >成人紙尿布</label
                              >
                            </div>
                          </li>
                          <li class="col-12 col-md-6 mb-2">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="equipment_02"
                              />
                              <label
                                class="custom-control-label"
                                for="equipment_02"
                                >輪椅</label
                              >
                            </div>
                          </li>
                          <li class="col-12 col-md-6 mb-2">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="equipment_03"
                              />
                              <label
                                class="custom-control-label"
                                for="equipment_03"
                                >拐杖</label
                              >
                            </div>
                          </li>
                          <li class="col-12 col-md-6 mb-2">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="equipment_04"
                              />
                              <label
                                class="custom-control-label"
                                for="equipment_04"
                                >夜壺</label
                              >
                            </div>
                          </li>
                          <li class="col-12 col-md-6 mb-2">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="equipment_05"
                              />
                              <label
                                class="custom-control-label"
                                for="equipment_05"
                                >輔助器</label
                              >
                            </div>
                          </li>
                          <li class="col-12 col-md-6 mb-2">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="equipment_06"
                              />
                              <label
                                class="custom-control-label"
                                for="equipment_06"
                                >護具</label
                              >
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-md-12">
                      <h4 class="mb-3">填寫需服務項目</h4>
                      <div class="row">
                        <ul class="row no-gutters ml-4 list-unstyled">
                          <li class="col-12 col-md-6 mb-2">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="needService_01"
                                value="協助如廁"
                                v-model="serviceItem"
                              />
                              <label
                                class="custom-control-label"
                                for="needService_01"
                                >協助如廁</label
                              >
                            </div>
                          </li>
                          <li class="col-12 col-md-6 mb-2">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="needService_02"
                                value="協助進食"
                                v-model="serviceItem"
                              />
                              <label
                                class="custom-control-label"
                                for="needService_02"
                                >協助進食、用藥（按醫囑給藥）</label
                              >
                            </div>
                          </li>
                          <li class="col-12 col-md-6 mb-2">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="needService_03"
                              />
                              <label
                                class="custom-control-label"
                                for="needService_03"
                                >代購物品</label
                              >
                            </div>
                          </li>
                          <li class="col-12 col-md-6 mb-2">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="needService_04"
                              />
                              <label
                                class="custom-control-label"
                                for="needService_04"
                                >備餐（限被照顧者及其伴侶）</label
                              >
                            </div>
                          </li>
                          <li class="col-12 col-md-6 mb-2">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="needService_05"
                              />
                              <label
                                class="custom-control-label"
                                for="needService_05"
                                >身心靈陪伴及安全維護</label
                              >
                            </div>
                          </li>
                          <li class="col-12 col-md-6 mb-2">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="needService_06"
                              />
                              <label
                                class="custom-control-label"
                                for="needService_06"
                                >環境整理、洗衣（限被照顧者）</label
                              >
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </tab-content>
                <tab-content title="緊急聯絡人資訊">
                  <div class="row justify-content-center mt-4">
                    <div class="col-8">
                      <h4 class="mb-3">緊急聯絡人資訊</h4>
                      <form class="row">
                        <div class="form-row col-12 col-md-6 mb-2">
                          <label for="urgentName">緊急聯絡姓名</label>
                          <input
                            type="text"
                            class="form-control"
                            id="urgentName"
                            placeholder="請輸入緊急聯絡姓名"
                          />
                        </div>
                        <div class="form-row col-12 col-md-6 mb-2">
                          <label for="urgentRelationship"
                            >與被服務對象的關係</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="urgentRelationship"
                            placeholder="請輸入關係"
                          />
                        </div>
                        <div class="form-group col-12 col-md-12 ">
                          <label for="urgentTel">緊急聯絡電話</label>
                          <input
                            type="number"
                            class="form-control"
                            id="urgentTel"
                            placeholder="緊急聯絡電話"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </tab-content>
              </form-wizard>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary-soft text-primary"
              data-dismiss="modal"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//global registration

export default {
  data() {
    return {
      userName: '',
      sex: '',
      serviceItem: []
    };
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    nextButtonText: {
      type: String,
      default: '下一步'
    },
    backButtonText: {
      type: String,
      default: '上一步'
    },
    finishButtonText: {
      type: String,
      default: '填寫完畢'
    },
    stepSize: {
      type: String,
      default: 'xs',
      validator: value => {
        let acceptedValues = ['xs', 'sm', 'md', 'lg'];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    /***
     *  Sets validation (on/off) for back button. By default back button ignores validation
     */
    validateOnBack: Boolean,
    /***
     * Applies to text, border and circle
     */
    color: {
      type: String,
      default: '#6A9232' //circle, border and text color
    },
    /***
     *  Is set to current step and text when beforeChange function fails
     */
    errorColor: {
      type: String,
      default: '#fff'
    },
    /**
     * Can take one of the following values: 'circle|square|tab`
     */
    shape: {
      type: String,
      default: 'circle'
    },
    /**
     * name of the transition when transition between steps
     */
    transition: {
      type: String,
      default: '' //name of the transition when transition between steps
    },
    /***
     * Index of the initial tab to display
     */
    startIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onComplete: function() {
      alert('成功ㄌ');
    }
  }
};
</script>

<style lang="scss">
body {
  background-color: #f6f3ee;
}
.banner {
  background-color: gray;
  height: 250px;
  // background-image: url(images/2886653_s.jpg);
  background-position: center;
  background-size: cover;
}
</style>
