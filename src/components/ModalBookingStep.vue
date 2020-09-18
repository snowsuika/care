<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div
      class="modal fade"
      id="bookingCareer"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg ">
        <div class="modal-content border-0">
          <div class="modal-body">
            <div style="padding-bottom:20px">
              <button type="button" class="close" @click="colseModal()">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <validation-observer ref="observer" v-slot="{ invalid }">
              <form @submit.prevent="submitForm">
                <div class="container">
                  <step-navigation :steps="steps" :currentstep="currentstep">
                  </step-navigation>

                  <div v-show="currentstep == 1">
                    <div class="row justify-content-center mt-4">
                      <div class="col-12 col-lg-6">
                        <h5 class="text-primary">請選擇資料帶入方式</h5>
                        <!-- <div class="form-row">
                          <div class="card w-100 mb-3">
                            <div class="card-body">
                              <div
                                class="custom-control custom-radio custom-control-inline"
                              >
                                <input
                                  type="radio"
                                  id="hand"
                                  name="getElderMethod"
                                  class="custom-control-input"
                                  value="0"
                                  @click="checkImportMethod('hand')"
                                  checked
                                />
                                <label class="custom-control-label" for="hand"
                                  >手動輸入</label
                                >
                              </div>
                            </div>
                          </div>

                          <div class="card w-100">
                            <i class="fas fa-users-cog"></i>
                            <div class="card-body">
                              <div
                                class="custom-control custom-radio custom-control-inline"
                              >
                                <div>
                                  <input
                                    type="radio"
                                    id="auto"
                                    value="1"
                                    @click="checkImportMethod('auto')"
                                    name="getElderMethod"
                                    class="custom-control-input"
                                  />
                                  <label class="custom-control-label" for="auto"
                                    >帶入現有家屬資料</label
                                  >
                                </div>
                                <div>
                                  <select
                                    class="form-control"
                                    @change="importElderData()"
                                    v-model="orderInfo.ElderId"
                                    v-if="elders"
                                  >
                                    <option selected>請選擇欲照護對象</option>
                                    <option
                                      v-for="(elder, index) in elders"
                                      :value="elder.x.Id"
                                      :key="index"
                                      >{{ elder.x.Name }}</option
                                    >
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> -->

                        <div class="radio-tile-group">
                          <div class="input-container w-75">
                            <input
                              type="radio"
id="hand"
name="getElderMethod"
                              class="custom-control-input radio-button"
                              value="0"
                              @click="checkImportMethod('hand')"
checked
                            />
                            <div class="radio-tile">
                              <label for="hand" class="radio-tile-label"
                                ><i class="fas fa-wheelchair"></i> 手動輸入</label
                              >
                            
                              
                            </div>
                          </div>

                          <div class="input-container w-75">
                            <input
                              type="radio"
                              id="auto"
                              value="1"
                              @click="checkImportMethod('auto')"
                              name="getElderMethod"
                              class="custom-control-input radio-button"

                             
                            />
                            <div class="radio-tile">
                             
                             
                              <select class="form-control"
                              id="auto"
@change="importElderData()"
v-model="orderInfo.ElderId"
v-if="elders"
>
                                <option selected>請選擇欲照護對象</option>
<option
v-for="(elder, index) in elders"
:value="elder.x.Id"
:key="index"
>{{ elder.x.Name }}</option
>
                              </select>
                               <label for="auto" class="radio-tile-label"
                                >  <i class="far fa-id-card"></i> 自現有資料帶入</label
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-lg-6">
                        <div class="form-row">
                          <h5 class="text-primary">基本資料</h5>
                          <div class="form-group col-md-12">
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
                                v-model.trim="elderInfo.Name"
                                placeholder="請輸入被服務對象姓名"
                              />
                              <div v-if="errors[0]" class="invalid-feedback">
                                {{ errors[0] }}
                              </div>
                            </validation-provider>
                          </div>
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="sex"
                              ><span class="text-danger">*</span> 性別</label
                            >
                            <select
                              id="sex"
                              class="form-control"
                              v-model="elderInfo.Gender"
                            >
                              <option value="0">男</option>
                              <option value="1">女</option>
                            </select>
                          </div>
                          <div class="form-group col-md-6">
                            <validation-provider
                              rules="required|numeric"
                              v-slot="{ errors, classes }"
                            >
                              <label for="age"
                                ><span class="text-danger">*</span>
                                年齡：</label
                              >
                              <input
                                type="number"
                                class="form-control"
                                :class="classes"
                                v-model.number="elderInfo.Age"
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
                                ><span class="text-danger">*</span>
                                身高：</label
                              >
                              <input
                                type="number"
                                class="form-control"
                                :class="classes"
                                v-model.number="elderInfo.Height"
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
                                ><span class="text-danger">*</span>
                                體重：</label
                              >
                              <input
                                type="number"
                                class="form-control"
                                :class="classes"
                                v-model.number="elderInfo.Weight"
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
                        <hr />
                        <h5 class="text-primary">照護地點</h5>
                        <div
                          class="custom-control custom-radio custom-control-inline"
                        >
                          <input
                            type="radio"
                            id="place_home"
                            name="customRadioInline1"
                            class="custom-control-input"
                            value="0"
                            v-model.trim="elderInfo.Place"
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
                            value="1"
                            v-model="elderInfo.place"
                            name="customRadioInline1"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="place_hospital"
                            >醫院照護</label
                          >
                        </div>
                        <div class="form-group">
                          <validation-provider
                            rules="required"
                            v-slot="{ errors, classes }"
                          >
                            <label for="address"
                              ><span class="text-danger">*</span>
                              照護地址：</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              :class="classes"
                              v-model.trim="elderInfo.Address"
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
                  </div>

                  <div v-show="currentstep == 2">
                    <div class="row mt-4">
                      <div class="col-md-6">
                        <div class="row">
                          <ul class="row no-gutters ml-4 list-unstyled">
                            <li class="col-12 col-md-6 mb-2">
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  value="01"
                                  v-model="elderInfo.Body"
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
                                  v-model="elderInfo.Body"
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
                                  v-model="elderInfo.Body"
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
                                  v-model="elderInfo.Body"
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
                                  v-model="elderInfo.Body"
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
                                  v-model="elderInfo.Body"
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
                          <i class="fas fa-wheelchair text-primary"></i>
                          已有設備
                        </h4>
                        <div class="row">
                          <ul class="row no-gutters ml-4 list-unstyled">
                            <li class="col-12 col-md-6 mb-2">
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  v-model="elderInfo.Equipment"
                                  value="01"
                                  id="equipment01"
                                />
                                <label
                                  class="custom-control-label"
                                  for="equipment01"
                                  >成人紙尿布</label
                                >
                              </div>
                            </li>
                            <li class="col-12 col-md-6 mb-2">
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  v-model="elderInfo.Equipment"
                                  value="02"
                                  id="equipment02"
                                />
                                <label
                                  class="custom-control-label"
                                  for="equipment02"
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
                                  v-model="elderInfo.Equipment"
                                />
                                <label
                                  class="custom-control-label"
                                  for="equipment03"
                                  >拐杖</label
                                >
                              </div>
                            </li>
                            <li class="col-12 col-md-6 mb-2">
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  v-model="elderInfo.Equipment"
                                  value="04"
                                  id="equipment04"
                                />
                                <label
                                  class="custom-control-label"
                                  for="equipment04"
                                  >夜壺</label
                                >
                              </div>
                            </li>
                            <li class="col-12 col-md-6 mb-2">
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  v-model="elderInfo.Equipment"
                                  value="05"
                                  id="equipment05"
                                />
                                <label
                                  class="custom-control-label"
                                  for="equipment05"
                                  >輔助器</label
                                >
                              </div>
                            </li>
                            <li class="col-12 col-md-6 mb-2">
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  v-model="elderInfo.Equipment"
                                  value="06"
                                  id="equipment06"
                                />
                                <label
                                  class="custom-control-label"
                                  for="equipment06"
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
                                  v-model="elderInfo.ServiceItems"
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
                                  v-model="elderInfo.ServiceItems"
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
                                  v-model="elderInfo.ServiceItems"
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
                                  v-model="elderInfo.ServiceItems"
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
                                  v-model="elderInfo.ServiceItems"
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
                                  v-model="elderInfo.ServiceItems"
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
                  </div>

                  <div v-show="currentstep == 3">
                    <div class="row justify-content-center mt-4">
                      <div class="col-8">
                        <form class="row">
                          <div class="col-12 col-md-6 mb-2">
                            <validation-provider
                              rules="required"
                              v-slot="{ errors, classes }"
                            >
                              <label for="emergencyContact"
                                ><span class="text-danger">*</span>
                                緊急聯絡姓名</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                :class="classes"
                                v-model.trim="elderInfo.Urgent"
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
                                v-model.trim="elderInfo.Relationship"
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
                                  v-model="elderInfo.Phone"
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
                                v-model="elderInfo.remark"
                                rows="3"
                              ></textarea>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="text-center">
                      <!-- 手動輸入 = 新增病患 + 送出訂單 -->
                      <button
                        type="submit"
                        class="btn btn-primary"
                        :disabled="invalid"
                        @click.prevent="submitElderOrder()"
                      >
                        <template v-if="orderInfo.isManual">
                          <!-- 手動輸入 = 新增病患 + 送出訂單 -->
                          新增對象並且送出訂單
                        </template>
                        <template v-else>
                          <!-- 自動帶入 = 編輯病患 + 送出訂單 -->
                          更新對象並送出訂單
                        </template>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </validation-observer>
          </div>
          <div class="modal-footer">
            <step
              v-for="step in steps"
              :currentstep="currentstep"
              :key="step.id"
              :step="step"
              :stepcount="steps.length"
              @step-change="stepChanged"
            >
            </step>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*global $*/

// import WizardForm from '@/components/wizard/WizardForm.vue';
import StepNavigation from '@/components/wizard/StepNavigation.vue';
import Step from '@/components/wizard/Step.vue';

export default {
  data() {
    return {
      //取得所有病患資料
      elders: [],
      //取得單一病患資料
      elderInfo: {
        MemberId: '',
        Name: '',
        Gender: '0', // 0 男 1 女
        Age: '',
        Height: '',
        Weight: '',
        Place: '0', //0居家, 1醫院
        Address: '',
        Body: [], //後端要字串
        Equipment: [], //後端要字串
        ServiceItems: [], //後端要字串
        Urgent: '',
        Relationship: '',
        Phone: ''
        // remark: ''
      },

      orderInfo: {
        ElderId: '', //當前病患Id
        attendantId: '',
        isManual: true //是否手動輸入
      },

      //WizardForm Data
      currentstep: 1,
      steps: [
        {
          id: 1,
          title: '服務對象基本資料',
          icon_class: 'fa fa-user-circle-o'
        },
        {
          id: 2,
          title: '需服務項目',
          icon_class: 'fa fa-th-list'
        },
        {
          id: 3,
          title: '緊急聯絡人資訊',
          icon_class: 'fa fa-paper-plane'
        }
      ],
      isLoading: false
    };
  },
  components: {
    StepNavigation,
    Step
  },
  props: {
    //預約時間
    bookingstart: {},
    bookingend: {}
  },
  created() {
    this.attendantId = this.$route.params.id; //取得照服員id
  },
  methods: {
    modalshow() {
      this.getEldersData();
      $('#bookingCareer').modal('show');
    },

    //確認使用者要手動/自動帶入病患資料
    checkImportMethod(getMethod) {
      const vm = this;
      getMethod == 'hand'
        ? (vm.orderInfo.isManual = true)
        : (vm.orderInfo.isManual = false);
      if (vm.orderInfo.isManual) {
        vm.orderInfo.ElderId = '';
        vm.elderInfo = {
          ...vm.elderInfo,
          Gender: '0', // 0 男 1 女
          Place: '0', //0居家, 1醫院
          Body: [], //後端要字串
          Equipment: [], //後端要字串
          ServiceItems: [] //後端要字串
        };
      }
    },
    //取得所有病患資料
    getEldersData() {
      const vm = this;
      vm.isLoading = true;
      vm.userId = localStorage.getItem('userId');
      const api = `${process.env.VUE_APP_APIPATH}GetElders/?id=${vm.userId}`;

      vm.$http
        .get(api)
        .then(res => {
          console.log(res);
          vm.isLoading = false;
          vm.elders = res.data.elders;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //匯入病患資料
    importElderData() {
      const vm = this;

      const api = `${process.env.VUE_APP_APIPATH}ElderDetails?Id=${vm.orderInfo.ElderId}`;
      vm.isLoading = true;
      vm.$http
        .get(api)
        .then(res => {
          console.log(res);
          vm.orderInfo.ElderId = res.data.elders.Id;
          vm.elderInfo = {
            MemberId: res.data.elders.MemberId,
            Name: res.data.elders.Name,
            Gender: res.data.elders.Gender, // 0 男 1 女
            Age: res.data.elders.Age,
            Height: res.data.elders.Height,
            Weight: res.data.elders.Weight,
            Place: res.data.elders.Place, //0居家, 1醫院
            Address: res.data.elders.Address,
            Body: res.data.elders.Body.split(','),
            Equipment: res.data.elders.Equipment.split(','),
            ServiceItems: res.data.elders.ServiceItems.split(','),
            Urgent: res.data.elders.Urgent,
            Relationship: res.data.elders.Relationship,
            Phone: res.data.elders.Phone
          };
          vm.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },

    submitElderOrder() {
      const vm = this;
      let method = vm.orderInfo.isManual ? 'post' : 'put';
      let apiAction = vm.orderInfo.isManual ? 'AddElder' : 'EditElder';

      //定義要傳送給後端的資料格式（新增病患）
      let postAddElder = {
        ...vm.elderInfo,
        MemberId: localStorage.getItem('userId'),
        Body: vm.elderInfo.Body.toString(), //後端要字串
        Equipment: vm.elderInfo.Equipment.toString(), //後端要字串
        ServiceItems: vm.elderInfo.ServiceItems.toString() //後端要字串
      };

      let postData = '';
      if (vm.orderInfo.isManual) {
        postData = postAddElder;
      } else {
        postData = {
          Id: vm.orderInfo.ElderId,
          Gender: vm.elderInfo.Gender.toString(),
          ...postAddElder
        };
      }
      console.log(postData);
      const api = `${process.env.VUE_APP_APIPATH}${apiAction}`;

      vm.isLoading = true;
      vm.$http[method](api, postData)
        .then(res => {
          console.log(res);
          if (vm.orderInfo.isManual) {
            vm.orderInfo.ElderId = res.data.elder.Id;
          }

          vm.submitOrder();
        })
        .catch(err => {
          console.log(err);
        });
    },
    submitOrder() {
      const vm = this;
      let orderDate = {
        ElderId: vm.orderInfo.ElderId, //如果是新增的話要請教後端可不可以拿到id
        AttendantId: vm.attendantId,
        StartDate: vm.bookingstart,
        EndDate: vm.bookingend
      };
      console.log(orderDate);
      const api = `${process.env.VUE_APP_APIPATH}AddOrder`;
      vm.isLoading = true;

      vm.$http
        .post(api, orderDate)
        .then(res => {
          console.log(res);
          vm.$swal({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: false,
            onOpen: toast => {
              toast.addEventListener('mouseenter', this.$swal.stopTimer);
              toast.addEventListener('mouseleave', this.$swal.resumeTimer);
            },
            icon: 'success',
            title: `${res.data.result}！可以到 <b style="color:green;">我的訂單</b> 查看預約進度`
          });
          vm.colseModal();
          vm.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //關閉modal，重置
    colseModal() {
      this.currentstep = 1;
      this.orderInfo = {
        ...this.orderInfo,
        isManual: true
      };
      this.elderInfo = {
        ...this.elderInfo,
        Gender: '0', // 0 男 1 女
        Place: '0', //0居家, 1醫院
        Body: [], //後端要字串
        Equipment: [], //後端要字串
        ServiceItems: [] //後端要字串
      };
      this.$refs.observer.reset();
      $('#bookingCareer').modal('hide');
    },
    // Wizard
    stepChanged(step) {
      this.currentstep = step;
    }
  }
};
</script>

<style lang="scss">
$primary-color: #6a9232;

.radio-tile-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;

  //set dimensions for invisible container
  .input-container {
    position: relative;
    height: 50x;
    width: 150px;
    margin: 0.5rem;

    //make actual radio input invisible
    // + stretch to fill container
    .radio-button {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      margin: 0;
      cursor: pointer;
    }

    //default tile styles
    .radio-tile {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border: 1px solid $primary-color;
      border-radius: 5px;
      padding: 1rem;
      transition: transform 300ms ease;
    }
    .icon svg {
      fill: $primary-color;
      width: 3rem;
      height: 3rem;
    }
    .radio-tile-label {
      text-align: center;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: $primary-color;
    }

    //active tile styles
    .radio-button:checked + .radio-tile {
      background-color: rgba($color: $primary-color, $alpha: 0.3);
      border: 1px solid $primary-color;
      color: white;
      transform: scale(1.05, 1.05);

     
      .radio-tile-label {
        color: $primary-color;
        // background-color: $primary-color;
      }
    }
  }
}
</style>
