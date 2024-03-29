// pages/contact/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorList: [], // 随机颜色
    isLoading: false, //节流
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getColors()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getColors(){
    this.setData({
      isLoading: true
    })
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: 'https://www.escook.cn/api/color',
      method: "GET",
      success: ({data: res})=>{
        if(res.data){
          this.setData({
            colorList:[...this.data.colorList,...res.data]
          })
        }
      },
      complete:()=>{
        wx.hideLoading({
          success: (res) => {},
        })
        this.setData({
          isLoading: false
        })
      }
    })
  },
  /**
   * 监听下拉刷新
   */
  onReachBottom(){
    // 节流操作
   if(!this.data.isLoading){
    this.getColors()
   }
  }
})