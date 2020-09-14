<template>
  <div
    class="modal fade"
    id="evaluation"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content radius-3 border-0">
        <div class="modal-body">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="text-center">
            是否確定完成訂單？<br />
            完成訂單後將會撥款給予照服員
          </h4>
          <form>
            <div class="form-row border-0">
              <label for="">給予評分</label>
              <div class="rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
            <div class="form-group">
              <label for="evaluation">請填寫給予照服員的評價</label>
              <textarea
                class="form-control"
                v-model="evaluation.comment"
                id="evaluation"
                rows="3"
              ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary-soft text-primary"
            data-dismiss="modal"
          >
            關閉視窗
          </button>
          <button type="button" class="btn btn-primary">確定送出</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      evaluation: {
        star: '',
        comment: ''
      }
    };
  },
  methods: {
    openEvaluationModal(orderId) {
      console.log(orderId);
    }
  }
};
</script>
