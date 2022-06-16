const app = getApp()
console.log(app)
import { request } from '../../utils/utils'
Page({
  data: {
    value: '',
    prolist: [],
    hasdata: false,
    nodata: '快来搜索心仪的图图吧~'
  },
  onLoad: function (options) {

  },
  search() {
    let _ = this;
    request(app.globalData.baseUrl + "api/douyin/search?keywords=" + this.data.value, "GET", {},
      function success(res) {
        if (res.data.data.length > 0) {
          _.setData({
            prolist: res.data.data,
            hasdata: true,
            nodata: '没找到你想要的~看看其他吧'
          })
        } else {
          _.setData({
            nodata: '没找到你想要的~看看其他吧'
          })
        }

      }
    )
  },
  handleInputSearch(e) {
    console.log(e.detail.value);
    this.setData({
      value: e.detail.value
    })
  },
  toDetail() {
    tt.navigateTo({
      url: '/pages/detail/detail.ttml'
    })
  }
})