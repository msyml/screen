<template>
  <div class="main">
    <div class="title">
      <p class="brand">{{brand}}</p>
      <p class="name">{{title}}</p>
      <p class="time">{{ time }}</p>
    </div>
    <canvas id="line" ref="line" width="1920" height="50"></canvas>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  onMounted,
  reactive,
  toRefs,
  getCurrentInstance,
  ref,
  onUnmounted,
} from "vue";

export default {
  name: "",
  components: {},
  props: {
    brand: {
      type: String,
      default: "抹上一抹凉",
    },
    title: {
      type: String,
      default: "数据展示板",
    },
  },
  setup() {
    const { proxy } = getCurrentInstance();
    onMounted(() => {
      init();
    });
    onUnmounted(() => {
      clearInterval(state.timer);
    });
    const state = reactive({
      operList: [
        {
          label: "生产大数据",
          icon: "iconfont icon-book",
          path: "/production",
        },
        { label: "销售大数据", icon: "iconfont icon-book", path: "B" },
        { label: "耗电大数据", icon: "iconfont icon-book", path: "C" },
        { label: "营收大数据", icon: "iconfont icon-book", path: "D" },
        { label: "用户大数据", icon: "iconfont icon-book", path: "E" },
        { label: "性能大数据", icon: "iconfont icon-book", path: "F" },
        { label: "通话大数据", icon: "iconfont icon-book", path: "G" },
        { label: "在线大数据", icon: "iconfont icon-book", path: "H" },
      ],
      time: "",
      timer: {},
    });
    const init = () => {
      draw();
      refreshTime();
    };
    const refreshTime = () => {
      state.timer = setInterval(() => {
        state.time = proxy.$dayjs().format("YYYY-MM-DD HH:mm:ss");
      }, 1000);
    };
    const draw = () => {
      let canvas = proxy.$refs.line as HTMLCanvasElement;
      let deflectionNumber = 18;
      const widht = 1920;
      if (canvas.getContext) {
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.strokeStyle = "#548aaa";
        ctx.moveTo(0, 0);

        ctx.shadowColor = "rgba(2,32,64,1)";
        ctx.shadowBlur = 5;
        ctx.shadowOffsetX = 10;
        ctx.shadowOffsetY = 10;

        ctx.lineTo(widht / 3 - deflectionNumber, 0);
        ctx.lineTo(widht / 3 + deflectionNumber, deflectionNumber);
        ctx.lineTo((2 * widht) / 3 - deflectionNumber, deflectionNumber);
        ctx.lineTo((2 * widht) / 3 + deflectionNumber, 0);
        ctx.lineTo(widht, 0);
        ctx.stroke();
      }
    };
    const toPage = (url: string) => {
      proxy.$router.push(url);
    };
    return {
      ...toRefs(state),
      toPage,
    };
  },
};
</script>

<style scoped lang="scss">
@import "styles/variables.scss";
.main {
  height: 100vh;
  width: 100vw;
  background-image: url("assets/bg.png");
  .title {
    height: 80px;
    color: $fontColor;
    display: flex;
    padding: 0 10px;
    align-items: center;
    justify-content: space-between;
    // border-bottom: 1px solid #548aaa;
    // box-shadow: 5px 5px 5px 2px #022040;
    .brand,
    .time {
      font-size: 36px;
      background-image: linear-gradient(#f0f0f1, #73aacf);
      flex: 1;
    }
    .brand {
      text-align: left;
    }
    .name {
      font-size: 56px;
      flex: 2;
      padding-top: 16px;
      background-image: linear-gradient(#f0f0f1, #4d8ff0);
    }
    p {
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
