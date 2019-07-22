<template>
  <div id="app">
    <h3 style="text-align: center;">关键件物料绑定</h3>
    <div class="wl_bd">
      <div class="wl_bd_title">工票:</div>
      <div class="wl_bd_body">
        <div class="wl_bd_ms">工票号:</div>
        <div class="wl_bd_ms">件号:</div>
        <div class="wl_bd_ms">车号:</div>
        <div class="wl_bd_ms">列号:</div>
        <div class="wl_bd_ms">数量:</div>
        <div class="wl_bd_ms">齐套性:</div>
        <div class="wl_bd_ms">工艺工时:</div>
      </div>
      <div class="wl_bd_title2">关键件:</div>
<div class="wl_bd_body_scroll">
      <div v-for="item in list  " v-bind:key="item.id">
        <div class="wl_bd_ms">序列号/批次号:{{item.pici}}</div>
        <div class="wl_bd_ms">物料编码:{{item.bm}}</div>
        <div class="wl_bd_ms">供应商编码:{{item.g_bm}}</div>
        <div class="wl_bd_ms">供应商名称:{{item.g_name}}</div>
        <div class="wl_bd_ms">原指定供应商名称:{{item.z_name}}</div>
        <hr />
      </div>
      </div>

      <div class="rw_button">
        <div class="rw_inputs">
         <input style="width:100% ;height: 30px; " />
        </div>
        <div class="button">
          <mt-button size="small"  type="primary"  @click="chaxun()">查询</mt-button>
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 15px;
}
.rw_inputs{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  width: 70%;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width:40%;
  height: 40px;
}
</style>
