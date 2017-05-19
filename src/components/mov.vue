<template>
  <div class="content">
    <h1>「看进去·空」</h1>
    <movDetail v-for="item,index in  itemData"  :movData = "item"  :key="index"></movDetail>
    <vfooter></vfooter>
  </div>
</template>

<script>
import movDetail from './mov/movDetail'
import footer from './common/footer'
export default {
  name: 'photo',
  data () {
    return {
      itemData: []
    }
  },
  components:{
    movDetail,
    'vfooter':footer
  },
  mounted:function(){
    this.getmusicData()
  },
  methods:{
    getmusicData:function(){
      let _url = 'http://v3.wufazhuce.com:8000/api/channel/movie/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android'
      this.$http.get(_url)
        .then((res) => {this.itemData=res.data.data})      
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
</style>
