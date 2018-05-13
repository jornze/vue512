import Vue from 'vue'
import Router from 'vue-router'
import Tab from '@/components/tab/tab'
import Tabbar from '@/components/tab/tabbar'
import Home from '@/components/home/home'
import Homeone from '@/components/home/homeone/homeone'
import Hometwo from '@/components/home/hometwo/hometwo'
import Homethr from '@/components/home/homethr/homethr'
import Homefor from '@/components/home/homefor/homefor'
import Find from '@/components/find/find'
import Message from '@/components/message/message'
import My from '@/components/my/my'
Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'/',
  		redirect:'./home'
  	},
    {
      path: '/home',
      component: Home,
      children:[
      		{
      			path:'/',
      			redirect:'./homeone'
      		},
      		{
      			path:'/home/homeone',
      			component:Homeone
      		},
      		{
      			path:'/home/hometwo',
      			component:Hometwo
      		},
      		{
      			path:'/home/homethr',
      			component:Homethr
      		},
      		{
      			path:'/home/homefor',
      			component:Homefor
      		}
      ]
    },
    {
      	path:'/find',
      	component:Find
    },
    {
      	path:'/message',
      	component:Message
    },
    {
      	path:'/my',
      	component:My
    },
  ]
})
