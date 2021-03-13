<template>
  <label class="z-radio is-checked" >
    <span class="z-radio_input">
      <span class="z-radio_inner"></span>
      <input
          type="radio"
          class="z-radio_original"
      />
    </span>
    <span class="z-radio_label">label</span>
  </label>
</template>

<script lang="ts">

export default {
  name: 'Radio',
};
</script>

<style lang="scss" scoped>
.z-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;

  .z-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .z-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;

      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform .15s ease-in;
      }
    }

    .z-radio_original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }

  .z-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}

.z-radio.is-checked {
  .z-radio_input {
    .z-radio_inner {
      border-color: #40babf;
      background: #40babf;

      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }

  .z-radio_label {
    color: #40babf;
  }
}
</style>