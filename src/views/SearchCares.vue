<template>
  <div class="p-searchPage">
    <loading :active.sync="isLoading" loader="dots" color="#499d66"></loading>
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
        <form class="form-inline d-flex">
          <select
            id="ctiySelect"
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
            id="areaSelect"
            class="form-control mb-2 mr-sm-2"
            name=""
            v-model="selectedArea"
            @change="useAreaSearch(selectedArea)"
          >
            <option value="allArea">全部地區</option>
            <option v-for="area in areas" :key="area.Id" :value="`${area.Id}`">
              {{ area.Area }}</option
            >
          </select>
          <div class="dropdown ml-auto">
            <button
              class="btn bg-white form-control dropdown-toggle mb-2 mr-sm-2"
              type="button"
              id="sortBtn"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-filter"></i> 排序
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#" @click.prevent="sort('inc')"
                >評價由低到高</a
              >
              <a class="dropdown-item" href="#" @click.prevent="sort('dec')"
                >評價由高到低</a
              >
            </div>
          </div>
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
          :to="`/carePage/${attendant.Id}`"
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
                  v-if="attendant.Photo"
                  :src="
                    `http://careup.rocket-coding.com/Uploads/` +
                      `${attendant.Photo}`
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
                    {{ attendant.Name }}
                  </div>
                  <div>{{ attendant.服務時段 }}</div>

                  <div class="p-attendantCard__salary text-primary mt-2">
                    {{ attendant.Salary | currency }}
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
                {{ attendant.Experience }}
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
      attendants: [],
      cities: [],
      areas: [],
      selectedCity: '',
      selectedArea: 'allArea',
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
      const api = `${process.env.VUE_APP_APIPATH}City?Id=15`;
      vm.$http
        .get(api)
        .then(res => {
          // console.log(res);
          vm.attendants = res.data.attendants;
          vm.cities = res.data.cityList;
          vm.selectedCity = res.data.locationses[0].CityId; //預設高雄
          vm.areas = res.data.locationses;
          vm.isLoading = false;
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
          if (res.data.locationses) {
            vm.areas = res.data.locationses;
            vm.selectedArea = 'allArea';
          }
          vm.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    useAreaSearch(areaId) {
      const vm = this;
      vm.isLoading = true;
      if (areaId == 'allArea') {
        vm.useCitySearch(vm.selectedCity);
      } else {
        const api = `${process.env.VUE_APP_APIPATH}Location?Id=${areaId}`;
        vm.$http
          .get(api)
          .then(res => {
            // console.log('useAreaSearch', res);
            vm.attendants = res.data.attendants;
            vm.isLoading = false;
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    sort(sortMethod) {
      let sortStartMethod = sortMethod == 'dec' ? 1 : -1;
      function compare(a, b) {
        if (a.star < b.star) return sortStartMethod;
        if (a.star > b.star) return -sortStartMethod;
        return 0;
      }

      this.attendants.sort(compare);
    }
  }
};
</script>

<style lang="scss"></style>
