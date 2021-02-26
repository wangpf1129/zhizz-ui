<template>
  <button class="z-button" :class="classes" :disabled="disabled">
    <span><slot/></span>
  </button>
</template>

<script lang="ts">
  import {computed} from 'vue';

  export default {
    name: 'Button',
    props: {
      theme: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'normal'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    setup(props, context) {
      const {theme, size} = props;

      const classes = computed(() => {
        return {
          [`z-button-theme-${theme}`]: theme,
          [`z-button-size-${size}`]: size,
        };
      });

      return {classes};
    }
  };
</script>

<style lang="scss">
  $height: 32px;
  $border-color: #d9d9d9;
  $color: #606266;
  $blue: #40a9ff;
  $radius: 4px;

  .z-button {
    border-radius: $radius;
    line-height: 1;
    color: $color;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    box-sizing: border-box;

    & + & {
      margin-left: 8px;
      margin-bottom: 8px;

    }

    &:focus {
      outline: none;
    }

    &::-moz-focus-inner {
      border: 0;
    }

    // 主题
    &.z-button-theme-default {
      background: #fff;
      border: 1px solid #dcdfe6;

      &:hover, &:focus {
        color: #222831;
        border-color: #222831;
        background-color: #eeeeee;
      }
    }

    &.z-button-theme-primary {
      background: #00adb5;
      border: 1px solid #00adb5;
      color: #eeeeee;

      &:hover, &:focus {
        color: #eeeeee;
        border-color: #222831;
        background-color: #40babf;
      }
    }

    &.z-button-theme-success {
      background: #4ecca3;
      border: 1px solid #4ecca3;
      color: #eeeeee;

      &:hover, &:focus {
        color: #eeeeee;
        border-color: #222831;
        background-color: #6be3bc;
      }
    }

    &.z-button-theme-danger {
      background: #d72323;
      border: 1px solid #d72323;
      color: #eeeeee;

      &:hover, &:focus {
        color: #eeeeee;
        border-color: #222831;
        background-color: #dd5656;
      }
    }

    &.z-button-theme-info {
      background: #52616b;
      border: 1px solid #52616b;
      color: #eeeeee;

      &:hover, &:focus {
        color: #eeeeee;
        border-color: #222831;
        background-color: #6c777d;
      }
    }

    &.z-button-theme-warning {
      background: #fce38a;
      border: 1px solid #fce38a;
      color: #4a4444;

      &:hover, &:focus {
        color: #8e8282;
        border-color: #222831;
        background-color: #f7e4a4;
      }
    }

    &.z-button-theme-link {
      border: none;
      background: inherit;
      color: #4a4444;

      &:hover, &:focus {
        > span {
          color: #8e8282;
          border-bottom: 1px solid #222831;
        }
      }
    }

    // 尺寸
    &.z-button-size-small {
      padding: 10px 20px;
      font-size: 14px;
      border-radius: 4px;
    }

    &.z-button-size-normal {
      padding: 12px 24px;
    }

    &.z-button-size-large {
      padding: 14px 28px;
      font-size: 18px;
      border-radius: 4px;
    }

    // 禁用
    &.z-button {
      &[disabled] {
        cursor: not-allowed;
        color: #4a4444;
        background: #eeeeee;
        &:hover {
          border-color: #4a4444;
        }
      }
    }

    &.gulu-theme-link, &.gulu-theme-text {
      &[disabled] {
        cursor: not-allowed;
        color: #4a4444;
      }
    }
  }
</style>