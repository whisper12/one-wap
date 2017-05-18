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
@charset "UTF-8";
body{
  background-color: #f6f6f6;
  padding-bottom: .7rem;
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
 h1, h2, h3, h4, h5, h6, hr, blockquote, dl, dt, dd, ul, ol, li, pre, figcaption, figure, fieldset, legend, button, input, textarea, th, td {
  margin: 0;
  padding: 0; }

body, button, input, select, textarea {
  font: 12px/1 Lucida Grande, 'Microsoft YaHei', "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, Verdana, sans-serif;
}
</style>
