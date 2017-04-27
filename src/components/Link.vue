<template>
  <div class="list-li clearfix">
    <div class="title-block block1">
      <div :class="{nocheck:isNocheck,link:true,checked:isCheck}" @click="clk"></div>
    </div>
    <div class="title-block block2">{{item.id}}</div>
    <div class="title-block block3">{{item.name}}</div>
    <div class="title-block block4">
      <a :href=item.url>{{item.title}}</a>
      <div class="shownext">></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'link',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  props:['item','count','max'],
  methods:{
    clk () {
      this.$emit('click',this.item.id)
    }
  },
  computed:{
    isNocheck(){
      if (parseInt(this.count) >= this.max) {
        return true;
      } else {
        return false;
      }
    },
    isCheck(){
      return this.item.value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link{
  display:inline-block;
  width: 0.24rem;
  height: 0.24rem;
  background: url('../assets/cb-n.png');
  background-size: cover;
  margin-top: 0.22rem;
}
.shownext{
  display: inline-block;
  width: 0.25rem;
  float: right;
  font-weight: bold;
}
a{
  text-decoration: none;
  color:black;
  display: inline-block;
  width: 3.25rem;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.nocheck{
	background: url('../assets/cb-off.png');
  background-size: cover;
}
.checked{
	background: url('../assets/cb-on.png');
  background-size: cover;
}
.title-block{
  text-align: center;
  float: left;
  width:0.65rem;
  height: 0.65rem;
  padding: 0 0.05rem;
}
.block4{
  width:3.5rem;
  text-align: left;
}
.block2{
  font-size: 14px;
}
.block1,.block2{
  width:0.5rem;
}
.block3{
  width:0.85rem;
}
.list-li{
  height: 0.7rem;
  line-height: 0.7rem;
  width: 100%;
  border-bottom: 1px solid #B9BAB9;
}
</style>
