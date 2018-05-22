<template>
	<transition name="boil">
    <div v-show="showTog" class="boil-list">
      <div class="boil-head">
          <div class="boil-back" @click="hide"><i class="iconfont">&lt;</i>返回</div>
          <span>沸点</span>
      </div>
      <div class="main-boil-list">
        <ul>
            <li class="main-boil-list-item" v-for="item in boilDatas">
                <img :src="item.image">
                <div class="boil-shadow">
                  <div class="boil-bg-title">
                    <div class="boil-list-title">{{item.title}}</div>
                    <span class="join-num">已有{{item.number}}人参加</span>
                  </div>
                </div>
            </li>
        </ul>
      </div>
    </div>
  </transition>
</template>
<script>
export default{
	data(){
		return{
			showTog:false,
			boilDatas:{
			type:Object
			}
		}
	},
	mounted(){
		this.boilDataFetch();
	},
	methods:{
		boilDataFetch(){
			let _this=this;
			this.$http.get('static/data.json').then(function(res){
				_this.boilDatas=res.data.find.boil;
			}).catch(function(err){
				console.log('boildDatas'+err);
			})
		},
		show(){
			this.showTog=true
		},
		hide(){
			this.showTog=false
		},
	}
}
</script>
<style>
::-webkit-scrollbar {display:none}
.boil-list {
    z-index: 1100;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .boil-enter, .boil-leave-to{
  left:100%;
  }
  .boil-enter-active, .boil-leave-active{
  	transition:all 0.5s;
  }
  .boil-head {
    height: 40px;
    width: 100%;
    line-height: 40px;
    color: #000;
    background: #f5f5f7;
    text-align: center;
    box-shadow: inset 0px -1px 1px -1px #A7A7AB;
  }
  .boil-head .boil-back{
    position: absolute;
    padding: 0 10px 0 5px;
  }
  .boil-head .boil-back i{
    color: #007AFF;
    font-size: 20px;
    font-weight: 600;
    padding:0 10px;
  }
  .boil-head span {
    display: block;
  }
  .main-boil-list {
    width: 100%;
    height: auto;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .main-boil-list .main-boil-list-item{
    position: relative;
    display: block;
    width: 100%;
    height: 200px;
  }
  .main-boil-list .main-boil-list-item img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .boil-shadow {
    position: absolute;
    top: 0;
    width: 100%;
    box-shadow: inset 10px 200px 1px rgba(0,0,0,.4);
    color: #fff;
  }
  .boil-shadow .boil-bg-title {
    width: 100%;
    height: 160px;
    margin-top: 40px;
  }
  .boil-bg-title .boil-list-title {
    padding-left: 16%;
    padding-right: 16%;
    line-height: 22px;
    letter-spacing: 1px;
    text-align: center;
  }
  .join-num {
    display: block;
    width:32%;
    height: 28px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 1px;
    font-size: 14px;
    border: 1px solid #fff;
    margin: 20px auto;
  }
</style>