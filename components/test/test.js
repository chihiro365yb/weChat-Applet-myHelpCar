// components/test.js
Component({
  options:{
    styleIsolation: 'shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    max:{
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0,
    n1: 0,
    n2: 0,
    sum: 0,
  },
  observers:{
    // 监听sum
    'n1, n2': function (new_n1, new_n2) {
      this.setData({
        sum: new_n1 + new_n2
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount(){
      if(this.data.count >= this.properties.max) return
      this.setData({
        count: this.data.count + 1,
        max: this.properties.max - 1
      })
      this._showCount()
    },
    _showCount(){
      wx.showToast({
        title: `${this.data.count}`,
        icon:'none'
      })
    },
    addN1(){
      this.setData({
        n1: this.data.n1 + 1
      })
    },
    addN2(){
      this.setData({
        n2: this.data.n2 + 1
      })
    }
  }
})
