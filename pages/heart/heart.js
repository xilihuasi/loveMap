//heart.js
// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.js'); 
//获取应用实例
var app = getApp();
Page({
  data: {
  	weatherData: null
  },
  onLoad() {
  	var that = this; 
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({ 
        ak: 'I6opjpKWyAp9oVARZfSuLy28KOAtGpWx' 
    }); 
    var fail = function(data) { 
        console.log(data) 
    }; 
    var success = function(data) { 
    	console.log(data);
        var weatherData = data.currentWeather[0]; 
        weatherData = '城市：' + weatherData.currentCity + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' +'日期：' + weatherData.date + '\n' + '温度：' + weatherData.temperature + '\n' +'天气：' + weatherData.weatherDesc + '\n' +'风力：' + weatherData.wind + '\n'; 
        that.setData({ 
            weatherData: weatherData 
        }); 
    } 
    // 发起weather请求 
    BMap.weather({ 
        fail: fail, 
        success: success 
    }); 
  },
  bindtap() {
    console.log('tap');
  },

})
