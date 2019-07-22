<template>
  <div id="app">
    <h3 style="text-align: center;">关键件物料解绑</h3>
    <div class="wl_bd">
      <div class="wl_bd_title">关键件:</div>
      <div class="wl_bd_body_scroll">
        <div class="wl_bd_ms">序列号/批次号</div>
        <div class="wl_bd_ms">物料编码</div>
        <div class="wl_bd_ms">供应商编码:</div>
        <div class="wl_bd_ms">供应商名称:</div>
        <div class="wl_bd_ms">原指定供应商名称:</div>
      </div>

      <div class="wl_bd_title2">工票:</div>

      <div class="wl_bd_body">
        <div class="wl_bd_ms">工票号:</div>
        <div class="wl_bd_ms">件号:</div>
        <div class="wl_bd_ms">车号:</div>
        <div class="wl_bd_ms">列号:</div>
        <div class="wl_bd_ms">数量:</div>
        <div class="wl_bd_ms">齐套性:</div>
        <div class="wl_bd_ms">工艺工时:</div>
      </div>
    </div>

    <div class="rw_button"> 关键件
        <input style="width:70% ;height: 40px;margin-left: 20px; " />
      
    </div>
    <div style="margin: 20px;">
      <mt-button size="large" type="primary" @click="get_yes()">解绑</mt-button>
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
      zhuangtai: "356780oi",
      list: [
        {
          pici: "45678",
          bm: "345678",
          g_bm: "45678",
          g_name: "yiyiy",
          z_name: "XXXXXX"
        },
        {
          pici: "45678",
          bm: "345678",
          g_bm: "45678",
          g_name: "yiyiy",
          z_name: "XXXXXX"
        },
        {
          pici: "45678",
          bm: "345678",
          g_bm: "45678",
          g_name: "yiyiy",
          z_name: "XXXXXX"
        },
        {
          pici: "45678",
          bm: "345678",
          g_bm: "45678",
          g_name: "yiyiy",
          z_name: "XXXXXX"
        },
        {
          pici: "45678",
          bm: "345678",
          g_bm: "45678",
          g_name: "yiyiy",
          z_name: "XXXXXX"
        },
        {
          pici: "45678",
          bm: "345678",
          g_bm: "45678",
          g_name: "yiyiy",
          z_name: "XXXXXX"
        },
        {
          pici: "45678",
          bm: "345678",
          g_bm: "45678",
          g_name: "yiyiy",
          z_name: "XXXXXX"
        },
        {
          pici: "45678",
          bm: "345678",
          g_bm: "45678",
          g_name: "yiyiy",
          z_name: "XXXXXX"
        },
        {
          pici: "45678",
          bm: "345678",
          g_bm: "45678",
          g_name: "yiyiy",
          z_name: "XXXXXX"
        },
        {
          pici: "45678",
          bm: "345678",
          g_bm: "45678",
          g_name: "yiyiy",
          z_name: "XXXXXX"
        }
      ]
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
.wl_bd {
  width: 100%;
}
.wl_bd_title {
  margin-top: 10px;
  margin-left: 20px;
}
.wl_bd_title2 {
  margin-top: 20px;
  margin-left: 20px;
}
.wl_bd_body {
  padding-left: 10px;
  border: 1px solid #000;
  border-radius: 8px;
  margin-top: 10px;
  width: 90%;
  margin-left: 20px;
  height: 190px;
}
.wl_bd_body_scroll {
  padding-left: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  margin-top: 10px;
  width: 90%;
  margin-left: 20px;
  height: 190px;
}
.wl_bd_ms {
  margin-top: 3px;
}
.rw_button {
  width: 100%;
  height: 70px;
  margin-top: 15px;
}
.rw_input {
  width: 70%;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 40px;
}
</style>
