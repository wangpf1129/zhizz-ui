<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="z-dialog-overlay" @click="onClickOverlay"></div>
      <div class="z-dialog-wrapper" :style="styles">
        <div class="z-dialog">
          <header>
            <slot name="title" />
            <span class="z-dialog-close" @click="close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button @click="cancel" size="small">取消</Button>
            <Button theme="primary" size="small" @click="ok">确认</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import Button from "./Button.vue";

export default {
  name: "Dialog",
  components: { Button },
  props: {
    width: {
      type: String,
      default: "60%",
    },
    top: {
      type: String,
      default: "130px",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  setup(props, context) {
    const styles = {
      minWidth: props.width,
      top: props.top,
    };
    const close = () => {
      context.emit("update:visible", !props.visible);
    };
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const ok = () => {
      if (props.ok && props.ok() !== false) {
        close();
      }
    };
    const cancel = () => {
      props.cancel && props.cancel();
      close();
    };

    return {
      styles,
      close,
      onClickOverlay,
      ok,
      cancel,
    };
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.z-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 30;
  }

  &-wrapper {
    min-width: 60%;
    position: fixed;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 31;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 2px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
