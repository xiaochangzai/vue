new Vue({
	el:"#app",
	data:{
		msg:""
	},
	methods:{
		filterA:function(a){
			return a.toUpperCase();
		},
		filterB:function(a){
			return a.toLowerCase();
		}
	}
});
