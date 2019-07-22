<template>
  <div id="carft">
    <h3 style="width:100%; text-align: center;">工艺文件</h3>

    <div id="carft_list">
      <div id="carft_list_item">
        <div id="carft_img">
          <img style="width:50px; height:50px;  align-item: center;" :src="imgUrl" />
        </div>
        <p style="width:100%; text-align: center;">图纸</p>
      </div>
      <div id="carft_list_item">
        <div id="carft_img">
          <img style="width:50px; height:50px;  align-item: center;" :src="imgUrl" />
        </div>
        <p style="width:100%; text-align: center;">作业指导书</p>
      </div>
      <div id="carft_list_item">
        <div id="carft_img">
          <img style="width:50px; height:50px;  align-item: center;" :src="imgUrl" />
        </div>
        <p style="width:100%; text-align: center;">工艺卡片</p>
      </div>
    </div>

    <div class="carft_button">
      <div class="carft_inputs">
        <input style="width:100% ;height: 30px; " v-model="add_number" />
      </div>
      <div class="button">
        <mt-button size="small" type="primary" @click="chaxun()">查询</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";


import imgUrl from '@/assets/logo.png'
export default {
  name: "app",
  data() {
    return {
      imgUrl,
      add_number: "aaaa",
      receipt_list: "",
      production: "",
      warehouse: "",

      list: [],
      str: {
        materialrequidtion_number: "1234567",
        material_number: "SV499308CM",
        workshoporder_number: "12341234567",
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
        },
        function(err) {
          console.log(err);
        }
      );
    },

    beCalledScan(str) {
      this.add_number = str;
    }
  },
  mounted() {
    window.beCalledScan = this.beCalledScan;
    this.getcallScan();
  }
};
</script>

<style>
#carft{
    margin-left: 20px;
    margin-right: 20px;
}
#carft_list {
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
}
#carft_item {
  width: 0;
  height: 80px;
  border: 1px solid #000000;
  display: flex;
  flex-flow: row wrap;
  align-content: space-around;
}
#carft_img {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.carft_button {
  position: fixed;
  bottom: 0;
  display: flex;
  margin-bottom: 20px;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.carft_inputs {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  width: 70%;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 40px;
}
</style>
