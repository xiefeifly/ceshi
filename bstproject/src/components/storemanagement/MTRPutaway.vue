<template>
  <div id="MTR_s">
    <h3 style=" text-align: center;">MTR移库单上架</h3>

    <div>MTR移库单号：{{mtr_storage}}</div>
    <div id="MTR_s_t_g_scroll">
      <div id="MTR_s_t_list" v-for="item in mtr_list" v-bind:key="item.id">
        <div id="MTR_s_t_item_l">
          <div id="MTR_s_t_item_t">
            <div id="MTR_s_item">TT号：{{item.tt_number}}</div>
            <div id="MTR_s_item">MTR号：{{item.mtr_number}}</div>
          </div>
          <div id="MTR_s_t_item_t">
            <div id="MTR_s_item">From：{{item.mtr_from}}</div>
            <div id="MTR_s_item">To：{{item.mtr_to}}</div>
          </div>
          <div id="MTR_s_t_item_t">
             <div id="MTR_s_item">种类：{{item.type}}</div>
            <div id="MTR_s_item">项目号：{{item.project_number}}</div>
          </div>
          <div id="MTR_s_t_item_t">
            <div id="MTR_s_item">序列号：{{item.serial_number}}</div>
            <div id="MTR_s_item">批次号：{{item.Batch_number}}</div>
          </div>
        </div>
      </div>
    </div>

    <div id="MTR_s_er">
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
      mtr_storage: "1234567",
      mtr_list:"",
      list: [
       {
          tt_number: "tt4564",
          mtr_number: "mtr4564",
          type: "45",
          mtr_from: "wherehouse",
          mtr_to: "wherehouse",
          project_number: "934",
          serial_number: "**67890",
          Batch_number: "**34567"
        }, {
          tt_number: "tt4564",
          mtr_number: "mtr4564",
          type: "45",
          mtr_from: "wherehouse",
          mtr_to: "wherehouse",
          project_number: "934",
          serial_number: "**67890",
          Batch_number: "**34567"
        }, {
          tt_number: "tt4564",
          mtr_number: "mtr4564",
          type: "45",
          mtr_from: "wherehouse",
          mtr_to: "wherehouse",
          project_number: "934",
          serial_number: "**67890",
          Batch_number: "**34567"
        }, {
          tt_number: "tt4564",
          mtr_number: "mtr4564",
          type: "45",
          mtr_from: "wherehouse",
          mtr_to: "wherehouse",
          project_number: "934",
          serial_number: "**67890",
          Batch_number: "**34567"
        }, {
          tt_number: "tt4564",
          mtr_number: "mtr4564",
          type: "45",
          mtr_from: "wherehouse",
          mtr_to: "wherehouse",
          project_number: "934",
          serial_number: "**67890",
          Batch_number: "**34567"
        }, {
          tt_number: "tt4564",
          mtr_number: "mtr4564",
          type: "45",
          mtr_from: "wherehouse",
          mtr_to: "wherehouse",
          project_number: "934",
          serial_number: "**67890",
          Batch_number: "**34567"
        }, {
          tt_number: "tt4564",
          mtr_number: "mtr4564",
          type: "45",
          mtr_from: "wherehouse",
          mtr_to: "wherehouse",
          project_number: "934",
          serial_number: "**67890",
          Batch_number: "**34567"
        }, {
          tt_number: "tt4564",
          mtr_number: "mtr4564",
          type: "45",
          mtr_from: "wherehouse",
          mtr_to: "wherehouse",
          project_number: "934",
          serial_number: "**67890",
          Batch_number: "**34567"
        },
      ]
    };
  },
  methods: {
    get_yes() {
      this.mtr_list=this.list;
      let instance = Toast("完成");
      setTimeout(() => {
        instance.close();
      }, 2000);
    }
  }
};
</script>

<style>
#MTR_s {
  margin-left: 20px;
  margin-right: 20px;
}
#MTR_s_t_g {
  width: 100%;
  height: 110px;
}
#MTR_s_t_MTR_sckbox {
  display: flex;
  align-items: center;
  height: 20px;
}
#MTR_s_t_g_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 380px;
  font-size: 13px;
}
#MTR_s_t_list {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 85px;
}
#MTR_s_t_item_l {
  width: 100%;
  height: 100%;
}
#MTR_s_t_item_t {
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
}
#MTR_s_item {
  display: flex;
  align-items: center;
  width: 50%;
}
#MTR_s_t_item {
  height: 20px;
}
#MTR_s_er {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
</style>
