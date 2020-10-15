<template>
  <div class="step-wrapper w-100" :class="stepWrapperClass">
    <div class="d-flex justify-content-between">
      <button
        type="button"
        class="btn btn-primary-soft text-primary"
        @click="lastStep"
        :class="{ invisible: firststep }"
        :disabled="firststep"
      >
        上一步
      </button>
      <button
        type="button"
        class="btn btn-primary-soft text-primary"
        :class="{ invisible: laststep }"
        @click="nextStep"
        :disabled="laststep"
      >
        下一步
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['step', 'stepcount', 'currentstep'],

  computed: {
    active() {
      return this.step.id == this.currentstep;
    },

    firststep() {
      return this.currentstep == 1;
    },

    laststep() {
      return this.currentstep == this.stepcount;
    },

    stepWrapperClass() {
      return {
        active: this.active
      };
    }
  },

  methods: {
    nextStep() {
      this.$emit('step-change', this.currentstep + 1);
    },

    lastStep() {
      this.$emit('step-change', this.currentstep - 1);
    }
  }
};
</script>
