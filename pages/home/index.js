// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    count: 0,
    type: 3,
    visibile: true,
    arr: [1,2,3,4],
    userItem:[
      {id:1,name:'詹三'},
      {id:2,name:'李四'},
      {id:3,name:'王五'},
    ],
    getInfo:[]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  handleBubble(e){
    console.log(e,'e');
    const  { currentTarget, target } = e;
    console.log(currentTarget,'currentTarget'); // 当前组件
    console.log(target,'target'); // 内部Button组件
  },
  handleBubbleBtn(){
    console.log('冒泡了');
    this.setData({
      count:this.data.count + 1
    })
  },
  handlePassNum(e){
    const { target } = e;
    this.setData({
      count:this.data.count + target.dataset.num
    })
  },
  inputHandle(e){
    const { detail } = e;
    console.log(detail.value);
    this.setData({
      motto:detail.value
    })
  },
  getInfo() {
    wx.request({
      url: 'https://www.escook.cn/api/get',
      method:'GET',
      data:{
        name:'张启强',
        age:90
      },
      success:(res)=>{
        const { data } = res
        if(data){
          this.setData({
            getInfo:data.data
          })
        }
      }
    })
  },
  postInfo(){
    wx.request({
      url: 'https://www.escook.cn/api/post',
      method:'POST',
      data:{
        name:'安欣',
        age:80,
      },
      success:(res)=>{
        const { data } = res
        if(data){
          this.setData({
            getInfo:data.data
          })
        }
      }
    })
  },
  goToPerson(){
    wx.navigateTo({
      url: '/pages/person/index?name=ls&age=99',
    })
  },
    /**
   * 监听上拉刷新
   */
  onReachBottom(){
    console.log(123);
  }
})
