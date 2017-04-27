<template>
  <div class="hello">
    <img src="../assets/head-img.png" class="head-img">
    <div class="list-wrap">
      <div class="list">
        <img src="../assets/little-title.png" class="little-title">
        <div class="list-title clearfix">
          <div class="title-block block1">选择</div>
          <div class="title-block block2">编号</div>
          <div class="title-block block3">姓名</div>
          <div class="title-block block4">文章标题（点击标题可浏览全文）</div>
        </div>
        <mlink 
          v-for="item of items"
          :key="item.id"
          :item="item"
          :count="value.length"
          :max=3
          @click="check"
          >
        </mlink>
        <img src="../assets/button.png" @click=submit class="button">
        <img src="../assets/activityinstructions.png" class="activityinstructions">
        <div class="instructions">
          <p>1、投票时间即日起截至5月8日15:00；</p>
          <p>2、恶意刷票和作弊的行为一经发现，华商基金有权取消其参赛和获奖资格；</p>
          <p>3、本次登载的持有人征文均由华商小海螺秉着公平、公开、公正的原则精选挑选。</p>
          <p>4、每人每天投票一次，每次可投三票。</p>
        </div>
      </div>
      <p class="statement">活动最终解释权归华商基金所有。市场有风险，投资需谨慎。</p>
    </div>
  </div>
</template>

<script>
import Mlink from './Link'
import axios from 'axios'
import items from '../js/voteitems'
import myconfig from '../js/config'
import {Toast} from 'mint-ui'

export default {
  name: 'hello',
  data () {
    let value = []
    return {
      msg: 'Welcome to Your Vue.js App',
      items: items,
      value: value
    }
  },
  components:{
    Mlink
  },
  methods:{
    check(para){
      let pos = this.value.indexOf(para)
      let length = this.value.length
      if (pos >= 0) {
        this.value.splice(pos, 1)
        this.items[parseInt(para)-1].value = false
      } else if (pos == -1 && length < 3) {
        this.value.push(para)
        this.items[parseInt(para)-1].value = true
      }
    },
    submit(){
      let target = this.value.toString();
      if (this.value.length == 0) {
        Toast({
          message:'请投票',
          duration: 1000
        });
        return;
      }
      var vm = this;
      /*console.log(target)*/
      axios.post(myconfig.hosturl + '/toupiao',{
        wechatid: sessionStorage.getItem('wechatid'),
        create_time: sessionStorage.getItem('createdtime'),
        target: target
      }).then(function(response){
        vm.$router.push('/voteresult')
        var result = response.data.message
        if (result == '8') {
          Toast({
            message:'您今日票数已用尽',
            duration: 1000
          });
        } else if (result == '1') {
          /*alert('投票成功')*/
        } else if (result == '9') {
          Toast({
            message:'没查到用户',
            duration: 1000
          });
        }
      }).catch(function(err){
        Toast({
            message:'请求失败',
            duration: 1000
          });
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  background: #5EB0C6;
}
.head-img{
  width: 100%;
}
.list-wrap{
  width: 100%;
}
.list{
  background: white;
  width: 95%;
  margin: auto;
  border-radius: 10px;
  padding: 0.15rem;
  box-sizing: border-box;
}
.little-title{
  width: 100%;
}
.list-title{
  margin-top: 5px;
  height: 0.65rem;
  line-height: 0.65rem;
  width: 100%;
  background: #EAEBEA;
  border-bottom: 1px solid #B9BAB9;
  font-weight: bold;
}
.clearfix{
  overflow:hidden;
}
.title-block{
  text-align: center;
  float: left;
  width:0.65rem;
  padding: 0 0.05rem;
}
.block4{
  width:3.5rem;
  text-align: left;
}
.block1,.block2{
  width:0.5rem;
}
.block3{
  width:0.85rem;
}
.button{
  width: 1.98rem;
  height: 0.93rem;
  display: block;
  margin: auto;
  margin-top: 15px;
}
.activityinstructions{
  width: 100%;
}
.instructions{
  color:#31B3F3;
  font-family: Yuanti SC;
}
.statement{
  padding: 20px;
  margin:0;
  
}
</style>
