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
                      <validation-provider
                        rules="required"
                        v-slot="{ errors, classes }"
                      >
                        <label for="userName"
                          ><span class="text-danger">*</span>
                          服務對象姓名</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          :class="classes"
                          id="userName"
                          name="服務對象姓名"
                          v-model.trim="familyInfo.name"
                          placeholder="請輸入被服務對象姓名"
                        />
                        <div v-if="errors[0]" class="invalid-feedback">
                          {{ errors[0] }}
                        </div>
                      </validation-provider>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="sex"
                          ><span class="text-danger">*</span> 性別</label
                        >
                        <select
                          id="sex"
                          class="form-control"
                          v-model="familyInfo.sex"
                        >
                          <option value="man">男</option>
                          <option value="woman">女</option>
                        </select>
                      </div>
                      <div class="form-group col-md-6">
                        <validation-provider
                          rules="required|numeric"
                          v-slot="{ errors, classes }"
                        >
                          <label for="age"
                            ><span class="text-danger">*</span> 年齡：</label
                          >
                          <input
                            type="number"
                            class="form-control"
                            :class="classes"
                            v-model.number="familyInfo.age"
                            id="age"
                            name="年齡"
                            placeholder="請輸入年齡"
                          />
                          <div v-if="errors[0]" class="invalid-feedback">
                            {{ errors[0] }}
                          </div>
                        </validation-provider>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <validation-provider
                          rules="required|numeric"
                          v-slot="{ errors, classes }"
                        >
                          <label for="height"
                            ><span class="text-danger">*</span> 身高：</label
                          >
                          <input
                            type="number"
                            class="form-control"
                            :class="classes"
                            v-model.number="familyInfo.height"
                            id="height"
                            name="身高"
                            placeholder="請輸入身高"
                          />
                          <div v-if="errors[0]" class="invalid-feedback">
                            {{ errors[0] }}
                          </div>
                        </validation-provider>
                      </div>
                      <div class="form-group col-md-6">
                        <validation-provider
                          rules="required|numeric"
                          v-slot="{ errors, classes }"
                        >
                          <label for="bodyWeight"
                            ><span class="text-danger">*</span> 體重：</label
                          >
                          <input
                            type="number"
                            class="form-control"
                            :class="classes"
                            v-model.number="familyInfo.weight"
                            id="bodyWeight"
                            name="體重"
                            placeholder="請輸入體重"
                          />
                          <div v-if="errors[0]" class="invalid-feedback">
                            {{ errors[0] }}
                          </div>
                        </validation-provider>
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
                      v-model.trim="familyInfo.place"
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
                    <validation-provider
                      rules="required"
                      v-slot="{ errors, classes }"
                    >
                      <label for="address"
                        ><span class="text-danger">*</span> 照護地址：</label
                      >
                      <input
                        type="email"
                        class="form-control"
                        :class="classes"
                        v-model.trim="familyInfo.address"
                        id="address"
                        name="照護地址"
                        placeholder="請輸入照護地址"
                        aria-describedby="emailHelp"
                      />
                      <div v-if="errors[0]" class="invalid-feedback">
                        {{ errors[0] }}
                      </div>
                    </validation-provider>
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
                          <label class="custom-control-label" for="condition01"
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
                          <label class="custom-control-label" for="condition02"
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
                          <label class="custom-control-label" for="condition03"
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
                          <label class="custom-control-label" for="condition04"
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
                          <label class="custom-control-label" for="condition05"
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
                          <label class="custom-control-label" for="condition06"
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
                            v-model="familyInfo.equipment"
                            value="01"
                            id="equipment01"
                          />
                          <label class="custom-control-label" for="equipment01"
                            >成人紙尿布</label
                          >
                        </div>
                      </li>
                      <li class="col-12 col-md-6 mb-2">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            v-model="familyInfo.equipment"
                            value="02"
                            id="equipment02"
                          />
                          <label class="custom-control-label" for="equipment02"
                            >輪椅</label
                          >
                        </div>
                      </li>
                      <li class="col-12 col-md-6 mb-2">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            value="03"
                            id="equipment03"
                            v-model="familyInfo.equipment"
                          />
                          <label class="custom-control-label" for="equipment03"
                            >拐杖</label
                          >
                        </div>
                      </li>
                      <li class="col-12 col-md-6 mb-2">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            v-model="familyInfo.equipment"
                            value="04"
                            id="equipment04"
                          />
                          <label class="custom-control-label" for="equipment04"
                            >夜壺</label
                          >
                        </div>
                      </li>
                      <li class="col-12 col-md-6 mb-2">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            v-model="familyInfo.equipment"
                            value="05"
                            id="equipment05"
                          />
                          <label class="custom-control-label" for="equipment05"
                            >輔助器</label
                          >
                        </div>
                      </li>
                      <li class="col-12 col-md-6 mb-2">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            v-model="familyInfo.equipment"
                            value="06"
                            id="equipment06"
                          />
                          <label class="custom-control-label" for="equipment06"
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
                            id="serviceItem01"
                            v-model="familyInfo.serviceItem"
                            value="01"
                          />
                          <label
                            class="custom-control-label"
                            for="serviceItem01"
                            >協助如廁</label
                          >
                        </div>
                      </li>
                      <li class="col-12 col-md-6 mb-2">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            v-model="familyInfo.serviceItem"
                            id="serviceItem02"
                            value="02"
                          />
                          <label
                            class="custom-control-label"
                            for="serviceItem02"
                            >協助進食、用藥（按醫囑給藥）</label
                          >
                        </div>
                      </li>
                      <li class="col-12 col-md-6 mb-2">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            v-model="familyInfo.serviceItem"
                            value="03"
                            id="serviceItem03"
                          />
                          <label
                            class="custom-control-label"
                            for="serviceItem03"
                            >代購物品</label
                          >
                        </div>
                      </li>
                      <li class="col-12 col-md-6 mb-2">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            v-model="familyInfo.serviceItem"
                            value="04"
                            id="serviceItem04"
                          />
                          <label
                            class="custom-control-label"
                            for="serviceItem04"
                            >備餐（限被照顧者及其伴侶）</label
                          >
                        </div>
                      </li>
                      <li class="col-12 col-md-6 mb-2">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            v-model="familyInfo.serviceItem"
                            value="05"
                            id="serviceItem05"
                          />
                          <label
                            class="custom-control-label"
                            for="serviceItem05"
                            >身心靈陪伴及安全維護</label
                          >
                        </div>
                      </li>
                      <li class="col-12 col-md-6 mb-2">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            v-model="familyInfo.serviceItem"
                            value="06"
                            id="serviceItem06"
                          />
                          <label
                            class="custom-control-label"
                            for="serviceItem06"
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
                  <h4 class="mb-3">
                    緊急聯絡人資訊
                  </h4>
                  <form class="row">
                    <div class="col-12 col-md-6 mb-2">
                      <validation-provider
                        rules="required"
                        v-slot="{ errors, classes }"
                      >
                        <label for="emergencyContact">緊急聯絡姓名</label>
                        <input
                          type="text"
                          class="form-control"
                          :class="classes"
                          v-model.trim="familyInfo.emergencyContact"
                          id="emergencyContact"
                          name="緊急聯絡姓名"
                          placeholder="請輸入緊急聯絡姓名"
                        />
                        <div v-if="errors[0]" class="invalid-feedback">
                          {{ errors[0] }}
                        </div>
                      </validation-provider>
                    </div>
                    <div class="col-12 col-md-6 mb-2">
                      <validation-provider
                        rules="required"
                        v-slot="{ errors, classes }"
                      >
                        <label for="emergencyRelationship"
                          ><span class="text-danger">*</span>
                          與被服務對象的關係</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          :class="classes"
                          id="emergencyRelationship"
                          name="與被服務對象的關係"
                          v-model.trim="familyInfo.emergencyRelationship"
                          placeholder="請輸入關係"
                        />
                        <div v-if="errors[0]" class="invalid-feedback">
                          {{ errors[0] }}
                        </div>
                      </validation-provider>
                    </div>
                    <div class="col-12 col-md-12">
                      <validation-provider
                        rules="required|numeric"
                        v-slot="{ errors, classes }"
                      >
                        <div class="form-group">
                          <label for="emergencyphone"
                            ><span class="text-danger">*</span>
                            緊急聯絡電話</label
                          >
                          <input
                            type="tel"
                            class="form-control"
                            :class="classes"
                            v-model.number="familyInfo.emergencyphone"
                            id="emergencyphone"
                            name="緊急聯絡電話"
                            placeholder="緊急聯絡電話"
                          />
                          <div v-if="errors[0]" class="invalid-feedback">
                            {{ errors[0] }}
                          </div>
                        </div>
                      </validation-provider>
                    </div>
                    <div class="col-12 col-md-12">
                      <div class="form-group">
                        <label for="remark">備註</label>
                        <textarea
                          class="form-control"
                          name=""
                          id="remark"
                          v-model="familyInfo.remark"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </tab-content>
          </form-wizard>
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
        sex: 'man',
        age: '',
        height: '',
        weight: '',
        place: 'home',
        address: '',
        condition: [],
        equipment: [],
        serviceItem: [],
        emergencyContact: '',
        emergencyRelationship: '',
        emergencyphone: '',
        remark: ''
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
