<template>
  <div id="po_s">
    <h3 style=" text-align: center;">PO入库</h3>
    <div id="po_s_t">
      <div id="po_s_t_z">供应商：</div>
      <div id="po_s_t_input">
        <input style="width:100% " type="text" v-model="supplier" />
      </div>
    </div>
    <div id="po_s_t">
      <div id="po_s_t_z">到货日：</div>
      <div id="po_s_t_input">
        <input style="width:100% " type="text" v-model="arrival_date" />
      </div>
    </div>

    <div id="po_s_t">
      <div id="po_s_t_z">待入库数：</div>
      <div id="po_s_t_i">
        <input style="width:90% " type="number" v-model="putinto_number" />
      </div>
      <div id="po_s_t_z1">过检数：</div>
      <div id="po_s_t_i">
        <input style="width:100% " type="number" v-model="overcheck_number" />
      </div>
    </div>

    <div id="po_s_t_g_scroll">
      <div v-for="item in list1" v-bind:key="item.id">
        <div id="po_s_t_item_t">
          <div id="po_s_item">接收号：{{item.Receive_number}}</div>
          <div id="po_s_item">项目号：{{item.project_number}}</div>
        </div>
        <div id="po_s_t_list" v-for="item in item.list" v-bind:key="item.id">
          <div id="che_t_item">零件号：{{item.Part_number}}</div>
          <div id="che_t_item">零件描述：{{item.Part_Description}}</div>
          <div id="che_t_item">序列号：{{item.serial_number}}</div>
          <div id="che_t_item">批次号：{{item.Batch_number}}</div>
          <div id="che_t_item">条码代号：{{item.Conditional_code}}</div>
          <div id="che_t_item">
            库位：
            <input style="width:50px;" type="text" v-model="item.Warehouselocation" />
          </div>
          <div id="che_t_item">
            数量：
            <input style="width:50px;" type="text" v-model="item.item_number" />
          </div>
        </div>
      </div>
    </div>

    <div id="po_s_er">
      <mt-button type="primary" @click="get_yes()">提交</mt-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "app",
  data() {
    return {
      supplier: "北冰洋",
      arrival_date: "2019-2-10",
      putinto_number: "5",
      overcheck_number: "45",

      list1: [
        {
          Receive_number: "3456789",
          project_number: "X12345",
          list: [
            {
              Part_number: "lj34567",
              Part_Description: "防护板组成",
              serial_number: "xz234567",
              Batch_number: "456234",
              Conditional_code: "zxderfsdfg13",
              Warehouselocation: "p345",
              item_number: "300"
            },
            {
              Part_number: "lj34567",
              Part_Description: "防护板组成",
              serial_number: "xz234567",
              Batch_number: "456234",
              Conditional_code: "zxderfsdfg13",
              Warehouselocation: "p345",
              item_number: "300"
            },
            {
              Part_number: "lj34567",
              Part_Description: "防护板组成",
              serial_number: "xz234567",
              Batch_number: "456234",
              Conditional_code: "zxderfsdfg13",
              Warehouselocation: "p345",
              item_number: "300"
            }
          ]
        },
        {
          Receive_number: "3456789",
          project_number: "X12345",
          list: [
            {
              Part_number: "lj34567",
              Part_Description: "防护板组成",
              serial_number: "xz234567",
              Batch_number: "456234",
              Conditional_code: "zxderfsdfg13",
              Warehouselocation: "p345",
              item_number: "300"
            },
            {
              Part_number: "lj34567",
              Part_Description: "防护板组成",
              serial_number: "xz234567",
              Batch_number: "456234",
              Conditional_code: "zxderfsdfg13",
              Warehouselocation: "p345",
              item_number: "300"
            },
            {
              Part_number: "lj34567",
              Part_Description: "防护板组成",
              serial_number: "xz234567",
              Batch_number: "456234",
              Conditional_code: "zxderfsdfg13",
              Warehouselocation: "p345",
              item_number: "300"
            }
          ]
        }
      ]
    };
  },
  methods: {
    get_yes() {
      let instance = Toast("完成");
      setTimeout(() => {
        instance.close();
      }, 2000);
    }
  }
};
</script>

<style>
#po_s {
  margin-left: 20px;
  margin-right: 20px;
}
#po_s_t {
  display: flex;
  justify-content: space-around;
  font-size: 13px;
  width: 100%;
  height: 25px;
}
#po_s_t_input {
  width: 80%;
}
#po_s_t_z {
  width: 25%;
}
#po_s_t_z1 {
  width: 20%;
}
#po_s_t_i {
  width: 30%;
}
#po_s_t_g {
  width: 100%;
  height: 110px;
}
#po_s_t_g_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 380px;
  font-size: 13px;
}
#po_s_t_list {
  width: 100%;
  height: 140px;
}
#po_s_t_item_l {
  width: 100%;
  height: 100%;
}
#po_s_t_item_t {
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
}
#po_s_item {
  display: flex;
  align-items: center;
  width: 50%;
}
#po_s_t_item {
  height: 20px;
}
#po_s_er {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
</style>
