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
    // map: {
    //   type: Boolean,
    //   default: false,
    // },
    // mapJson: {
    //   type: String,
    //   default: ""
    // }
  },
  setup() {
    const { proxy } = getCurrentInstance();
    let echartsInstance = {};
    const state = reactive({});
    onMounted(() => {
      init();
    });
    onBeforeUnmount(() => {});
    onUnmounted(() => {
      echartsInstance.dispose();
    });
    const init = () => {
      echartsInstance = echarts.init(
        proxy.$refs.ele as HTMLDivElement,
        proxy.$props.theme
      );
      // if (proxy.$props.map) {
      //   echartsInstance.registerMap("WenZhou", proxy.$props.mapJson,{})
      // }
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