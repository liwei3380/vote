<template>
  <div class="flex parent">
    <div class="child">flex</div>
  </div>
</template>

<script>
export default {
  name: 'flex',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.parent{
	display: flex;
	height: 100%;
}
.child{
	width: 1rem;
	height: 1rem;
	margin: auto;
}
</style>
