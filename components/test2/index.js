// components/test2/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  options:{
    // 匹配下划线开头的纯数据字段
    pureDataPattern:/^_/
  },

  /**
   * 组件的初始数据
   */
  data: {
    _rgb:{
      r: 0,
      g: 0,
      b: 0
    },
    fullColor: '0, 0, 0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeR() {
      this.setData({
        '_rgb.r': this.data._rgb.r + 5 > 255 ? 255 : this.data._rgb.r + 5
      })
    },
    changeG() {
      this.setData({
        '_rgb.g': this.data._rgb.g + 5 > 255 ? 255 : this.data._rgb.g + 5
      })
    },
    changeB() {
      this.setData({
        '_rgb.b': this.data._rgb.b + 5 > 255 ? 255 : this.data._rgb.b + 5
      })
    },
    _randomRgb(){
      this.setData({
        _rgb:{
          r: Math.floor(Math.random() * 256),
          g: Math.floor(Math.random() * 256),
          b: Math.floor(Math.random() * 256),
        }
      })
    }
  },

  observers:{
    // '_rgb.r, _rgb.g, rbg.g':function (r, g, b) {
    //   this.setData({
    //     fullColor:`${r}, ${g}, ${b}`
    //   })
    // },
    /**
     * 通过通配符 ** 监听_rgb上所有属性的变化
     */
    '_rgb.**':function (obj) {
      this.setData({
        fullColor:`${obj.r}, ${obj.g}, ${obj.b}`
      })
    }
  },
  lifetimes:{
    created(){
      console.log('加载组件');
    },
    attached(){
      console.log(this.data);
    }
  },
  // 监听生命周期
  pageLifetimes:{
    show(){
      this._randomRgb()
    },
    hide(){
      console.log('下嗾使');
    },
    resize(){
      console.log('尺寸');
    }
  }
})
