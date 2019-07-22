<template>
  <div id="personal">
    <h3 style="text-align: center;">个人工时/产量查询</h3>
    <div id="personal_title">
      查询时间:
      <input
        id="personal_input"
        type="text"
        readonly
        name="start"
        @click="open('start')"
        v-model="startTime"
      />
      至
      <input
        id="personal_input"
        type="text"
        readonly
        name="end"
        @click="open('end')"
        v-model="endTime"
      />
    </div>
    <mt-datetime-picker
      ref="picker"
      type="date"
      v-model="value"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleChange"
    ></mt-datetime-picker>
    <div id="personal_t_text">
      <div id="personal_t">
        <div id="personal_t_chile">员工姓名:{{p_name}}</div>
        <div id="personal_t_chile1">计划工时:{{Scheduledhours}}</div>
        <div id="personal_t_chile2">计划产量:{{Scheduledyield}}</div>
      </div>
      <div id="personal_t">
        <div id="personal_t_chile">工票总数:{{tickets_number}}</div>
        <div id="personal_t_chile1">实际工时:{{Actualhours}}</div>
        <div id="personal_t_chile2">实际产量:{{Actualyield}}</div>
      </div>
    </div>
    <div class="personal_list_scroll">
      <div id="personal_list" v-for="item in personal_list  " v-bind:key="item.id">
        <div id="personal_t">
          <div id="personal_item_chile">订单号:{{item.order_number}}</div>
          <div id="personal_item_chile1">工票号:{{item.Ticket_number}}</div>
          <div id="personal_item_chile2">数量:{{item.number}}</div>
        </div>
        <div id="personal_t">
          <div id="personal_item_chile3">实际工时:{{item.Actualhours}}</div>
          <div id="personal_item_chile4">开工时间:{{item.starttime}}</div>
        </div>
        <hr />
      </div>
    </div>
    <div
      style="margin-top:10px; display: flex;content: space-around;align-items: center; width:100%;"
    >
      <div style="display: flex; align-items:center; width: 30%;">员工卡号:</div>
      <div style="display: flex; align-items:center; width: 70%;">
        <input style="width:100% ;height: 30px; " v-model="add_number" />
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
      examplename: "DateTimePicker",
      value: null,
      p_name: "",
      Scheduledhours: "",
      Scheduledyield: "",
      tickets_number: "",
      Actualhours: "",
      Actualyield: "",
      pickerValue: "",
      add_number: "",
      personal_list: [],
      list: [
        {
          order_number: "3456789",
          Ticket_number: "1234567888",
          number: "34",
          Actualhours: "1小时20分钟",
          starttime: "2019/5/2"
        },
        {
          order_number: "3456789",
          Ticket_number: "1234567888",
          number: "34",
          Actualhours: "1小时20分钟",
          starttime: "2019/5/2"
        },
        {
          order_number: "3456789",
          Ticket_number: "1234567888",
          number: "34",
          Actualhours: "1小时20分钟",
          starttime: "2019/5/2"
        },
        {
          order_number: "3456789",
          Ticket_number: "1234567888",
          number: "34",
          Actualhours: "1小时20分钟",
          starttime: "2019/5/2"
        },
        {
          order_number: "3456789",
          Ticket_number: "1234567888",
          number: "34",
          Actualhours: "1小时20分钟",
          starttime: "2019/5/2"
        },
        {
          order_number: "3456789",
          Ticket_number: "1234567888",
          number: "34",
          Actualhours: "1小时20分钟",
          starttime: "2019/5/2"
        },
        {
          order_number: "3456789",
          Ticket_number: "1234567888",
          number: "34",
          Actualhours: "1小时20分钟",
          starttime: "2019/5/2"
        },
        {
          order_number: "3456789",
          Ticket_number: "1234567888",
          number: "34",
          Actualhours: "1小时20分钟",
          starttime: "2019/5/2"
        },
        {
          order_number: "3456789",
          Ticket_number: "1234567888",
          number: "34",
          Actualhours: "1小时20分钟",
          starttime: "2019/5/2"
        },
        {
          order_number: "3456789",
          Ticket_number: "1234567888",
          number: "34",
          Actualhours: "1小时20分钟",
          starttime: "2019/5/2"
        },
        {
          order_number: "3456789",
          Ticket_number: "1234567888",
          number: "34",
          Actualhours: "1小时20分钟",
          starttime: "2019/5/2"
        }
      ],
      type: "",
      startTime: "",
      endTime: ""
    };
  },
  methods: {
    open(type) {
      this.type = type;
      this.$refs.picker.open();
    },
    handleChange(value) {
      let moment = require("moment");
      let date = moment(value).format("YYYY/MM/DD");
      console.log(date);
      if (this.type == "start") {
        this.startTime = date;
      }
      if (this.type == "end") {
        this.endTime = date;
      }
    },
    handleVisibleChange(isVisible) {
      // console.log('弹窗是否显示：',isVisible);
    },
    query() {
      this.p_name = "航海";
      this.Scheduledhours = "10" + "小时";
      this.Scheduledyield = "400" + "件";
      this.tickets_number = "3";
      this.Actualhours = "7" + "小时";
      this.Actualyield = "400" + "件";
      this.personal_list = this.list;

      // this.$router.push({ path: "taskquery" });
      // let instance = Toast("完成");
      // setTimeout(() => {
      //   instance.close();
      // }, 2000);
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
#personal {
  margin-left: 20px;
  margin-right: 20px;
}
.personal_title {
  font-size: 13px;
  display: flex;
  content: space-around;
  width: 100%;
}
#personal_input {
  width: 25%;
}
/* #personal_t_text {
  margin-top: 10px;
  border: 1px solid #000;
  border-radius: 8px;
} */
#personal_t {
  display: flex;
  content: space-around;
  align-items: center;

  width: 100%;
  font-size: 13px;
  margin-top: 5px;
}
#personal_t_chile {
  width: 35%;
}
#personal_t_chile1 {
  width: 40%;
}
#personal_t_chile2 {
  width: 35%;
}
#personal_item_chile {
  width: 40%;
}
#personal_item_chile1 {
  width: 40%;
}
#personal_item_chile2 {
  width: 20%;
}
#personal_item_chile3 {
  width: 50%;
}
#personal_t_chile4 {
  width: 50%;
}

.personal_list_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 350px;
  font-size: 13px;
}
#personal_list {
  margin: 0 auto;
  width: 95%;
  height: 50px;
  margin-top: 10px;
}
</style>
