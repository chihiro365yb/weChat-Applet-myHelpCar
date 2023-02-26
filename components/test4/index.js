// components/test4/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    motto:{
      type: String,
      value: null
    }
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
    spliceStr(){
      this.setData({
        motto: this.properties.motto + 'hhhh'
      })
      this.triggerEvent('sync',{
        value: this.properties.motto // 子组件向父组件传值
      })
    }
  }
})
