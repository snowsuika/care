<template>
  <div class="p-QandA">
    <loading :active.sync="isLoading" loader="dots" color="#499d66"></loading>
    <div class="p-QandA__content container">
      <div class="c-title text-center">
        <h2>常見 Q&A</h2>
        <span>F&Q</span>
      </div>

      <div class="row pb-4">
        <div v-for="(FAQ, index) in FAQs" :key="index" class="col-12">
          <div class="p-QandA__content__block">
            <h3 class="text-primary font-weight-bold">
              {{ FAQ.question }}
              <a
                class="text-primary"
                data-toggle="collapse"
                :href="`#FAQ${index}`"
                aria-expanded="false"
                :aria-controls="`FAQ${index}`"
                ><i class="fas fa-chevron-down"></i
              ></a>
            </h3>
            <div class="collapse multi-collapse" :id="`FAQ${index}`">
              <div class="card card-body border-0">
                {{ FAQ.ans }}
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col-12">
          <div class="p-QandA__content__block">
            <h3>
              照服員何時會收到薪水？
              <a
                class="btn btn-primary"
                data-toggle="collapse"
                href="#multiCollapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
                >箭頭</a
              >
            </h3>

            <div class="collapse multi-collapse" id="multiCollapseExample2">
              <div class="card card-body border-0">
                家屬與照服員雙方於服務期間皆可中途終止服務，但主動提出解約的一方須支付照服員日薪
                50% 作為解約金。
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="p-QandA__content__block">
            <h3>
              雙方其中一方終止服務，金額如何結算
              <a
                class="btn btn-primary"
                data-toggle="collapse"
                href="#multiCollapseExample3"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample3"
                >箭頭</a
              >
            </h3>

            <div class="collapse multi-collapse" id="multiCollapseExample3">
              <div class="card card-body border-0">
                家屬與照服員雙方於服務期間皆可中途終止服務，但主動提出解約的一方須支付照服員日薪
                50% 作為解約金。
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="p-QandA__content__block">
            <h3>
              照服員照服期間是否可中途解約？
              <a
                class="btn btn-primary"
                data-toggle="collapse"
                href="#multiCollapseExample4"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample4"
                >箭頭</a
              >
            </h3>

            <div class="collapse multi-collapse" id="multiCollapseExample4">
              <div class="card card-body border-0">
                家屬與照服員雙方於服務期間皆可中途終止服務，但主動提出解約的一方須支付照服員日薪
                50% 作為解約金。
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="p-QandA__content__block">
            <h3>
              若照服員已確認接收訂單，家屬未付款？
              <a
                class="btn btn-primary"
                data-toggle="collapse"
                href="#multiCollapseExample5"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample5"
                >箭頭</a
              >
            </h3>

            <div class="collapse multi-collapse" id="multiCollapseExample5">
              <div class="card card-body border-0">
                家屬與照服員雙方於服務期間皆可中途終止服務，但主動提出解約的一方須支付照服員日薪
                50% 作為解約金。
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="p-QandA__content__block">
            <h3>
              每日的服務時間起迄時間為何？
              <a
                class="btn btn-primary"
                data-toggle="collapse"
                href="#multiCollapseExample6"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample6"
                >箭頭</a
              >
            </h3>

            <div class="collapse multi-collapse" id="multiCollapseExample6">
              <div class="card card-body border-0">
                家屬與照服員雙方於服務期間皆可中途終止服務，但主動提出解約的一方須支付照服員日薪
                50% 作為解約金。
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      FAQs: [
        {
          question: '家屬是否可中解僱照服人員？',
          ans: '家屬與照服員雙方於服務期間皆可中途終止服務。'
        },
        {
          question: '雙方其中一方終止服務，金額如何結算？',
          ans:
            '家屬與照服員雙方於服務期間皆可中途終止服務，但主動提出解約的一方須支付照服員日薪 50% 作為解約金。'
        },
        {
          question: '若照服員已確認接收訂單，家屬未付款訂單該如何處理？',
          ans:
            '訂單於「服務進行中訂單狀態前 3 日若尚未付款，訂單會自動變成「已取消」。'
        },
        {
          question: '照服員何時會收到薪水？',
          ans: '於每週三平台會計作業日會進行週結算'
        },
        {
          question: '照服員照服期間是否可中途解約？',
          ans:
            '家屬與照服員雙方於服務期間皆可中途終止服務，但主動提出解約的一方須支付照服員日薪 50% 作為解約金。'
        },
        {
          question: '每日的服務時間起迄時間為何？',
          ans: '服務起迄時間由照服員所選擇的服務時間為主。'
        }
      ]
    };
  },
  methods: {}
};
</script>
