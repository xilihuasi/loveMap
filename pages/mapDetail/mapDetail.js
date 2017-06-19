//mapDetail.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
  },
  onLoad() {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(userInfo => {
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    // this.getPics();
    app.getLocation();
  },
  bindtap() {
    console.log('tap');
  },
  getPics() {
    wx.request({
      url: 'https://gank.io/api/data/福利/10/1', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data)
      },
      complete(res) {
        console.log(res);
      }
    })
  }
})
