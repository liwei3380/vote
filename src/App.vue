<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
ul,li{
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body{
  margin:0;
  padding:0;
}
body{
  max-width: 750px;
  margin: 0 auto;
  position: relative;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 12px;
  position: relative;
  font-family: Yuanti SC;
}
</style>
