// pages/shopList/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: {}, //参数
    shopList: [],
    page: 1,
    pageSize: 10,
    total: 0,
    isLoading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      query: options
    })
    this.getShopList()
  },
  
  getShopList(cb){
    this.setData({
      isLoading: true
    })
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
      method: "GET",
      data:{
        _page: this.data.page,
        _limit: this.data.pageSize
      },
      success:(res)=>{
        const { data, header } = res
        if(data){
          this.setData({
            shopList:[...this.data.shopList,...data],
            total: header['X-Total-Count'] - 0
          })
        }
      },
      complete:()=>{
        wx.hideLoading({
          success: (res) => {},
        })
        this.setData({
          isLoading: false
        }),
        cb && cb()
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const { title } = this.data.query
    wx.setNavigationBarTitle({
      title,
    })
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
    this.setData({
      page: 1,
      shopList: [],
      total: 0
    })
    this.getShopList(()=>{
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const { page, pageSize, total, isLoading } = this.data
    if(page * pageSize >= total){
      return wx.showToast({
        title: '没有产品了~',
        icon:'none'
      })
    }
    this.setData({
      page: page + 1
    })

    // 节流
    if(!isLoading){
      this.getShopList()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})