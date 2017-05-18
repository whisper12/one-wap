<template>
  <div class="content">
    <h1>「ONE · 图文」</h1>
    <photoDetail></photoDetail>
    <photoDetail></photoDetail>
    <vfooter></vfooter>
  </div>
</template>

<script>
import photoDetail from './photo/photoDetail'
import footer from './common/footer'
export default {
  name: 'mov',
  data () {
    return {
      msg: ''
    }
  },
  components:{
    photoDetail,
    'vfooter':footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content h1{
  font-size: .5rem;
  color: rgba(0, 0, 0, 0.3);
  padding:.4rem;
  font-weight: 400;
  opacity: .8;
  text-align: center;
  background-color: #fff;
}
</style>
