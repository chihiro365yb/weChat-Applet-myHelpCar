// app.js
App({
  /**
   * 小程序启动时触发，全局触发一次
   */
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  /**
   * 前台展示时，触发
   */
  onShow: function () {
    
  },
  /**
   * 后台运行时，触发
   */
  onHide: function () {
    
  },
  globalData: {
    userInfo: null
  }
})
