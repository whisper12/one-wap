<template>
  <div class="content">
    <h1>「吃进去·空」</h1>
    <msgDetail v-for="item,index in  itemData"  :photoData = "item"  :key="index"></msgDetail>
    <vfooter></vfooter>
  </div>
</template>

<script>
import msgDetail from './msg/msgDetail'
import footer from './common/footer'
export default {
  name: 'photo',
  data () {
    return {
      itemData: []
    }
  },
  components:{
    msgDetail,
    'vfooter':footer
  },
  computed:{
    idlist(){
      return this.$store.getters.getidList
    }
  },
  mounted:function(){
    this.getphotoData()
  },
  methods:{
    getphotoData:function(){
      let _url = '/jiekou/?start=0&count=5'
      this.$http.get(_url)
        .then((res) => {this.itemData=res.data})      
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
