<template>
  <div class="p-searchPage">
    <loading :active.sync="isLoading"></loading>
    <div
      class="p-searchPage__banner d-flex justify-content-center align-items-center text-white"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/images/banner/2886626_m.jpg') + ')'
      }"
    ></div>
    <!-- 照服員 -->
    <div class="container py-5">
      <div class="p-searchPage__serachBar p-2 mb-3">
        <form class="form-inline">
          <label class="sr-only" for="inlineFormInputName2">Name</label>
          <select
            id="my-select"
            class="form-control mb-2 mr-sm-2"
            v-model="selectedCity"
            @change="useCitySearch(selectedCity)"
          >
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
        <router-link
          tag="li"
          class="col-12 col-lg-4 col-md-6 mb-4"
          v-for="attendant in attendants"
          :key="attendant.Id"
          :to="`/carePage/${attendant.attendantId}`"
        >
          <div
            class="p-attendantCard d-flex flex-column justify-content-between bg-white radius-2 p-3 h-100"
          >
            <div>
              <div class="d-flex align-items-center mb-2">
                <img
                  width="120"
                  height="120"
                  class="p-attendantCard__photo rounded-circle "
                  v-if="attendant.photo"
                  :src="
                    `http://careup.rocket-coding.com/Uploads/` +
                      `${attendant.photo}`
                  "
                />
                <img
                  width="120"
                  height="120"
                  class="p-attendantCard__photo rounded-circle "
                  v-else
                  src="@/assets/images/noPhoto.png"
                />
                <div class="ml-3">
                  <div class="p-attendantCard__name font-weight-bold">
                    {{ attendant.name }}
                  </div>
                  <div>{{ attendant.服務時段 }}</div>

                  <div class="p-attendantCard__salary text-primary mt-2">
                    {{ attendant.salary | currency }}
                    <span style="font-size:.85rem">元/日</span>
                  </div>
                </div>
              </div>
              <div class="p-attendantCard__serviceItem text-truncate">
                <span
                  class="badge badge-pill badge-light p-2 ml-1 mb-1"
                  v-for="(serviceItem, i) in attendant.服務項目"
                  :key="i"
                  >{{ serviceItem }}</span
                >
              </div>
              <p class="p-attendantCard__content p-2 mb-0">
                {{ attendant.experience }}
              </p>
            </div>
            <div class="rating d-flex justify-content-end">
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
          </div>
        </router-link>
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

<style lang="scss"></style>
