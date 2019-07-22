<template>
  <div id="start">
    <h3 style=" text-align: center;">开工</h3>
    <div id="satrt_t_g">
      <div>工票总数：{{workers_numbers}}</div>
      <div id="satrt_t_checkbox">
        <input
          name="Fruit"
          type="checkbox"
          checked="true"
          v-model="checked_worker"
          @click="set_checkbox_worker(checked_worker)"
        />
      </div>
    </div>

    <div id="satrt_t_g_scroll">
      <div id="satrt_t_list" v-for="(item,index) in worker_list" v-bind:key="item.id">
        <div id="satrt_t_item_l">
          <div id="satrt_t_item">工票号：{{item.worker_number}}</div>
          <div id="satrt_t_item">件号：{{item.piece_number}}</div>
          <div id="satrt_t_item">车号：{{item.car_number}}</div>
          <div id="satrt_t_item">列号：{{item.column_number}}</div>
          <div id="satrt_t_item">数量：{{item.quantity}}</div>
          <div id="satrt_t_item">齐套性：{{item.orderly}}</div>
          <div id="satrt_t_item">工艺时长：{{item.craft_date}}</div>
        </div>

        <div id="satrt_t_item_r">
          <div>
            <input
              name="Fruit"
              type="checkbox"
              value="index"
              v-model="item.checked"
              @click="set_checkbox_item_work(item.checked,index)"
            />
          </div>
          <div>
            <mt-button size="small" type="primary" @click="geto_binder()">绑定关键件</mt-button>
          </div>
          <div>
            <mt-button size="small" type="primary" @click="pop_win()">工艺已变更</mt-button>
          </div>
        </div>
      </div>
    </div>
    <div id="satrt_t_r">
      <div>人员总数：{{personnel_number}}</div>
      <div id="satrt_t_checkbox">
        <input
          name="全选"
          type="checkbox"
          checked="true"
          v-model="checked_person"
          @click="set_checkbox_person(checked_person)"
        />
      </div>
    </div>
    <div id="satrt_t_r_scroll">
      <div id="satrt_r_list" v-for="(item,index) in list1" v-bind:key="item.id">
        <div id="satrt_t_item">姓名：{{item.name}}</div>
        <div id="satrt_t_item">，</div>
        <div id="satrt_t_item">卡号：{{item.card_number}}</div>
        <div id="satrt_t_checkbox">
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
    <div id="satrt_input">
      <input style="width:100% ;height:100%;" type="number" v-model="number" />
    </div>

    <div id="satrt_but">
      <div id="satrt_but_l">
        <mt-button type="primary" @click="add()">添加</mt-button>
      </div>
      <div id="satrt_but_l">
        <mt-button type="primary" @click="get_yes()">确认开工</mt-button>
      </div>
    </div>

    <mt-popup v-model="popupVisible1" popup-transition="popup-fade" class="mint-popup-1">
      <!-- :style="{top: buttonBotton + 10 + 'px'}" -->
      <!-- <h1>库位 :{{kuwei}}</h1>
      <p>批次号:{{pici}}</p>
      <p>序列号:{{xlh}}</p>
      <p>条件代码:{{tjdm}}</p>
      <p>计量单位:{{jldw}}</p>
      <p>状态:{{zt}}</p>-->
    </mt-popup>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "app",
  data() {
    return {
      checked_worker: true,
      checked_person: true,
      workers_numbers: "",
      personnel_number: "",
      number: "",
      popupVisible1: false,
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
      worker_list: [
        {
          checked: false,
          worker_number: "12345",
          piece_number: "防护板组成",
          car_number: "12",
          column_number: "p00",
          quantity: "2190",
          orderly: "67890",
          craft_date: "34567"
        },
        {
          checked: false,
          worker_number: "12345",
          piece_number: "防护板组成",
          car_number: "12",
          column_number: "p00",
          quantity: "2190",
          orderly: "67890",
          craft_date: "34567"
        },
        {
          checked: false,
          worker_number: "12345",
          piece_number: "防护板组成",
          car_number: "12",
          column_number: "p00",
          quantity: "2190",
          orderly: "67890",
          craft_date: "34567"
        },
        {
          checked: true,
          worker_number: "12345",
          piece_number: "防护板组成",
          car_number: "12",
          column_number: "p00",
          quantity: "2190",
          orderly: "67890",
          craft_date: "34567"
        },
        {
          checked: false,
          worker_number: "12345",
          piece_number: "防护板组成",
          car_number: "12",
          column_number: "p00",
          quantity: "2190",
          orderly: "67890",
          craft_date: "34567"
        },
        {
          checked: true,
          worker_number: "12345",
          piece_number: "防护板组成",
          car_number: "12",
          column_number: "p00",
          quantity: "2190",
          orderly: "67890",
          craft_date: "34567"
        }
      ]
    };
  },
  methods: {
    geto_binder() {
      this.$router.push({ path: "wuliao_bd" });
    },
    pop_win() {
      this.popupVisible1=true
    },
    add() {
      console.log("111111111111111");
    },

    set_checkbox_item_work(checked, index) {
      console.log(checked);
      console.log(index);
      if (checked) {
        this.worker_list[index].checked = false;
      } else {
        this.worker_list[index].checked = true;
      }
    },
    set_checkbox_item_person(checked, index) {
      console.log(checked);
      console.log(index);
      if (checked) {
        this.list1[index].checked = false;
      } else {
        this.list1[index].checked = true;
      }
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
    },
    set_checkbox_person(val) {
      var length = this.list1.length;
      console.log(length);
      if (val) {
        for (var i = 0; i < length; i++) {
          this.list1[i].checked = false;
        }
      } else {
        for (var i = 0; i < length; i++) {
          this.list1[i].checked = true;
        }
      }
    },
    get_yes() {
      var length = this.list1.length;
      console.log(length);
      for (var i = 0; i < length; i++) {
        console.log(this.list1[i].checked + "");
        console.log(this.list1[i].shuliang + "");
      }
      let instance = Toast("完成");
      setTimeout(() => {
        instance.close();
      }, 2000);
    }
  }
};
</script>

<style>
#start {
  padding: 10px;
}
#satrt_t_g {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
}
#satrt_t_checkbox {
  display: flex;
  align-items: center;
  height: 20px;
}
#satrt_t_g_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 250px;
}
#satrt_t_list {
  margin-top: 10px;
  display: flex;
  padding: 10px;
  justify-content: space-around;
  width: 100%;
  height: 120px;
}
#satrt_t_item_l {
  width: 70%;
  height: 100%;
}
#satrt_t_item_r {
  width: 30%;
  height: 100%;
}
#satrt_t_item {
  height: 20px;
}
#satrt_t_r {
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
}
#satrt_t_r_scroll {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 100px;
}
#satrt_r_list {
  padding: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
}
#satrt_r_item {
  width: 100%;
  height: 20px;
}
#satrt_input {
  margin-top: 10px;
  width: 100%;
  height: 40px;
}
#satrt_but {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
#satrt_but_l {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
}
.mint-popup-1 {
  width: 200px;
  border-radius: 8px;
  padding: 10px;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
}
.mint-popup-1 h1 {
  font-size: 20px;
  color: #26a2ff;
}
.mint-popup-1 p {
  margin-bottom: 10px;
}
</style>
