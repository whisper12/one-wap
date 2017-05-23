<template>
<div>
	<div>
	  	<div class="content photo" v-if="photoData.content_type==0">
	  		<p class="item-pic-date">{{post_date}}</p>
	  		<p class="issue-no">{{photoData.volume}}</p>
	  		<img alt="" class="item-pic-img" :src="photoData.img_url">
	  		<p class="picture-author">{{photoData.title}} | {{photoData.pic_info}}</p>
	  		<p class="picture-content">{{photoData.forward}}</p>
	  		<p class="picture-author">{{photoData.words_info}}</p>
	  	</div>	

	  	<div class="content msg" v-if="photoData.content_type==1" @click="goToPage(photoData.content_id)">
	  		<p class="sub_title">- {{photoData.tag_list[0].title}} -</p>
	  		<h2>{{photoData.title}}</h2>
	  		<p class="msg-author">文 / {{photoData.author.user_name}}</p>
	  		<div class="msg-pic-wrap"><img class="item-pic-img" :src="photoData.img_url"></div>
	  		<p class="msg-content">{{photoData.forward}}</p>
	  	</div>

	  	<div class="content msg" v-if="photoData.content_type==2" @click="goToPageS(photoData.item_id)">
	  		<p class="sub_title">- 连载 -</p>
	  		<h2>{{photoData.title}}</h2>
	  		<p class="msg-author">文 / {{photoData.author.user_name}}</p>
	  		<div class="msg-pic-wrap"><img class="item-pic-img" :src="photoData.img_url"></div>
	  		<p class="msg-content">{{photoData.forward}}</p>
	  	</div>

	  	<div class="content msg" v-if="photoData.content_type==3" @click="goToPageQ(photoData.content_id)">
	  		<p class="sub_title">- 问答 -</p>
	  		<h2>{{photoData.title}}</h2>
	  		<p class="msg-author">文 / {{photoData.author.user_name}}</p>
	  		<div class="msg-pic-wrap"><img class="item-pic-img" :src="photoData.img_url"></div>
	  		<p class="msg-content">{{photoData.forward}}</p>
	  	</div>

	  	<div class="content msg music" v-if="photoData.content_type==4" @click="goToPageMu(photoData.content_id)">
	  		<p class="sub_title">- 音乐 -</p>
	  		<h2>{{photoData.title}}</h2>
	  		<p class="msg-author">文 / {{photoData.author.user_name}}</p>
	  		<div class="msg-pic-wrap">
	  			<img class="item-pic-img" :src="photoData.img_url">
	  			<img class="play-btn" src="http://image.wufazhuce.com/play_btn_empty.png">
	  		</div>
	  		<p class="music-info">{{photoData.music_name}} · {{photoData.audio_author}} · {{photoData.audio_album}}</p>
	  		<p class="msg-content">{{photoData.forward}}</p>
	  	</div>	  	

	  	<div class="content msg mov" v-if="photoData.content_type==5" @click="goToPageM(photoData.content_id)">
	  		<p class="sub_title">- 影视 -</p>
	  		<h2>{{photoData.title}}</h2>
	  		<p class="msg-author">文 / {{photoData.author.user_name}}</p>
	  		<div class="msg-pic-wrap"><img class="item-pic-img" :src="photoData.img_url"></div>
	  		<p class="msg-content">{{photoData.forward}}</p>
	  		<p class="mov-name">— —《{{photoData.subtitle}}》</p>
	  	</div>	  	 	
  	</div>
</div>
</template>

<script>
export default {
  name: 'photoDetail',
  props:{
  	photoData:{
  		type:[Object,String,Array]
  	}
  },
  data () {
    return {
      msg: ''
    }
  },
  computed:{
  	post_date(){
  		return this.photoData.post_date.slice(0,11)
  	}
  },
  methods:{
  	goToPage: function(id){
  		let path = '/photo/photoMsg/'+id
  		this.$router.push({path:path})
  	},
  	goToPageQ: function(id){
  		let path = '/photo/photoQuestion/'+id
  		this.$router.push({path:path})
  	},
  	goToPageM: function(id){
  		let path = '/photo/photoMov/'+id
  		this.$router.push({path:path})
  	},
  	goToPageMu: function(id){
  		let path = '/photo/photoMusic/'+id
  		this.$router.push({path:path})  		
  	},
  	goToPageS: function(id){
  		let path = '/photo/photoSerial/'+id
  		this.$router.push({path:path})  		
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.content{
		padding-bottom: .2rem;
		margin-bottom:.3rem;
		background-color: #fff;
	    box-shadow: 0 2px 0 0 rgba(230, 230, 230, 0.5);	
	}
	.content p {
    	margin: .2rem;
    	margin-top: 0;
    	color: #808080;
	}
	.item-pic-date{
		color: #000000;
	    opacity: 0.6;
	    font-size: .55rem;
	    line-height: .57rem;
	    text-align: center;
	    padding-top: 16px;
	    font-family: 'Courier New';
	}
	.issue-no{
		margin-top:.3rem;
	}
	.issue-no, .picture-author {
    /* float: right; */
	    color: #808080;
	    font-size: .35rem;
	    line-height: .37rem;
	    text-align: center;
	}
	.item-pic-img{
		width: 100%;
		display: block;
		margin-bottom: .5rem;
	}
	.content .picture-content,.msg .msg-content{
		color: #000;
		opacity: .6;
		padding: .25rem;
		line-height: 1.8;
		font-size: .4rem;
	}
	.msg-pic-wrap{
		padding: .3rem .6rem 0 .3rem;
		position: relative;
	}
	.msg h2{
		color: #000;
		padding: .3rem;
		line-height: 1.5;
	}
	.msg .msg-content,.music-info{
		padding: 0 .3rem;
	}
	.msg .msg-author{
		margin: 0 .3rem;
		font-size: .35rem;
	}
	.content .sub_title{
		text-align: center;
		padding: .2rem 0;
		margin:0;
	}
	.mov-name{
		position: relative;
		text-align: right;
		padding-right: 1rem;
	}
	.music .msg-pic-wrap{
		box-sizing: border-box;
		padding: 0;
		text-align: center;
	}
	.music .msg-pic-wrap img:nth-child(1){
		width: 80%;
		transform: scale(.8);
		border-radius: 100%;
		margin:0;
		display: inline-block;
	}
	.play-btn{
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top:-26px;
		margin-left: -26px;
	}
</style>
