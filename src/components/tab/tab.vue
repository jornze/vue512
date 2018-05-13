<template>
	<div class='tab'>
		<router-link to='/home' tag='div' class='tab-item'>
			<div class='tab-link'>
				
				<span>首页</span>
			</div>
		</router-link>
		<router-link to='/find' tag='div' class='tab-item'>
			<div class='tab-link'>
				
				<span>发现</span>
			</div>
		</router-link>
		<router-link to='/message' tag='div' class='tab-item'>
			<div class='tab-link'>
				
				<span>消息</span>
			</div>
		</router-link>
		<router-link to='/my' tag='div' class='tab-item'>
			<div class='tab-link'>
				
				<span>我的</span>
			</div>
		</router-link>
	</div>
</template>
<script>
	
</script>
<style>
	.tab {
  z-index: 1000;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 48px;
  line-height: 48px;
  display: flex;
  font-size: 13px;
  background-color: #F5F5F5;
  box-shadow: inset 0px 1px 1px -1px #A7A7AB;
}
.tab .tab-item {
  flex: 1;
  text-align: center;
}
.tab-link{
  text-align: center;
  height: 100%;
}
.tab-link .ic_container{
  height: 20px;
  line-height: 20px;
  padding-top: 9px;
}
.ic {
  display: inline-block;
  font-size: 22px;
}
.tab .tab-item span{
  display: block;
  height: 48px;
  line-height: 48px;
}
.home{
  width: 28px;
}
.find{
  font-size: 25px;
  width: 26px;
}
.message{
  font-size: 21px;
  width: 20px;
}
.my{
  font-size: 24px;
  width: 28px;
}
.router-link-active .tab-link {
  color: #007AFF;
}
</style>