<template>
  <div class="content" @click="swichFlag(false)">
    <!-- <h1>「ONE · 图文」</h1> -->
    <vnav :class="{'on':flag}" :swichFlag="swichFlag" :text="'「吃进去·空」'"></vnav>
    <photoDetail v-for="item,index in  itemData"  :photoData = "item"  :key="index"></photoDetail>
    <!-- <vfooter></vfooter> -->
  </div>
</template>

<script>
import photoDetail from './photo/photoDetail'
// import footer from './common/footer'
import nav from './common/navigator'
export default {
  name: 'photo',
  data () {
    return {
      itemData: [],
      flag:false
    }
  },
  components:{
    photoDetail,
    'vnav':nav
    // 'vfooter':footer
  },
  computed:{
    idlist(){
      return this.$store.getters.getidList
    }
  },
  mounted:function(){
    if(!this.$store.getters.getidList){
      let _idUrl = 'http://v3.wufazhuce.com:8000/api/onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=web'
      this.$http.get(_idUrl)
        .then(res => {
          this.$store.dispatch('setidList',res.data.data)
          this.getphotoData()
        })     
    }else{
      this.getphotoData()
    }
  },
  methods:{
    swichFlag:function(item){
      this.flag = item
    },    
    getphotoData:function(){
      let _url = 'http://v3.wufazhuce.com:8000/api/onelist/'+ this.idlist[0] +'/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=web'
      this.$http.get(_url)
        .then((res) => {this.itemData=res.data.data.content_list})      
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
