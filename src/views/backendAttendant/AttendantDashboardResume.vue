<template>
  <div
    class="bg-white shadow-sm
                        radius-3 p-4"
  >
    <loading :active.sync="isLoading" loader="dots" color="#499d66"></loading>
    <h4 class="mb-3">照服員基本資料</h4>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form class="mx-auto" style="max-width:600px">
        <div class="row">
          <div class="col-md-4">
            <img
              :src="photoPreview"
              alt="照服員照片"
              width="150"
              height="150"
              class="rounded-circle objectFit"
            />
          </div>
          <div class="col-md-8">
            <div class="form-group">
              <validation-provider
                rules="required"
                v-slot="{ errors, classes }"
              >
                <label for="attendantName"
                  ><span class="text-danger">*</span> 姓名</label
                >
                <input
                  type="text"
                  class="form-control"
                  :class="classes"
                  name="姓名"
                  v-model="resume.name"
                  id="attendantName"
                  placeholder="請輸入姓名"
                />
                <div v-if="errors[0]" class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </validation-provider>
            </div>
            <label for="photo"
              ><span class="text-danger">*</span> 請上傳頭像</label
            >
            <div class="input-group mb-3">
              <div class="custom-file">
                <input
                  id="photo"
                  ref="filePhoto"
                  type="file"
                  class="form-control"
                  @change="previewFile"
                />
                <label
                  class="custom-file-label"
                  id="picture"
                  ref="filePhotoName"
                  for="photo"
                >
                  <template v-if="photoName">
                    {{ photoName }}
                  </template>
                  <template v-else>
                    請上傳檔案..
                  </template>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <validation-provider
                rules="required|numeric"
                v-slot="{ errors, classes }"
              >
                <label for="salary"
                  ><span class="text-danger">*</span> 薪資（日薪）(元)：</label
                >
                <input
                  type="number"
                  class="form-control"
                  v-model.number="resume.salary"
                  :class="classes"
                  name="日薪"
                  id="salary"
                  placeholder="請輸入日薪"
                />
                <div v-if="errors[0]" class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </validation-provider>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <validation-provider
                rules="required|numeric"
                v-slot="{ errors, classes }"
              >
                <label for="account"
                  ><span class="text-danger">*</span> 匯款帳號：</label
                >
                <input
                  type="number"
                  class="form-control"
                  :class="classes"
                  name="匯款帳號"
                  v-model="resume.account"
                  id="account"
                  placeholder="請輸入匯款帳號"
                />
                <div v-if="errors[0]" class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </validation-provider>
            </div>
          </div>
        </div>
        <hr />
        <label for="exampleFormControlInput1"
          ><span class="text-danger">*</span> 服務地區</label
        >
        <div class="row mb-3">
          <div class="col-3">
            <select
              v-model="resume.servicePlaceSelected"
              class="custom-select"
              @change="filterCityArea()"
            >
              <option value="0" selected>請選擇縣市</option>
              <option
                v-for="(item, index) in serviceAllPlace"
                :key="index"
                :value="item.Id"
              >
                {{ item.City }}
              </option>
              >
            </select>
          </div>
          <div class="col-9">
            <multiselect
              v-model="resume.city"
              placeholder="請搜尋地區"
              label="city"
              track-by="cityId"
              selectLabel=""
              :hide-selected="true"
              :options="options"
              :multiple="true"
              :taggable="true"
            ></multiselect>
          </div>

          <div class="col-12">
            <label for="licenseFile">
              <span class="text-danger">*</span> 照顧服務員技術士證照</label
            >
            <div class="input-group mb-3">
              <div class="custom-file">
                <input
                  type="file"
                  ref="licenseFile"
                  class="custom-file-input"
                  @change="previewLicenseName()"
                  id="licenseFile"
                />
                <label
                  class="custom-file-label"
                  ref="licenseFileName"
                  for="licenseFile"
                >
                  <template v-if="fileName">
                    {{ fileName }}
                  </template>
                  <template v-else>
                    請選擇檔案..
                  </template>
                </label>
              </div>
            </div>
          </div>
        </div>
        <label for="serviceTime"
          ><span class="text-danger">*</span> 服務時段</label
        >
        <div class="row mb-3">
          <div class="col-12">
            <div class="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="serviceTime01"
                v-model="resume.serviceTime"
                value="1"
                name="服務時段"
                class="custom-control-input"
                checked
              />
              <label class="custom-control-label" for="serviceTime01"
                >白天(09:00-18:00)</label
              >
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="serviceTime02"
                v-model="resume.serviceTime"
                value="2"
                name="服務時段"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="serviceTime02"
                >傍晚(15:00-23:00)</label
              >
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="serviceTime03"
                v-model="resume.serviceTime"
                value="3"
                name="服務時段"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="serviceTime03"
                >凌晨(23:00-07:00)</label
              >
            </div>
          </div>
        </div>
        <div class="form-group">
          <validation-provider rules="required" v-slot="{ errors, classes }">
            <label for="experience"
              ><span class="text-danger">*</span>
              請輸入照護相關經歷、工作經驗：</label
            >
            <textarea
              class="form-control"
              id="experience"
              :class="classes"
              name="照護相關經歷、工作經驗"
              v-model="resume.experience"
              rows="3"
            ></textarea>
            <div v-if="errors[0]" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </validation-provider>
        </div>
        <hr />
        <h5 class="mb-3">請勾選可服務項目</h5>
        <ul class="row list-unstyled">
          <li class="col-12 col-md-6 mb-2">
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                id="service01"
                value="01"
                v-model="resume.service"
                class="custom-control-input"
              />
              <label for="service01" class="custom-control-label"
                >基本照護</label
              >
            </div>
          </li>
          <li class="col-12 col-md-6 mb-2">
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                id="service02"
                value="02"
                v-model="resume.service"
                class="custom-control-input"
              />
              <label for="service02" class="custom-control-label"
                >協助進食、用藥（按醫囑給藥）</label
              >
            </div>
          </li>
          <li class="col-12 col-md-6 mb-2">
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                id="service03"
                value="03"
                v-model="resume.service"
                class="custom-control-input"
              />
              <label for="service03" class="custom-control-label"
                >代購物品</label
              >
            </div>
          </li>
          <li class="col-12 col-md-6 mb-2">
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                id="service04"
                value="04"
                v-model="resume.service"
                class="custom-control-input"
              />
              <label for="service04" class="custom-control-label"
                >備餐（限被照顧者及其伴侶）</label
              >
            </div>
          </li>
          <li class="col-12 col-md-6 mb-2">
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                id="service05"
                value="05"
                v-model="resume.service"
                class="custom-control-input"
              />
              <label for="service05" class="custom-control-label"
                >身心靈陪伴及安全維護</label
              >
            </div>
          </li>
          <li class="col-12 col-md-6 mb-2">
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                id="service06"
                value="06"
                v-model="resume.service"
                class="custom-control-input"
              />
              <label for="service06" class="custom-control-label"
                >環境整理、洗衣（限被照顧者）</label
              >
            </div>
          </li>
        </ul>

        <div class="row">
          <label for="isopenMatch"> 接受與家屬進行媒合</label>
          <div class="custom-control custom-switch">
            <input
              id="isopenMatch"
              class="custom-control-input"
              type="checkbox"
              v-model="resume.isopenMatch"
              value=""
            />
            <label for="isopenMatch" class="custom-control-label"></label>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-3">
          <button
            type="submit"
            :disabled="invalid"
            @click.prevent="saveResume()"
            class="btn btn-primary"
          >
            儲存設定
          </button>
        </div>
      </form>
    </validation-observer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resume: {
        id: '',
        name: '',
        salary: '',
        account: '',
        serviceAllPlace: '', //後端給我全部縣市
        servicePlaceSelected: '', //已選擇的縣市（不用給後端）
        city: [], //已選的城區
        license: '',
        serviceTime: '01',
        experience: '',
        service: [],
        isopenMatch: false
      },
      value: [],
      options: [],
      photoPreview: '',
      photoIns: '',
      photoName: '',
      filePreview: '',
      fileIns: '',
      fileName: '',
      serviceAllPlace: [],
      isLoading: false
    };
  },
  created() {
    this.resume.id = localStorage.getItem('userId');
    this.getResumeData();
  },

  methods: {
    previewFile() {
      const vm = this;
      const photoFile = vm.$refs.filePhoto.files[0];
      const filePreview = new FileReader();

      if (photoFile) {
        filePreview.readAsDataURL(photoFile);
        filePreview.onload = function(event) {
          vm.photoPreview = event.target.result;
          vm.photoIns = photoFile;
          vm.photoName = photoFile.name;
        };
      }
    },
    previewLicenseName() {
      const vm = this;
      vm.fileName = vm.$refs.licenseFile.files[0].name;
      vm.fileIns = vm.$refs.licenseFile.files[0];
    },
    getResumeData() {
      const vm = this;

      const api = `${process.env.VUE_APP_APIPATH}AttendantDetails?Id=${vm.resume.id}`;
      vm.isLoading = true;

      vm.$http
        .get(api)
        .then(res => {
          // console.log('resume', res.data);
          const resUserData = res.data.attendant;
          vm.serviceAllPlace = res.data.cities; //後端給全部縣市下拉
          if (resUserData.Name) {
            vm.resume.name = resUserData.Name;
            vm.resume.salary = resUserData.Salary;
            vm.resume.account = resUserData.Account;

            vm.resume.servicePlaceSelected =
              resUserData.Locationses[0].Cities.Id; //已被選取的縣市 Id
            vm.filterCityArea(); //撈出已選縣市的地區下拉
            let cityArray = resUserData.Locationses.map(function(item) {
              return { cityId: item.Id, city: item.Area };
            });
            vm.resume.city = cityArray; //已被選取的地區轉成套件格式
            vm.resume.serviceTime = resUserData.ServiceTime;
            vm.resume.experience = resUserData.Experience;
            vm.resume.service = resUserData.Service.split(',');
            vm.resume.isopenMatch = resUserData.Status == '02' ? true : false;
            vm.photoPreview = `${process.env.VUE_APP_APIPATH}Uploads/${resUserData.Photo}`;
            vm.photoName = resUserData.Photo;

            vm.filePreview = resUserData.File; //預覽檔案
            vm.fileName = resUserData.File;
            vm.isLoading = false;
          } else {
            vm.isLoading = false;
            vm.resume.servicePlaceSelected = '0';
            vm.photoPreview =
              'https://www.iotwf.com/assets/nophoto-154f4818d2abb55e33088334ccec18cd.png';
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    saveResume() {
      const api = `${process.env.VUE_APP_APIPATH}EditAttendantDetails`;
      const vm = this;
      vm.isLoading = true;
      let cityArray = vm.resume.city.map(element => {
        return element.cityId;
      });

      const postForms = new FormData();
      postForms.append('Id', vm.resume.id);
      postForms.append('Name', vm.resume.name);
      postForms.append('Salary', vm.resume.salary);
      postForms.append('Account', vm.resume.account);
      postForms.append('Service', vm.resume.service);
      postForms.append('ServiceTime', vm.resume.serviceTime);
      postForms.append('Experience', vm.resume.experience);
      postForms.append('Status', vm.resume.isopenMatch ? '02' : '01');

      if (vm.photoIns) {
        postForms.append('Photo', vm.photoIns);
      }

      if (vm.fileIns) {
        postForms.append('File', vm.fileIns);
      }

      postForms.append('Location', cityArray); //post 給後端的地區 array(只有01、02的陣列)

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };

      vm.$http
        .patch(api, postForms, config)
        .then(res => {
          console.log(res);
          let alertIcon =
            res.data.message == '更新資料成功' ? 'success' : 'error';
          vm.$swal({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: false,
            onOpen: toast => {
              toast.addEventListener('mouseenter', vm.$swal.stopTimer);
              toast.addEventListener('mouseleave', vm.$swal.resumeTimer);
            },
            icon: `${alertIcon}`,
            title: `${res.data.message}`
          });
          vm.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    filterCityArea() {
      const vm = this;
      const CityId = this.resume.servicePlaceSelected;
      const api = `${process.env.VUE_APP_APIPATH}AttendantDetailsLocation?Id=${CityId}`;
      vm.resume.city = [];
      vm.$http
        .get(api)
        .then(res => {
          const area = res.data.locations;
          let cityArray = area.map(function(item) {
            return { cityId: item.Id, city: item.Area };
          });
          this.options = cityArray;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
