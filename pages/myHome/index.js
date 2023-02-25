// pages/myHome/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[],
    gridList:[],
    count:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwipperList()
    this.getGridList()
  },
  addCount(){
    this.setData({
      count: this.data.count + 1
    })
  },
  
  getSwipperList() {
    wx.request({
      url: 'https://www.escook.cn/slides',
      method:'GET',
      success:(res)=>{
        const { data } = res
        console.log(data,'data');
        if(data){
          this.setData({
            swiperList:data
          })
        }
      }
    })
  },

  getGridList(){
    wx.request({
      url: 'https://www.escook.cn/categories',
      method:'GET',
      success:(res)=>{
        const { data } = res
        if(data){
          this.setData({
            gridList:data
          })
        }
      }
    })
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
    /**
   * 监听页面下拉刷新
   */
  onPullDownRefresh(){
    this.setData({
      count:0
    })
    wx.stopPullDownRefresh({
      success: (res) => {},
    })
  },
})