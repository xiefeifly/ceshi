<template>
  <div id="tasklist">
    <h3 style="text-align: center;">任务列表</h3>

    <p style="text-align: center;">工作中心:{{work_center}}</p>
    <div class="rw_list_scroll">
      <div id="rw_list" v-for="(item,index) in list  " v-bind:key="item.id">
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
      <mt-button size="large" type="primary" @click="query()">查询</mt-button>
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
      list: [],
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

    query() {
      this.$router.push({ path: "taskquery" });
      let instance = Toast("完成");
      setTimeout(() => {
        instance.close();
      }, 2000);
    }
  },
  beforeMount() {
    console.log("模板编译之前3");
  },
  mounted() {
    console.log("模板编译之后3");
   this.list = this.list1;

      var routerParams = this.$route.params.msgkey;
    console.log("模板编译完成4");
      var ser = this.$route.params.ser;


        console.log("routerParams",routerParams); // 输出 test message
        console.log("routerParams",ser); // 输出 test message
        if(ser!=null){
          this.list = ser;
        }

  },
   beforeUpdate() {
    console.log("数据更新之前");
  },
  updated() {
     
    console.log("数据更新完毕");
  },
};
</script>

<style>
#tasklist{
margin-left: 20px;
margin-right: 20px;

}
.rw_list_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 450px;
  font-size: 13px;
}
#rw_list {
  margin:0 auto;
  width: 95%;
  height: 100px;
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
