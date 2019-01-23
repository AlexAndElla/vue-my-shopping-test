<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
  window.addEventListener(('orientationchange' in window ? 'orientationchange' : 'resize'), (function() {
    function c() {
      var d = document.documentElement;
      var cw = d.clientWidth || 750;
      d.style.fontSize = (50 * (cw / 375)) >= 50 ? 50 + 'px' : (50 * (cw / 375)) + 'px';
    }
    c();
    return c;
  })(), false);
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #eee;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  vertical-align: middle;
  border: 0;
}
.clearFix:after {
  display: block;
  content: '';
  clear: both;
  height: 0;
}
#app {
  font-family: '微软雅黑';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
