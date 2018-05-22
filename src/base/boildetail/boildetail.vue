<template>

	<transition name='boildetal'>
		<div  v-show='boildetalShow' class='boildetalBd'>
			<p @click='hide'>返回</p>
			<ul>
				<li >{{boilD.content}}</li>
			</ul>
		</div>
		

	</transition>

</template>
<script>
export default{
	data(){
		return{
			boildetalShow:false
			
		}
	},
	props:{
		boilD:{
			type:Object
		}
	},
	methods:{
		
		show(){
			this.boildetalShow=true;
		},
		hide(){
			this.boildetalShow=false;
		}

	}
}
</script>
<style scoped>
.boildetalBd{
	z-index:1001;
	position:fixed;
	width:100%;
	top:0;
	left:0;
	bottom:0;
	background:#fff;
	overflow-y:auto;
}
.boildetal-enter, .boildetal-leave-to{
	left:100%;
}
.boildetal-enter-active, .boildetal-leave-active{
	transition:all 0.5s;
}
</style>