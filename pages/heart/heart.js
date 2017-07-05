//heart.js

//获取应用实例
var app = getApp();
Page({
  data: {
  	weatherData: null,
  },
  onLoad() {
    setTimeout( () => {
        // wx.switchTab({
      wx.navigateTo({
        url: '../index/index'
      });
    },3000);
  }
})
