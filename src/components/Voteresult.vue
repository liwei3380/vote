<template>
  <div class="voteresult">
    <img src="../assets/head-img.png" class="head-img">
    <div class="list-wrap">
      <div class="list">
        <img src="../assets/votesuccess.png" class="votesuccess">
        <img src="../assets/votesstatistical.png" class="little-title">
        <div class="list-title clearfix">
          <div class="title-block block1">编号</div>
          <div class="title-block block2">姓名</div>
          <div class="title-block block4">文章标题</div>
          <div class="title-block">票数</div>
        </div>
          <ul>
            <li class="list-li" v-for="item in items">
              <div class="title-block block1">{{item.id}}</div>
              <div class="title-block block2">{{item.name}}</div>
              <div class="title-block block4">{{item.title}}</div>
              <div class="title-block block3">{{item.votes}}</div>
            </li>
          </ul>
        <img src="../assets/more-button.png" @click=tomore class="button">
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
import axios from 'axios'
import mitems from '../js/voteitems'
import {Indicator} from 'mint-ui'
import myconfig from '../js/config'

export default {
  name: 'voteresult',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: null
    }
  },
  mounted(){
    Indicator.open();
    this.fetchData()
    //setItems(){
      
    //}
  },
  methods:{
    fetchData(){
      var vm = this
      axios.get(myconfig.hosturl + '/gettoupiao').then(function(response){
        Indicator.close();
        var _items = mitems;
        for (var i = _items.length - 1; i >= 0; i--) {
          _items[i].votes = response.data.data[i].count
        }
        vm.items = _items
      }).catch(function(err){
        Indicator.close();
        console.log(err)
      })
    },
    tomore () {
      /*window.location.href = "http://www.baidu.com"*/
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.voteresult{
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
.votesuccess{
  width: 3.11rem;
  display: block;
  margin: auto;
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
  width:0.7rem;
  padding: 0 0.05rem;
}
.block1{
  width:0.5rem;
}
.block2{
  width:0.85rem;
}
.block3{
  color: red;
}
.block4{
  text-align: left;
  width:3.3rem;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.button{
  width: 1.98rem;
  height: 0.93rem;
  display: block;
  margin: auto;
  margin-top: 15px;
}
.activityinstructions{
  margin-top: 15px;
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
.little-title{
  width: 100%;
  margin-top: 15px;
}
.list-li{
  height: 0.65rem;
  line-height: 0.65rem;
  width: 100%;
  border-bottom: 1px solid #B9BAB9;
}
</style>
