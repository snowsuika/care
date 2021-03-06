<template>
  <div>
    <validation-observer v-slot="{ invalid }">
      <form @submit.prevent="submitForm">
        <div class="container">
          <step-navigation :steps="steps" :currentstep="currentstep">
          </step-navigation>

          <div v-show="currentstep == 1">
            <h3>Step 1</h3>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                name="email"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="Password"
              />
            </div>
          </div>

          <div v-show="currentstep == 2">
            <h3>Step 2</h3>
            <div class="form-group">
              <label for="select">Example select</label>
              <select class="form-control" name="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>

          <div v-show="currentstep == 3">
            <h3>Step 3</h3>
            <div class="form-group">
              <label for="textarea">Example textarea</label>
              <textarea
                class="form-control"
                name="textarea"
                rows="4"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="file">File input</label>
              <input
                type="file"
                class="form-control-file"
                name="file"
                aria-describedby="fileHelp"
              />
              <small id="fileHelp" class="form-text text-muted"
                >This is some placeholder block-level help text for the above
                input. It's a bit lighter and easily wraps to a new line.</small
              >
            </div>
            <validation-provider
              rules="required|email"
              class="form-group"
              tag="div"
              v-slot="{ errors, classes, passed }"
            >
              <!-- 輸入框 -->
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                v-model="email"
                class="form-control"
                :class="classes"
              />
              <!-- 錯誤訊息 -->
              <span class="invalid-feedback">{{ errors[0] }}</span>
              <span v-if="passed" class="valid-feedback">Email 正確</span>
            </validation-provider>
            <button type="submit" class="btn btn-primary" :disabled="invalid">
              送出表單
            </button>
          </div>

          <step
            v-for="step in steps"
            :currentstep="currentstep"
            :key="step.id"
            :step="step"
            :stepcount="steps.length"
            @step-change="stepChanged"
          >
          </step>
        </div>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import StepNavigation from '@/components/wizard/StepNavigation.vue';
import Step from '@/components/wizard/Step.vue';

export default {
  data: function() {
    return {
      currentstep: 1,

      steps: [
        {
          id: 1,
          title: 'Personal',
          icon_class: 'fa fa-user-circle-o'
        },
        {
          id: 2,
          title: 'Details',
          icon_class: 'fa fa-th-list'
        },
        {
          id: 3,
          title: 'Send',
          icon_class: 'fa fa-paper-plane'
        }
      ]
    };
  },
  components: {
    StepNavigation,
    Step
  },

  methods: {
    stepChanged(step) {
      this.currentstep = step;
    }
  }
};
</script>

<style lang="scss">
$wizard-color-neutral: #ccc !default;
$wizard-color-active: #4183d7 !default;
$wizard-color-complete: #87d37c !default;
$wizard-step-width-height: 64px !default;
$wizard-step-font-size: 24px !default;

.step-wrapper {
  padding: 20px 0;
  display: none;

  &.active {
    display: block;
  }
}

.step-indicator {
  border-collapse: separate;
  display: table;
  margin-left: 0px;
  position: relative;
  table-layout: fixed;
  text-align: center;
  vertical-align: middle;
  padding-left: 0;
  padding-top: 20px;

  li {
    display: table-cell;
    position: relative;
    float: none;
    padding: 0;
    width: 1%;

    &:after {
      background-color: $wizard-color-neutral;
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      width: 100%;
      top: $wizard-step-width-height/2;
    }

    &:after {
      left: 50%;
    }

    &:last-child {
      &:after {
        display: none;
      }
    }

    &.active {
      .step {
        border-color: $wizard-color-active;
        color: $wizard-color-active;
      }

      .caption {
        color: $wizard-color-active;
      }
    }

    &.complete {
      &:after {
        background-color: $wizard-color-complete;
      }

      .step {
        border-color: $wizard-color-complete;
        color: $wizard-color-complete;
      }

      .caption {
        color: $wizard-color-complete;
      }
    }
  }

  .step {
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid $wizard-color-neutral;
    color: $wizard-color-neutral;
    font-size: $wizard-step-font-size;
    height: $wizard-step-width-height;
    line-height: $wizard-step-width-height;
    margin: 0 auto;
    position: relative;
    width: $wizard-step-width-height;
    z-index: 1;

    &:hover {
      cursor: pointer;
    }
  }

  .caption {
    color: $wizard-color-neutral;
    padding: 11px 16px;
  }
}
</style>
