<template>
  <div>
  <div class="scss_containter fx-space-between">
    <div class="left">
      <span class="fz-30">left</span>
    </div>
    <div class="right">
      <span class="fz-40">right</span>
    </div>
  </div>
 	<div class="rem_demo"></div>
   <van-button type="default">默认按钮</van-button>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
import api from "~/api";

export default {
  components: {},
  data() {
    return {
      currentRate: 0
    };
  },
  methods: {
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case "left":
        case "cell":
        case "outside":
          instance.close();
          break;
        case "right":
          Dialog.confirm({
            message: "确定删除吗？"
          }).then(() => {
            instance.close();
          });
          break;
      }
    }
  },
  mounted() {},
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    }
  }
};
</script>
 
 <style lang="scss" scoped>
@import "~@/assets/style/px-to-rem";
.scss_containter {
  width: 10rem;
  height: tr(889px);
  border: tr(1px) solid red;
  .left{
    width: 5rem;
    height: tr(100px);
    background-color: aquamarine;
  }
  .right{
    width: 5rem;
    height: tr(100px);
    background-color: antiquewhite;
  }
}
.rem_demo {
  height: tr(75px);
  width: 10rem;
  border: tr(1px) solid red;
}
</style>
