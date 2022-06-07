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
      },
      {
        title: '444',
        src: './'
      }
    ],
    favoriteList: [
      {src: './/'},
      {src: './/'},
      {src: './/'}
    ]
  },
  onLoad: function () {
    console.log('Welcome to Mini Code')
  },
})
