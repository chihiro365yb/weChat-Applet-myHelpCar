// custom-tab-bar/index.js
import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../store/index'

Component({
  behaviors:[storeBindingsBehavior],
  options:{
    styleIsolation:"shared"
  },
  
  /**
   * 数据监听
   */
  observers:{
    'sum':function (val) {
      if (val >= 0){
        this.setData({
          'list[2].info':val
        })
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },
  storeBindings:{
    store,
    fields:{
      sum: 'sum',
      active: 'activeTabBarIndex'
    },
    actions:{
      updateActive: 'updateActiveTabBarIndex'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    "list": [
      {
        "pagePath": "/pages/home/index",
        "text": "首页1",
        "iconPath": "/images/tabs/home.png",
        "selectedIconPath": "/images/tabs/home-active.png"
      },
      {
        "pagePath": "/pages/myHome/index",
        "text": "首页",
        "iconPath": "/images/tabs/home.png",
        "selectedIconPath": "/images/tabs/home-active.png"
      },
      {
        "pagePath": "/pages/message/index",
        "text": "消息",
        "iconPath": "/images/tabs/message.png",
        "selectedIconPath": "/images/tabs/message-active.png",
        info: 0
      },
      {
        "pagePath": "/pages/contact/index",
        "text": "联系我们",
        "iconPath": "/images/tabs/contact.png",
        "selectedIconPath": "/images/tabs/contact-active.png"
      }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      console.log(event.detail);
      // event.detail 的值为当前选中项的索引
      // this.setData({ active: event.detail });
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      })
      this.updateActive(event.detail)
    },
  }
})
