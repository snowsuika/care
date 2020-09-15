<template>
  <div class="innerBg">
    <loading :active.sync="isLoading"></loading>
    <div
      class="innerBanner d-flex justify-content-center align-items-center text-white"
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
        <form class="form-inline">
          <label class="sr-only" for="inlineFormInputName2">Name</label>
          <select
            id="my-select"
            class="form-control mb-2 mr-sm-2"
            v-model="selectedCity"
            @change="useCitySearch(selectedCity)"
          >
            <option>請選擇</option>
            <option
              v-for="(city, index) in cities"
              :key="index"
              :value="`${city.Id}`"
            >
              {{ city.City }}</option
            >
          </select>
          <select
            id="my-select"
            class="form-control mb-2 mr-sm-2"
            name=""
            v-model="selectedArea"
            @change="useAreaSearch(selectedArea)"
          >
            <option value="0">全部地區</option>
            <option v-for="area in areas" :key="area.Id" :value="`${area.Id}`">
              {{ area.Area }}</option
            >
          </select>
        </form>
      </div>
      <div v-if="!attendants">
        目前這個縣市沒有任何照服員，請選擇其他縣市
      </div>
      <ul class="row list-unstyled">
        <li
          class=" col-12 col-lg-4 mb-3"
          v-for="attendant in attendants"
          :key="attendant.Id"
        >
          <div class="attendantCard bg-white radius-3 p-3">
            <div class="d-flex align-items-center mb-2">
              <img
                width="120"
                height="120"
                class="rounded-circle profirePhoto"
                v-if="attendant.x.Photo"
                :src="
                  `http://careup.rocket-coding.com/Uploads/` +
                    `${attendant.x.Photo}`
                "
              />
              <img
                width="120"
                height="120"
                class="rounded-circle profirePhoto"
                v-else
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXFxcX////CwsLGxsb7+/vT09PJycn19fXq6urb29ve3t7w8PDOzs7n5+f5+fnt7e30nlkBAAAFHUlEQVR4nO2dC5qqMAyFMTwUBdz/bq+VYYrKKJCkOfXmXwHna5uTpA+KwnEcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3EcA2iO9cdIc5PUdO257y+BU39u66b4HplE3fk6VIcnqmNfl1+gksr6+iIucjl3WYukor7+re6Hoe1y1UhNO3zUd+fUFRmKpOa0Tt6dY5ubRCrOG/QFLk1WGmnt/JxzykcjdZ/jyxJDLlOV2l36AtcsJJb9boG3YcR3DuqODIE3ztYKPkDdmwRmpUToUaSaq++AvRgZMWbOpbQW8hdCAm8ZDugoikzREdCJ2okJPBx6azFLNOwoOgcxojJ98JkaTSJxMpklKrCAKhZGI0drTY/wU5lXoJYibannV9NYy4oozNEAkPHTjop+DTDxVGkIgYJNoyQQJtiIW+EMjGAjm649AjGIaqswcEFQKJ2QPlJbqytki6ZXAAZRJ52J2McaUowzAfs+uFzrYhnzaapphiPWdaJWShqxjqa6kTTQ205TVbsfMa6htL0iYOsXpJrQjHSmCkv1QGPtiHqlYcQ21Gj7fcDU8xOEUuNgSltPzexh+HqFlanCBHZ4OLhCV+gK/3OF6vWvucLv98MUOY2pwu/PS/+D2qJU7pYGbOvDFDW+bbON9p3o3oRxn0bfLgZTgSn6pSfrtr56qLHemtHPTK2319SzGvtjQ9qeb39WgS66Cm073nd0U1PzDdJCO3Gzn6TKpl9Zq7ujGWsQhlA3NwWIMwG9zM08Y/tBrR9VWeczv5CSQuuUNKIUTk23ZJ5RKfVhjnkXotfWIlgX2BSCDYbZR+QTcLhb3dKZDUY2M0d4KWItwhHRah/zsrOgKw4wycwjcgEVcgQDQo23CqSiWEJkFAfod2oE1uIFdA1OsCPqFXYNTjCfb8Ez+iX2x5sKLlVbhtqdDcar9ZevhnbZxoBUD35k23t0d304LYs1ELVbnfFaZ/REJJX9niP8Q19moZGo3m8XR/yBvOnjFfsXcI2c8ZuNo7WMP5HQh6yRGrlmFOJTnyTcT+zRlqPUBI2gTVWNUzUna1ERgecgF4GpNBQ38jGqxVLzQA1A31Rrhk6Yz9QEh/WND0GnuG9huhiTXJkxfAizTHLr6cbJKN6UCU6x/2DTRE1xEeEXi3O0ZUqBN4nJRzHhFB1JPlFTBZlI2kQ8zc3KJ1Le8DIRmFJiknuVS6RK4Ej/JtBfJErDSzOBiY4wJHX6Z1I4v1GUmdCPNirnLLeg3oJLcbX5PcpHNbRvOa1A956QmRPOUXVF+zkaUJynpkYR0bOMJH2nNej1pqyV/aKkz9jr5yj5vrXXz1F5SQLACiMapmierj2ikLyleKdlA/I/2oFxiglxx9B+mHwz0lf34IZQfhDRhlD6bhvgEAoPYooHkTczSIZTLC+cEExsoNKZiGBiY9cCfo/Y/SjIOBMQizWWTe73CMUasJx7jlD+DdKdWUKoY4PRYFtGpO0G1Lx4RaadgTtJhf4fiGqGIwKWCGuGIwKWqP+7IxYCzygjR9IAO5pC7Da9g70TBVpWRNgFBlgT8RV2WxHbKwJMv4BOaEaYaU2K16yZMN/qgV+G7IWIvwyZCxHeDQMsR8wg0DBDDXB5H2EV+hkEGmaoySHQsEJNFoGGFWrAq98JRhUMX1iMMMqLLEIpK5jCbd4vw9nSt/72lewXiN6jmdjfq8Hdknlk92ZwJnbIMMRM7JBhiFlUFoHd1UWaP1QKsPsHA5mkNB+Smn9JqV3wskatnQAAAABJRU5ErkJggg=="
              />
              <div class="ml-3">
                <h5 class="card-title font-weight-bold">
                  {{ attendant.x.Name }}
                </h5>
                <div class="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  (10)
                  <p class="font-weight-bolder text-primary h6 mt-3 mb-0">
                    {{ attendant.x.Salary | currency }} 元/日
                  </p>
                  {{ attendant.服務時段 }}
                </div>
              </div>
            </div>
            <div class="text-truncate">
              <span
                class="badge badge-light p-2 ml-1 mb-1"
                v-for="(serviceItem, i) in attendant.服務項目"
                :key="i"
                >{{ serviceItem }}</span
              >
            </div>
            <p class="card-text">
              {{ attendant.x.Experience }}
            </p>
            <p class="d-flex justify-content-lg-between align-items-center h5">
              <router-link
                class="btn btn-primary-soft text-primary btn-block"
                :to="`/carePage/${attendant.x.Id}`"
                >立即預約</router-link
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
      isLoading: false,
      attendants: {},
      cities: [],
      areas: [],
      selectedCity: '',
      selectedArea: '0'
    };
  },
  created() {
    this.getAttendantData();
  },
  methods: {
    getAttendantData() {
      const vm = this;
      vm.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}SearchAttendant`;
      vm.$http
        .get(api)
        .then(res => {
          console.log(res);
          vm.attendants = res.data.attendants;

          vm.cities = res.data.cities;
          vm.selectedCity = res.data.attendants[0].x.Locationses[0].Cities.Id;
          vm.getArea();
          vm.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getArea() {
      const vm = this;

      const api = `${process.env.VUE_APP_APIPATH}City?Id=${vm.selectedCity}`;
      vm.isLoading = true;
      vm.$http
        .get(api)
        .then(res => {
          vm.isLoading = false;
          vm.areas = res.data.locationses;
        })
        .catch(err => {
          console.log(err);
        });
    },
    useCitySearch(cityId) {
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}City?Id=${cityId}`;
      vm.$http
        .get(api)
        .then(res => {
          console.log(res);
          vm.attendants = res.data.attendants;
          vm.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    useAreaSearch(areaId) {
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}Location?Id=${areaId}`;
      vm.$http
        .get(api)
        .then(res => {
          // console.log(res);
          vm.attendants = res.data.attendants;
          vm.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss">
.innerBg {
  background-color: #f6f3ee;
}

.innerBanner {
  background-color: gray;
  height: 300px;
  // background-image: url(images/2886653_s.jpg);
  background-position: center;
  background-size: cover;
}

.attendantCard {
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
  &:hover {
    box-shadow: 0 6px 31px -2px rgba(0, 0, 0, 0.1);
    -webkit-transform: translate(0px, -10px);
    -ms-transform: translate(0px, -10px);
    transform: translate(0px, -10px);
  }
}
</style>
