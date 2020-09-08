<template>
  <div
    class="bg-white shadow-sm
                        radius-3 p-4"
  >
    <loading :active.sync="isLoading"></loading>
    <h4 class="mb-3">照服員基本資料</h4>
    <form class="mx-auto" style="max-width:600px">
      <div class="row">
        <div class="col-md-4">
          <img
            :src="photoPreview"
            alt="照服員照片"
            width="150"
            height="150"
            class="rounded-circle"
          />
        </div>
        <div class="col-md-8">
          <div class="form-group">
            <validation-provider rules="required" v-slot="{ errors, classes }">
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
              <label class="custom-file-label" ref="filePhotoName" for="photo">
                請選擇檔案..</label
              >
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
        <div class="col-6">
          <select v-model="resume.servicePlace" class="custom-select">
            <option selected>請選擇縣市</option>
            <option value="1">高雄市</option>
          </select>
        </div>
        <div class="col-6 mb-3">
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
                >請選擇檔案..</label
              >
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
              value="01"
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
              value="02"
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
              value="03"
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
            <label for="service01" class="custom-control-label">糖尿病</label>
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
            <label for="service02" class="custom-control-label">骨折</label>
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
            <label for="service03" class="custom-control-label">高血壓</label>
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
            <label for="service04" class="custom-control-label">身心障礙</label>
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
            <label for="service05" class="custom-control-label">行動不便</label>
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
            <label for="service06" class="custom-control-label">精神疾病</label>
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
          @click.prevent="saveResume()"
          class="btn btn-primary"
        >
          儲存設定
        </button>
      </div>
    </form>
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
        servicePlace: '',
        city: [],
        license: [],
        serviceTime: '01',
        experience: '',
        service: [],
        isopenMatch: false
      },
      value: [],
      options: [
        {
          cityId: '1',
          city: '前鎮區'
        },
        {
          cityId: '2',
          city: '小港區'
        },
        {
          cityId: '3',
          city: '苓雅區'
        }
      ],
      photoPreview: '',
      isLoading: false
    };
  },
  created() {
    this.resume.id = localStorage.getItem('userId');
  },

  methods: {
    previewFile() {
      const vm = this;
      const photoFile = vm.$refs.filePhoto.files[0];
      const filePreview = new FileReader();
      vm.$refs.filePhotoName.innerText = photoFile.name;

      if (photoFile) {
        filePreview.readAsDataURL(photoFile);
        filePreview.onload = function(event) {
          vm.photoPreview = event.target.result;
        };
      }
    },
    previewLicenseName() {
      const vm = this;
      const licenseFileName = vm.$refs.licenseFile.files[0].name;
      vm.$refs.licenseFileName.innerText = licenseFileName;
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
      postForms.append('Status', vm.resume.isopenMatch);
      postForms.append('Photo', vm.$refs.filePhoto.files[0], 'file');
      postForms.append('File', vm.$refs.licenseFile.files[0], 'file');
      postForms.append('Location', cityArray);

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
    }
  }
};
</script>
