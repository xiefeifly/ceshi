<template>
  <div id="unbinding">
    <h3 style="text-align: center;">关键件物料解绑</h3>
    <div class="un_bd_title">关键件:{{key_components}}</div>
    <div class="un_bd_body">
      <div class="un_bd">
        <div class="un_bd_ms">序列号/批次号:{{Serial_number}}</div>
        <div class="un_bd_ms">物料编码:{{Material_Coding}}</div>
        <div class="un_bd_ms">供应商编码:{{Supplier_Coding}}</div>
        <div class="un_bd_ms">供应商名称:{{Name_supplier}}</div>
        <div class="un_bd_ms">原指定供应商名称:{{Name_original_supplier}}</div>
        <div class="un_bd_ms">位置:{{position}}</div>
      </div>
    </div>
    <div class="un_bd_title2">工票:{{Work_ticket}}</div>

    <div class="un_bd_body_scroll">
      <div class="un_bd_body_item" v-for="(item) in key_list  " v-bind:key="item.id">
        <div class="un_item_l">
          <div class="un_bd_ms_l">工票号:{{item.worker_number}}</div>
          <div class="un_bd_ms_l">件号:{{item.piece_number}}</div>
          <div class="un_bd_ms_l">车号:{{item.car_number}}</div>
          <div class="un_bd_ms_l">列号:{{item.column_number}}</div>
          <div class="un_bd_ms_l">数量:{{item.quantity}}</div>
          <div class="un_bd_ms_l">齐套性:{{item.orderly}}</div>
          <div class="un_bd_ms_l">工艺工时:{{item.craft_date}}</div>
        </div>
        <div class="un_item_r">
          <input
            name="Fruit"
            type="checkbox"
            value="index"
            v-model="item.checked"
            @click="set_checkbox_item(item.checked,index)"
          />
        </div>
      </div>
    </div>

    <div class="rw_button">
      <input style="width:100% ;height: 40px;margin-left: 20px; " v-model="add_number" />
    </div>
    <div style="margin: 20px;">
      <mt-button size="large" type="primary" @click="unbinding()">解绑</mt-button>
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
      key_components: "",
      add_number: "123455555555555",
      key_list: "",
      Serial_number: "",
      Material_Coding: "",
      Supplier_Coding: "",
      Name_supplier: "",
      Name_original_supplier: "",
      position:"",
      list: [
        {
          checked: false,
          worker_number: "12312312",
          piece_number: "23",
          car_number: "32",
          column_number: "45",
          quantity: "23",
          orderly: "齐",
          craft_date: "11小时30分钟"
        },
        {
          checked: false,
          worker_number: "12312312",
          piece_number: "23",
          car_number: "32",
          column_number: "45",
          quantity: "23",
          orderly: "齐",
          craft_date: "11小时30分钟"
        },
        {
          checked: false,
          worker_number: "12312312",
          piece_number: "23",
          car_number: "32",
          column_number: "45",
          quantity: "23",
          orderly: "齐",
          craft_date: "11小时30分钟"
        },
        {
          checked: false,
          worker_number: "12312312",
          piece_number: "23",
          car_number: "32",
          column_number: "45",
          quantity: "23",
          orderly: "齐",
          craft_date: "11小时30分钟"
        },
        {
          checked: false,
          worker_number: "12312312",
          piece_number: "23",
          car_number: "32",
          column_number: "45",
          quantity: "23",
          orderly: "齐",
          craft_date: "11小时30分钟"
        },
        {
          checked: false,
          worker_number: "12312312",
          piece_number: "23",
          car_number: "32",
          column_number: "45",
          quantity: "23",
          orderly: "齐",
          craft_date: "11小时30分钟"
        },
        {
          checked: false,
          worker_number: "12312312",
          piece_number: "23",
          car_number: "32",
          column_number: "45",
          quantity: "23",
          orderly: "齐",
          craft_date: "11小时30分钟"
        },
        {
          checked: false,
          worker_number: "12312312",
          piece_number: "23",
          car_number: "32",
          column_number: "45",
          quantity: "23",
          orderly: "齐",
          craft_date: "11小时30分钟"
        },
        {
          checked: false,
          worker_number: "12312312",
          piece_number: "23",
          car_number: "32",
          column_number: "45",
          quantity: "23",
          orderly: "齐",
          craft_date: "11小时30分钟"
        },
        {
          checked: false,
          worker_number: "12312312",
          piece_number: "23",
          car_number: "32",
          column_number: "45",
          quantity: "23",
          orderly: "齐",
          craft_date: "11小时30分钟"
        }
      ]
    };
  },
  methods: {
    unbinding() {
      this.Serial_number = "12345678";
      this.Material_Coding = "X12345";
      this.Supplier_Coding = "s12345";
      this.Name_supplier = "北京";
      this.Name_original_supplier = "原北京";
      this.position="北京";
      this.key_list = this.list;
    },
    set_checkbox_item(index) {
      console.log(index);
    },
    beCalledScan(str) {
      this.add_number = str;
    }
  },
  mounted() {
    window.beCalledScan = this.beCalledScan;
    $App.callScan();
  }
};
</script>

<style>
#unbinding {
  margin-left: 20px;
  margin-right: 20px;
}
.un_bd {
  width: 100%;
}
.un_bd_title {
  margin-top: 10px;
  margin-left: 20px;
}
.un_bd_title2 {
  margin-top: 20px;
  margin-left: 20px;
}
.un_bd_body {
  padding-left: 10px;
  border: 1px solid #000;
  border-radius: 8px;
  margin-top: 10px;
  width: 90%;
  margin-left: 20px;
  height: 130px;
}
.un_bd_body_scroll {
  padding-left: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  margin-top: 10px;
  width: 90%;
  margin-left: 20px;
  height: 190px;
}

.un_bd_body_item {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 170px;
}

.un_item_l {
  width: 80%;
}
.un_item_r {
  width: 20%;
}
.un_bd_ms_l {
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
