<template>
  <button class="z-button" :class="classes" :disabled="disabled">
    <span class="z-button-spin" v-if="loading"></span>
    <span><slot /></span>
  </button>
</template>

<script lang="ts">
import { computed } from "vue";

export default {
  name: "Button",
  props: {
    theme: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, loading } = props;

    const classes = computed(() => {
      const loadingClass = loading ? " z-button-loading" : "";

      return `z-button-theme-${theme} z-button-size-${size}${loadingClass}`;
    });

    return { classes };
  },
};
</script>

<style lang="scss">
$border-color: #d9d9d9;
$color: #40a9ff;
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
  font-size: 14px;
  margin: 8px;

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  // 主题
  &.z-button-theme-default {
    background: #fff;
    border: 1px solid #222831;
    color: #4a4444;

    &:hover,
    &:focus {
      color: #fff;
      border-color: #007bff;
      background-color: #40a9ff;
    }
  }

  &.z-button-theme-primary {
    background: #40babf;
    border: 1px solid #40babf;
    color: #4a4444;

    &:hover,
    &:focus {
      color: #40babf;
      border-color: #40babf;
      background: #fff;
    }
  }

  &.z-button-theme-warning {
    background: #f7e4a4;
    border: 1px solid #fce38a;
    color: #4a4444;

    &:hover,
    &:focus {
      color: #ffc107;
      border-color: #ffc107;
      background: #fff;
    }
  }

  &.z-button-theme-success {
    background: #28a745;
    border: 1px solid #28a745;
    color: #fff;

    &:hover,
    &:focus {
      color: #28a745;
      border-color: #28a745;
      background-color: #fff;
    }
  }

  &.z-button-theme-danger {
    background: #d72323;
    border: 1px solid #d72323;
    color: #eeeeee;

    &:hover,
    &:focus {
      color: #d72323;
      border-color: #d72323;
      background-color: #fff;
    }
  }

  &.z-button-theme-info {
    background: #52616b;
    border: 1px solid #52616b;
    color: #eeeeee;

    &:hover,
    &:focus {
      color: #222831;
      border-color: #222831;
      background-color: #fff;
    }
  }

  &.z-button-theme-link {
    border: none;
    background: inherit;
    color: #4a4444;

    &:hover,
    &:focus {
      > span {
        color: #40a9ff;
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

  &.z-button-theme-link,
  &.z-button-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: #4a4444;
    }
  }

  &.z-button-loading {
    pointer-events: none;

    .z-button-spin {
      width: 14px;
      height: 14px;
      display: inline-block;
      margin-right: 4px;
      border-radius: 8px;
      border-color: $blue $blue $blue transparent;
      border-style: solid;
      border-width: 2px;
      animation: z-spin 1s infinite linear;
    }
  }
}

@keyframes z-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>