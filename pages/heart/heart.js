//heart.js

//获取应用实例
var app = getApp();
Page({
  data: {
  	weatherData: null,
  },
  onLoad() {
    setTimeout( () => {
        wx.switchTab({
        url: '../index/index'
      });
    },3000);
  }
})
