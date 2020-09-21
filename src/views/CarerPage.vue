<template>
  <div class="ClientPage">
    <loading :active.sync="isLoading"></loading>
    <div
      class="innderBanner d-flex justify-content-center align-items-center text-white"
    ></div>
    <!-- 照服員 -->
    <div class="container py-5">
      <router-link to="/searchCares">回上一頁</router-link>

      <div class="row">
        <div class="col-12 col-md-8">
          <div class="bg-white p-4" style="border-radius: 10px">
            <h4 class="my-3">照服員基本資料</h4>
            <div class="d-flex mb-4">
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
                <h5>{{ resume.Name }}</h5>

                <i class="fas fa-map-marker-alt text-primary"></i>
                服務地點：{{ resume.servierCity }}
                <template v-for="area in resume.serviceArea">
                  {{ area }}
                </template>
                <br />
                <i class="far fa-clock text-primary"></i>
                服務時段：{{ resume.serviceTimePeriod }}
                <br />
                <i class="fas fa-award text-primary"></i>
                已通過照服員資格認證
              </div>
            </div>

            <hr />
            <div class="mb-4">
              <h5 class="mb-3">相關經歷</h5>
              <p class="ml-4 ">
                {{ resume.Experience }}
              </p>
            </div>
            <div class="mb-4">
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

            <div>
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    ><i class="fas fa-star"></i> 評價 (
                    {{ allComment.length }} )</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    ><i class="fas fa-comment-dots"></i> 問與答 ({{
                      quizs.length
                    }})
                  </a>
                </li>
              </ul>
              <div
                class="tab-content"
                id="myTabContent"
                style="max-height:400px;overflow-y: auto"
              >
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div>
                    <div
                      class="card border-0 bg-light rounded m-4"
                      v-for="(comment, index) in allComment"
                      :key="index"
                    >
                      <div
                        class="card-body radius-3"
                        style="background-color: rgb(239 247 247);"
                      >
                        <div class="d-flex align-baseline border-bottom mb-2">
                          <h6>{{ comment.memeber }}</h6>
                          <div class="rating ml-3">
                            <star-rating
                              :max-rating="5"
                              :increment="0.01"
                              :read-only="true"
                              :show-rating="false"
                              inactive-color="#585851"
                              active-color="orange"
                              :rating="comment.star"
                              :star-size="18"
                              style="transform: translateY(-5px);"
                            >
                            </star-rating>
                          </div>
                        </div>
                        <p class="mb-0">
                          {{ comment.comment }}
                        </p>
                        <small class="float-right">2020-08-17 22:09</small>
                      </div>
                    </div>
                    <div class="my-5" v-if="!allComment.length">
                      <p>目前尚無評價喔！</p>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div class="m-4">
                    <validation-observer
                      ref="memberQuizContent"
                      v-slot="{ invalid }"
                    >
                      <form @submit.prevent="submitForm">
                        <div
                          class="form-group"
                          v-if="isLogin && identity == 'member'"
                        >
                          <label for="memberQuizContent"
                            >請輸入提問內容：</label
                          >
                          <validation-provider
                            rules="required"
                            v-slot="{ errors, classes }"
                          >
                            <textarea
                              class="form-control"
                              :class="classes"
                              name="內容"
                              id="memberQuizContent"
                              v-model="memberQuizContent"
                              rows="3"
                            ></textarea>
                            <div v-if="errors[0]" class="invalid-feedback">
                              {{ errors[0] }}
                            </div>
                          </validation-provider>
                        </div>
                        <div class="text-right">
                          <button
                            class="btn btn-primary-soft text-primary"
                            :disabled="invalid"
                            @click.prevent="sendMemberQuiz()"
                          >
                            我要提問
                          </button>
                        </div>
                      </form>
                    </validation-observer>
                  </div>
                  <div
                    class="card border-0 rounded m-4"
                    v-for="(quiz, index) in quizs"
                    :key="'quiz' + index"
                    style="background-color: rgb(239 247 247);"
                  >
                    <div class="card-body">
                      <div class="mb-3">
                        <h6 class="mb-3">
                          <i class="fas fa-user-circle"></i>
                          {{ quiz.MemberAccount }}
                        </h6>
                        <p class="mb-0">
                          {{ quiz.Quiz }}
                          <small class="float-right my-2">
                            {{ quiz.InitDateTime }}</small
                          >
                        </p>
                      </div>
                      <hr />
                      <div class="text-primary ml-5">
                        <p v-if="quiz.QuestionAnswers[0]">
                          <img
                            width="30"
                            height="30"
                            v-if="resume.Photo"
                            :src="
                              `http://careup.rocket-coding.com/Uploads/` +
                                `${resume.Photo}`
                            "
                            alt="..."
                            class="rounded-circle objectFit"
                          />
                          照服員回覆:
                        </p>

                        <p v-if="quiz.QuestionAnswers[0]">
                          {{ quiz.QuestionAnswers[0].Answer }}
                          <small class="float-right">
                            {{ quiz.QuestionAnswers[0].ReplyTime }}
                          </small>
                        </p>
                        <div
                          v-if="
                            identity == 'attendant' &&
                              userId == activePageId &&
                              !quiz.QuestionAnswers.length
                          "
                        >
                          <a
                            class=""
                            data-toggle="collapse"
                            :href="'#quiz' + quiz.Id"
                          >
                            回覆留言
                          </a>

                          <div
                            class="collapse multi-collapse"
                            :id="'quiz' + quiz.Id"
                          >
                            <div class="form-group">
                              <textarea
                                class="form-control w-10"
                                id="attentandContent"
                                v-model="attentandQuizContent"
                                rows="3"
                              ></textarea>
                            </div>
                            <button
                              class="btn btn-primary-soft text-primary"
                              @click="sendAttendantReply(quiz.Id)"
                            >
                              送出回覆
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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
                    :disabled-dates="this.disabledDates()"
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
              class="btn btn-primary-soft text-primary btn-lg btn-block"
              @click="focusQuizBtn()"
              >發出提問 <i class="fas fa-comment-dots"></i
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
      ref="bookingModal"
      :bookingstart="this.changeFormate(range.start)"
      :bookingend="this.changeFormate(range.end)"
    ></modal-booking-step>
  </div>
</template>

<script>
// /* global $ */
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
      allComment: [],
      quizs: [],
      memberQuizContent: '',
      attentandQuizContent: '',
      rating: 0,
      activePageId: '',

      isLoading: false
    };
  },
  props: ['is-login', 'identity', 'user-id'],
  created() {
    this.getAttendantData();
    this.getQuizData();
    this.activePageId = this.$route.params.id;
  },
  computed: {
    dateDiff: function() {
      return (
        parseInt(
          Math.abs(this.range.end - this.range.start) / 1000 / 60 / 60 / 24
        ) + 1
      ); // 把相差的毫秒數轉換為天數;
    }
  },

  methods: {
    getAttendantData() {
      const vm = this;
      const attendantId = vm.$route.params.id;

      vm.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}SelectAttendant?id=${attendantId}`;
      vm.$http
        .get(api)
        .then(res => {
          console.log('照服員個人頁面', res);
          vm.resume = res.data.attendantDetails;
          vm.resume.servierCity =
            res.data.attendantDetails.Locationses[0].Cities.City;
          vm.resume.serviceArea = res.data.attendantDetails.Locationses.map(
            item => {
              return item.Area;
            }
          );
          vm.rate = res.data.star;

          vm.resume.serviceTimePeriod = res.data.服務時段;
          vm.resume.serviceItems = res.data.服務項目;
          vm.bookedDate = res.data.已被預約的日期;
          vm.allComment = res.data.allcomment; // 訂單評論

          vm.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getQuizData() {
      const vm = this;
      const attendantId = vm.$route.params.id;

      vm.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}AttendantsGetQuiz?id=${attendantId}`;
      vm.$http
        .get(api)
        .then(res => {
          console.log('取得Q&A列表', res.data);
          // vm.quizs = res.data.filter(element => {
          //   return element.QuestionAnswers.length > 0 &&  !res.data.message;
          // });

          if (!res.data.message) {
            vm.quizs = res.data;
          }

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
        this.$refs.bookingModal.modalshow();
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
    // 問與答
    //家屬送出問題
    sendMemberQuiz() {
      const vm = this;
      let errorMessage = '';
      let identity = localStorage.getItem('identity');
      let userMail = localStorage.getItem('userMail');

      if (!vm.$parent.isLogin) {
        errorMessage = '請先登入才能使用！';
      } else if (identity !== 'member') {
        errorMessage = '此功能僅提供給一般會員';
      }

      if (this.$parent.isLogin && identity == 'member') {
        const api = `${process.env.VUE_APP_APIPATH}Quiz`;
        vm.$http
          .post(api, {
            AttendantId: vm.activePageId,
            MemberAccount: userMail,
            Quiz: vm.memberQuizContent
          })
          .then(() => {
            // console.log(res);
            vm.memberQuizContent = '';
            vm.$refs.memberQuizContent.reset();
            vm.getQuizData();
          })
          .catch(err => {
            console.log(err);
          });
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
    //照服員給予回覆
    sendAttendantReply(quizId) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}QuizReply`;
      let postObj = {
        QuestionId: quizId,
        Attendant: '驚嚇倉鼠',
        Answer: vm.attentandQuizContent,
        Status: '1'
      };
      vm.$http
        .post(api, postObj)
        .then(res => {
          console.log('照服員送出回覆', res);
          // vm.$refs.attentandContent.reset();
          vm.getQuizData();
        })
        .catch(err => {
          console.log(err);
        });
    },
    //

    //工具類  function
    changeFormate(date) {
      var mm = date.getMonth() + 1; // getMonth() is zero-based
      var dd = date.getDate();

      return [
        date.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd
      ].join('-');
    },
    disabledDates() {
      let disabledDates = this.bookedDate.map(function(item) {
        return new Date(item);
      });
      return disabledDates;
    },
    maxDate() {
      let maxDate = new Date().setDate(new Date().getDate() + 60);
      return maxDate;
    }
  }
};
</script>

<style lang="scss">
body {
  background-color: #f6f3ee;
}
.innderBanner {
  background-color: gray;
  height: 250px;
  // background-image: url(images/2886653_s.jpg);
  background-position: center;
  background-size: cover;
}
</style>
