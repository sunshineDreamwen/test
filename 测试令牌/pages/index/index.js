Page({

  
  data: {
    
  },

  
  onLoad: function (options) {
    
  },

  getToken:function(event) {
    console.log(event);
    wx.login({
      success: function(res) {
        console.log(res);
        var code=res.code;
        wx.request({
          url: 'http://z.cn/api/v1/token/user',
          data: {
            code:code
          },
          method: 'POST',
          dataType: 'json',
          responseType: 'text',
          success: function (res) {
            console.log(res)
           },
          fail: function (res) { },
          complete: function (res) { },
        })
       
      }
    })
  },
  saveAddress:function(event) {
    wx.request({
      url: 'http://z.cn/api/v1/address',
      data: {
        name:'张三',
        mobile:'15265678552',
        province:'广东省',
        city:'深圳市',
        country:'金陵县',
        detail:'单身公寓101'
      },
      header: {
        token: "d1b0632828f4ba32c48bffe6bc010539"
      },
      method: 'POST',
      success: function(res) {
        console.log(res)
      },
     
    })
  },
  testToken:function(event) {
    wx.request({
      url: 'http://z.cn/api/v1/token/verify',
      data: {
        token: "d1b0632828f4ba32c48bffe6bc010539"
      },
      method: 'POST',
      success: function(res) {
        console.log(res)
      },
     
    })
  }
})