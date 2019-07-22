<template>
  <div id="ling_x">
    <h3 style=" text-align: center;">集料明细</h3>
    <div id="ling_x_t_g_scroll">
      <div id="ling_x_t_list" v-for="(item) in list" v-bind:key="item.id">
        <div id="ling_x_t_item_l">
          <div id="ling_x_t_item_t">
             <div id="ling_x_item">零件号：{{item.part_number}}</div>
             <div id="ling_x_item">零件描述：{{item.part_Description}}</div>
          </div>
          <div id="ling_x_t_item_t">
             <div id="ling_x_item">需求数量：{{item.demand_number}}</div>
             <div id="ling_x_item">交付数量：{{item.delivery_number}}</div>
          </div>
          <div id="ling_x_t_item_t">
             <div id="ling_x_item">批次号：{{item.Batch_number}}</div>
             <div id="ling_x_item">序列号：{{item.serial_number}}</div>
          </div>
          <div id="ling_x_t_item">库位：{{item.Warehouse}}</div>
        </div>
      </div>
    </div>

    <div id="ling_x_but">
      <div id="ling_x_but_l">
        <mt-button type="primary" @click="gotovue()">下架</mt-button>
      </div>
       <div id="ling_x_but_l">
        <mt-button type="primary" @click="gotovue()">下架打印</mt-button>
      </div>
      <div id="ling_x_but_l">
        <mt-button type="primary" @click="get_yes()">提交</mt-button>
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
      pl_list: "",
      list: [
        {
          part_number: "567890233",
          part_Description: "防护板组成",
          demand_number: "345",
          delivery_number: "345",
          Batch_number: "S334235",
          serial_number: "d2190",
          Warehouse: "B309"
        },
         {
          part_number: "567890233",
          part_Description: "防护板组成",
          demand_number: "345",
          delivery_number: "345",
          Batch_number: "S334235",
          serial_number: "d2190",
          Warehouse: "B309"
        },
         {
          part_number: "567890233",
          part_Description: "防护板组成",
          demand_number: "345",
          delivery_number: "345",
          Batch_number: "S334235",
          serial_number: "d2190",
          Warehouse: "B309"
        },
         {
          part_number: "567890233",
          part_Description: "防护板组成",
          demand_number: "345",
          delivery_number: "345",
          Batch_number: "S334235",
          serial_number: "d2190",
          Warehouse: "B309"
        },
         {
          part_number: "567890233",
          part_Description: "防护板组成",
          demand_number: "345",
          delivery_number: "345",
          Batch_number: "S334235",
          serial_number: "d2190",
          Warehouse: "B309"
        },
         {
          part_number: "567890233",
          part_Description: "防护板组成",
          demand_number: "345",
          delivery_number: "345",
          Batch_number: "S334235",
          serial_number: "d2190",
          Warehouse: "B309"
        },
         {
          part_number: "567890233",
          part_Description: "防护板组成",
          demand_number: "345",
          delivery_number: "345",
          Batch_number: "S334235",
          serial_number: "d2190",
          Warehouse: "B309"
        },
         {
          part_number: "567890233",
          part_Description: "防护板组成",
          demand_number: "345",
          delivery_number: "345",
          Batch_number: "S334235",
          serial_number: "d2190",
          Warehouse: "B309"
        }
      ]
    };
  },
  methods: {
    gotovue() {
      this.$router.push({ path: "send" });
    },
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
#ling_x {
 margin-left: 20px;
 margin-right: 20px;
}
#ling_x_t_g_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 380px;
  font-size: 13px;
}
#ling_x_t_list {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 90px;
}
#ling_x_t_item_l {
  width: 100%;
  height: 100%;
}
#ling_x_t_item_t {
 display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
}
#ling_x_item {
   display: flex;
  align-items: center;
  width: 50%;
}
#ling_x_t_item {
  height: 20px;
}
#ling_x_er {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
#ling_x_er_but_l {
  margin-top: 10px;
  width: 20%;
  height: 40px;
}
#ling_x_er_input {
  margin-top: 10px;
  width: 80%;
  height: 40px;
}
#ling_x_input {
  margin-top: 10px;
  width: 100%;
  height: 40px;
}
#ling_x_but {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
#ling_x_but_l {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
}
</style>
