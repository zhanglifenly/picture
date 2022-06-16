const app = getApp()
import { request } from '../../utils/utils'
Page({
  data: {

  },
  onLoad: function (options) {
    console.log(options, 'jinlai')
    this.getProList(options.id)
  },
  getProList(cat_id) {
    request(`${app.globalData.baseUrl}api/douyin/pictureList?cat_id=${cat_id}`, 'GET', {},
      function success(res) {
        console.log(res)
      })
  }
})