<template>
<div class="text-detail" v-if="pageData">
	<div style="height:210px;background-size:cover" :style="{backgroundImage:'url('+img_url.detailcover+')'}"></div>
	<p style="text-align:center;margin:10px 0;color:rgba(0, 0, 0, 0.3)">· {{img_url.title}} ·</p>
	<p class="text-title">{{pageData.title}}</p>
	<hr class="sort-separate-line sort-separate-line15">
	<p class="text-author">文 / {{pageData.user.user_name}}</p>
	<p class="text-content" v-html="pageData.question_content"></p>
	<div class="separate-line"></div>
	<!-- <p class="text-author">{{pageData.answerer.user_name}}说</p> -->
	<div class="text-content" v-html="pageData.content"></div>
	<p class="text-editor">{{pageData.charge_edt}} {{pageData.editor_email}}</p>
	<p class="text-editor">{{pageData.copyright}}</p>
	<!-- <vfooter></vfooter> -->
<!-- 	<p class="page-sparate-title">作者</p>
	<hr class="sort-separate-line" style="margin-top: 15px;">
	<div class="page-table">
		<div style="display:inline-block">
			<img :src="pageData.author[0].web_url" class="one-image-exclude avater" v-if="pageData">
		</div>
		<div style="display:inline-block;width:80%;">
			<p class="page-title" v-if="pageData">{{pageData.author[0].user_name}}</p>
			<p class="page-summary" v-if="pageData">{{pageData.author[0].desc}}</p>
		</div>
	</div> -->
</div>
</template>

<script>
import footer from '../common/footer'
export default {
  name: 'photoPage',
  data () {
    return {
      pageData: '',
      img_url:''
    }
  },
  components:{
  	'vfooter':footer
  },
  mounted: function(){
  	let id = this.$route.params.id
  	this.$http.get('http://v3.wufazhuce.com:8000/api/movie/detail/'+ id +'?channel=wdj&source=summary&source_id=9095&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android')
  		.then(res => (this.img_url=res.data.data))
  	this.$http.get('http://v3.wufazhuce.com:8000/api/movie/' + id + '/story/1/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android')
  		.then(res => {this.pageData=res.data.data.data[0]})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
