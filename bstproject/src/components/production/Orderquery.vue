<template>
  <div id="ding">
    <h3 style=" text-align: center;">订单进度查询</h3>
    <div id="ding_t_g">
      <div>订单号：{{order}}</div>
      <div>日期：{{date}}</div>
    </div>

    <div id="ding_t_g_scroll">
      <div id="ding_t_list" v-for="(item) in list" v-bind:key="item.id">
        <div id="ding_t_item_l">
          <div id="ding_t_item">工票号：{{item.workers_number}}</div>
          <div id="ding_t_item">件号：{{item.piece_number}}</div>
          <div id="ding_t_item">车号：{{item.car_number}}</div>
          <div id="ding_t_item">列号：{{item.column_number}}</div>
          <div id="ding_t_item">数量：{{item.quantity}}</div>
          <div id="ding_t_item">状态：{{item.state}}</div>
          <div id="ding_t_item">齐套性：{{item.orderly}}</div>
        </div>
      </div>
    </div>

    <div id="ding_but">
      <div id="ding_input">
        <input style="width:100% ;height:100%;" type="number" v-model="add_number" />
      </div>
      <div id="ding_but_l">
        <mt-button type="primary" @click="query()">查询</mt-button>
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
      number: "",
      order: "",
      date: "",
      add_number:"678",
      list: [],
      order_query: [
        {
          workers_number: 3456789,
          piece_number: "32",
          car_number: "11",
          column_number: "3",
          quantity: "34",
          craft_date: "1小时20分钟",
          date_format: "2019/5/2",
          state: "未开工",
          orderly: "1"
        },
        {
          workers_number: 3456789,
          piece_number: "32",
          car_number: "11",
          column_number: "3",
          quantity: "34",
          craft_date: "1小时20分钟",
          date_format: "2019/5/2",
          state: "未开工",
          orderly: "1"
        },
        {
          workers_number: 3456789,
          piece_number: "32",
          car_number: "11",
          column_number: "3",
          quantity: "34",
          craft_date: "1小时20分钟",
          date_format: "2019/5/2",
          state: "未开工",
          orderly: "1"
        },
        {
          workers_number: 3456789,
          piece_number: "32",
          car_number: "11",
          column_number: "3",
          quantity: "34",
          craft_date: "1小时20分钟",
          date_format: "2019/5/2",
          state: "未开工",
          orderly: "1"
        },
        {
          workers_number: 3456789,
          piece_number: "32",
          car_number: "11",
          column_number: "3",
          quantity: "34",
          craft_date: "1小时20分钟",
          date_format: "2019/5/2",
          state: "未开工",
          orderly: "1"
        },
        {
          workers_number: 3456789,
          piece_number: "32",
          car_number: "11",
          column_number: "3",
          quantity: "34",
          craft_date: "1小时20分钟",
          date_format: "2019/5/2",
          state: "未开工",
          orderly: "1"
        },
        {
          workers_number: 3456789,
          piece_number: "32",
          car_number: "11",
          column_number: "3",
          quantity: "34",
          craft_date: "1小时20分钟",
          date_format: "2019/5/2",
          state: "未开工",
          orderly: "1"
        }
      ]
    };
  },
  methods: {
    query() {
      this.order = "SV499308CM";
      this.date = "2019/5/26";
      this.list = this.order_query;
      let instance = Toast("完成");
      setTimeout(() => {
        instance.close();
      }, 2000);
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
#ding {
  padding: 10px;
}
#ding_t_g {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
}

#ding_t_g_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 450px;
}
#ding_t_list {
  display: flex;
  padding: 10px;
  justify-content: space-around;
  width: 100%;
  height: 130px;
}
#ding_t_item_l {
  width: 100%;
  height: 100%;
}
#ding_t_item {
  height: 20px;
}

#ding_input {
  width: 70%;
  height: 40px;
}
#ding_but {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
#ding_but_l {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%;
}
</style>
