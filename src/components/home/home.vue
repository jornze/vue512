<template>
	<div id='homehead'>
		<tabbar></tabbar>
		<router-view></router-view>
	</div>
</template>
<script>
	import tabbar from "../tab/tabbar"
	export default{
		components:{
		tabbar
		}
	}
	
</script>
<style></style>