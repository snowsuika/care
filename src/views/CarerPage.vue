<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div
      class="banner d-flex justify-content-center align-items-center text-white"
    ></div>
    <!-- 照服員 -->
    <div class="container py-5">
      <router-link to="/searchCares">回上一頁</router-link>

      <div class="row">
        <div class="col-12 col-md-8">
          <div class="bg-white p-4" style="border-radius: 10px">
            <h4 class="my-3">照服員基本資料</h4>
            <div class="基本資料 d-flex mb-4">
              <img
                v-if="resume.Photo"
                :src="
                  `http://careup.rocket-coding.com/Uploads/` + `${resume.Photo}`
                "
                alt="..."
                class="rounded-circle profirePhoto"
              />
              <img
                class="rounded-circle profirePhoto"
                v-else
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXFxcX////CwsLGxsb7+/vT09PJycn19fXq6urb29ve3t7w8PDOzs7n5+f5+fnt7e30nlkBAAAFHUlEQVR4nO2dC5qqMAyFMTwUBdz/bq+VYYrKKJCkOfXmXwHna5uTpA+KwnEcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3EcA2iO9cdIc5PUdO257y+BU39u66b4HplE3fk6VIcnqmNfl1+gksr6+iIucjl3WYukor7+re6Hoe1y1UhNO3zUd+fUFRmKpOa0Tt6dY5ubRCrOG/QFLk1WGmnt/JxzykcjdZ/jyxJDLlOV2l36AtcsJJb9boG3YcR3DuqODIE3ztYKPkDdmwRmpUToUaSaq++AvRgZMWbOpbQW8hdCAm8ZDugoikzREdCJ2okJPBx6azFLNOwoOgcxojJ98JkaTSJxMpklKrCAKhZGI0drTY/wU5lXoJYibannV9NYy4oozNEAkPHTjop+DTDxVGkIgYJNoyQQJtiIW+EMjGAjm649AjGIaqswcEFQKJ2QPlJbqytki6ZXAAZRJ52J2McaUowzAfs+uFzrYhnzaapphiPWdaJWShqxjqa6kTTQ205TVbsfMa6htL0iYOsXpJrQjHSmCkv1QGPtiHqlYcQ21Gj7fcDU8xOEUuNgSltPzexh+HqFlanCBHZ4OLhCV+gK/3OF6vWvucLv98MUOY2pwu/PS/+D2qJU7pYGbOvDFDW+bbON9p3o3oRxn0bfLgZTgSn6pSfrtr56qLHemtHPTK2319SzGvtjQ9qeb39WgS66Cm073nd0U1PzDdJCO3Gzn6TKpl9Zq7ujGWsQhlA3NwWIMwG9zM08Y/tBrR9VWeczv5CSQuuUNKIUTk23ZJ5RKfVhjnkXotfWIlgX2BSCDYbZR+QTcLhb3dKZDUY2M0d4KWItwhHRah/zsrOgKw4wycwjcgEVcgQDQo23CqSiWEJkFAfod2oE1uIFdA1OsCPqFXYNTjCfb8Ez+iX2x5sKLlVbhtqdDcar9ZevhnbZxoBUD35k23t0d304LYs1ELVbnfFaZ/REJJX9niP8Q19moZGo3m8XR/yBvOnjFfsXcI2c8ZuNo7WMP5HQh6yRGrlmFOJTnyTcT+zRlqPUBI2gTVWNUzUna1ERgecgF4GpNBQ38jGqxVLzQA1A31Rrhk6Yz9QEh/WND0GnuG9huhiTXJkxfAizTHLr6cbJKN6UCU6x/2DTRE1xEeEXi3O0ZUqBN4nJRzHhFB1JPlFTBZlI2kQ8zc3KJ1Le8DIRmFJiknuVS6RK4Ej/JtBfJErDSzOBiY4wJHX6Z1I4v1GUmdCPNirnLLeg3oJLcbX5PcpHNbRvOa1A956QmRPOUXVF+zkaUJynpkYR0bOMJH2nNej1pqyV/aKkz9jr5yj5vrXXz1F5SQLACiMapmierj2ikLyleKdlA/I/2oFxiglxx9B+mHwz0lf34IZQfhDRhlD6bhvgEAoPYooHkTczSIZTLC+cEExsoNKZiGBiY9cCfo/Y/SjIOBMQizWWTe73CMUasJx7jlD+DdKdWUKoY4PRYFtGpO0G1Lx4RaadgTtJhf4fiGqGIwKWCGuGIwKWqP+7IxYCzygjR9IAO5pC7Da9g70TBVpWRNgFBlgT8RV2WxHbKwJMv4BOaEaYaU2K16yZMN/qgV+G7IWIvwyZCxHeDQMsR8wg0DBDDXB5H2EV+hkEGmaoySHQsEJNFoGGFWrAq98JRhUMX1iMMMqLLEIpK5jCbd4vw9nSt/72lewXiN6jmdjfq8Hdknlk92ZwJnbIMMRM7JBhiFlUFoHd1UWaP1QKsPsHA5mkNB+Smn9JqV3wskatnQAAAABJRU5ErkJggg=="
              />
              <div class="ml-3">
                <p>
                  {{ resume.Experience }}
                </p>

                <i class="fas fa-map-marker-alt text-primary"></i>
                服務地點：{{ resume.servierCity }}
                <template v-for="area in resume.serviceArea">
                  {{ area }}
                </template>
                <br />
                <i class="far fa-clock text-primary"></i>
                服務時段：{{ resume.serviceTimePeriod }}
              </div>
            </div>
            <hr />
            <div class="相關資格 mb-4">
              <h5 class="mb-3">相關資格</h5>
              <ul class="list-unstyled ml-4">
                <li>
                  <i class="fas fa-check text-primary mr-2"></i>照顧服務員證照
                </li>
              </ul>
            </div>
            <div class="服務項目 mb-4">
              <h5 class="mb-3">服務項目</h5>
              <ul class="row no-gutters ml-4 list-unstyled">
                <li
                  class="col-12 col-md-6 mb-2"
                  v-for="(serviceItem, index) in resume.serviceItems"
                  :key="index"
                >
                  <i class="fas fa-check-circle text-primary"></i>
                  {{ serviceItem }}
                </li>
              </ul>
            </div>
            <hr />
            <div class="評價">
              <div class="d-flex mb-2">
                <h5 class="mr-3">10 則評價</h5>
              </div>
              <div style="max-height: 200px;overflow-y: auto">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex align-baseline border-bottom mb-2">
                      <h6>謝先生 的家屬</h6>

                      <div class="rating ml-3">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                      </div>
                    </div>
                    <p class="mb-0">
                      專業不足可以學習，但態度永遠是進步的動力，虛心求教，觀我學習，以同理，愛心，耐心服務，才是專業的一環，也是作為居服師成功的典範!
                    </p>
                  </div>
                </div>
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex align-baseline border-bottom mb-2">
                      <h6>謝先生 的家屬</h6>
                      <div class="rating ml-3">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                      </div>
                    </div>
                    <p class="mb-0">
                      專業不足可以學習，但態度永遠是進步的動力，虛心求教，觀我學習，以同理，愛心，耐心服務，才是專業的一環，也是作為居服師成功的典範!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mt-3 mt-md-0">
          <div class="bg-white p-4" style="border-radius: 10px">
            <h3>預約服務</h3>
            <p class="h5">{{ resume.Salary | currency }} / 日</p>
            <form class="mt-4">
              <div class="form-row">
                <div class="form-group col-12">
                  <label for="inputEmail4">預約服務期間</label>
                  <v-date-picker
                    mode="range"
                    v-model="range"
                    :popover="{ placement: 'bottom', visibility: 'click' }"
                    :min-date="new Date()"
                    :max-date="this.maxDate()"
                    :disabled-dates="this.disabledDates"
                    color="yellow"
                  />
                </div>
              </div>
            </form>
            <p class="text-secondary h5 mb-5">
              {{ resume.Salary | currency }} 元 * {{ this.dateDiff }} 日 =
              {{ (resume.Salary * this.dateDiff) | currency }}元
            </p>
            <a
              href="chat.html"
              class="btn btn-primary-soft text-primary btn-lg btn-block"
              >傳送訊息 <i class="fas fa-comment-dots"></i
            ></a>
            <button
              class="btn btn-primary btn-lg btn-block"
              @click="bookingCare()"
            >
              預約日照服務
            </button>
          </div>
        </div>
      </div>
    </div>
    <modal-booking-step
      :bookingstart="this.changeFormate(range.start)"
      :bookingend="this.changeFormate(range.end)"
    ></modal-booking-step>
  </div>
</template>

<script>
/* global $ */
import ModalBookingStep from '@/components/ModalBookingStep.vue';
export default {
  components: {
    ModalBookingStep
  },
  data() {
    return {
      range: {
        start: new Date(),
        end: new Date()
      },
      resume: {
        servierCity: '',
        serviceArea: [],
        serviceTimePeriod: '',
        serviceItems: []
      },
      rate: '',
      bookedDate: [],
      isLoading: false
    };
  },
  created() {
    this.getAttendantData();
  },
  computed: {
    dateDiff: function() {
      return (
        parseInt(
          Math.abs(this.range.end - this.range.start) / 1000 / 60 / 60 / 24
        ) + 1
      ); // 把相差的毫秒數轉換為天數;
    },
    disabledDates() {
      return this.bookedDate.map(function(item) {
        return new Date(item);
      });
    }
  },

  methods: {
    getAttendantData() {
      const vm = this;

      const attendantId = vm.$route.params.id;
      vm.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}GetAttendat?id=${attendantId}`;
      vm.$http
        .get(api)
        .then(res => {
          // console.log(res);
          vm.resume = res.data.attendantDetails;
          vm.resume.servierCity =
            res.data.attendantDetails.Locationses[0].Cities.City;
          vm.resume.serviceArea = res.data.attendantDetails.Locationses.map(
            item => {
              return item.Area;
            }
          );
          vm.rate = res.data.star;

          vm.bookedDate = res.data.日期;
          vm.resume.serviceTimePeriod = res.data.服務時段;
          vm.resume.serviceItems = res.data.服務項目;

          vm.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    bookingCare() {
      let Identity = localStorage.getItem('identity');
      let errorMessage = '';

      if (!this.$parent.isLogin) {
        errorMessage = '請先登入才能使用！';
      } else if (Identity !== 'member') {
        errorMessage = '預約日照服務僅供一般會員';
      }

      if (this.$parent.isLogin && Identity == 'member') {
        $('#bookingCareer').modal('show');
      } else {
        this.$swal({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: false,
          onOpen: toast => {
            toast.addEventListener('mouseenter', this.$swal.stopTimer);
            toast.addEventListener('mouseleave', this.$swal.resumeTimer);
          },
          icon: 'warning',
          title: `${errorMessage}`
        });
      }
    },
    changeFormate(date) {
      var mm = date.getMonth() + 1; // getMonth() is zero-based
      var dd = date.getDate();

      return [
        date.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd
      ].join('-');
    },
    maxDate() {
      let maxDate = new Date().setDate(new Date().getDate() + 30);
      return maxDate;
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
  height: 250px;
  // background-image: url(images/2886653_s.jpg);
  background-position: center;
  background-size: cover;
}
</style>
