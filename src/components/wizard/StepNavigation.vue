<template>
  <ol class="step-indicator">
    <li
      v-for="step in steps"
      is="step-navigation-step"
      :key="step.id"
      :step="step"
      :currentstep="currentstep"
    ></li>
  </ol>
</template>

<script>
import StepNavigationStep from '@/components/wizard/StepNavigationStep.vue';
export default {
  data() {
    return {};
  },
  components: {
    StepNavigationStep
  },
  props: ['steps', 'currentstep']
};
</script>
