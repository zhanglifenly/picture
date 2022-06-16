const app = getApp()
import { request } from '../../utils/utils'
Page({
  data: {
    navbarList: [],
    favoriteList: []
  },
  onLoad: function () {
    console.log('Welcome to Mini Code')
    this.getInfo()
  },
  getInfo() {
    let _　 = this;
    request(app.globalData.baseUrl + "api/douyin/index", "GET", {}, 
      function success(res){
        _.setData({
          navbarList: res.data.data.category,
          favoriteList: res.data.data.picture
        })
        console.log(res,11)
      },
      function fail(err){}
    )
  },
  todetail(){
    console.log('aa')
    tt.navigateTo({
      url: '/pages/detail/detail'
    })
  },
  toSearch() {
    tt.navigateTo({
      url: "/pages/search/search"
    })
  },
  toNavBar(e) {
    let cat_name = e.currentTarget.dataset.name
    console.log(e,cat_name, '...cat_name')
    if(cat_name === '壁纸') {
      tt.switchTab({
        url: '/pages/wallpaper/wallpaper'
        // 跳去表情
      })
    } else if(cat_name === '表情包') {
      tt.switchTab({
        url: '/pages/emoticon/emoticon'
        // 跳去壁纸
      })
    }
    
  }
})
