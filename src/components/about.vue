<template>
  <div class="content"  @click="swichFlag(false)">
    <vnav :class="{'on':flag}" :swichFlag="swichFlag" :text="'「吃进去·空」'"></vnav>
    <section class="about-wrap">
      <p class="title">关于吃进去空</p>
      <p class="content-block">吃进去空为个人练习项目，无商业用途。请勿转载。</p>
    </section>
  </div>
</template>

<script>
import nav from './common/navigator'
export default {
  name: 'about',
  data () {
    return {
      flag:false
    }
  },
  components:{
    'vnav':nav
  },
  methods:{
    swichFlag:function(item){
      this.flag = item
    }   
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
.about-wrap{
  padding: 1rem;
}
.title{
  text-align: center;
  font-weight: 800;
}
.content-block{
  text-align: left;
  line-height: 1.5;
  font-size:.3rem;
  text-indent: .6rem;
}
</style>
