<template>
  <div id="facility">
    <mt-header title="设备异常">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="toback()"></mt-button>
      </router-link>
    </mt-header>
    <div id="facility_body">
      <div id="facility_line">
        <div id="facility_text">类型属性</div>
        <div id="facility_ipt">
          <input type="text" id="facility_text_input" name="search" placeholder="请输入搜索内容2" />
        </div>
        <div id="facility_image">
          <img :src="url" id="facility_img_style" />
        </div>
      </div>
    </div>
    <hr style="width: 95%;" />
    <div id="facility_body">
      <div id="facility_line">
        <div id="facility_text">异常类型</div>
        <div id="facility_ipt">
          <input type="text" id="facility_text_input" name="search" placeholder="请输入搜索内容2" />
        </div>
        <div id="facility_image">
          <img :src="url" id="facility_img_style" />
        </div>
      </div>
    </div>
     <hr style="width: 95%;" />
    <div id="facility_body">
      <div id="facility_line">
        <div id="facility_text">设备编码</div>
        <div id="facility_ipt">
          <input type="text" id="facility_text_input" name="search" placeholder="请输入搜索内容2" />
        </div>
        <div id="facility_image">
          <img :src="url" id="facility_img_style" />
        </div>
      </div>
    </div>
     <hr style="width: 95%;" />
    <div id="facility_body">
      <div id="facility_line">
        <div id="facility_text">设备位置</div>
        <div id="facility_ipt">
          <input type="text" id="facility_text_input" name="search" placeholder="请输入搜索内容2" />
        </div>
        <div id="facility_image">
        </div>
      </div>
    </div>
     <hr style="width: 95%;" />
    <div id="facility_body">
      <div id="facility_line">
        <div id="facility_text">异常内容</div>
        <div id="facility_ipt">
          <input type="text" id="facility_text_input" name="search" placeholder="请输入搜索内容2" />
        </div>
        <div id="facility_image">
          <img :src="url" id="facility_img_style" />
        </div>
      </div>
    </div>
     <hr style="width: 95%;" />
    <div id="facility_body">
      <div id="facility_line">
        <div id="facility_text">异常描述</div>
        <div id="facility_ipt">
          <input type="text" id="facility_text_input" name="search" placeholder="请输入搜索内容2" />
        </div>
        <div id="facility_image">
        </div>
      </div>
    </div>
     <hr style="width: 95%;" />
    <div id="facility_body">
      <div id="facility_line">
        <div id="facility_text">上传照片</div>
        <div id="facility_ipt">
          <input type="text" id="facility_text_input" name="search" placeholder="请输入搜索内容2" />
        </div>
        <div id="facility_image">
          <img :src="url" id="facility_img_style" />
        </div>
      </div>
    </div>
     <hr style="width: 95%;" />


        <mt-button  size="large" type="primary"  style="margin-top: 15px">发起</mt-button>

        <mt-button  size="large" type="primary" style="margin-top:15px">返回首页</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "app",
  data() {
    return {
      dh: "1234567",
      // url:"../assets/ic_luncher.png",
      url: "../assets/logo.png",
      list: ["zi", "123"],
      list1: [
        {
          facilitycked: false,
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
    };
  },
  methods: {
    gotovue() {
      this.$router.push({ path: "send" });
    },
    toback() {
      console.log("111111111111111" + item);
    }
  }
};
</script>

<style>
#facility {
  width: 100%;
}
#facility_body {
  width: 100%;
}
#facility_line {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 10px;
  width: 100%;
  height: 45px;
}
#facility_text {
  display: flex;
  align-items: center;
  width: 30%;
  height: 100%;
}
#facility_ipt {
  
  width: 60%;
  height: 100%;
}
#facility_ipt1 {
  width: 75%;
  height: 100%;
}
#facility_text_input {
  border-width: 0;
  outline: medium;
  width: 100%;
  height: 100%;
}
#facility_image {
  margin-right: 20px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 10%;
  height: 100%;
}
#facility_img_style{
  width: 30px;
  height: 30px;
}
</style>
