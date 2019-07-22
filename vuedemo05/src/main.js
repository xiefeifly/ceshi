import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.use(MintUI)
Vue.config.productionTip = false
import Send from './components/Send.vue'
import HelloWorld from './components/HelloWorld.vue'
import Zujimian from './components/Zujimian.vue'
import Renwu from './components/Renwu.vue'
import Renwu_chaxun from './components/Renwu_chaxun.vue'
import Ceshi from './components/Ceshi.vue'
import Wuliaojiaojiechaxun from './components/Wuliaojiaojiechaxun.vue'
import Wuliao_bd from './components/Wuliao_bd.vue'
import Wuliao_un_bd from './components/Wuliao_un_bd.vue'
import Start from './components/Start.vue'
import Baogong from './components/Baogong.vue'
import Suspend from './components/Suspend.vue'
import Fugong from './components/Fugong.vue'
import Dingdanjiduchaxun from './components/Dingdanjiduchaxun.vue'
import Chejiandingdanruku from './components/Chejiandingdanruku.vue'
import Lingliaodan from './components/Lingliaodan.vue'
import Tuiliaoruku from './components/Tuiliaoruku.vue'
import Lingliaomingxi from './components/Lingliaomingxi.vue'
import Shoudonglingliao from './components/Shoudonglingliao.vue'
import TT_shangjia from './components/TT_shangjia.vue'
import TT from './components/TT.vue'
import MTR from './components/MTR.vue'
import MTR_shangjia from './components/MTR_shangjia.vue'
import Cell_c from './components/Cell_c.vue'
import Dayintiao from './components/Dayintiao.vue'
import Shebei_yichang from './components/Shebei_yichang.vue'
const routes = [
  { path: '/send', component: Send},
  { path: '/helloworld', component: HelloWorld },
  { path: '/zujimian', component: Zujimian },
  { path: '/wuliaojiaojiechaxun', component: Wuliaojiaojiechaxun },
  { path: '/renwu', component: Renwu },
  { path: '/renwu_chaxun', component: Renwu_chaxun },
  { path: '/wuliao_bd', component: Wuliao_bd },
  { path: '/wuliao_un_bd', component: Wuliao_un_bd },
  { path: '/start', component: Start },
  { path: '/ceshi', component: Ceshi },
  { path: '/baogong', component: Baogong },
  { path: '/suspend', component: Suspend },
  { path: '/fugong', component: Fugong },
  { path: '/dingdanjiduchaxun', component: Dingdanjiduchaxun },
  { path: '/tuiliaoruku', component: Tuiliaoruku },
  { path: '/chejiandingdanruku', component: Chejiandingdanruku },
  { path: '/lingliaomingxi', component: Lingliaomingxi },
  { path: '/lingliaodan', component: Lingliaodan },
  { path: '/tuiliaoruku', component: Tuiliaoruku },
  { path: '/tt_shangjia', component: TT_shangjia },
  { path: '/shoudonglingliao', component: Shoudonglingliao },
  { path: '/tt', component: TT },
  { path: '/mtr', component: MTR },
  { path: '/mtr_shangjia', component: MTR_shangjia },
  { path: '/dayintiao', component: Dayintiao },
  { path: '/cell_c', component: Cell_c },
  { path: '/shebei_yichang', component: Shebei_yichang },
  { path: '/', redirect: '/zujimian' }   /*默认跳转路由*/
]


const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
