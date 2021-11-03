<template>
  <Bg title="生产看板">
      <Echarts :options="options" height="600px" width="600px" />
  </Bg>
</template>

<script lang="ts">
import { onMounted, reactive, toRefs, getCurrentInstance, ref } from "vue";
import Echarts from "comps/vue-echarts/VueEcharts.vue";
import Bg from "comps/background/bg.vue";

export default {
  name: "production",
  components: {
    Echarts,
    Bg,
  },
  setup() {
    const { proxy } = getCurrentInstance();
    onMounted(() => {});
    const state = reactive({});
    const options = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    };
    return {
      ...toRefs(state),
      options,
    };
  },
};
</script>

<style scoped lang="scss">
</style>
