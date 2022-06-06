const app = getApp()

Page({
  data: {
    navbarList: [
      {
        title: '111',
        src: './'
      },
      {
        title: '222',
        src: './'
      },
      {
        title: '333',
        src: './'
      }
    ],
    favoriteList: [
      {src: './/'}
    ]
  },
  onLoad: function () {
    console.log('Welcome to Mini Code')
  },
})
