<template>
<div class="text-detail"  v-if="pageData">
	<p class="text-title">{{pageData.hp_title}}</p>
	<hr class="sort-separate-line sort-separate-line15">
	<p class="text-author">文／{{pageData.hp_author}}</p>
	<div class="text-content" v-html="pageData.hp_content"></div>
	<p class="text-editor">{{pageData.hp_author_introduce}} {{pageData.editor_email}}</p>
	<p class="page-sparate-title">作者</p>
	<hr class="sort-separate-line" style="margin-top: 15px;">
	<div class="page-table">
		<div style="display:inline-block">
			<img :src="pageData.author[0].web_url" class="one-image-exclude avater">
		</div>
		<div style="display:inline-block;width:80%;margin-left:10px;">
			<p class="page-title">{{pageData.author[0].user_name}}</p>
			<p class="page-summary">{{pageData.author[0].desc}}</p>
		</div>
	</div>
</div>
</template>

<script>
export default {
  name: 'photoPage',
  data () {
    return {
      pageData: ''
    }
  },
  mounted: function(){
  	let id = this.$route.params.id
  	this.$http.get('http://v3.wufazhuce.com:8000/api/essay/' + id + '?channel=wdj&source=channel_reading&source_id=9264&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android')
  		.then(res => {this.pageData=res.data.data})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
