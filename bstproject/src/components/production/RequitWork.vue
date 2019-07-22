<template>
<div id="requit">
  <head></head>
  <h3 style=" text-align: center;">报工</h3>
  <div id="requit_t_g">
    <div>工票总数：{{workers_numbers}}</div>
    <div id="requit_t_checkbox">
      <input
        name="Fruit"
        type="checkbox"
        checked="true"
        v-model="checked_worker"
        @click="set_checkbox_worker(checked_worker)"
      />
    </div>
  </div>

  <div id="requit_t_g_scroll">
    <div id="requit_t_list" v-for="(item,index) in worker_list" v-bind:key="item.id">
      <div id="requit_t_item_l">
        <div id="requit_t_item">工票号：{{item.worker_number}}</div>
        <div id="requit_t_item">件号：{{item.piece_number}}</div>
        <div id="requit_t_item">车号：{{item.car_number}}</div>
        <div id="requit_t_item">列号：{{item.column_number}}</div>
        <div id="requit_t_item">合同号：{{item.contract}}</div>
        <div id="requit_t_item">
          数量：
          <input id="requit_t_item_input" v-model="item.numbers" />
        </div>
        <div id="requit_t_item">
          不良品：
          <input id="requit_t_item_input" v-model="item.regects" />
        </div>
        <div id="requit_t_item">
          完工百分比：
          <input id="requit_t_item_input" v-model="item.percent" />%
        </div>
      </div>
      <div id="requit_t_item_r">
        <div>
          <input
            name="Fruit"
            type="checkbox"
            value="index"
            v-model="item.checked"
            @click="set_checkbox_item_work(item.checked,index)"
          />
        </div>
      </div>
    </div>
  </div>
  <div id="requit_t_r">
    <div>人员总数：{{personnel_number}}</div>
    <div id="requit_t_checkbox">
      <input
        name="全选"
        type="checkbox"
        checked="true"
        v-model="checked_person"
        @click="set_checkbox_person(checked_person)"
      />
    </div>
  </div>
  <div id="requit_t_r_scroll">
    <div id="requit_r_list" v-for="(item,index) in person_list" v-bind:key="item.id">
      <div id="requit_t_item">姓名：{{item.name}}</div>
      <div id="requit_t_item">，</div>
      <div id="requit_t_item">卡号：{{item.card_number}}</div>
      <div id="requit_t_checkbox">
        <input
          name="Fruit"
          type="checkbox"
          value="index"
          v-model="item.checked"
          @click="set_checkbox_item_person(item.checked,index)"
        />
      </div>
    </div>
  </div>
  <div id="requit_input">
    <input style="width:100% ;height:100%;" type="number" v-model="add_number" />
  </div>

  <div id="requit_but">
    <div id="requit_but_l">
      <mt-button type="primary" @click="add()">添加</mt-button>
    </div>
    <div id="requit_but_l">
      <mt-button type="primary" @click="get_yes()">确认报工</mt-button>
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
      workers_numbers: "",
      personnel_number: "",
      add_number:"3428797654",
      checked_worker: true,
      checked_person: true,
      worker_list: [],
      person_list: [],
      number: "",
      checked: true,

      list1: [
        {
          checked: true,
          name: "张哈",
          card_number: "123456789"
        },
        {
          checked: true,
          name: "李哈",
          card_number: "123456789"
        },
        {
          checked: true,
          name: "王哈",
          card_number: "123456789"
        },
        {
          checked: false,
          name: "张哈",
          card_number: "123456789"
        }
      ],
      list: [
        {
          checked: false,
          worker_number: "12345",
          piece_number: "防护板组成",
          car_number: "12",
          column_number: "p00",
          quantity: "2190",
          orderly: "67890",
          craft_date: "34567",
          contract: "56789",
          numbers: "56",
          regects: "5",
          percent: "30"
        },
        {
          checked: false,
          worker_number: "12345",
          piece_number: "防护板组成",
          car_number: "12",
          column_number: "p00",
          quantity: "2190",
          orderly: "67890",
          craft_date: "34567",
          contract: "56789",
          numbers: "56",
          regects: "5",
          percent: "30"
        },
        {
          checked: false,
          worker_number: "12345",
          piece_number: "防护板组成",
          car_number: "12",
          column_number: "p00",
          quantity: "2190",
          orderly: "67890",
          craft_date: "34567",
          contract: "56789",
          numbers: "56",
          regects: "5",
          percent: "30"
        },
        {
          checked: true,
          worker_number: "12345",
          piece_number: "防护板组成",
          car_number: "12",
          column_number: "p00",
          quantity: "2190",
          orderly: "67890",
          craft_date: "34567",
          contract: "56789",
          numbers: "56",
          regects: "5",
          percent: "30"
        },
        {
          checked: false,
          worker_number: "12345",
          piece_number: "防护板组成",
          car_number: "12",
          column_number: "p00",
          quantity: "2190",
          orderly: "67890",
          craft_date: "34567",
          contract: "56789",
          numbers: "56",
          regects: "5",
          percent: "30"
        },
        {
          checked: true,
          worker_number: "12345",
          piece_number: "防护板组成",
          car_number: "12",
          column_number: "p00",
          quantity: "2190",
          orderly: "67890",
          craft_date: "34567",
          contract: "56789",
          numbers: "56",
          regects: "5",
          percent: "30"
        }
      ]
    };
  },
  methods: {
    add() {
      // this.worker_list = this.list;
      // this.person_list = this.list1;

      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";

      this.$http.get(api).then(
        response => {
          console.log(response);
          // ponse.body.result;
          this.receipt_list = response.body.result;
          console.log(this.receipt_list[0].title);

          this.worker_list = this.list;
          var newlist = this.getnewlist(this.worker_list);
          this.workers_numbers = newlist.length;
          console.log(newlist.length);
          for (var i = 0; i < newlist.length; i++) {
            console.log(newlist[i].checked);
            console.log(newlist[i].worker_number + "");
          }

          this.person_list = this.list1;
          var newlist1 = this.getnewlist(this.person_list);
          this.personnel_number = newlist1.length;
          console.log(newlist1.length);

          let instance = Toast("完成");
          setTimeout(() => {
            instance.close();
          }, 2000);
        },
        function(err) {
          console.log(err);
        }
      );
    },

    set_checkbox_item_work(checked, index) {
      console.log(checked);
      console.log(index);
      if (checked) {
        this.worker_list[index].checked = false;
      } else {
        this.worker_list[index].checked = true;
      }
      this.workers_numbers = this.getnewlist(this.worker_list).length;
    },
    set_checkbox_item_person(checked, index) {
      console.log(checked);
      console.log(index);
      if (checked) {
        this.person_list[index].checked = false;
      } else {
        this.person_list[index].checked = true;
      }
      this.personnel_number = this.getnewlist(this.person_list).length;
    },
    set_checkbox_worker(val) {
      var length = this.worker_list.length;
      console.log(length);
      console.log(val);
      if (val) {
        for (var i = 0; i < length; i++) {
          this.worker_list[i].checked = false;
        }
      } else {
        for (var i = 0; i < length; i++) {
          this.worker_list[i].checked = true;
        }
      }
      this.workers_numbers = this.getnewlist(this.worker_list).length;
    },
    set_checkbox_person(val) {
      var length = this.person_list.length;
      console.log(length);
      if (val) {
        for (var i = 0; i < length; i++) {
          this.person_list[i].checked = false;
        }
      } else {
        for (var i = 0; i < length; i++) {
          this.person_list[i].checked = true;
        }
      }
      this.personnel_number = this.getnewlist(this.person_list).length;
    },
    get_yes() {
     
      let instance = Toast("完成");
      setTimeout(() => {
        instance.close();
      }, 2000);
    },
    getnewlist(list) {
      var newlist = new Array();
      var length = list.length;
      for (var i = 0; i < length; i++) {
        if (list[i].checked) {
          newlist.push(list[i]);
        }
      }
      return newlist;
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
#requit {
 margin-right: 20px;
 margin-left: 20px;
}
#requit_t_g {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
}
#requit_t_checkbox {
  display: flex;
  align-items: center;
  height: 20px;
}
#requit_t_g_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 250px;
}
#requit_t_list {
  display: flex;
  padding: 10px;
  justify-content: space-around;
  width: 100%;
  height: 190px;
}
#requit_t_item_l {
  width: 70%;
  height: 100%;
}
#requit_t_item_input {
  width: 40px;
}
#requit_t_item_r {
  width: 30%;
  height: 100%;
}
#requit_t_item {
  height: 25px;
}
#requit_t_r {
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
}
#requit_t_r_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 100px;
}
#requit_r_list {
  padding: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
}
#requit_r_item {
  width: 100%;
  height: 20px;
}
#requit_input {
  margin-top: 10px;
  width: 100%;
  height: 40px;
}
#requit_but {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
#requit_but_l {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
}
</style>
