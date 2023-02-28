import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../../store/index'

// components/test-store/index.js
Component({
  behaviors:[storeBindingsBehavior],
  storeBindings:{
    store,
    fields:{     // 计算属性,数字字段
      numA: 'numA',
      numB: 'numB',
      sum: 'sum'
    },
    actions:{
      updateNumB: 'updateNumB'   //方法
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    addNumB(e){
      this.updateNumB(e.target.dataset.step)
    },
    subNumB(e){
      this.updateNumB(e.target.dataset.step)
    }
  }
})
