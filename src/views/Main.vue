<template>
  <div class="main">
    <div class="title">
      <p class="brand">抹上一抹凉</p>
      <p class="name">数据展示板</p>
      <p class="time">{{ time }}</p>
    </div>
    <canvas id="line" ref="line" width="1920" height="100"></canvas>
    <div class="btns">
      <div
        class="btn"
        @click="toPage(item.path)"
        v-for="item in operList"
        :key="item.value"
      >
        <!-- <i :class="item.icon"></i> -->
        <p>{{ item.label }}</p>
      </div>
    </div>
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
      font-size: 48px;
      flex: 2;
      padding-top: 24px;
      background-image: linear-gradient(#f0f0f1, #4d8ff0);
    }
    p {
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .btns {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .btn {
      color: $fontColor;
      width: 400px;
      height: 180px;
      border: 1px dashed $borderColor;
      margin: 16px 0;
      cursor: pointer;
      text-align: center;
      font-size: 48px;
      background: linear-gradient(to left, $cornerColor, $cornerColor) left top
          no-repeat,
        linear-gradient(to bottom, $cornerColor, $cornerColor) left top
          no-repeat,
        linear-gradient(to left, $cornerColor, $cornerColor) right top no-repeat,
        linear-gradient(to bottom, $cornerColor, $cornerColor) right top
          no-repeat,
        linear-gradient(to left, $cornerColor, $cornerColor) left bottom
          no-repeat,
        linear-gradient(to bottom, $cornerColor, $cornerColor) left bottom
          no-repeat,
        linear-gradient(to left, $cornerColor, $cornerColor) right bottom
          no-repeat,
        linear-gradient(to left, $cornerColor, $cornerColor) right bottom
          no-repeat,
        #ffffff22;
      // 设置背景图片大小，第一个值宽度，第二个值高度，可以设置多重
      background-size: 4px 20px, 20px 4px, 4px 20px, 20px 4px;
      border: 1px solid #073f97;
      position: relative;
      i {
        font-size: 48px;
      }
    }
    .btn:hover {
      background: linear-gradient(to left, $cornerColor, $cornerColor) left top
          no-repeat,
        linear-gradient(to bottom, $cornerColor, $cornerColor) left top
          no-repeat,
        linear-gradient(to left, $cornerColor, $cornerColor) right top no-repeat,
        linear-gradient(to bottom, $cornerColor, $cornerColor) right top
          no-repeat,
        linear-gradient(to left, $cornerColor, $cornerColor) left bottom
          no-repeat,
        linear-gradient(to bottom, $cornerColor, $cornerColor) left bottom
          no-repeat,
        linear-gradient(to left, $cornerColor, $cornerColor) right bottom
          no-repeat,
        linear-gradient(to left, $cornerColor, $cornerColor) right bottom
          no-repeat;
      background-size: 4px 20px, 20px 4px, 4px 20px, 20px 4px;
    }
  }
}
</style>
