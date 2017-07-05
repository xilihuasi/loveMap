//index.js
//// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.js');
const util = require('../../utils/util.js');

//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    meetDay: util.getNumBetweenDays('2005/09/01'),
    loveDay: util.getNumBetweenDays('2012/07/07'),
    dayNight: null,
    weatherData: '',
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../map/map'
    })
  },
  onLoad() {
    const that = this;
    this.getWeather();
    this.setData({
      dayNight: this.checkDayNight(new Date().getHours()),
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.log(userInfo);
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  checkDayNight(hour){
    let txt = '天';
    if (hour >= 6 &&  hour <= 18) {
      txt = '白天';
    } else if (hour > 18 || hour < 6) {
      txt = '夜晚';
    }
    return txt;
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
        weatherData = weatherData.currentCity +'　'+ weatherData.temperature +'　'+ weatherData.weatherDesc +'　'+ util.formatPm25(weatherData.pm25);
        console.log(weatherData);
        that.setData({ weatherData });
        // that.globalData.weatherData = weatherData;
        
    } 
    // 发起weather请求 
    BMap.weather({ 
        fail: fail, 
        success: success 
    });
  }
})
