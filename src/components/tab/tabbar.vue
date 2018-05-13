<template>
	<div class='tabbar'>
		<router-link tag='div' to='/home/homeone' class='tabbar-item'>
			<span class='tabbar-link'>首页</span>
		</router-link>
		<router-link tag='div' to='/home/hometwo' class='tabbar-item'>
			<span class='tabbar-link'>前段</span>
		</router-link>
		<router-link tag='div' to='/home/homethr' class='tabbar-item'>
			<span class='tabbar-link'>产品</span>
		</router-link>
		<router-link tag='div' to='/home/homefor' class='tabbar-item'>
			<span class='tabbar-link'>设计</span>
		</router-link>
	</div>
</template>
<script>
  
</script>
<style>
.tabbar {
  z-index: 1000;
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  font-size: 14px;
  box-shadow: inset 0px -1px 1px -1px #A7A7AB;
  background-color: #f5f5f7;
}
.tabbar .tabbar-item {
  flex: 1;
  text-align: center;
}
.tabbar-link{
  display: block;
  width: 100%;
  height: 100%;
}
.router-link-active .tabbar-link{
  color: #007AFF;
  border-bottom: 1px solid #006CFF;
}
.show_set {
  width: 40px;
  height: 100%;
  padding-right: 10px;
  text-align: right;
}
</style>