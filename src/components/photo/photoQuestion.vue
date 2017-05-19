<template>
<div class="text-detail" v-if="pageData">
	<p class="text-title">{{pageData.question_title}}</p>
	<hr class="sort-separate-line sort-separate-line15">
	<p class="text-author">{{pageData.asker.user_name}}问道</p>
	<p class="text-content" v-html="pageData.question_content"></p>
	<div class="separate-line"></div>
	<p class="text-author">{{pageData.answerer.user_name}}说</p>
	<div class="text-content" v-html="pageData.answer_content"></div>
	<p class="text-editor">{{pageData.charge_edt}} {{pageData.charge_email}}</p>
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
      pageData: ''
    }
  },
  components:{
  	'vfooter':footer
  },
  mounted: function(){
  	let id = this.$route.params.id
  	this.$http.get('http://v3.wufazhuce.com:8000/api/question/' + id + '?channel=wdj&source=channel_reading&source_id=9264&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android')
  		.then(res => {this.pageData=res.data.data})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
