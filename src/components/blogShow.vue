<!-- shows added blog pages  -->


<template>
	<div id="blog-show">
		<h1>Blog Article</h1>
		<div v-for="blog in blogs" class="singleblog">
			<router-link :to="`/blog/${blog.id}`"
			>{{blog.title}}</router-link>
			<article>{{blog.description}}</article>
		</div>
	</div>
</template>

<script>
import  { db } from '@/main'

export default {
	data: function(){
		return{
			blogs:[]
		}
	},
	methods: {
		readTodos() {
			let todosRef = db.collection('tester');
			todosRef.get().then(snapshot => {
				var todos = [];
				snapshot.forEach(doc => {
					todos.push(doc.data());
				});
				this.blogs = todos;
			})
		}
	},
	// created(){
	// 	this.$http.get('https://ap-studybit.firebaseio.com/post.json').then(function(data){
	// 		return data.json();
	// 	}).then(function(data){
	// 		var blogsArray = [];
	// 		for (let key in data){
	// 			data[key].id = key
	// 			blogsArray.push(data[key]);
	// 		}
	// 		this.blogs = blogsArray;
	// 	});
	// },
	mounted() {
		this.readTodos(); 
	}
}

</script>

<style type="text/css">
	#blog-show{
		max-width: 800px;
		margin: 0 auto;
	}
	.singleblog{
		padding: 20px;
		margin: 20px 0;
		box-sizing: border-box;
		background: #eee;		 
	}
</style>
