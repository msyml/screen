<template>
  <div>
    <Echarts :options="options" height="600px" width="600px" />
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, toRefs, getCurrentInstance, ref } from "vue";
import Echarts from "comps/vue-echarts/VueEcharts.vue";

export default {
  name: "",
  components: {
    Echarts,
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
