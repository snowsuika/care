<template>
  <div class="home bg-white">
    <!-- banner -->

    <!-- 版本1 -->
    <!-- <div class="l-banner container-fluid bg-white">
<div class="l-banner__content container">
 
        <div class="l-banner__content__title">
              <img
        src="@/assets/images/sun1_0.png"
        width="70"

        class="l-banner__content__title__sun position-absolute"
        alt=""
      />
          <h1>FIND <span class="text-primary">YOUR</span><br>CARES.</h1>
          <p>日日照你，快速方便的照服媒合</p>
          <button class="btn btn-secondary btn-lg text-white radius-4 mt-3">尋找日照服務</button>
        </div>
        <div class="l-banner__content__mainBanner">
          
    <div
      id="carouselExampleFade"
      class="banner carousel slide "
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item active"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/images/banner/2886679_l.jpg') + ')'
          }"
        >
          1
        </div>
        <div
          class="carousel-item"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/images/banner/2886626_m.jpg') + ')'
          }"
        >
          2
        </div>
        <div
          class="carousel-item"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/images/banner/2886668_m.jpg') + ')'
          }"
        >
          2
        </div>
      </div>
   

    </div>

        </div>

    
    </div>
<img src="@/assets/images/bg_or.svg" class="bg_or img-fluid position-absolute" alt="" />
    <img src="@/assets/images/bg_gr.svg" class="bg_gr img-fluid position-absolute" alt="" />
</div> -->

    <div class="l-banner position-relative version_2">
      <div class="p-banner__title position-absolute">
        <img
          src="@/assets/images/sun1_0.png"
          width="70"
          class="p-banner__title__sun position-absolute"
          alt=""
        />
        <!-- 日日照你 -->
      </div>
      <!-- <div class="p-banner__copy d-flex align-items-baseline position-absolute">
        <p
          class="p-banner__copy__text position-relative"
          data-aos="fade-down"
          data-aos-offset="80"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          style="top:30px"
        >
          解決日照問題，
        </p>

        <p
          class="p-banner__copy__text"
          data-aos="fade-down"
          data-aos-offset="80"
          data-aos-delay="1000"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          快速<span class="text-secondary">方便</span>的日照服務平台
        </p>

        <p
          class="p-banner__copy__text position-relative"
          data-aos="fade-down"
          data-aos-offset="80"
          data-aos-delay="1500"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          style="top:30px"
        >
          將照顧重擔<span class="text-primary">託付</span>給我們
        </p>
      </div> -->

      <div
        id="carouselExampleFade"
        class="banner carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div
            class="carousel-item active"
            :style="{
              backgroundImage:
                'url(' + require('@/assets/images/banner/2886679_l.jpg') + ')'
            }"
          >
            1
          </div>
          <div
            class="carousel-item"
            :style="{
              backgroundImage:
                'url(' + require('@/assets/images/banner/2886626_m.jpg') + ')'
            }"
          >
            2
          </div>
          <div
            class="carousel-item"
            :style="{
              backgroundImage:
                'url(' + require('@/assets/images/banner/2886668_m.jpg') + ')'
            }"
          >
            2
          </div>
        </div>
      </div>

      <img
        src="@/assets/images/bg_l.svg"
        class="l-banner__hrImg img-fluid position-absolute"
        alt=""
        style="bottom:-1px;z-index:1"
      />
    </div>

    <!-- 
<div class="p-search position-relative">
<div class="container">
  <div class="p-search__wrap">
    <form>
  <div class="form-row align-items-center">
    <div class="col-sm-3 my-1 mr-0">
      <select class="form-control">
  <option>Default select</option>
</select>
    </div>
  <div class="col-sm-3 my-1 mr-0">
      <select class="form-control">
  <option>Default select</option>
</select>
    </div>
  <div class="col-sm-3 my-1 mr-0">
      <input class="form-control" type="text" placeholder="Default input">
    </div>



    <div class="col-auto my-1">
      <button type="submit" class="btn btn-primary"><i class="fas fa-search"></i> 搜尋</button>
    </div>
  </div>
</form>
  </div>
</div>
</div> -->

    <section
      class="p-features bg-white"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      <div class="container text-center position-relative">
        <div class="m-auto" style="width:66%;">
          <h2 class="mb-5">平台特色</h2>
          <p style="font-size: 1.2rem;">
            <span class="text-primary font-weight-bold">想找台籍看護？</span
            >日日照你來幫您！<br />
            幫您<span class="text-primary font-weight-bold"
              >紀錄家中長輩照護紀錄</span
            >，讓照護簡單有保障
          </p>
          <p style="color:gray">
            資訊公開透明、雙向溝通無障礙，服務前可先看到照服員的資料及評價，並事先提問，讓您可以<span
              class="text-secondary"
              >安心地將照顧重擔託付給我們</span
            >。不論是居家照顧、醫院看護，日日照你幫您把關
          </p>
        </div>
        <img
          src="@/assets/images/colud.svg"
          class="bg_colud_1 img-fluid position-absolute"
          alt=""
        />
        <img
          src="@/assets/images/colud.svg"
          class="bg_colud_2 img-fluid position-absolute"
          alt=""
        />
      </div>
    </section>

    <section class="p-serviceFlow position-relative bg-light">
      <div class="p-serviceFlow__bg">
        <img
          src="@/assets/images/bg_gr_1.svg"
          class="bg_gr_1 img-fluid position-absolute"
          alt=""
        />
        <img
          src="@/assets/images/bg_gr_2.svg"
          class="bg_gr_2 img-fluid position-absolute"
          alt=""
        />
      </div>
      <div class="container py-5">
        <h2 class="p-serviceFlow__title text-center border-bottom mb-0 p-0">
          平台流程
        </h2>
        <p class="text-center m-0">Service Flow</p>

        <div class="p-serviceFlow__content row text-center">
          <div class="col-md-4">
            <div
              class="p-serviceFlow__card position-relative p-4 bg-white"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-delay="0"
              data-aos-once="true"
              data-aos-duration="600"
            >
              <div class="p-serviceFlow__card__step position-absolute">
                STEP<br />1
              </div>
              <h3 class="p-serviceFlow__card__title mb-4">預約照服人員</h3>
              <img src="@/assets/images/serviceFlow_step1.svg" alt="" />
              <p>
                可透過問與答與照服員進行雙向溝通，雙方皆確認後服務即成立訂單。
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="p-serviceFlow__card position-relative p-4 bg-white"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-delay="1000"
              data-aos-once="true"
              data-aos-duration="600"
            >
              <div class="p-serviceFlow__card__step position-absolute">
                STEP<br />2
              </div>
              <h3 class="p-serviceFlow__card__title mb-4">開始進行照顧</h3>
              <img src="@/assets/images/serviceFlow_step2.svg" alt="" />
              <p>
                照服員需填寫照服日誌，做為雙方權益作保障及日後薪資發放依據。
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="p-serviceFlow__card position-relative p-4 bg-white"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-delay="2000"
              data-aos-once="true"
              data-aos-duration="600"
            >
              <div class="p-serviceFlow__card__step position-absolute">
                STEP<br />3
              </div>
              <h3 class="p-serviceFlow__card__title mb-4">家屬填寫評價</h3>
              <img src="@/assets/images/serviceFlow_step3.svg" alt="" />
              <p>
                契約結束後家屬可填寫評價供他人作參考，資訊公開透明好安心。
              </p>
            </div>
          </div>
        </div>
        <div class="text-center position-relative" style="margin-top:-10px">
          <button class="btn btn-primary btn-lg btn-black radius-5">
            立即尋找日照服務
          </button>
        </div>
      </div>
    </section>

    <section class="p-feedback">
      <div
        class="p-feedback__bg"
        :style="{
          backgroundImage:
            'url(' + require('@/assets/images/banner/feedback_bg.jpg') + ')'
        }"
      ></div>
      <div class="p-feedback__content position-relative">
        <img
          src="@/assets/images/Find_your_cares.svg"
          class="p-feedback__content__textBg img-fluid position-absolute"
          alt=""
        />
        <h2 class="p-feedback__content__title text-center mt-3 py-1 text-white">
          看看顧客怎麼說
        </h2>
        <p class="text-center text-white">User Voice Feedback</p>
        <div class="p-feedback__content__userFeedback position-relative">
          <div class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" class="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>

            <div class="container carousel-inner no-padding">
              <div class="carousel-item active">
                <div class="col-12 col-lg-4 mb-3 d-inline-block">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <img
                          class="mr-3"
                          src="@/assets/images/icons8-person-96.png"
                          alt="Generic placeholder image"
                        />
                        <div class="media-body">
                          <h5 class="mt-0">吳爺爺 的家屬</h5>
                          <div class="rating">
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                          </div>
                          謝謝許先生幫忙，使我父親在照顧期間心情都很開心，也非常願意繼續做復健。
                          讓我能夠安心且放心的上班。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4 mb-3 d-inline-block">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <img
                          class="mr-3"
                          src="@/assets/images/icons8-person-96.png"
                          alt="Generic placeholder image"
                        />
                        <div class="media-body">
                          <h5 class="mt-0">陳爺爺 的家屬</h5>
                          <div class="rating">
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star"></span>
                          </div>
                          林小姐是非常非常棒的看護，與我媽媽的互動良好，很主動關心，還會提供非常多的專業建議。
                          我媽媽在林小姐的照顧下，恢復良好丶精神愉快，非常推薦。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4 mb-3 d-inline-block">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <img
                          class="mr-3"
                          src="@/assets/images/icons8-person-96.png"
                          alt="Generic placeholder image"
                        />
                        <div class="media-body">
                          <h5 class="mt-0">王爺爺 的家屬</h5>
                          <div class="rating">
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                          </div>
                          非常感謝許先生臨危受命，從北投來到板橋為爸爸服務。許先生非常和善客氣，爸爸得到很好的照顧，真的非常感謝。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="col-12 col-lg-4 mb-3 d-inline-block">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <img
                          class="mr-3"
                          src="@/assets/images/icons8-person-96.png"
                          alt="Generic placeholder image"
                        />
                        <div class="media-body">
                          <h5 class="mt-0">葉爺爺 的家屬</h5>
                          <div class="rating">
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                          </div>
                          這是我第二次指定由蔡小姐來照顧我母親，這次蔡小姐幫我母親煮了一鍋入口及化的苦瓜雞，解決了我母親沒有牙齒又不能戴假牙享受美食的辛苦，然後回到家後我感受到母親是開心的，我知道因為有人陪她聊天，給了她不同的感觀。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4 mb-3 d-inline-block">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <img
                          class="mr-3"
                          src="@/assets/images/icons8-person-96.png"
                          alt="Generic placeholder image"
                        />
                        <div class="media-body">
                          <h5 class="mt-0">林奶奶 的家屬</h5>
                          <div class="rating">
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                          </div>
                          態度親切、溝通協調優良的照護員，讓我們家庭主要照顧者有彈性能休息，可以把父親安心的交給他，給人很愉快的經驗
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4 mb-3 d-inline-block">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <img
                          class="mr-3"
                          src="@/assets/images/icons8-person-96.png"
                          alt="Generic placeholder image"
                        />
                        <div class="media-body">
                          <h5 class="mt-0">王奶奶 的家屬</h5>
                          <div class="rating">
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                          </div>
                          嘉玲照顧病人時非常溫柔、細心、貼心、戴口罩、勤洗手而且也會幫病患注意醫護人員的衛教重點。
                          雖然現在疫情期間家屬的探病時間受限，但嘉玲可以獨當一面的陪伴照護～讓病患與家屬都可以感到安心放心。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="col-12 col-lg-4 mb-3 d-inline-block">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <img
                          class="mr-3"
                          src="@/assets/images/icons8-person-96.png"
                          alt="Generic placeholder image"
                        />
                        <div class="media-body">
                          <h5 class="mt-0">李爺爺 的家屬</h5>
                          <div class="rating">
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                          </div>
                          非常有耐心，不厭其煩的協助母親術後復健，時間彈性都能配合，溝通上無障礙，令人滿意
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4 mb-3 d-inline-block">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <img
                          class="mr-3"
                          src="@/assets/images/icons8-person-96.png"
                          alt="Generic placeholder image"
                        />
                        <div class="media-body">
                          <h5 class="mt-0">楊奶奶 的家屬</h5>
                          <div class="rating">
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                          </div>
                          除認真照長輩之外，也會根據長輩的身體狀況循序漸進幫忙長輩做能力可即簡單的自理，非常用心
                          ！
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4 mb-3 d-inline-block">
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <img
                          class="mr-3"
                          src="@/assets/images/icons8-person-96.png"
                          alt="Generic placeholder image"
                        />
                        <div class="media-body">
                          <h5 class="mt-0">李伯伯的家屬</h5>
                          <div class="rating">
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                            <span class="fa fa-star text-secondary"></span>
                          </div>
                          小陳專業、聰明，充分協助家屬處理失智長輩複雜的病情，協助出院遷至機構，安撫長輩適應新環境的能力優越，能有效減輕家屬負擔的優質照護員，如果最高五分，我會給他十分，非常推薦
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
      </div>
      <!-- <button class="btn btn-primary btn-lg btn-black radius-5">立即尋找日照服務</button> -->
    </section>

    <div class="常見問與答 container my-4 mb-5">
      <h2 class="text-center">常見 Q&A</h2>
      <div class="container">
        <div class="cos bg-light p-5" style="border-radius: 10px;">
          <div class="row">
            <div class="col-md-6">
              <div class="qablock">
                <div class="d-flex justify-content-between align-items-center">
                  家屬是否可中途解僱照服人員？
                  <a
                    class="btn btn-primary"
                    data-toggle="collapse"
                    role="button"
                    href="#multiCollapseExample1"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                    >箭頭</a
                  >
                </div>
                <div class="collapse multi-collapse" id="multiCollapseExample1">
                  <div class="card card-body border-0">
                    家屬與照服員雙方於服務期間皆可中途終止服務，但主動提出解約的一方須支付照服員日薪
                    50% 作為解約金。
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              若照服員已確認接收訂單，家屬未付款？
              <a
                class="btn btn-primary"
                data-toggle="collapse"
                href="#multiCollapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
                >Toggle first element</a
              >
              <div class="collapse multi-collapse" id="multiCollapseExample2">
                <div class="card card-body">
                  家屬與照服員雙方於服務期間皆可中途終止服務，但主動提出解約的一方須支付照服員日薪
                  50% 作為解約金。
                </div>
              </div>
            </div>
            <div class="col-md-6">
              若照服員已確認接收訂單，家屬未付款？
              <a
                class="btn btn-primary"
                data-toggle="collapse"
                href="#multiCollapseExample3"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
                >Toggle first element</a
              >
              <div class="collapse multi-collapse" id="multiCollapseExample3">
                <div class="card card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </div>
            <div class="col-md-6">
              照服員何時會收到薪水？
              <a
                class="btn btn-primary"
                data-toggle="collapse"
                href="#multiCollapseExample4"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
                >Toggle first element</a
              >
              <div class="collapse multi-collapse" id="multiCollapseExample4">
                <div class="card card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </div>
            <div class="col-md-6">
              每日的服務時間起迄時間為何？
              <a
                class="btn btn-primary"
                data-toggle="collapse"
                href="#multiCollapseExampl5"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
                >Toggle first element</a
              >
              <div class="collapse multi-collapse" id="multiCollapseExample5">
                <div class="card card-body">
                  基本上每日服務時間為
                  09:00-18:00，若欲調整時段，雙方協議可自行作調整。
                </div>
              </div>
            </div>
            <div class="col-md-6">
              照服員照服期間是否可中途解約？
              <a
                class="btn btn-primary"
                data-toggle="collapse"
                href="#multiCollapseExample6"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
                >Toggle first element</a
              >
              <div class="collapse multi-collapse" id="multiCollapseExample6">
                <div class="card card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
