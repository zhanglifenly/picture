const app = getApp()
import { request } from '../../utils/utils'
Page({
  data: {
    navbarList: [
      {
        title: '搞笑',
        src: '../../images/pic.jpg'
      },
      {
        title: '风景',
        src: '../../images/pic.jpg'
      },
      {
        title: '人物',
        src: '../../images/pic.jpg'
      },
      {
        title: '动物',
        src: '../../images/pic.jpg'
      }
    ],
    favoriteList: [
      {src: '../../images/pic.jpg'},
      {src: '../../images/pic.jpg'},
      {src: '../../images/pic.jpg'}
    ]
  },
  onLoad: function () {
    console.log('Welcome to Mini Code')
    this.getInfo()
  },
  getInfo() {
    request(app.globalData.baseUrl + "api/douyin/index", "GET", {}, 
      function success(res){
        console.log(res)
      },
      function fail(err){}
    )
  },
  todetail(){
    console.log('aa')
    tt.navigateTo({
      url: '/pages/detail/detail'
    })
  }
})
