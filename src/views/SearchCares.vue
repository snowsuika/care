<template>
  <div class="clientPage">
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
                v-if="attendant.photo"
                :src="
                  `http://careup.rocket-coding.com/Uploads/` +
                    `${attendant.photo}`
                "
              />
              <img
                width="120"
                height="120"
                class="rounded-circle profirePhoto"
                v-else
                src="@/assets/images/noPhoto.png"
              />
              <div class="ml-3">
                <h5 class="card-title font-weight-bold">
                  {{ attendant.name }}
                </h5>
                <div class="rating d-flex">
                  <star-rating
                    :max-rating="5"
                    :increment="0.01"
                    :read-only="true"
                    :show-rating="false"
                    inactive-color="#585851"
                    active-color="orange"
                    :rating="attendant.star"
                    :star-size="18"
                  >
                  </star-rating>
                  ({{ attendant.count }})
                </div>
                <p class="font-weight-bolder text-primary h6 mt-3 mb-0">
                  {{ attendant.salary | currency }} 元/日
                </p>
                {{ attendant.服務時段 }}
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
              {{ attendant.experience }}
            </p>
            <p class="d-flex justify-content-lg-between align-items-center h5">
              <router-link
                class="btn btn-primary-soft text-primary btn-block"
                :to="`/carePage/${attendant.attendantId}`"
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
      selectedArea: 0,
      rating: 0
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
          vm.selectedCity = res.data.locationses[0].CityId; //預設高雄
          vm.areas = res.data.locationses;
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
          // console.log(res);
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
