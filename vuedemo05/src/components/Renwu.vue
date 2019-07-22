<template>
  <div id="app">
    <h3 style="text-align: center;">任务列表</h3>

    <p  style="text-align: center;">工作中心:{{work_center}}</p>
    <div class="rw_list_scroll">
      <div id="rw_list" v-for="(item,index) in list1  " v-bind:key="item.id">
        <div id="rw_list_item">工票号：{{item.workers_number}}</div>
        <div id="rw_list_item">
          <div id="rw_list_item_chile">件号:{{item.piece_number}}</div>
          <div id="rw_list_item_chile1">车号:{{item.car_number}}</div>
          <div id="rw_list_item_chile2">列号:{{item.column_number}}</div>
        </div>
        <div id="rw_list_item">
          <div id="rw_list_item_chile">数量:{{item.quantity}}</div>
          <div id="rw_list_item_chile1">工艺工时:{{item.craft_date}}</div>
          <div id="rw_list_item_chile2">日期:{{item.date_format}}</div>
        </div>
        <div id="rw_list_item">状态:{{item.state}}</div>
        <div id="rw_list_item" @click="getmodel(index)">齐套性:{{item.orderly}}</div>
      </div>
    </div>
    <div style="margin-top: 10px;">
      <mt-button size="large" type="primary" @click="getquery()">查询</mt-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "app",
  data() {
    return {
      work_center: "356780oi",
      list1: [
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
    getmodel(item) {
      console.log("111111111111111" + item);
    },

    getquery() {
    this.$router.push({ path: "renwu_chaxun" });
      let instance = Toast("完成");
      setTimeout(() => {
        instance.close();
      }, 2000);
    }
  }
};
</script>

<style>
.rw_list_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  padding-left: 15px;
  border-radius: 8px;
  height: 500px;
}
#rw_list {
  width: 100%;
  height: 120px;
  margin-top: 10px;
}

#rw_list_item {
  display: flex;
  content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 3px;
}
#rw_list_item_chile {
  display: flex;
  content: space-around;
  align-items: center;
  width: 25%;
}
#rw_list_item_chile1 {
  display: flex;
  content: space-around;
  align-items: center;
  width: 50%;
}
#rw_list_item_chile2 {
  display: flex;
  content: space-around;
  align-items: center;
  width: 35%;
}
#titler1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 30px;
}
#titlermiaoshu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 30px;
}
#titlerch {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}
#t_test {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 15px;
}
#t_test1 {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 15px;
}
#t_test_item1 {
  display: flex;
  align-items: center;
  width: 50%;
  height: 40px;
}
#t_test_item2 {
  display: flex;
  align-items: center;
  width: 50%;
  height: 40px;
}
#t_test_item3 {
  display: flex;
  align-items: center;
  margin-left: 30px;
  height: 40px;
}

</style>
