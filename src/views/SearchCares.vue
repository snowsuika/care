<template>
  <div>
    <div
      class="banner d-flex justify-content-center align-items-center text-white"
    >
      <!-- <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 offset-md-8">
            <h2>日日照你</h2>
          </div>
        </div>
      </div> -->
    </div>
    <!-- 照服員 -->
    <div class="container py-5">
      <div
        class="p-2 mb-3"
        style="background-color: #EAE4DB;border-radius: 10px;"
      >
        <div>{{ this.show }}</div>
        <form class="form-inline">
          <label class="sr-only" for="inlineFormInputName2">Name</label>
          <select id="my-select" class="form-control mb-2 mr-sm-2" name="">
            <option>高雄市</option>
          </select>
          <!-- <select id="my-select" class="form-control mb-2 mr-sm-2" name="">
            <option>前鎮區</option>
          </select> -->

          <div>
            <multiselect
              v-model="value"
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

          <button type="submit" class="btn btn-primary mb-2">搜尋照服員</button>
        </form>
      </div>
      <ul class="row list-unstyled">
        <li class="col-12 col-lg-4 mb-3">
          <div class="bg-white radius-3 p-3">
            <div class="d-flex align-items-center mb-2">
              <img
                width="120"
                height="120"
                class="rounded-circle"
                src="https://attach.setn.com/newsimages/2020/08/02/2697335-PH.jpg"
              />
              <div class="ml-3">
                <h5 class="card-title font-weight-bold">張嫦兆</h5>
                <div class="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  (10)
                  <p class="font-weight-bolder text-primary h6 mt-3">
                    $1,200 元/日
                  </p>
                </div>
              </div>
            </div>
            <div class="text-truncate">
              <span class="badge badge-light p-2 ml-1 mb-1">協助如廁</span>
              <span class="badge badge-light p-2 ml-1 mb-1"
                >身心靈陪伴及安全維護</span
              >
              <span class="badge badge-light p-2 ml-1 mb-1"
                >協助進食、用藥</span
              >
            </div>
            <p class="card-text">
              超過十年的照顧經驗，人稱亞洲照顧王。沒有我不能駕馭的病患或老人，請放心交給我。
            </p>
            <p class="d-flex justify-content-lg-between align-items-center h5">
              <!-- <a
                href="career.html"
                class="btn btn-primary-soft text-primary btn-block "
                >立即預約</a
              > -->
              <router-link
                class="btn btn-primary-soft text-primary btn-block"
                :to="`/carePage/1234`"
                >立即預約</router-link
              >
            </p>
          </div>
        </li>
        <li class="col-12 col-lg-4 mb-3">
          <div class="bg-white radius-3 p-3">
            <div class="d-flex align-items-center mb-2">
              <img
                width="120"
                height="120"
                class="rounded-circle"
                src="https://attach.setn.com/newsimages/2020/08/02/2697335-PH.jpg"
              />
              <div class="ml-3">
                <h5 class="card-title font-weight-bold">張嫦兆</h5>
                <div class="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  (10)
                  <p class="font-weight-bolder text-primary h6 mt-3">
                    $1,200 元/日
                  </p>
                </div>
              </div>
            </div>
            <div class="text-truncate">
              <span class="badge badge-light p-2 ml-1 mb-1">協助如廁</span>
              <span class="badge badge-light p-2 ml-1 mb-1"
                >身心靈陪伴及安全維護</span
              >
              <span class="badge badge-light p-2 ml-1 mb-1"
                >協助進食、用藥</span
              >
            </div>
            <p class="card-text">
              超過十年的照顧經驗，人稱亞洲照顧王。沒有我不能駕馭的病患或老人，請放心交給我。
            </p>
            <p class="d-flex justify-content-lg-between align-items-center h5">
              <router-link
                class="btn btn-primary-soft text-primary btn-block"
                :to="`/carePage/1234`"
                >立即預約</router-link
              >
            </p>
          </div>
        </li>
        <li class="col-12 col-lg-4 mb-3">
          <div class="bg-white radius-3 p-3">
            <div class="d-flex align-items-center mb-2">
              <img
                width="120"
                height="120"
                class="rounded-circle"
                src="https://attach.setn.com/newsimages/2020/08/02/2697335-PH.jpg"
              />
              <div class="ml-3">
                <h5 class="card-title font-weight-bold">張嫦兆</h5>
                <div class="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  (10)
                  <p class="font-weight-bolder text-primary h6 mt-3">
                    $1,200 元/日
                  </p>
                </div>
              </div>
            </div>
            <div class="text-truncate">
              <span class="badge badge-light p-2 ml-1 mb-1">協助如廁</span>
              <span class="badge badge-light p-2 ml-1 mb-1"
                >身心靈陪伴及安全維護</span
              >
              <span class="badge badge-light p-2 ml-1 mb-1"
                >協助進食、用藥</span
              >
            </div>
            <p class="card-text">
              超過十年的照顧經驗，人稱亞洲照顧王。沒有我不能駕馭的病患或老人，請放心交給我。
            </p>
            <p class="d-flex justify-content-lg-between align-items-center h5">
              <a
                href="career.html"
                class="btn btn-primary-soft text-primary btn-block "
                >立即預約</a
              >
            </p>
          </div>
        </li>
        <li class="col-12 col-lg-4 mb-3">
          <div class="bg-white radius-3 p-3">
            <div class="d-flex align-items-center mb-2">
              <img
                width="120"
                height="120"
                class="rounded-circle"
                src="https://attach.setn.com/newsimages/2020/08/02/2697335-PH.jpg"
              />
              <div class="ml-3">
                <h5 class="card-title font-weight-bold">張嫦兆</h5>
                <div class="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  (10)
                  <p class="font-weight-bolder text-primary h6 mt-3">
                    $1,200 元/日
                  </p>
                </div>
              </div>
            </div>
            <div class="text-truncate">
              <span class="badge badge-light p-2 ml-1 mb-1">協助如廁</span>
              <span class="badge badge-light p-2 ml-1 mb-1"
                >身心靈陪伴及安全維護</span
              >
              <span class="badge badge-light p-2 ml-1 mb-1"
                >協助進食、用藥</span
              >
            </div>
            <p class="card-text">
              超過十年的照顧經驗，人稱亞洲照顧王。沒有我不能駕馭的病患或老人，請放心交給我。
            </p>
            <p class="d-flex justify-content-lg-between align-items-center h5">
              <a
                href="career.html"
                class="btn btn-primary-soft text-primary btn-block "
                >立即預約</a
              >
            </p>
          </div>
        </li>
        <li class="col-12 col-lg-4 mb-3">
          <div class="bg-white radius-3 p-3">
            <div class="d-flex align-items-center mb-2">
              <img
                width="120"
                height="120"
                class="rounded-circle"
                src="https://attach.setn.com/newsimages/2020/08/02/2697335-PH.jpg"
              />
              <div class="ml-3">
                <h5 class="card-title font-weight-bold">張嫦兆</h5>
                <div class="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  (10)
                  <p class="font-weight-bolder text-primary h6 mt-3">
                    $1,200 元/日
                  </p>
                </div>
              </div>
            </div>
            <div class="text-truncate">
              <span class="badge badge-light p-2 ml-1 mb-1">協助如廁</span>
              <span class="badge badge-light p-2 ml-1 mb-1"
                >身心靈陪伴及安全維護</span
              >
              <span class="badge badge-light p-2 ml-1 mb-1"
                >協助進食、用藥</span
              >
            </div>
            <p class="card-text">
              超過十年的照顧經驗，人稱亞洲照顧王。沒有我不能駕馭的病患或老人，請放心交給我。
            </p>
            <p class="d-flex justify-content-lg-between align-items-center h5">
              <a
                href="career.html"
                class="btn btn-primary-soft text-primary btn-block "
                >立即預約</a
              >
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      options: [
        {
          cityId: '01',
          city: '前鎮區'
        },
        {
          cityId: '02',
          city: '小港區'
        },
        {
          cityId: '03',
          city: '苓雅區'
        }
      ]
    };
  },
  computed: {
    show() {
      return this.value.map(item => Object.values(item)[0]);
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
  height: 300px;
  // background-image: url(images/2886653_s.jpg);
  background-position: center;
  background-size: cover;
}
</style>
