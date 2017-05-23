<template>
<div>
	<div>
	  	<div class="content msg music" v-if="musicData.content_type==4" @click="goToPageMu(musicData.content_id)">
	  		<p class="sub_title">- 音乐 -</p>
	  		<h2>{{musicData.title}}</h2>
	  		<p class="msg-author">文 / {{musicData.author.user_name}}</p>
	  		<div class="msg-pic-wrap">
	  			<div class="msg-pic-bg"></div>
	  			<div class="msg-pic-cover">
		  			<img class="item-pic-img" :src="musicData.img_url">
		  			<img class="play-btn" src="http://image.wufazhuce.com/play_btn_empty.png">
	  			</div>
	  		</div>
	  		<p class="music-info">{{musicData.music_name}} · {{musicData.audio_author}} · {{musicData.audio_album}}</p>
	  		<p class="msg-content">{{musicData.forward}}</p>
	  	</div>	  	  	 	
  	</div>
</div>
</template>

<script>
export default {
  name: 'musicDetail',
  props:{
  	musicData:{
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
  		return this.musicData.post_date.slice(0,11)
  	}
  },
  methods:{
  	goToPageMu: function(id){
  		let path = '/photo/photoMusic/'+id
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
		/*width: 100%;*/
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
		height: 5.5rem;
		position: relative;
	}
	.msg-pic-bg{
		position: absolute;
		box-shadow: 0 0 0.625rem 0.125rem rgba(230, 230, 230, 0.5);
		left: 0;
		top: 0;
		width: 7.8rem;
		height: 5.5rem;
		border-radius:0 4rem 4rem 0;
	}
	.msg-pic-cover{
		position: absolute;
		border-radius: 100%;
		overflow: hidden;
		width: 5rem;
		height: 5rem;
		left: 50%;
		margin-left: -2.5rem;
		margin-top: .25rem;
	}
	.music .msg-pic-wrap img:nth-child(1){
		/*width: auto;*/
		/*transform: scale(.8);*/
		/*border-radius: 100%;*/
		height: 100%;
		margin:0;
		display: inline-block;
		position: relative;
		max-width: none;
	}
	.play-btn{
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top:-26px;
		margin-left: -26px;
	}
</style>
