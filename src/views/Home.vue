<template>
  <div class="home">
    <!-- banner -->
    <!-- <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item">
          <img
            src="@/assets/images/banner/2886626_m.jpg"
            class="d-block w-100 img-fluid"
            style="object-fit: cover;"
            alt="..."
          />
        </div>
        <div class="carousel-item active">
          <img
            src="@/assets/images/banner/2886643_l.jpg"
            class="d-block w-100 img-fluid"
            style="object-fit: cover;"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/images/banner/2886679_l.jpg"
            class="d-block w-100 img-fluid"
            style="object-fit: cover;"
            alt="..."
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleFade"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleFade"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div> -->
    <div
      class="banner d-flex justify-content-center align-items-center text-white"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 offset-md-8">
            <h2>日日照你</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-4">
      <h2 class="text-center">平台流程</h2>

      <div class="row text-center">
        <div class="col-md-3">
          <h5>預約照服人員</h5>
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 140x140"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>
          <p>
            家屬可於快速媒合合適的照服員，並可與照服員進行即時聊天溝通是否合適。
          </p>
        </div>
        <div class="col-md-3">
          <h5>待雙方進行確認</h5>
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 140x140"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>
          <p>
            家屬下訂單後，必須於照服員端做確認且家屬這邊支付款項後訂單得以成立。
          </p>
        </div>
        <div class="col-md-3">
          <h5>開始進行照顧</h5>
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 140x140"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>
          <p>
            於指定服務期間，照服人員到場進行照顧。並且需填寫照護日誌，作為照服依據。
          </p>
        </div>
        <div class="col-md-3">
          <h5>填寫評價</h5>
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 140x140"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>
          <p>
            於服務期間結束後，家屬可填寫評價。並且於每週三進行照服員薪資核發。
          </p>
        </div>
      </div>
    </div>
    <div class="clientEvaluation container-fluid bg-light">
      <div class="container">
        <h4 class="text-center text-primary py-1">顧客評價</h4>
        <div id="demo" class="carousel slide py-5" data-ride="carousel">
          <!-- Indicators -->
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>
          <!-- The slideshow -->
          <div class="container carousel-inner no-padding">
            <div class="carousel-item active">
              <div class="col-12 col-lg-4 mb-3 d-inline-block">
                <div class="card">
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer class="blockquote-footer">
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-4 mb-3 d-inline-block">
                <div class="card">
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer class="blockquote-footer">
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-4 mb-3 d-inline-block">
                <div class="card">
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer class="blockquote-footer">
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="col-12 col-lg-4 mb-3 d-inline-block">
                <div class="card">
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer class="blockquote-footer">
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-4 mb-3 d-inline-block">
                <div class="card">
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer class="blockquote-footer">
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-4 mb-3 d-inline-block">
                <div class="card">
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer class="blockquote-footer">
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="col-12 col-lg-4 mb-3 d-inline-block">
                <div class="card">
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer class="blockquote-footer">
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-4 mb-3 d-inline-block">
                <div class="card">
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer class="blockquote-footer">
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-4 mb-3 d-inline-block">
                <div class="card">
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer class="blockquote-footer">
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Left and right controls -->
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </div>
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

<style lang="scss">
.banner {
  background-color: gray;
  height: 570px;
  background-position: center;
  background-size: cover;
}

.carousel-item img {
  height: 570px;
}

.carousel-item.active img {
  transition: -webkit-transform 10s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
  transition: transform 10s ease-in-out 0s;
}

.carousel-item.active img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

// export default {
//   name: 'Home',
//   components: {
//     HelloWorld
//   }
// };
</script>
