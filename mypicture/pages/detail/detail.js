const app = getApp() 
//获取激励广告唯一对象 
var rewardedVideoAdObj = app.globalData.videoAd;
Page({
  data: {

  },
  onLoad: function (options) {

  },

  //用户点击触发的激励广告
  showRewardedVideoAd() {
    let _ = this;
    //广告
    if (rewardedVideoAdObj) {
      //版本符合，看广告
      rewardedVideoAdObj.show().then((res) => {
        rewardedVideoAdObj.offClose(res => { });
        rewardedVideoAdObj.onClose(res => {
          clearTimeout(rewardedVideoAdObj.iTimer);
          rewardedVideoAdObj.iTimer = setTimeout(function () {
            if (res.isEnded) {
              // console.log('给与奖励');
              //观看完广告 -> 奖励流程
              _.adAllow();
            } else {
              // console.log('广告未观看完毕');
            }
          }, 500);
        });
      })
        .catch(err => {
          console.log("广告组件出现问题", err);
          //发生错误看不了广告 -> 奖励流程
          _.adAllow();
        });
    } else {
      //版本低，看不了广告 -> 奖励流程
      _.adAllow();
    }
  },
  // //观看完激励广告的奖励流程
  // adAllow() {
  //   console.log("dosomething...")

  // },
  //抖音插屏广告
  adAllow(){
  //目前只能在抖音使用该方法，今日头条等宿主暂不支持
  //插屏广告组件每次创建都会返回一个全新的实例，默认是隐藏的，需要调用 InterstitialAd.show 将其显示
  //基础库 1.70.0 开始支持本方法
  let version = tt.getSystemInfoSync().SDKVersion;
  if(app.compareVersion(version,'1.70.0')){
    //创建插屏广告
    // console.log('创建插屏广告');
    let interstitialAd = tt.createInterstitialAd({
      adUnitId: "19j5e8eiiae4h5fa17",
    });

    if(typeof interstitialAd != 'undefined'){
      interstitialAd.load().then(() => {
        interstitialAd.show();
      }).catch((err) => {
        console.log(err);
      });
    };
  }else{
    tt.showModal({
      title: '提示',
      content: '当前版本过低，无法获取插屏广告功能，请升级到最新版本后重试。'
    });
  };
}
})