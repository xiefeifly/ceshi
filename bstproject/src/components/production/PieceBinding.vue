<template>
  <div id="app">
    <h3 style="text-align: center;">关键件物料绑定</h3>
    <div class="wl_bd">
      <div class="wl_bd_title">工票:{{Work_ticket}}</div>
      <div class="wl_bd_body">
        <div class="wl_bd_ms">工票号:{{worker_number}}</div>
        <div class="wl_bd_ms">件号:{{piece_number}}</div>
        <div class="wl_bd_ms">车号:{{car_number}}</div>
        <div class="wl_bd_ms">列号:{{column_number}}</div>
        <div class="wl_bd_ms">数量:{{quantity}}</div>
        <div class="wl_bd_ms">齐套性:{{orderly}}</div>
        <div class="wl_bd_ms">工艺工时:{{craft_date}}</div>
      </div>
      <div class="wl_bd_title2">关键件:{{key_components}}</div>
      <div class="wl_bd_body_scroll">
        <div v-for="item in key_list  " v-bind:key="item.id">
          <div class="wl_bd_ms">序列号/批次号:{{item.Serial_number}}</div>
          <div class="wl_bd_ms">物料编码:{{item.Material_Coding}}</div>
          <div class="wl_bd_ms">供应商编码:{{item.Supplier_Coding}}</div>
          <div class="wl_bd_ms">供应商名称:{{item.Name_supplier}}</div>
          <div class="wl_bd_ms">原指定供应商名称:{{item.Name_original_supplier}}</div>
          <hr />
        </div>
      </div>

      <div class="rw_button">
        <div class="rw_inputs">
          <input style="width:100% ;height: 30px; " v-model="add_number" />
        </div>
        <div class="button">
          <mt-button size="small" type="primary" @click="getyes()">确定</mt-button>
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
      Work_ticket: "",
      worker_number: "",
      piece_number: "",
      car_number: "",
      column_number: "",
      quantity: "",
      orderly: "",
      craft_date: "",
      key_components: "",
      add_number: "123455555555555",
      key_list: "",
      list: [
        {
          Serial_number: "12345678",
          Material_Coding: "X12345",
          Supplier_Coding: "s12345",
          Name_supplier: "北京",
          Name_original_supplier: "原北京"
        },
        {
          Serial_number: "12345678",
          Material_Coding: "X12345",
          Supplier_Coding: "s12345",
          Name_supplier: "北京",
          Name_original_supplier: "原北京"
        },
        {
          Serial_number: "12345678",
          Material_Coding: "X12345",
          Supplier_Coding: "s12345",
          Name_supplier: "北京",
          Name_original_supplier: "原北京"
        },
        {
          Serial_number: "12345678",
          Material_Coding: "X12345",
          Supplier_Coding: "s12345",
          Name_supplier: "北京",
          Name_original_supplier: "原北京"
        },
        {
          Serial_number: "12345678",
          Material_Coding: "X12345",
          Supplier_Coding: "s12345",
          Name_supplier: "北京",
          Name_original_supplier: "原北京"
        },
        {
          Serial_number: "12345678",
          Material_Coding: "X12345",
          Supplier_Coding: "s12345",
          Name_supplier: "北京",
          Name_original_supplier: "原北京"
        },
        {
          Serial_number: "12345678",
          Material_Coding: "X12345",
          Supplier_Coding: "s12345",
          Name_supplier: "北京",
          Name_original_supplier: "原北京"
        },
        {
          Serial_number: "12345678",
          Material_Coding: "X12345",
          Supplier_Coding: "s12345",
          Name_supplier: "北京",
          Name_original_supplier: "原北京"
        },
        {
          Serial_number: "12345678",
          Material_Coding: "X12345",
          Supplier_Coding: "s12345",
          Name_supplier: "北京",
          Name_original_supplier: "原北京"
        },
        {
          Serial_number: "12345678",
          Material_Coding: "X12345",
          Supplier_Coding: "s12345",
          Name_supplier: "北京",
          Name_original_supplier: "原北京"
        }
      ]
    };
  },
  methods: {
    getyes() {
      this.Work_ticket = "234567";
      this.worker_number = "12345";
      this.piece_number = "防护板组成";
      this.car_number = "12";
      this.column_number = "p00";
      this.quantity = "2190";
      this.orderly = "67890";
      this.craft_date = "34567";
      this.key_components = "34567";
      this.key_list = this.list;
      this.$router.go(-1)
    },
    beCalledScan(str) {
      this.add_number = str;
    }
  },
  mounted() {
    window.beCalledScan = this.beCalledScan;
    $App.callScan();

    var routerParams = this.$route.params.msgkey;
    console.log("模板编译完成4");
    var ser = this.$route.params.ser;
    console.log("routerParams", routerParams);
    console.log("routerParams", ser);
  },
  beforeMount() {
    console.log("模板编译之前3");
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
.rw_inputs {
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
  width: 40%;
  height: 40px;
}
</style>
