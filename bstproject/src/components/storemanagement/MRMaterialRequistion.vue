<template>
  <div id="mr">
    <h3 style=" text-align: center;">MR领料单</h3>
    <div id="mr_t_g_scroll">
      <div id="mr_t_list" v-for="(item) in mr_list" v-bind:key="item.id">
        <div id="mr_t_item_l">
          <div id="mr_t_item_t">
             <div id="mr_item">库位：{{item.Warehouse_location}}</div>
             <div id="mr_item">工区：{{item.Workplace}}</div>
          </div>
          <div id="mr_t_item_t">
             <div id="mr_item">MR号：{{item.mr_number}}</div>
             <div id="mr_item">种类：{{item.type}}</div>
          </div>
          <div id="mr_t_item_t">
             <div id="mr_item">项目号：{{item.project_number}}</div>
             <div id="mr_item">需求号：{{item.demand_number}}</div>
          </div>
          <div id="mr_t_item">创建时间：{{item.Creation_time}}</div>
        </div>
      </div>
    </div>

    <div id="mr_but">
        <mt-button type="primary" @click="get_yes()">确定</mt-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "app",
  data() {
    return {
      mr_list: "",
      list: [
        {
          Warehouse_location: "S座",
          Workplace: "07工区",
          mr_number: "123",
          type: "12",
          project_number: "409",
          demand_number: "12",
          Creation_time: "2019-10-23 12:34:43"
        },{
          Warehouse_location: "S座",
          Workplace: "07工区",
          mr_number: "123",
          type: "12",
          project_number: "409",
          demand_number: "12",
          Creation_time: "2019-10-23 12:34:43"
        },{
          Warehouse_location: "S座",
          Workplace: "07工区",
          mr_number: "123",
          type: "12",
          project_number: "409",
          demand_number: "12",
          Creation_time: "2019-10-23 12:34:43"
        },{
          Warehouse_location: "S座",
          Workplace: "07工区",
          mr_number: "123",
          type: "12",
          project_number: "409",
          demand_number: "12",
          Creation_time: "2019-10-23 12:34:43"
        },{
          Warehouse_location: "S座",
          Workplace: "07工区",
          mr_number: "123",
          type: "12",
          project_number: "409",
          demand_number: "12",
          Creation_time: "2019-10-23 12:34:43"
        },{
          Warehouse_location: "S座",
          Workplace: "07工区",
          mr_number: "123",
          type: "12",
          project_number: "409",
          demand_number: "12",
          Creation_time: "2019-10-23 12:34:43"
        },{
          Warehouse_location: "S座",
          Workplace: "07工区",
          mr_number: "123",
          type: "12",
          project_number: "409",
          demand_number: "12",
          Creation_time: "2019-10-23 12:34:43"
        },{
          Warehouse_location: "S座",
          Workplace: "07工区",
          mr_number: "123",
          type: "12",
          project_number: "409",
          demand_number: "12",
          Creation_time: "2019-10-23 12:34:43"
        },{
          Warehouse_location: "S座",
          Workplace: "07工区",
          mr_number: "123",
          type: "12",
          project_number: "409",
          demand_number: "12",
          Creation_time: "2019-10-23 12:34:43"
        },
      ]
    };
  },
  methods: {
    get_yes() {
     this.mr_list=this.list;
      let instance = Toast("完成");
      setTimeout(() => {
        instance.close();
      }, 2000);
    }
  }
};
</script>

<style>
#mr {
 margin-left: 20px;
 margin-right: 20px;
}
#mr_t_g_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 380px;
  font-size: 13px;
}
#mr_t_list {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100px;
}
#mr_t_item_l {
  width: 100%;
  height: 100%;
}
#mr_t_item_t {
 display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
}
#mr_item {
   display: flex;
  align-items: center;
  width: 50%;
}
#mr_t_item {
  height: 20px;
}
#mr_but {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
</style>
