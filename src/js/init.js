// 引入vue
import wxshare from './wxshare.js'
import config from './config.js'
let cb;
let setcb = func => {
  cb = func;
}
var init = function () {
  wxshare.init({
        signatureurl:config.hosturl+'/getsignature',
        appId:'wx3d5547d122fc289c',
        jsApiList:['onMenuShareTimeline','onMenuShareAppMessage'],
        title:'华商基金持有人投稿票选活动',
        desc:'投票时间即日起截至5月8日15:00',
        link:'http://www.linki2u.com/wxjstxt/vote/dist/dao.html',
        imgurl:'http://www.linki2u.com/wxjstxt/vote/dist/share.png',
        callback:cb
      });
}

export default {init,setcb}
