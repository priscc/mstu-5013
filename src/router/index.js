import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/About',
		name: 'About',
		component: () => import('../views/About.vue')
	},
	{
		path: '/Topic/:id',
		name: 'Topic',
		component: () => import('../views/Topic.vue')
	},
	{
		path: '/Filter',
		name: 'Filter',
		component: () => import('../views/Filter.vue')
	},
	{
		path: '/AddingSubtopic',
		name: 'AddingSubtopic',
		component: () => import('../views/AddingSubtopic.vue')
	},
	{
		path: '/AddingEvents',
		name: 'AddingEvents',
		component: () => import('../views/AddingEvents.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
