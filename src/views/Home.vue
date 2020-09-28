<template>
  <div class="home">
    <!-- banner -->
    <div class="l-hero position-relative">
      <div class="l-hero__copyWrap">
        <img
          src="@/assets/images/sun1_0.png"
          width="70"
          class="l-hero__copyWrap__sun position-absolute"
          alt=""
        />
        <div
          class="l-hero__copyWrap__content"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-delay="500"
          data-aos-offset="10"
          data-aos-once="true"
          data-aos-duration="1500"
        >
          <h1 class="display-3 ">Find your cares<br />Care you</h1>
          <p class="lead">
            日日照你，讓居家照顧不再是難事。
          </p>
        </div>
      </div>

      <div
        class="l-hero__bg"
        :style="{
          backgroundImage:
            'url(' + require('@/assets/images/banner/hero18.jpg') + ')'
        }"
      ></div>
    </div>

    <section class="p-aboutUs">
      <div class="container">
        <div class="p-aboutUs__wrap row bg-white">
          <div
            class="p-aboutUs__wrap__photo align-self-lg-center d-none d-sm-block col-12 col-md-6"
          >
            <img
              class="img-fluid"
              src="@/assets/images/aboutMeImg.jpg"
              alt=""
            />
          </div>
          <div
            class="p-aboutUs__wrap__underContent col-12 col-md-6"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <div class="p-aboutUs__wrap__underContent__title">
              <h2>關於日日照你</h2>
              <small>ABOUT US SERVICE</small>
            </div>

            <div class="p-aboutUs__wrap__underContent__content">
              <p>想找台籍看護？日日照你來幫您！</p>
              <p>幫您紀錄家中長輩照護紀錄，讓照護簡單有保障</p>
              <p>
                資訊公開透明、雙向溝通無障礙，服務前可先看到照服員的資料及評價，並事先提問，讓您可以安心地將照顧重擔託付給我們。
              </p>
              <p>不論是居家照顧、醫院看護，日日照你幫您把關</p>
            </div>

            <router-link
              tag="button"
              class="btn btn-lg btn-primary"
              to="/searchCares"
              >尋找適合你的照顧服務員</router-link
            >
          </div>
        </div>
      </div>
    </section>

    <section class="p-serviceFlow position-relative bg-white">
      <div class="container py-5">
        <h2 class="p-serviceFlow__title text-center mb-0 p-0">
          平台流程
        </h2>
        <p class="text-center m-0">Service Flow</p>

        <div class="p-serviceFlow__content row text-center">
          <div class="col-12 col-lg-4 mb-5">
            <div
              class="p-serviceFlow__card position-relative p-4 "
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-delay="0"
              data-aos-once="true"
              data-aos-duration="600"
            >
              <div class="p-serviceFlow__card__step position-absolute">
                01
              </div>
              <h3 class="p-serviceFlow__card__title mb-4">預約照服人員</h3>
              <img src="@/assets/images/flow_step1.svg" alt="" />
              <p>
                可透過問與答與照服員進行雙向溝通，雙方皆確認後服務即成立訂單。
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-4 mb-5">
            <div
              class="p-serviceFlow__card position-relative p-4"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-duration="600"
            >
              <div class="p-serviceFlow__card__step position-absolute">
                02
              </div>
              <h3 class="p-serviceFlow__card__title mb-4">開始進行照顧</h3>
              <img src="@/assets/images/flow_step2.svg" alt="" />
              <p>
                照服員需填寫照服日誌，做為雙方權益作保障及日後薪資發放依據。
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-4 mb-5">
            <div
              class="p-serviceFlow__card position-relative p-4"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-delay="600"
              data-aos-once="true"
              data-aos-duration="600"
            >
              <div class="p-serviceFlow__card__step position-absolute">
                03
              </div>
              <h3 class="p-serviceFlow__card__title mb-4">家屬填寫評價</h3>
              <img src="@/assets/images/flow_step3.svg" alt="" />
              <p>
                契約結束後家屬可填寫評價供他人作參考，資訊公開透明好安心。
              </p>
            </div>
          </div>
        </div>
        <div class="text-center position-relative" style="margin-top:-10px">
          <router-link
            tag="button"
            class="btn btn-lg btn-primary"
            to="/searchCares"
            >尋找適合你的照顧服務員</router-link
          >
        </div>
      </div>
    </section>

    <section class="p-feedback">
      <div class="p-feedback__content position-relative">
        <div class="c-title text-center">
          <h2>看看顧客怎麼說</h2>
          <span>User Feedback</span>
        </div>
        <div class="p-feedback__content__userFeedback position-relative">
          <div id="demo" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" class="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
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
                          <p>
                            謝謝許先生幫忙，使我父親在照顧期間心情都很開心，也非常願意繼續做復健。
                            讓我能夠安心且放心的上班。
                          </p>
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

                          <p>
                            林小姐是非常非常棒的看護，與我媽媽的互動良好，很主動關心，還會提供非常多的專業建議。
                            我媽媽在林小姐的照顧下，恢復良好丶精神愉快，非常推薦。
                          </p>
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

                          <p>
                            非常感謝許先生臨危受命，從北投來到板橋為爸爸服務。許先生非常和善客氣，爸爸得到很好的照顧，真的非常感謝。
                          </p>
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

                          <p>
                            這是我第二次指定由蔡小姐來照顧我母親，這次蔡小姐幫我母親煮了一鍋入口及化的苦瓜雞，解決了我母親沒有牙齒又不能戴假牙享受美食的辛苦，然後回到家後我感受到母親是開心的，我知道因為有人陪她聊天，給了她不同的感觀。
                          </p>
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
                          <p>
                            態度親切、溝通協調優良的照護員，讓我們家庭主要照顧者有彈性能休息，可以把父親安心的交給他，給人很愉快的經驗
                          </p>
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
                          <p>
                            嘉玲照顧病人時非常溫柔、細心、貼心、戴口罩、勤洗手而且也會幫病患注意醫護人員的衛教重點。
                            雖然現在疫情期間家屬的探病時間受限，但嘉玲可以獨當一面的陪伴照護～讓病患與家屬都可以感到安心放心。
                          </p>
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
    </section>
  </div>
</template>
