import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../store/store'

Component({
  options:{
    styleIsolation:'shared'
  },
  behaviors:[storeBindingsBehavior],

  storeBindings:{
    store,
    fields:{
      active:'activeTabBarIndex',
    },
    actions:{
      updateActive:'updateActiveTabBarIndex'
    }
  },

  properties: {

  },

  data: {
    list:[ "/pages/question/question","/pages/course/course",
    "/pages/guide/guide",
    "/pages/my/my"]
  },

  methods: {
    onChange(e){
      this.updateActive(e.detail)
      wx.switchTab({
        url: this.data.list[e.detail],
      })
    }
  }
})
