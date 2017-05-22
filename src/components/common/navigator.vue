<template>
  <div flex="cross:center" class="warp">
      <div class="header">
        <ul>
          <li @click="goTo(0)">首页</li>
          <li @click="goTo(1)">吃进去·空</li>
          <li @click="goTo(2)">听进去·空</li>
          <li @click="goTo(3)">看进去·空</li>
          <li>about</li>
        </ul>
      </div>
      <div class="content">
        <div class="more"  @click.stop="swichFlag(true)"></div>
        <h1 @click.stop="swichFlag(false)">{{text}}</h1>
      </div>
  </div>
</template>

<script>
export default {
  name: 'nav',
  props:{
    swichFlag:{
      type:[Function]
    },
    text:{
      type:[String]
    }
  },
  data () {
    return {
      // flag:false
    }
  },
  methods:{
    goTo:function(index){
      switch(index){
        case 0:
          this.$router.push({path:'/photo'});break;
        case 1:
          this.$router.push({path:'/msg'});break;
        case 2:
          this.$router.push({path:'/music'});break;
        case 3:
          this.$router.push({path:'/mov'});break;
      }
    }
    // swichFlag:function(){
    //   this.flag=!this.flag
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.more{
  width: .8rem;
  height: .8rem;
  float: left;
  z-index: 1002;
  position: absolute;
  top: .2rem;
  left: .6rem;
  background-image: url(../../assets/menu.png);
  background-size: cover;
}
.warp{
  height: 1.2rem;
  background-color: #fff;
}
.header{
  position: fixed;
  width: 40%;
  height: 100%;
  background: #fff;
  top: 0;
  left: 0;
  transform: translate3d(-110%,0,0);
  z-index: 1001;
  box-shadow: 5px 0 5px rgba(0,0,0,.15);
  transition: transform .3s ease;
}
.on .header{
  /*left: 0;*/
  transform: translate3d(0,0,0);
}
.content{
  position: fixed;
  width: 100%;
  height: 1.2rem;
  top: 0;
  background: #fff;
  z-index: 1000;
  text-align: center;
}
.content h1{
  font-size: .5rem;
  color: rgba(0, 0, 0, 0.3);
  /*padding:.4rem;*/
  font-weight: 400;
  opacity: .8;
  text-align: center;
  background-color: #fff;
  height: 1.2rem;
  line-height: 1.2rem;
}
.header ul{
  padding-top: 1.5rem;
}
.header ul li{
  text-align: center;
  font-size: .4rem;
  color: rgba(0, 0, 0, 0.6);
  text-shadow: none;
  font-weight: lighter;
  padding: .4rem 0;
  line-height: 30px;
}
</style>
