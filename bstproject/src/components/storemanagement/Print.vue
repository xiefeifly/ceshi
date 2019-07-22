<template>
  <div id="dyt_s">
    <h3 style=" text-align: center;">打印条码</h3>
    <div id="dyt_s_t">
      <div id="dyt_s_t_z">单据类型：</div>
      <div id="dyt_s_t_input">
        <input style="width:100% " type="text" v-model="type" />
      </div>
    </div>

    <div id="dyt_s_t">
      <div id="dyt_s_t_z">列号：</div>
      <div id="dyt_s_t_i">
        <input style="width:90% " type="text" v-model="column_number" />
      </div>
      <div id="dyt_s_t_z1">车号：</div>
      <div id="dyt_s_t_i">
        <input style="width:100% " type="text" v-model="car_number" />
      </div>
    </div>
    <div id="dyt_s_t">
      <div id="dyt_s_t_z">单号：</div>
      <div id="dyt_s_t_i">
        <input style="width:90% " type="text" v-model="odd_number" />
      </div>
      <div id="dyt_s_t_z1">件号：</div>
      <div id="dyt_s_t_i">
        <input style="width:100% " type="text" v-model="part_number" />
      </div>
    </div>
    <div id="dyt_s_t_g_scroll">
      <div id="dyt_s_t_list" v-for="(item) in list" v-bind:key="item.id">
        <div id="dyt_s_t_item_l">
          <div id="dyt_s_t_item_t">
            <div id="dyt_s_item">零件号：{{item.part_number}}</div>
            <div id="dyt_s_item">零件描述：{{item.Part_Description}}</div>
          </div>
          <div id="dyt_s_t_item_t">
            <div id="dyt_s_item">数量：{{item.number}}</div>
            <div id="dyt_s_item">库位：{{item.Warehouse_location}}</div>
          </div>
          <div id="dyt_s_t_item_t">交货日期{{item.submission_time}}</div>
        </div>
      </div>
    </div>

    <div id="dyt_s_er">
      <mt-button type="primary" @click="get_print()">打印</mt-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "app",
  data() {
    return {
      type: "生产退料",
      column_number: "21",
      car_number: "21",
      odd_number: "32",
      part_number: "45",
      list: [
        {
          part_number: "5767612",
          Part_Description: "防护板组成",
          number: "12",
          Warehouse_location: "P座03",
          submission_time: "2019-2-3 12:12:12",
        },
         {
          part_number: "5767612",
          Part_Description: "防护板组成",
          number: "12",
          Warehouse_location: "P座03",
          submission_time: "2019-2-3 12:12:12",
        }, {
          part_number: "5767612",
          Part_Description: "防护板组成",
          number: "12",
          Warehouse_location: "P座03",
          submission_time: "2019-2-3 12:12:12",
        }, {
          part_number: "5767612",
          Part_Description: "防护板组成",
          number: "12",
          Warehouse_location: "P座03",
          submission_time: "2019-2-3 12:12:12",
        }, {
          part_number: "5767612",
          Part_Description: "防护板组成",
          number: "12",
          Warehouse_location: "P座03",
          submission_time: "2019-2-3 12:12:12",
        }, {
          part_number: "5767612",
          Part_Description: "防护板组成",
          number: "12",
          Warehouse_location: "P座03",
          submission_time: "2019-2-3 12:12:12",
        }, {
          part_number: "5767612",
          Part_Description: "防护板组成",
          number: "12",
          Warehouse_location: "P座03",
          submission_time: "2019-2-3 12:12:12",
        },
      ]
    };
  },
  methods: {
   
    get_print() {
      
      let instance = Toast("完成");
      setTimeout(() => {
        instance.close();
      }, 2000);
    }
  }
};
</script>

<style>
#dyt_s {
  margin-left: 20px;
  margin-right: 20px;
}
#dyt_s_t {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 40px;
  font-size: 13px;
}
#dyt_s_t_input{
 width: 80%;
}
#dyt_s_t_z {
  width:25%;
}
#dyt_s_t_z1 {
  width: 20%;
}
#dyt_s_t_i {
  width: 30%;
}
#dyt_s_t_g_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 380px;
  font-size: 13px;
}
#dyt_s_t_list {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 70px;
}
#dyt_s_t_item_l {
  width: 100%;
  height: 100%;
}
#dyt_s_t_item_t {
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
}
#dyt_s_item {
  display: flex;
  align-items: center;
  width: 50%;
}
#dyt_s_t_item {
  height: 20px;
}
#dyt_s_er {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
</style>
