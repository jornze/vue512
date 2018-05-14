<template>
	<div class='find'>
		<div class='find-head' @click='selectSearch()'>
			<div class="search-container">
				<div class='searcheBox'>
					搜索
				</div> 
			</div>
		</div>
		<search ref="search"></search>
	</div>

</template>
<script>	
import search from "base/search/search.vue"
	export default{
		components:{
			search
		},
		methods:{
			selectSearch(){
				 this.$refs.search.show();
			}
		}
	}
</script>
<style>
#find {
    overflow: hidden;
    padding-bottom: 48px;
}
.find-head {
    z-index: 1000;
    position: fixed;
    width: 100%;
    height: 40px;
    top: 0;
    background-color: #fff;
    text-align: center;
    box-shadow: inset 0px -1px 1px -1px #A7A7AB;
}
.find-roll-container {
    position: absolute;
    width: 100%;
    top: 40px;
    bottom: 200px;
}
.content-wrapper {

}
.search-container {
    width: 95%;
    height: 30px;
    padding-top: 5px;
    padding-left: 2.5%;
}
.searchBox {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background-color: #E0E1E5;
    border-radius: 5px;
}
</style>