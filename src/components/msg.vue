<template>
  <div class="content"  @click="swichFlag(false)">
    <vnav :class="{'on':flag}" :swichFlag="swichFlag" :text="'「吃进去·空」'"></vnav>
    <!-- <h1>「吃进去·空」</h1> -->
    <section>
      <msgDetail v-for="item,index in  itemData"  :photoData = "item"  :key="index"></msgDetail>
      <spinner v-if ="loading"></spinner>
      <div class="ending" v-if="ending">---已经到底啦大兄弟---</div>
    </section>
    <!-- <vfooter></vfooter> -->
  </div>
</template>

<script>
import msgDetail from './msg/msgDetail'
// import footer from './common/footer'
import spinner from './common/spinner'
import nav from './common/navigator'
export default {
  name: 'photo',
  data () {
    return {
      itemData: [],
      start: 0,
      loading: false,
      ending: false,
      flag:false
    }
  },
  components:{
    msgDetail,
    spinner,
    'vnav':nav
    // 'vfooter':footer
  },
  computed:{
    idlist(){
      return this.$store.getters.getidList
    }
  },
  mounted:function(){
    this.getphotoData()
    window.addEventListener('scroll', this.handleScroll)
  },
  methods:{
    swichFlag:function(item){
      this.flag = item
    },
    getphotoData:function(){
      let _url = '/jiekou/?start='+ this.start +'&count=5'
      this.$http.get(_url)
        .then((res) => {
          this.loading=false
          if (!res.data[0]) {
            this.ending=true
            window.removeEventListener('scroll', this.handleScroll);
          }
          this.itemData=this.itemData.concat(res.data)
        })      
    },
    handleScroll: function(){
      let _time=1
      let _this=this
      if(window.innerHeight + document.body.scrollTop >= (document.body.offsetHeight-50)){
        _this.loading=true
        clearInterval(_this.timeRun)
        _this.timeRun = setInterval(function(){
          _time--
          if(_time==0){
            clearInterval(_this.timeRun)
            _this.start+=5
            _this.getphotoData()               
          }
        },1000) 
      }
    }    
  },
  updated:function(){
    // this.loading=false
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
.ending{
  color: rgba(0, 0, 0, 0.3);
  padding-bottom: .6rem;
  text-align: center;
}
</style>
