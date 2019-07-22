<template>
  <div id="TT_s">
    <h3 style=" text-align: center;">TT移库单上架</h3>

    <div>TT移库单号：{{tt_storage}}</div>
    <div id="TT_s_t_g_scroll">
      <div id="TT_s_t_list" v-for="(item) in tt_list" v-bind:key="item.id">
        <div id="TT_s_t_item_l">
          <div id="TT_s_t_item_t">
            <div id="TT_s_item">TT号：{{item.tt_number}}</div>
            <div id="TT_s_item">种类：{{item.type}}</div>
          </div>
          <div id="TT_s_t_item_t">
            <div id="TT_s_item">From：{{item.tt_from}}</div>
            <div id="TT_s_item">To：{{item.tt_to}}</div>
          </div>
          <div id="TT_s_t_item_t">
            <div id="TT_s_item">项目号：{{item.project_number}}</div>
            <div id="TT_s_item">零件号：{{item.part_number}}</div>
          </div>
          <div id="TT_s_t_item_t">
            <div id="TT_s_item">序列号：{{item.serial_number}}</div>
            <div id="TT_s_item">批次号：{{item.Batch_number}}</div>
          </div>
        </div>
      </div>
    </div>

    <div id="TT_s_er">
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
      tt_storage: "",
      tt_list: "",
      list: [
        {
          tt_number: "tt4564",
          type: "45",
          tt_from: "wherehouse",
          tt_to: "wherehouse",
          project_number: "934",
          part_number: "2345686",
          serial_number: "**67890",
          Batch_number: "**34567"
        },
        {
          tt_number: "tt4564",
          type: "45",
          tt_from: "wherehouse",
          tt_to: "wherehouse",
          project_number: "934",
          part_number: "2345686",
          serial_number: "**67890",
          Batch_number: "**34567"
        },
        {
          tt_number: "tt4564",
          type: "45",
          tt_from: "wherehouse",
          tt_to: "wherehouse",
          project_number: "934",
          part_number: "2345686",
          serial_number: "**67890",
          Batch_number: "**34567"
        },
        {
          tt_number: "tt4564",
          type: "45",
          tt_from: "wherehouse",
          tt_to: "wherehouse",
          project_number: "934",
          part_number: "2345686",
          serial_number: "**67890",
          Batch_number: "**34567"
        },
        {
          tt_number: "tt4564",
          type: "45",
          tt_from: "wherehouse",
          tt_to: "wherehouse",
          project_number: "934",
          part_number: "2345686",
          serial_number: "**67890",
          Batch_number: "**34567"
        },
        {
          tt_number: "tt4564",
          type: "45",
          tt_from: "wherehouse",
          tt_to: "wherehouse",
          project_number: "934",
          part_number: "2345686",
          serial_number: "**67890",
          Batch_number: "**34567"
        }
      ]
    };
  },
  methods: {
    get_yes() {
      this.tt_storage = "345678";
      this.tt_list = this.list;
      let instance = Toast("完成");
      setTimeout(() => {
        instance.close();
      }, 2000);
    }
  }
};
</script>

<style>
#TT_s {
  padding: 10px;
}
#TT_s_t_g_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 380px;
  font-size: 13px;
}
#TT_s_t_list {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 90px;
}
#TT_s_t_item_l {
  width: 100%;
  height: 100%;
}
#TT_s_t_item_t {
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
}
#TT_s_item {
  display: flex;
  align-items: center;
  width: 50%;
}
#TT_s_t_item {
  height: 20px;
}
#TT_s_er {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
</style>
