import { request } from './utils/utils.js'
App({
  globalData: {
    baseUrl: 'https://easy.ckxcode.com/',
  },
  onLaunch: function () {
    this.login()
  },
  login() {
    let _ = this;
    tt.login({
      force: true,
      success(res) {
        _.getSession();
        // 成功发起请求，记录数据
        request(_.globalData.baseUrl + "api/douyin/login", 'POST', { code: res.code },
          function success(res) {
          // console.log("su", res)
        },
          function fail(err) {
          // console.log("sb", err)
        }
        )
      }
    })
  },
  getSession() {
    let _ = this;
    tt.checkSession({
      success() {
        // console.log(`session未过期`)
      },
      fail() {
        // console.log(`session已过期`);
        _.login()
      }
    })
  }
})
