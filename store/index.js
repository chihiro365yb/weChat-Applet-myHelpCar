// 创建store实例
import { observable, action } from 'mobx-miniprogram'

export const store = observable({
  numA: 1,
  numB: 2,
  activeTabBarIndex: 1,
  // 定义计算属性
  get sum(){
    return this.numA + this.numB
  },
  // 定义actions
  updateNumA:action(function (step) {
    return this.numA += step
  }),
  updateNumB:action(function (step) {
    return this.numB += step
  }),
  updateActiveTabBarIndex:action(function (active) {
    this.activeTabBarIndex = active
  })
})