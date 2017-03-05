new Vue({
	el : "#app",
	data : {
		newTodo:'',
		message : "Hello,Vue.js!",
		greeting:true,
		url:"www.baidu.com",
		todos:[
			{
				text:"Add some todos"
			}
		],
		},
		methods:{
			addTodo:function(){
				var text = this.newTodo.trim();
				if(text){
					this.todos.push({
						text:text
					});
					this.newTodo = '';
				}
			},
			removeTodo:function(index){
				this.todos.splice(index,1);
			},
			disgreeting:function(){
				this.greeting= !this.greeting;
			}
		
		},
	}); 