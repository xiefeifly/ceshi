<template>
  <div id="receipt">
    <h3 style="width:100%; text-align: center;">收料确认</h3>
    <div id="receipt_text">
      <div id="receipt_item1">领料单号：{{materialrequidtion_number}}</div>
      <div id="receipt_item2">物料编码：{{material_number}}</div>
    </div>
    <div id="receipt_text">
      <div id="receipt_item1">车间订单号：{{workshoporder_number}}</div>
      <div id="receipt_item2">合同：{{contract}}</div>
    </div>
    <div id="receipt_text">
      <div id="receipt_item1">列号：{{column_number}}</div>
      <div id="receipt_item2">车号：{{car_number}}</div>
    </div>
    <div id="titler" style=" border:1px solid #000; border-radius: 8px;">
      <div id="titlerch">
        <input
          name="Fruit"
          type="checkbox"
          checked="true"
          v-model="checked"
          @click="set_checkbox(checked)"
        />
      </div>
      <div id="titler1">零件号</div>
      <div id="titlermiaoshu">描述</div>
      <div id="titler1">数量</div>
      <div id="titler1"></div>
    </div>

    <div class="r_scroll_bg">
      <div id="titler" v-for="(item,index) in list  " v-bind:key="item.id">
        <div id="titlerch">
          <input
            name="Fruit"
            type="checkbox"
            value="index"
            v-model="item.checked"
            @click="set_checkbox_item(item.checked,index)"
          />
        </div>
        <div id="titler1">{{item.shuzi}}</div>
        <div id="titlermiaoshu">{{item.miaoshu}}</div>
        <div id="titler1">
          <input style="width:100% ;height:100%;" type="number" v-model="item.shuliang" />
        </div>
        <div id="titler1">
          <mt-button size="small" @click="getmodel(index)">更多</mt-button>
        </div>
      </div>
    </div>

    <div
      style="margin-top:10px; display: flex;content: space-around;align-items: center; width:100%;"
    >
      <div style="display: flex; align-items:center; width: 30%;">仓库人员:</div>
      <div style="display: flex; align-items:center; width: 70%;">
        <input style="width:100% ;height: 30px; " v-model="warehouse" />
      </div>
    </div>

    <div
      style="margin-top:10px; display: flex;content: space-around;align-items: center; width:100%;"
    >
      <div style="display: flex; align-items:center; width: 30%;">生产人员:</div>
      <div style="display: flex; align-items:center; width: 70%;">
        <input style="width:100% ;height: 30px; " v-model="production" />
      </div>
    </div>
    <div
      style="margin-top:10px; display: flex;content: space-around;align-items: center; width:100%;"
    >
      <div style="display: flex; align-items:center; width: 50%;">
        <input style="width:100% ;height: 30px; " v-model="add_number" />
      </div>
      <div style="display: flex; align-items:center; width: 20%;">
        <mt-button
          type="primary"
          style="margin-left: 15px ; font-size: 10px;"
          @click="receipt_add()"
        >添加</mt-button>
      </div>
      <div style="display: flex; align-items:center; width: 30%;">
        <mt-button
          type="primary"
          style="margin-left: 15px;  font-size: 13px;"
          @click="get_yes()"
        >收料确认</mt-button>
      </div>
    </div>

    <mt-popup v-model="popupVisible1" popup-transition="popup-fade" class="popup1">
      <h1>库位 :{{kuwei}}</h1>
      <p>批次号:{{pici}}</p>
      <p>序列号:{{xlh}}</p>
      <p>条件代码:{{tjdm}}</p>
      <p>计量单位:{{jldw}}</p>
      <p>状态:{{zt}}</p>
    </mt-popup>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "app",
  data() {
    return {
      add_number: "aaaa",
      receipt_list: "",
      production: "",
      warehouse: "",
      materialrequidtion_number: "",
      material_number: "",
      workshoporder_number: "",
      contract: "",
      column_number: "",
      car_number: "",
      kuwei: "",
      pici: "",
      xlh: "",
      tjdm: "",
      jldw: "",
      zt: "",
      popupVisible1: false,
      checked: true,
      list: [],
      str: {
        materialrequidtion_number: "1234567",
        material_number: "SV499308CM",
        workshoporder_number: "12341234",
        contract: "1234567",
        column_number: "12",
        car_number: "123",

        list1: [
          {
            checked: false,
            shuzi: "12345",
            miaoshu: "防护板组成",
            shuliang: "12",
            kuwei: "p00",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: false,
            shuzi: "123453",
            miaoshu: "防护板组成",
            shuliang: "12",
            kuwei: "p01",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: false,
            shuzi: "135455",
            miaoshu: "防护板",
            shuliang: "12",
            kuwei: "p02",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: true,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p03",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: false,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p014",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: true,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p015",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: false,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p016",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: false,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p017",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: false,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p018",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: true,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p019",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: false,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p010",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: false,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p0111",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: true,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p0112",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: true,
            shuzi: "164545",
            miaoshu: "面具",
            shuliang: "12",
            kuwei: "p0113",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: true,
            shuzi: "128678",
            miaoshu: "板组成",
            shuliang: "12",
            kuwei: "p0114",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          },
          {
            checked: true,
            shuzi: "125656",
            miaoshu: "防护板组成",
            shuliang: "12",
            kuwei: "p0115",
            pici: "2190",
            xlh: "67890",
            tjdm: "34567",
            jldw: "kg",
            zt: "有"
          }
        ]
      }
    };
  },
  methods: {
    receipt_add() {
      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";

      this.$http.get(api).then(
        response => {
          console.log(response);
          // ponse.body.result;
          this.receipt_list = response.body.result;
          console.log(this.receipt_list[0].title);

          // this.$router.push({path:'send'})
          //  var obj=this.list1.parseJSON();
          //  console.log(obj);
          this.getdata();
        },
        function(err) {
          this.getdata();
          console.log(err);
          Toast({
            message: err,
            position: "bottom",
            duration: 5000
          });
        }
      );
    },
    getdata() {
      var obj1 = JSON.stringify(this.str);
      console.log(obj1);
      var obj = JSON.parse(obj1);
      console.log(obj);

      this.materialrequidtion_number = obj.materialrequidtion_number;
      this.material_number = obj.material_number;
      this.workshoporder_number = obj.workshoporder_number;
      this.contract = obj.contract;
      this.column_number = obj.column_number;
      this.car_number = obj.car_number;

      this.list = obj.list1;
      var length = this.list.length;
      console.log(length);
      for (var i = 0; i < length; i++) {
        // console.log(this.list[i].checked + "adsasdasdad");
        console.log(this.list[i].shuliang + "asdasdasddas");
      }
    },
    goto_vue() {
      this.$router.push({ path: "helloworld" });
    },
    getmodel(item) {
      console.log(this.list[item].kuwei);
      this.kuwei = this.list[item].kuwei;
      this.pici = this.list[item].pici;
      this.xlh = this.list[item].xlh;
      this.tjdm = this.list[item].tjdm;
      this.jldw = this.list[item].jldw;
      this.zt = this.list[item].zt;
      this.popupVisible1 = true;
    },

    set_checkbox_item(checked, index) {
      console.log(checked);
      console.log(index);
      if (checked) {
        this.list[index].checked = false;
      } else {
        this.list[index].checked = true;
      }
    },
    set_checkbox(val) {
      var length = this.list.length;
      console.log(length);
      if (val) {
        for (var i = 0; i < length; i++) {
          this.list[i].checked = false;
        }
      } else {
        for (var i = 0; i < length; i++) {
          this.list[i].checked = true;
        }
      }
    },
    get_yes() {
      var length = this.list.length;
      console.log(length);
      for (var i = 0; i < length; i++) {
        console.log(this.list[i].checked + "");
        console.log(this.list[i].shuliang + "");
      }
      // Toast({
      //   message: "提示",
      //   position: "bottom",
      //   duration: 5000
      // });
      let instance = Toast("完成");
      setTimeout(() => {
        instance.close();
      }, 2000);
    },
    beCalledNfc(str){
      this.add_number = str;
    },
    beCalledScan(str) {
      this.add_number = str;
    }
  },
  mounted() {
    window.beCalledScan = this.beCalledScan;
    window.beCalledNfc = this.beCalledNfc;
    console.log("模板编译完成4");
    let instance = Toast("模板编译完成4");
    setTimeout(() => {
      instance.close();
    }, 1000);
    this.getcallScan();
    // $App.callScan();
    /*请求数据，操作dom , 放在这个里面  mounted*/
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#receipt {
  margin-left: 20px;
  margin-right: 20px;
}
#titler {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  width: 100%;
  height: 40px;
  margin-top: 10px;
}
#z_body {
  width: 100%;
  height: 400px;
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
#receipt_text {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25px;
  font-size: 12px;
}
#receipt_item1 {
  display: flex;
  align-items: center;
  width: 50%;
  height: 40px;
}
#receipt_item2 {
  display: flex;
  align-items: center;
  width: 50%;
  height: 40px;
}
#receipt_item3 {
  display: flex;
  align-items: center;
  width: 20%;
  height: 40px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.r_scroll_bg {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 260px;
}
.ceshi {
  display: flex;
  /* justify-content: center;
  text-align: center;
  align-items: center; */
  flex-direction: row-reverse;
  width: 25rem;
  height: 250px;
  background: #00f;
}
.ceshi1 {
  border: 5px solid #e6a43f;
  margin-right: 20px;

  display: flex;
  /* justify-content: center; */

  /* align-items: center; */
  width: 150px;
  height: 150px;
  background: #f0f;
}

.popup1 {
  width: 40%;
  border-radius: 8px;
  padding: 10px;
}
.popup1 h1 {
  font-size: 20px;
  color: #26a2ff;
}
.popup1 p {
  margin-bottom: 10px;
}
.ceshi2 {
  width: 100px;
  height: 100px;
  background: #0ff;
}
</style>
