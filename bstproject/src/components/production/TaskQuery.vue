<template>
  <div id="taskquery">
    <h3 style="text-align: center;">任务列表查询</h3>
    <div class="taskquery">
      <div class="taskquery_div">工作中心</div>
      <input class="taskquery_input" type="text" v-model="working" />

      <div class="taskquery_div">合同号</div>
      <input class="taskquery_input" type="number" v-model="contract" />

      <div class="taskquery_div">车号</div>
      <input class="taskquery_input" type="number" v-model="car" />

      <div class="taskquery_div">列好</div>
      <input class="taskquery_input" type="number" v-model="column" />

      <div class="taskquery_div">订单号</div>
      <input class="taskquery_input" type="number" v-model="order" />

      <div class="taskquery_div">工票</div>
      <input class="taskquery_input" type="number" v-model="workers" />

      <div class="taskquery_div">状态</div>
      <input class="taskquery_input" type="text" v-model="state" />
      <div class="taskquery_button">
        <div class="button">
          <mt-button size="small" type="primary" class="button" @click="close()">重置</mt-button>
        </div>
        <div class="button">
          <mt-button size="small" type="primary" class="button" @click="query()">查询</mt-button>
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

      working: "356780oi",
      contract: "567",
      car: "9870",
      column: "34560",
      order: "356780",
      workers: "30987",
      state: "356780oi",
       list1: [
        {
          workers_number: 1,
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
          workers_number: 2,
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
          workers_number: 3,
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
          workers_number: 4,
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
          workers_number: 5,
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
    close() {
      this.working = "";
      this.contract = "";
      this.car = "";
      this.column = "";
      this.workers = "";
      this.order = "";
      this.state = "";
    },
    query() {

this.$router.push({
        path: "tasklist",
        name: "tasklist",
        params: { msgkey: "val", ser: this.list1 }
      });








      // var api =
      //   "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";

      // this.$http.get(api).then(
      //   response => {
      //     console.log(response);

      //     //注意this指向

      //     this.list = response.body.result;
      //     console.log(this.list[0].title);
      //   },
      //   function(err) {
      //     console.log(err);
      //   }
      // );


    }
  }
};
</script>

<style>
.taskquery {
  width: 100%;
}
.taskquery_div {
  margin-top: 10px;
  margin-left: 20px;
}
.taskquery_input {
  margin-left: 20px;
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 30px;
}
.taskquery_button {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-top: 15px;
}
.button {
  display: flex;
  justify-content: space-around;
  width: 50%;
}
</style>
