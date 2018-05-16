<template>
	<div id='homehead'>
		<div class='tabbar'>
			<div  v-for='home in homes' @click='currentTab=home.id' :class="['tabbar-item',{homeactive:currentTab==home.id}]">{{home.msg}}</div>
			
		</div>
		<keep-alive>
			<transition name='home'>
			<component v-bind:is='currentTabComponent' :class="['homeCon']">
			</component>
			</transition>
		</keep-alive>
	</div>
</template>
<script>
	import home1 from "./homeone/home1"
	import home2 from "./hometwo/home2"
	import home3 from "./homethr/home3"
	import home4 from "./homefor/home4"
	
	export default{
		components:{
			home1,
			home2,
			home3,
			home4
		},
		data:function(){
			return{
				currentTab:'1',
				homes:[
					{
					'id':'1',
					'msg':'首页'
					},
					{
					'id':'2',
					'msg':'前端'
					},
					{
					'id':'3',
					'msg':'产品'
					},
					{
					'id':'4',
					'msg':'设计'
					}
				]
			}
			
		},
		computed:{
			currentTabComponent:function(){
				return 'home'+ this.currentTab.toLowerCase();
			}
		}

	}


	
</script>
<style>
#homehead{
	position:relative;
	min-height:800px;
}
.home-enter-active{
	top:0;
	
	transition:all 0.8s;
}
 .home-leave-active{	
 	top:0;
	transition:all 0.8s;
 }
.home-enter, .home-leave-to{
	top:-830px;

}
.homeCon{
	position:absolute;
	width:100%;
	min-height:800px;
}
.homeone{
	
}
.hometwo{
	
}
.homethr{
	
}
.homefor{
	
}
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
.homeactive{
	border-bottom:1px solid blue;
}

</style>