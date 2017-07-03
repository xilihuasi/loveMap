//app.js
// 引用百度地图微信小程序JSAPI模块 
var bmap = require('libs/bmap-wx.js');
// var util = require('../../utils/util.js');

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null,
    weatherData: null,
  },
  getLocation() {
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        console.log(res);
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
      }
    });
  },
  getWeather() {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({ 
        ak: 'I6opjpKWyAp9oVARZfSuLy28KOAtGpWx' 
    }); 
    var fail = function(data) { 
        console.log(data) 
    }; 
    var success = function(data) { 
        var weatherData = data.currentWeather[0]; 
        // weatherData = weatherData.currentCity +'　'+ weatherData.temperature +'　'+ weatherData.weatherDesc +'　'+ util.formatPm25(weatherData.pm25);
        that.globalData.weatherData = weatherData;
        
    } 
    // 发起weather请求 
    BMap.weather({ 
        fail: fail, 
        success: success 
    });
  }
})