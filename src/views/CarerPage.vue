<template>
  <div class="p-attendResume">
    <loading :active.sync="isLoading" loader="dots" color="#499d66"></loading>

    <!-- 照服員 -->
    <div class="container py-5">
      <router-link to="/searchCares">回上一頁</router-link>

      <div class="row">
        <div class="col-12 col-lg-8 order-2 order-lg-1 ">
          <div class="bg-white p-4" style="border-radius: 10px">
            <h4 class="py-3 mb-4">照服員基本資料<br /></h4>
            <div class="p-attendResume__basicInfo d-flex mb-4">
              <img
                v-if="resume.Photo"
                :src="
                  `http://careup.rocket-coding.com/Uploads/` + `${resume.Photo}`
                "
                alt="..."
                width="120"
                height="120"
                class="rounded-circle objectFit"
              />
              <img
                class="rounded-circle objectFit"
                v-else
                width="120"
                height="120"
                src="@/assets/images/noPhoto.png"
              />
              <div class="ml-3">
                <div class="p-attendResume__basicInfo__name mb-3">
                  {{ resume.Name }}
                </div>

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

            <!-- 評價與問與答 -->

            <div class="p-evaluationQuiz">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="evaluation-tab"
                    data-toggle="tab"
                    href="#evaluation"
                    role="tab"
                    aria-controls="evaluation"
                    aria-selected="true"
                    ><i class="fas fa-star"></i> 評價 (
                    {{ allComment.length }} )</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="quiz-tab"
                    data-toggle="tab"
                    href="#quiz"
                    role="tab"
                    aria-controls="quiz"
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
                  id="evaluation"
                  role="tabpanel"
                  aria-labelledby="evaluation-tab"
                >
                  <div
                    class="p-evaluationQuiz__evaluationContext card border-0 rounded m-4"
                    v-for="(comment, index) in allComment"
                    :key="index"
                  >
                    <div class="p-evaluation__context card-body radius-3">
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
                <div
                  class="tab-pane fade"
                  id="quiz"
                  role="tabpanel"
                  aria-labelledby="quiz-tab"
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
                    class="p-evaluationQuiz__quizContext card border-0 rounded m-4"
                    v-for="(quiz, index) in quizs"
                    :key="'quiz' + index"
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
        <div
          class="col-12 col-lg-4 mt-3 mt-lg-0 order-1 order-lg-2 mb-4 mb-lg-0"
        >
          <div class="bg-white p-4" style="border-radius: 10px">
            <h3>預約服務</h3>
            提請您，下單後您可以於「我的訂單」查看已預約訂單進度
            <!-- <p class="h5 text-right">{{ resume.Salary | currency }} / 日</p> -->
            <form class="mt-4">
              <div class="form-row">
                <div class="form-group col-12">
                  <label for="inputEmail4"
                    ><i class="far fa-calendar-alt text-primary"></i>
                    預約服務期間</label
                  >
                  <v-date-picker
                    mode="range"
                    v-model="range"
                    :popover="{ placement: 'bottom', visibility: 'click' }"
                    :min-date="new Date()"
                    :max-date="this.maxDate()"
                    :disabled-dates="this.disabledDates()"
                    color="green"
                  />
                </div>
              </div>
            </form>
            <div class="text-right mt-4">{{ resume.Salary | currency }} 元</div>

            <div class="text-right border-bottom mb-1">
              x {{ this.dateDiff }} 日
            </div>

            <div
              class="text-secondary text-right mt-1 mb-2"
              style="font-size:1.5rem"
            >
              {{ (resume.Salary * this.dateDiff) | currency }}元
            </div>

            <!-- <a
              class="btn btn-primary-soft text-primary btn-lg btn-block"
              @click="focusQuizBtn()"
              >發出提問 <i class="fas fa-comment-dots"></i
            ></a> -->
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
            vm.$bus.$emit('updateUnreply', attendantId); //更新未讀取訊息數量
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
        Answer: vm.attentandQuizContent,
        Status: '1'
      };
      vm.$http
        .post(api, postObj)
        .then(res => {
          console.log('照服員送出回覆', res);
          // vm.$refs.attentandContent.reset();
          vm.attentandQuizContent = '';
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
