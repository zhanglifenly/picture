import { request } from './utils/utils.js'
App({
  globalData: {
    baseUrl: 'https://easy.ckxcode.com/',
    wallpapaer_id: '',
    montion_id: '',
    'videoAd': null, // 广告
  },
  onLaunch: function () {
    this.login()
  },
  login() {
    let _ = this;
    tt.login({
      force: true,
      success(res) {
        console.log(res,'login')
        // 成功发起请求，记录数据
        request(_.globalData.baseUrl + "api/douyin/login", 'POST', { code: res.code },
          function success(res) {
            if(res.code === 0) {
              _.getSession();
            } else{
              console.log('error code -1')
            }
          },
          function fail(err) {
            console.log("sb", err)
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
  },
  // 激励广告
  rewardedVideoAd() {
    var _that = this;
    var _videoAd = _that.globalData.videoAd;

    //兼容
    //目前只能在抖音使用该方法，今日头条等宿主暂不支持
    let version = tt.getSystemInfoSync().SDKVersion;
    if (_that.compareVersion(version, '1.57.0')) {
      if (_videoAd == null) {
        //初始化
        if (tt.createRewardedVideoAd) {
          _videoAd = tt.createRewardedVideoAd({
            adUnitId: '申请的激励广告ID'
          });

          //广告显示成功，先解除绑定close事件的监听器，为后续添加准备
          if (typeof _videoAd != 'undefined') {
            _videoAd.offClose((res) => {
              console.log('广告组件解绑');
            });
          };

          // return _videoAd;
          _that.globalData.videoAd = _videoAd;
        } else {
          tt.showModal({
            title: "提示",
            content:
              "当前客户端版本过低，无法使用该功能，请升级客户端或关闭后重启更新。"
          });
          // return null;
          _that.globalData.videoAd = null;
        }
      };
    } else {
      tt.showModal({
        title: '提示',
        content: '当前版本过低，无法获取激励广告功能，请升级到最新版本后重试。'
      });
    };
  },
  compareVersion(v1, v2) {
    v1 = v1.split('.')
    v2 = v2.split('.')
    const len = Math.max(v1.length, v2.length)
    while (v1.length < len) {
      v1.push('0')
    }
    while (v2.length < len) {
      v2.push('0')
    }
    for (let i = 0; i < len; i++) {
      const num1 = parseInt(v1[i])
      const num2 = parseInt(v2[i])
      if (num1 > num2) {
        return true;
      } else if (num1 < num2) {
        return false;
      }
    }
  },
})
