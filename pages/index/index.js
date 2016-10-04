//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [
      'https://img.alicdn.com/imgextra/i3/2257664259/TB2Ns6lXncX61BjSspcXXa.0pXa_!!2257664259.jpg_640x640Q50s150.jpg',
      'https://img.alicdn.com/imgextra/i4/2194740761/TB2KSUvbFHzQeBjSZFsXXbGvXXa_!!2194740761.jpg_640x640Q50s150.jpg',
      'https://img.alicdn.com/imgextra/i2/2863127650/TB2drcRbpHzQeBjSZFuXXanUpXa_!!2863127650.jpg_640x640Q50s150.jpg'
    ],
    modalHidden2:true
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  menuHandler:function(e){
      this.setData({
         modalHidden2:false
     });
  },
  modalChange2:function(){
     this.setData({
         modalHidden2:true
     });
  }
})
