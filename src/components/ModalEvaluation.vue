<template>
  <div>
    <loading :active.sync="isLoading"></loading>
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
            <h4 class="text-center mb-3">
              是否確定完成訂單？<br />
              完成訂單後將會撥款給予照服員
            </h4>
            <div class="d-flex align-items-center">
              給予評分
              <star-rating
                :max-rating="5"
                :rounded-corners="true"
                :border-width="3"
                inactive-color="#585851"
                active-color="orange"
                :star-size="20"
                :star-points="[
                  23,
                  2,
                  14,
                  17,
                  0,
                  19,
                  10,
                  34,
                  7,
                  50,
                  23,
                  43,
                  38,
                  50,
                  36,
                  34,
                  46,
                  19,
                  31,
                  17
                ]"
                @rating-selected="setRating"
                style="transform: translateY(-5px);"
              >
              </star-rating>
            </div>

            <!-- <div class="rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div> -->
            <form>
              <div class="form-group">
                <label for="evaluation">請填寫給予照服員的評價</label>
                <textarea
                  class="form-control"
                  v-model="comment"
                  id="evaluation"
                  rows="3"
                ></textarea>
              </div>
              <div class="text-center">
                <button
                  type="button"
                  class="btn btn-primary-soft text-primary mr-2"
                  data-dismiss="modal"
                >
                  取消
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click.prevent="sendRate()"
                >
                  確定送出
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */

export default {
  data() {
    return {
      orderId: '',
      comment: '',
      rating: 0
    };
  },
  methods: {
    openEvaluationModal(orderId) {
      this.orderId = orderId;
      $('#evaluation').modal('show');
    },
    setRating: function(rating) {
      this.rating = rating;
    },
    sendRate() {
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}FillinComment`;

      // console.log(vm.orderId, vm.rating.toString(), vm.comment);
      // console.log(api);
      vm.$http
        .patch(api, {
          Id: vm.orderId,
          Star: vm.rating.toString(),
          Comment: vm.comment,
          isLoading: false
        })
        .then(res => {
          console.log(res);
          vm.$swal({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: false,
            onOpen: toast => {
              toast.addEventListener('mouseenter', vm.$swal.stopTimer);
              toast.addEventListener('mouseleave', vm.$swal.resumeTimer);
            },
            icon: 'success',
            title: `已完成評價`
          });
          $('#evaluation').modal('hide');
          vm.$emit('get-rateing-data'); //重新渲染畫面
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
