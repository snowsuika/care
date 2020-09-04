<template>
  <div>
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
                width="120"
                height="120"
                src="https://attach.setn.com/newsimages/2020/08/02/2697335-PH.jpg"
                alt="..."
                class="rounded-circle"
              />
              <div class="ml-3">
                <p>
                  超過十年的照顧經驗，人稱亞洲照顧王。沒有我不能駕馭的病患
                  或老人，請放心交給我超過十年的照顧經驗，人稱亞洲照顧王。沒有我不能駕馭的病患
                  或老人，請放心交給我。
                </p>

                <i class="fas fa-map-marker-alt text-primary"></i>
                服務地點：高雄市 前鎮區、三民區、苓雅區、小港區<br />
                <i class="far fa-clock text-primary"></i>
                服務時段：傍晚(15:00-23:00)
              </div>
            </div>
            <hr />
            <div class="相關資格 mb-4">
              <h5 class="mb-3">相關資格</h5>
              <ul class="list-unstyled ml-4">
                <li>
                  <i class="fas fa-check text-primary mr-2"></i>照顧服務員證照
                </li>
                <li>
                  <i class="fas fa-check text-primary mr-2"></i>照服員結業證書
                </li>
                <li>
                  <i class="fas fa-check text-primary mr-2"></i
                  >體檢表(含B肝表面抗原、胸部Ｘ光)
                </li>
              </ul>
            </div>
            <div class="服務項目 mb-4">
              <h5 class="mb-3">服務項目</h5>
              <ul class="row no-gutters ml-4 list-unstyled">
                <li class="col-12 col-md-6 mb-2">
                  <i class="fas fa-check-circle text-primary"></i> 協助如廁
                </li>
                <li class="col-12 col-md-6 mb-2">
                  <i class="fas fa-check-circle text-primary"></i>
                  協助進食、用藥（按醫囑給藥）
                </li>
                <li class="col-12 col-md-6 mb-2">
                  <i class="fas fa-check-circle text-primary"></i> 代購物品
                </li>
                <li class="col-12 col-md-6 mb-2">
                  <i class="fas fa-check-circle text-primary"></i>
                  備餐（限被照顧者及其伴侶）
                </li>
                <li class="col-12 col-md-6 mb-2">
                  <i class="fas fa-check-circle text-primary"></i>
                  身心靈陪伴及安全維護
                </li>
                <li class="col-12 col-md-6 mb-2">
                  <i class="fas fa-check-circle text-primary"></i>
                  環境整理、洗衣（限被照顧者）
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
            <p class="h5">$1,000 / 日</p>
            <form class="mt-4">
              <div class="form-row">
                <div class="form-group col-12">
                  <label for="inputEmail4">預約服務期間</label>
                  <v-date-picker
                    mode="range"
                    v-model="range"
                    :popover="{ placement: 'bottom', visibility: 'click' }"
                    color="yellow"
                  />
                </div>
              </div>
            </form>
            <p class="text-secondary h5 mb-5">
              {{ this.pay }} 元 * {{ this.dateDiff }} 日 = 4,000元
            </p>
            <a
              href="chat.html"
              class="btn btn-primary-soft text-primary btn-lg btn-block"
              >傳送訊息 <i class="fas fa-comment-dots"></i
            ></a>
            <button
              class="btn btn-primary btn-lg btn-block"
              data-toggle="modal"
              data-target="#bookingCareer"
            >
              預約日照服務
            </button>
          </div>
        </div>
      </div>
    </div>
    <modal-booking-step
      :bookingstart="range.start"
      :bookingend="range.end"
    ></modal-booking-step>
  </div>
</template>

<script>
//global registration
import ModalBookingStep from '@/components/ModalBookingStep.vue';
export default {
  components: {
    ModalBookingStep
  },
  data() {
    return {
      pay: 1000,
      // Data used by the date picker
      range: {
        start: new Date(), // Jan 16th, 2018
        end: new Date() // Jan 19th, 2018
      }
    };
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
  methods: {}
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
