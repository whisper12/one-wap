<template>
  	<div class="content">
  		<p class="item-pic-date">2017 / 05 / 17</p>
  		<p class="issue-no">VOL.1684</p>
  		<img alt="" class="item-pic-img"src="http://image.wufazhuce.com/Ft_ucFIjHVypUxY_voXO5Za60bcf">
  		<p class="picture-author">摄影 | fenta</p>
  		<p class="picture-content">没有比这件事更为常见：好事归功自己，坏事归罪命运，有理的总是我们，错误的总是命运。</p>
  		<p class="picture-author">拉封丹</p>
  	</div>
</template>

<script>
export default {
  name: 'photoDetail',
  props:{
  	itemDate:{
  		type:[Object,String]
  	}
  },
  data () {
    return {
      msg: ''
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
	.content .picture-content{
		color: #000;
		opacity: .6;
		padding: .25rem;
		line-height: 1.8;
		font-size: .4rem;
	}
</style>
