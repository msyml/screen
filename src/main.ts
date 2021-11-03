import { createApp } from 'vue'
import App from './App.vue'
import './static/iconfont.css'
import 'styles/index.scss'
import dayjs from 'dayjs'

// 路由
import router from './routers'
// 状态管理
import { store } from './store'

const app = createApp(App)
app.use(router)
app.use(store)

app.config.globalProperties.$dayjs = dayjs;
app.config.globalProperties.$router = router;

app.mount('#app')
