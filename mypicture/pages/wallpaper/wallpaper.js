import { request } from '../../utils/utils'
const app = getApp()
Page({
  data: {
    wallpaperNavList: []
  },
  onLoad: function (options) {
    this.getWallPaper()
  },
  getWallPaper() {
    let _ = this;
    request(app.globalData.baseUrl + 'api/douyin/childCate', "GET", { cat_name: '壁纸' },
      function success(res) {
        _.setData({
          wallpaperNavList: res.data.data
        })
        console.log(res)
      })
    // tt.navigateTo
  },
  toProList(e) {
    let cat_id = e.currentTarget.dataset.id;
    tt.navigateTo({
      url: `/pages/prolist/prolist?id=${cat_id}`
    })
    
  }
})