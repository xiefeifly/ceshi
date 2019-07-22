import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import moment from 'moment'

import global_variable from '@/api/global_variable.js'
import utils from '@/api/utils.js'
import httpurl from '@/api/httpurl.js'

Vue.prototype.GLOBAL=global_variable
Vue.prototype.utils=utils
Vue.prototype.httpurl=httpurl

// import { DatetimePicker } from 'mint-ui';
// Vue.component(DatetimePicker.name, DatetimePicker);


Vue.use(global_variable)
Vue.use(utils)
Vue.use(httpurl)

Vue.use(Mint)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(moment)



import 'mint-ui/lib/style.css'
import MainInterface from './components/home/MainInterface.vue'
import Ming from './components/home/Ming.vue'

import Carft from './components/production/Carft.vue'
import Receipt from './components/production/Receipt.vue'
import MaterialHistoryRecord from './components/production/MaterialHistoryRecord.vue'
import Tasklist from './components/production/Tasklist.vue'
import TaskQuery from './components/production/TaskQuery.vue'
import Start from './components/production/Start.vue'
import RequitWork from './components/production/RequitWork.vue'
import Suspend from './components/production/Suspend.vue'
import Returnwork from './components/production/Returnwork.vue'
import PieceBinding from './components/production/PieceBinding.vue'
import PieceunBinding from './components/production/PieceunBinding.vue'
import Orderquery from './components/production/Orderquery.vue'
import Personalinquiry from './components/production/Personalinquiry.vue'


import POstorage from './components/storemanagement/POstorage.vue'
import GodownEntry from './components/storemanagement/GodownEntry.vue'
import MaterialsReturnedNote from './components/storemanagement/MaterialsReturnedNote.vue'
import PLMaterialRequistion from './components/storemanagement/PLMaterialRequistion.vue'
import PLMaterialRequistionDetail from './components/storemanagement/PLMaterialRequistionDetail.vue'
import MRMaterialRequistion from './components/storemanagement/MRMaterialRequistion.vue'
import TTPutaway from './components/storemanagement/TTPutaway.vue'
import TTSoldOut from './components/storemanagement/TTSoldOut.vue'
import MTRPutaway from './components/storemanagement/MTRPutaway.vue'
import MTRSoldOut from './components/storemanagement/MTRSoldOut.vue'
import Print from './components/storemanagement/Print.vue'


import FacilityException from './components/exceptionhandling/FacilityException.vue'
Vue.config.productionTip = false

const routes = [
  { path: '/mainInterface', component: MainInterface },
  { path: '/ming', component: Ming },


  { path: '/carft', component: Carft },
  { path: '/receipt', component: Receipt },
  { path: '/materialHistoryRecord', component: MaterialHistoryRecord },
  { path: '/tasklist', name: 'tasklist',component: Tasklist },
  { path: '/taskQuery', component: TaskQuery },
  { path: '/Start', component: Start },
  { path: '/requitWork', component: RequitWork },
  { path: '/suspend', component: Suspend },
  { path: '/returnwork', component: Returnwork },
  { path: '/pieceBinding', name: 'PieceBinding',component: PieceBinding },
  { path: '/pieceunBinding', component: PieceunBinding },
  { path: '/orderquery', component: Orderquery },
  { path: '/personalinquiry', component: Personalinquiry },


  { path: '/postorage', component: POstorage },
  { path: '/godownEntry', component: GodownEntry },
  { path: '/materialsReturnedNote', component: MaterialsReturnedNote },
  { path: '/pLMaterialRequistion', component: PLMaterialRequistion },
  { path: '/pLMaterialRequistionDetail', component: PLMaterialRequistionDetail },
  { path: '/mRMaterialRequistion', component: MRMaterialRequistion },
  { path: '/ttPutaway', component: TTPutaway },
  { path: '/ttSoldOut', component: TTSoldOut },
  { path: '/mTRPutaway', component: MTRPutaway },
  { path: '/mTRSoldOut', component: MTRSoldOut },
  { path: '/print', component: Print },


  { path: '/facilityException', component: FacilityException },
  { path: '*', redirect: '/mainInterface' }   /*默认跳转路由*/
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')