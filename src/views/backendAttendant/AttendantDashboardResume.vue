<template>
  <div
    class="bg-white shadow-sm
                        radius-3 p-4"
  >
    <h4 class="mb-3">照服員基本資料</h4>
    <form class="mx-auto" style="max-width:600px">
      <div class="row">
        <div class="col-md-4">
          <img
            src="https://i.imgur.com/EJFwGRF.jpg"
            alt=""
            width="150"
            height="150"
            class="rounded-circle"
          />
        </div>
        <div class="col-md-8">
          <div class="form-group">
            <label for="exampleFormControlInput1"
              ><span class="text-danger">*</span> 姓名</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <label for="exampleFormControlInput1"
            ><span class="text-danger">*</span> 請上傳頭像</label
          >
          <div class="input-group mb-3">
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="customFile" />
              <label class="custom-file-label" for="customFile"
                >請選擇檔案..</label
              >
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label for="exampleFormControlInput1"
              ><span class="text-danger">*</span> 薪資（日薪）(元)：</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="請輸入日薪"
            />
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label for="exampleFormControlInput1"
              ><span class="text-danger">*</span> 匯款帳號：</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="請輸入匯款帳號"
            />
          </div>
        </div>
      </div>
      <hr />
      <label for="exampleFormControlInput1"
        ><span class="text-danger">*</span> 服務地區</label
      >
      <div class="row mb-3">
        <div class="col-6">
          <select class="custom-select">
            <option selected>請選擇縣市</option>
            <option value="1">高雄市</option>
          </select>
        </div>
        <div class="col-6 mb-3">
          <select class="custom-select">
            <option selected>請選擇鄉鎮</option>
            <option value="1">前鎮區</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div class="col-12">
          <label for="exampleFormControlInput1"> 相關資格文件</label>
          <div class="input-group mb-3">
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="customFile" />
              <label class="custom-file-label" for="customFile"
                >請選擇檔案..</label
              >
            </div>
          </div>
        </div>
        <div class="col-12">
          <ul class="list-unstyled ml-2">
            <li><i class="fas fa-times text-danger"></i> 照顧服務員證照</li>
            <li><i class="fas fa-times text-danger"></i> 照服員結業證書</li>
            <li>
              <i class="fas fa-times text-danger"></i>
              體檢表(含B肝表面抗原、胸部Ｘ光)
            </li>
          </ul>
        </div>
      </div>
      <label for="exampleFormControlInput1"
        ><span class="text-danger">*</span> 服務時段</label
      >
      <div class="row mb-3">
        <div class="col-12">
          <div class="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="customRadioInline1"
              name="customRadioInline1"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="customRadioInline1"
              >白天(09:00-18:00)</label
            >
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="customRadioInline2"
              name="customRadioInline1"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="customRadioInline2"
              >傍晚(15:00-23:00)</label
            >
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              id="customRadioInline2"
              name="customRadioInline1"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="customRadioInline2"
              >凌晨(23:00-07:00)</label
            >
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1"
          ><span class="text-danger">*</span>
          請輸入照護相關經歷、工作經驗：</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <hr />
      <h5 class="mb-3">請勾選可服務項目</h5>
      <ul class="row list-unstyled">
        <li class="col-12 col-md-6 mb-2">
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              id="conditions_01"
              class="custom-control-input"
            />
            <label for="conditions_01" class="custom-control-label"
              >糖尿病</label
            >
          </div>
        </li>
        <li class="col-12 col-md-6 mb-2">
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              id="conditions_02"
              class="custom-control-input"
            />
            <label for="conditions_02" class="custom-control-label">骨折</label>
          </div>
        </li>
        <li class="col-12 col-md-6 mb-2">
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              id="conditions_03"
              class="custom-control-input"
            />
            <label for="conditions_03" class="custom-control-label"
              >高血壓</label
            >
          </div>
        </li>
        <li class="col-12 col-md-6 mb-2">
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              id="conditions_04"
              class="custom-control-input"
            />
            <label for="conditions_04" class="custom-control-label"
              >身心障礙</label
            >
          </div>
        </li>
        <li class="col-12 col-md-6 mb-2">
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              id="conditions_05"
              class="custom-control-input"
            />
            <label for="conditions_05" class="custom-control-label"
              >行動不便</label
            >
          </div>
        </li>
        <li class="col-12 col-md-6 mb-2">
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              id="conditions_06"
              class="custom-control-input"
            />
            <label for="conditions_06" class="custom-control-label"
              >精神疾病</label
            >
          </div>
        </li>
      </ul>

      <div class="row">
        <label for="openStart"> 接受與家屬進行媒合</label>
        <div class="custom-control custom-switch">
          <input
            id="my-input"
            class="custom-control-input"
            type="checkbox"
            name=""
            value="true"
          />
          <label for="my-input" class="custom-control-label"></label>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <button type="button" name="" id="" class="btn btn-primary">
          儲存設定
        </button>
      </div>
    </form>
  </div>
</template>
