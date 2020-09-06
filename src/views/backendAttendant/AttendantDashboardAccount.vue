<template>
  <div
    class="bg-white shadow-sm
                        radius-3 p-4"
  >
    <h4 class="mb-3">修改會員密碼</h4>

    <form class="mx-auto" style="max-width:600px">
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label"
          >電子信箱</label
        >
        <div class="col-sm-8">
          <input
            type="text"
            readonly
            class="form-control-plaintext"
            id="staticEmail"
            value="email@example.com"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-4 col-form-label"
          ><span class="text-danger">*</span>請輸入密碼：</label
        >
        <div class="col-sm-8">
          <input type="password" class="form-control" id="inputPassword" />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-4 col-form-label"
          ><span class="text-danger">*</span>請再次輸入密碼：</label
        >
        <div class="col-sm-8">
          <input type="password" class="form-control" id="inputPassword" />
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-primary">確定修改</button>
      </div>
    </form>
  </div>
</template>
