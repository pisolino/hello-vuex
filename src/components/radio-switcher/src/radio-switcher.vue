<template>
  <RadioGroup v-model="radioSelected" @change="changed">
    <RadioButton
      :name="item.key"
      :label="item.key"
      v-for="item in radioItems"
      :key="item.key"
    >
      {{ item.name }}
    </RadioButton>
  </RadioGroup>
</template>

<script>
import { RadioGroup, RadioButton } from 'element-ui';
export default {
  name: 'FcRadioSwitcher',
  components: {
    RadioGroup,
    RadioButton,
  },
  props: {
    radioItems: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      radioSelected: this.selected,
    };
  },
  methods: {
    changed() {
      this.$emit('changed', this.radioSelected);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .el-button {
    &.is-round {
      color: #53b5e6;
      border-color: #53b5e6;
      background-color: rgba(0, 0, 0, 0);
      &:focus,
      &:hover {
        color: #53b5e6;
        border-color: #53b5e6;
        background-color: #ecf5ff;
      }
    }
  }
  .el-button--text {
    color: #1f263e66;
  }
  .el-radio-button__inner {
    &:first-child {
      & .el-radio-button {
        border-left: none;
      }
    }
    &:last-child {
      & .el-radio-button {
        border-left: none;
      }
    }
  }
  .el-radio-button {
    &:first-child {
      .el-radio-button__inner {
        border-left-color: rgba(0, 0, 0, 0);
      }
    }
    &:last-child {
      .el-radio-button__inner {
        border-left-color: rgba(0, 0, 0, 0);
      }
    }
  }
  .el-radio-button:focus:not(.is-focus):not(:active):not(.is-disabled) {
    -webkit-box-shadow: none;
    box-shadow: none;
    .el-radio-button__inner {
      color: #18a0e4;
    }
  }
  .el-radio-button__inner {
    border: 1px solid rgba(0, 0, 0, 0);
    font-size: 12px;
    height: 18px;
    line-height: 16px;
    width: 50px;
    padding: 0;
    -webkit-transition: none;
    transition: none;
  }
  .el-radio-button__orig-radio:checked {
    & + .el-radio-button__inner {
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid;
      border-color: #53b5e6;
      border-radius: 6px;
      box-shadow: none;
      -webkit-box-shadow: none;
      color: #53b5e6;
    }
  }
}
</style>
