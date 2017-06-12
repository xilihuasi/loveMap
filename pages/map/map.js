//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    latitude: 32.084170,
    longitude: 112.191920,
    scale: 10,
    includePoints: [
      {
        latitude: 32.084170,
        longitude: 112.191920
      },
      {
        latitude: 23.084170,
        longitude: 110.191920
      },
    ],
    markers: [
      {
        iconPath: '/resources/loc.png',
        id: 0,
        latitude: 32.084170,
        longitude: 112.191920,
        width: 50,
        height: 50,
        // title: '城关一中',
        alpha: 0.9,
        callout: {
          content: 'hahah',
          borderRadius: 10,
          padding: 10,
          bgColor: '#ffffff',
          display: 'BYCLICK'
        },
        label: {
          content:'城关一中'
        }
      },
      {
        iconPath: '/resources/loc.png',
        id: 1,
        latitude: 30.576760,
        longitude: 114.334930,
        width: 50,
        height: 50,
        title: '湖大'
      },
      {
        iconPath: '/resources/loc.png',
        id: 1,
        latitude: 27.948640,
        longitude: 109.601740,
        width: 50,
        height: 50,
        title: '凤凰'
      },
      {
        iconPath: '/resources/loc.png',
        id: 1,
        latitude: 28.180410,
        longitude: 112.941110,
        width: 50,
        height: 50,
        title: '岳麓书院'
      },
      {
        iconPath: '/resources/loc.png',
        id: 1,
        latitude: 29.556490,
        longitude: 106.575150,
        width: 50,
        height: 50,
        title: '解放碑'
      },
      {
        iconPath: '/resources/loc.png',
        id: 1,
        latitude: 29.578832,
        longitude: 103.449669,
        width: 50,
        height: 50,
        title: '峨眉山'
      },
      {
        iconPath: '/resources/loc.png',
        id: 1,
        latitude: 30.737270,
        longitude: 104.143800,
        width: 50,
        height: 50,
        title: '熊猫基地'
      },

    ],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true,
      arrowLine: true
    }],
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
    this.getPics();
  },
  bindtap() {
    console.log('tap');
  },
  getPics() {
    wx.request({
      url: 'http://gank.io/api/data/福利/10/1', //仅为示例，并非真实的接口地址
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
