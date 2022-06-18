const app = getApp()
import { request } from '../../utils/utils'
Page({
  data: {
    prolist: []
  },
  onLoad: function (options) {
    console.log(options, 'jinlai')
    this.getProList(options.id)
  },
  getProList(cat_id) {
    let _ = this;
    request(`${app.globalData.baseUrl}api/douyin/pictureList?cat_id=${cat_id}`, 'GET', {},
      function success(res) {
        _.setData({
          prolist: res.data.data
        })
        console.log(res)
      })
  },
  todetail(e){
    let id = e.currentTarget.dataset.id;
    tt.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  }
})