import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import locale from 'element-plus/es/locale/lang/zh-cn'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import store from '@/store'

export default (app) => {
  app.use(ElementPlus, {
    locale: store.getters.language === 'en' ? en : zhCn
  })
}
