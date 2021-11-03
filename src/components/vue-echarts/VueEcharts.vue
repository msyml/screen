<template>
  <div
    class="vue-echarts"
    :style="{ height: height, width: width }"
    ref="ele"
  ></div>
</template>

<script lang="ts">
import {
  onMounted,
  reactive,
  toRefs,
  getCurrentInstance,
  ref,
  onUnmounted,
  onBeforeUnmount,
} from "vue";

import * as echarts from "echarts";

export default {
  name: "Echarts",
  props: {
    options: {
      type: echarts.EChartsOption,
      default: {},
    },
    theme: {
      type: String,
      default: "",
    },
    initOption: {
      type: String,
    },
    height: {
      type: String,
      default: "100px",
    },
    width: {
      type: String,
      default: "100px",
    },
  },
  setup() {
    const { proxy } = getCurrentInstance();
    let echartsInstance = {};
    const state = reactive({});
    onMounted(() => {
      console.log(proxy);
      console.log(proxy.$props);
      console.log(proxy.$props.options);
      init();
    });
    onBeforeUnmount(() => {});
    onUnmounted(() => {
      echartsInstance.dispose();
    });
    const init = () => {
      console.log(proxy.$refs.ele);
      echartsInstance = echarts.init(
        proxy.$refs.ele as HTMLDivElement,
        proxy.$props.theme
      );
      echartsInstance.setOption(proxy.$props.options);
    };
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped lang="scss">
</style>