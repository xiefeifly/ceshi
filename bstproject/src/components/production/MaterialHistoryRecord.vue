<template>
  <div id="Mater">
    <h3 style="width:100%; text-align: center;">物料交接历史记录查询</h3>
    <div id="mater_test">
      <div id="mater_item1">领料单号：{{materialrequidtion_number}}</div>
      <div id="mater_item2">接收日期：{{time}}</div>
    </div>
    <div id="mater_test">
      <div id="mater_item1">物料编码：{{material_number}}</div>
      <div id="mater_item2">车间订单号：{{workshoporder_number}}</div>
    </div>
    <div id="mater1">
      <div id="mater_item">合同：{{contract}}</div>
      <div id="mater_item3">列号：{{column_number}}</div>
      <div id="mater_item3">车号：{{car_number}}</div>
    </div>

    <div id="titler" style=" border:1px solid #000; border-radius: 8px;">
      <div id="titler1">零件号</div>
      <div id="titlermiaoshu">描述</div>
      <div id="titler1">应发数量</div>
      <div id="titler1">接收数量</div>
      <div id="titler1"></div>
    </div>

    <div class="scroll_bg">
      <div id="titler" v-for="(item,index) in list  " v-bind:key="item.id">
        <div id="titler1">{{item.shuzi}}</div>
        <div id="titlermiaoshu">{{item.miaoshu}}</div>
        <div id="titler1">{{item.shuliang}}</div>
        <div id="titler1">{{item.shuliang}}</div>
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
   
    <div style="margin-top: 10px;">
      <input style="width:70% ;height: 30px;"  v-model="add_number" />

      <mt-button
        type="primary"
        style="margin-left: 20px"
        @click="receipt_add()"
      >添加</mt-button>
    </div>

    <mt-popup v-model="popupVisible1" popup-transition="popup-fade" class="popup-2">
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
      // materialrequidtion_number: "1234567",
      //   material_number: "SV499308CM",
      //   workshoporder_number: "12341234567",
      //   contract: "1234567",
      //   column_number: "12",
      //   car_number: "123",

      add_number: "aaaa",
      receipt_list: "",
      production: "",
      warehouse: "",
      materialrequidtion_number: "",
      material_number: "",
      workshoporder_number: "",
      time: "",
      car_number: "",
      contract: "",
      column_number: "",

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
        materialrequidtion_number: "234567",
        material_number: "SV499308CM",
        column_number: "12",
        time: "2019 / 7 / 8",
        workshoporder_number: "1234123",
        contract: "1234567",
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
            shuliang: "7",
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
            shuliang: "9",
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
            shuliang: "345",
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
            shuliang: "54",
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
            shuliang: "34",
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
    getmodel(item) {
      this.kuwei = this.list[item].kuwei;
      this.pici = this.list[item].pici;
      this.xlh = this.list[item].xlh;
      this.tjdm = this.list[item].tjdm;
      this.jldw = this.list[item].jldw;
      this.zt = this.list[item].zt;
      this.popupVisible1 = true;
    },
    receipt_add() {
      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";

      this.$http.get(api).then(response => {
        console.log(response);
        // ponse.body.result;
        this.receipt_list = response.body.result;
        console.log(this.receipt_list[0].title);

        var obj1 = JSON.stringify(this.str);
        console.log(obj1);
        var obj = JSON.parse(obj1);

        this.materialrequidtion_number = obj.materialrequidtion_number;
        this.material_number = obj.material_number;
        this.workshoporder_number = obj.workshoporder_number;
        this.column_number = obj.column_number;
        this.time = obj.time;
        this.contract = obj.contract;
        this.car_number = obj.car_number;
        this.list = obj.list1;

        var length = this.list.length;
        console.log(length);
        for (var i = 0; i < length; i++) {
          console.log(this.list[i].checked + "");
          console.log(this.list[i].shuliang + "");
        }
        let instance = Toast("完成");
        setTimeout(() => {
          instance.close();
        }, 2000);
      });
    },
    get_yes() {
      var obj1 = JSON.stringify(this.str);
      console.log(obj1);
      var obj = JSON.parse(obj1);

      this.materialrequidtion_number = obj.materialrequidtion_number;
      this.material_number = obj.material_number;
      this.workshoporder_number = obj.workshoporder_number;
      this.column_number = obj.column_number;
      this.time = obj.time;
      this.contract = obj.contract;
      this.car_number = obj.car_number;
      this.list = obj.list1;

      var length = this.list.length;
      console.log(length);
      for (var i = 0; i < length; i++) {
        console.log(this.list[i].checked + "");
        console.log(this.list[i].shuliang + "");
      }
      let instance = Toast("完成");
      setTimeout(() => {
        instance.close();
      }, 2000);
    },
    beCalledScan(str) {
      this.add_number = str;
    }
  },
  mounted() {
    window.beCalledScan = this.beCalledScan;
    this.getcallScan();
    // $App.callScan();
  }
};
</script>

<style>
#Mater{
  margin-left: 20px;
  margin-right: 20px;
}
#titler {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-top: 10px;
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
#mater_test {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25px;
  font-size: 13px;
}
#mater1 {
  display: flex;
  align-items: center;
  width: 100%;
  height: 25px;
  font-size: 13px;
}
#mater_item1 {
  display: flex;
  align-items: center;
  width: 50%;
  height: 40px;
}
#mater_item2 {
  display: flex;
  align-items: center;
  width: 50%;
  height: 40px;
}
#mater_item3 {
  display: flex;
  align-items: center;
  margin-left: 30px;
  height: 40px;
}

.scroll_bg {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 270px;
}
.popup-2 {
  width: 200px;
  border-radius: 8px;
  padding: 10px;
}
.popup-2 h1 {
  font-size: 20px;
  color: #26a2ff;
}
.popup-2 p {
  margin-bottom: 10px;
}
</style>
