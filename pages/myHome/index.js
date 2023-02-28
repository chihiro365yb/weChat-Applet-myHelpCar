import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/index'
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

    // 绑定store到页面
    this.storeBindings = createStoreBindings(this,{
      store,
      fields: ['numA', 'numB', 'sum'],
      actions: ['updateNumA']
    })
  },
  addCount(){
    this.setData({
      count: this.data.count + 1
    })
  },
  
  async getSwipperList() {
    const { data } = await wx.p.request({
      url: 'https://www.escook.cn/slides',
      method:'GET'
    })

    if(data){
      this.setData({
        swiperList:data
      })
    }
  },

 async getGridList(){
   const  { data } = await wx.p.request({
      url: 'https://www.escook.cn/categories',
      method:'GET'
    })

    if(data){
      this.setData({
        gridList:data
      })
    }
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
     // 销毁store
     this.storeBindings.destoryStoreBindings()
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
  add(e){
    this.updateNumA(e.target.dataset.step)
  },
  subtract(e){
    this.updateNumA(e.target.dataset.step)
  }
})