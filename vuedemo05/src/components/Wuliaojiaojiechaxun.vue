<template>
  <div id="app">
    <h3 style="width:100%; text-align: center;">物料交接历史记录查询</h3>
    <div id="t_test">
      <div id="t_test_item1">领料单号：{{dh}}</div>
      <div id="t_test_item2">接收日期：{{time}}</div>
    </div>
    <div id="t_test">
      <div id="t_test_item1">物料编码：{{bm}}</div>
      <div id="t_test_item2">车间订单号：{{cdh}}</div>
    </div>
    <div id="t_test1">
      <div id="t_test_item">合同：{{ht}}</div>
      <div id="t_test_item3">列号：{{lh}}</div>
      <div id="t_test_item3">车号：{{ch}}</div>
    </div>

    <div id="titler" style=" border:1px solid #000; border-radius: 8px;">
      <!-- <div id="titlerch">
        <input
          name="Fruit"
          type="checkbox"
          checked="true"
          v-model="checked"
          @click="set_checkbox(checked)"
        />
      </div> -->
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
        <div id="titler1">
         {{item.shuliang}}
        </div>
        <div id="titler1">
          <mt-button size="small" @click="getmodel(index)">更多</mt-button>
        </div>
      </div>
    </div>
    <div style="margin-top: 10px;" @click="goto_vue()">
      仓库人员
      <input style="width:300px ;margin-left: 20px;height: 30px;" />
    </div>
    <div style="margin-top: 10px;">
      生产人员
      <input style="width:300px ;margin-left: 20px;height: 30px;" />
    </div>
    <div style="margin-top: 10px;">
      <input style="width:70% ;height: 30px;" />

      <mt-button type="primary" style="margin-left: 20px" @click="get_yes()" >添加</mt-button>
    </div>

    <mt-popup v-model="popupVisible1" popup-transition="popup-fade" class="mint-popup-1">
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
      dh: "",
      bm: "",
      lh: "",
      time: "",
      cdh: "",
      ht: "",
      ch: "",
      kuwei: "",
      pici: "",
      xlh: "",
      tjdm: "",
      jldw: "",
      zt: "",
      popupVisible1: false,
      checked: true,
      list: [],
      str:{dh:"234567",bm:"SV499308CM",lh: "12",
      time: "2019 / 7 / 8",
      cdh: "12341234567",
      ht: "1234567",
      ch: "123",
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
      ]},
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
   
    get_yes() {
      var obj1=JSON.stringify(this.str);
       console.log(obj1);
       var obj = JSON.parse(obj1);

      this.dh=obj.dh
      this.bm=obj.bm
      this.lh=obj.lh
      this.time=obj.time
      this.cdh=obj.children
      this.ht=obj.ht
      this.ch=obj.ch
      this.list=obj.list1



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
    }
  }
};
</script>

<style>
#titler {
  display: flex;
  justify-content: space-around;
  align-items: center;
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

.scroll_bg {
  margin-top: 10px;
  overflow-y: scroll;
  border: 1px solid #000;
  border-radius: 8px;
  height: 350px;
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
