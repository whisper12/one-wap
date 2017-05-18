<template>
  <div class="content" flex="cross:center">
      <div class="router-icon" v-for="item,index in itemClss" :class="item" @click="goTo(index)"></div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    itemClss(){
      let res = []
      let currentRouter =  this.$route.name
      switch(currentRouter){
          case 'photo':
           res = ['photo-on','msg','music','mov'];break;
          case 'msg':
           res = ['photo','msg-on','music','mov'];break;
          case 'music':
           res = ['photo','msg','music-on','mov'];break;
          case 'mov':
           res = ['photo','msg','music','mov-on'];break;                                 
      }
      return res
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  position: fixed;
  width: 100%;
  height: 1rem;
  bottom: 0;
  background-color: #fff;
}
.router-icon{
  /*background-color: #000;*/
  height: 1rem;
  width: 25%;
  background-repeat: no-repeat;
  background-size: .8rem;
  background-position: center;
}
.photo{
  background-image: url(../../assets/photo-off.png);
  background-size: .6rem;
}
.msg{
  background-image: url(../../assets/msg-off.png);
}
.music{
  background-image: url(../../assets/music-off.png);
}
.mov{
  background-image: url(../../assets/mov-off.png);
}
.photo-on,.photo:hover,.photo:active{
  background-size: .6rem;
  background-image: url(../../assets/photo-on.png);
}
.msg-on,.msg:hover,.msg:active{
  background-image: url(../../assets/msg-on.png);
  background-size: .7rem;
}
.music-on,.music:hover,.music:active{
  background-image: url(../../assets/music-on.png);
}
.mov-on,.mov:hover,.mov:active{
  background-image: url(../../assets/mov-on.png);
}
</style>
