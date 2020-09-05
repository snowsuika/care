<template>
  <div
    class="modal fade"
    id="familyManage"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content radius-4">
        <div class="modal-body">
          <div style="padding-bottom:20px">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div id="app">
            <form-wizard
              shape="tab"
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
                          v-model="familyInfo.name"
                          placeholder="請輸入被服務對象姓名"
                        />
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="sex">性別</label>
                          <select id="sex" class="form-control">
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
                        id="place_home"
                        name="customRadioInline1"
                        class="custom-control-input"
                        value="home"
                        v-model="familyInfo.place"
                        checked
                      />
                      <label class="custom-control-label" for="place_home"
                        >居家照顧</label
                      >
                    </div>
                    <div
                      class="custom-control custom-radio custom-control-inline"
                    >
                      <input
                        type="radio"
                        id="place_hospital"
                        value="hospital"
                        v-model="familyInfo.place"
                        name="customRadioInline1"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="place_hospital"
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
                              value="01"
                              v-model="familyInfo.condition"
                              id="condition01"
                            />
                            <label
                              class="custom-control-label"
                              for="condition01"
                              >糖尿病</label
                            >
                          </div>
                        </li>
                        <li class="col-12 col-md-6 mb-2">
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              v-model="familyInfo.condition"
                              value="02"
                              id="condition02"
                            />
                            <label
                              class="custom-control-label"
                              for="condition02"
                              >骨折</label
                            >
                          </div>
                        </li>
                        <li class="col-12 col-md-6 mb-2">
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              v-model="familyInfo.condition"
                              value="03"
                              id="condition03"
                            />
                            <label
                              class="custom-control-label"
                              for="condition03"
                              >高血壓</label
                            >
                          </div>
                        </li>
                        <li class="col-12 col-md-6 mb-2">
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              v-model="familyInfo.condition"
                              value="04"
                              id="condition04"
                            />
                            <label
                              class="custom-control-label"
                              for="condition04"
                              >身心障礙</label
                            >
                          </div>
                        </li>
                        <li class="col-12 col-md-6 mb-2">
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              v-model="familyInfo.condition"
                              id="condition05"
                              value="05"
                            />
                            <label
                              class="custom-control-label"
                              for="condition05"
                              >行動不便</label
                            >
                          </div>
                        </li>
                        <li class="col-12 col-md-6 mb-2">
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              v-model="familyInfo.condition"
                              value="06"
                              id="condition06"
                            />
                            <label
                              class="custom-control-label"
                              for="condition06"
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
                      <div class="form-row col-12 col-md-12">
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
</template>

<script>
/* global $ */
export default {
  data() {
    return {
      familyInfo: {
        name: '',
        sex: '',
        age: '',
        height: '',
        weight: '',
        place: '',
        address: '',
        condition: [],
        equipment: [],
        serviceItem: [],
        emergencyContact: '',
        emergencyRelationship: '',
        emergencyphone: ''
      }
    };
  },
  props: {
    // 步驟套件
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
      default: '確定儲存'
    },
    stepSize: {
      type: String,
      default: 'xs',
      validator: value => {
        let acceptedValues = ['xs', 'sm', 'md', 'lg'];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    validateOnBack: Boolean,
    color: {
      type: String,
      default: '#6A9232'
    },

    startIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onComplete: function() {
      this.$swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
        onOpen: toast => {
          toast.addEventListener('mouseenter', this.$swal.stopTimer);
          toast.addEventListener('mouseleave', this.$swal.resumeTimer);
        },
        icon: 'success',
        title: '已儲存'
      });
      $('#familyManage').modal('hide');
    }
  }
};
</script>
