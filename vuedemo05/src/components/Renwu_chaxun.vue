<template>
  <div id="app">
    <h3 style="text-align: center;">任务列表查询</h3>
    <div class="rw">
      <div class="rw_div">工作中心</div>
      <input class="rw_input" type="text" v-model="gong_zuo" />

      <div class="rw_div">合同号</div>
      <input class="rw_input" type="number" v-model="hetong" />

      <div class="rw_div">车号</div>
      <input class="rw_input" type="number" v-model="chehao" />

      <div class="rw_div">列好</div>
      <input class="rw_input" type="number" v-model="liehao" />

      <div class="rw_div">订单号</div>
      <input class="rw_input" type="number" v-model="dingdanhao" />

      <div class="rw_div">工票</div>
      <input class="rw_input" type="number" v-model="gongpiao" />

      <div class="rw_div">状态</div>
      <input class="rw_input" type="text" v-model="zhuangtai" />
      <div class="rw_button">
        <div class="button">
          <mt-button size="small" type="primary" class="button" @click="close()">重置</mt-button>
        </div>
        <div class="button">
          <mt-button size="small" type="primary" class="button" @click="chaxun()">查询</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "app",
  data() {
    return {
      gong_zuo: "356780oi",
      hetong: "567",
      chehao: "9870",
      liehao: "34560",
      dingdanhao: "356780",
      gongpiao: "30987",
      zhuangtai: "356780oi"
    };
  },
  methods: {
    close() {
      this.gong_zuo = "";
      this.hetong = "";
      this.chehao = "";
      this.liehao = "";
      this.dingdanhao = "";
      this.gongpiao = "";
      this.zhuangtai = "";
    },
    chaxun() {}
  }
};
</script>

<style>
.rw {
  width: 100%;
  margin: 10px;
}
.rw_div {
  margin-top: 10px;
}
.rw_input {
  display: flex;
  margin-top: 10px;
  align-items: center;
  width: 90%;
  height: 30px;
}
.rw_button {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-top: 15px;
}
.button {
  display: flex;
  justify-content: space-around;
  width: 50%;
}
</style>
