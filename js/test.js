window.onload = function(){
var app = new Vue({
  el: '#app',
  data: {
    msg: 'Hello Vue!'
  }
});

// 申明式渲染
var app2 = new Vue({
	el:'#app-2',
	data:{
		message:'页面加载于' + new Date()
	}
});
app2.message = '新消息';

// 条件与循环
var app3 = new Vue({
	el:'#app-3',
	data: {
		seen: true
	}
});
// app3.seen = false;  //看不到了
// 循环数组
var app4 = new Vue({
	el:'#app-4',
	data:{
		todos:[{text:'吃饭！'},
		       {text:'睡觉！'},
		       {text:'打豆豆！'}]

	}	
});
app4.todos.push({text:'还有啥？'});

var app6 = new Vue({
	el:'#app-6',
	data:{message:'hello vue.js!'},
	methods:{
		reverseMessage:function () {
			this.message = this.message.split('').reverse().join('');
		}
	}
});

var app5 = new Vue({
	el:'#app-5',
	data:{
		message:"hello vue!"
	}
});

var app7 = new Vue({
	el:'#app-7',
	data:{
		message:''
	}
});

var app8 = new Vue({
   el:'#app-8',
   data:{
   	  selected:'A',
   	  options:[
         {text:'one',value:'A'},
         {text:'two',value:'B'},
         {text:'three',value:'C'}

   	  ]
   }
});

var app9=new Vue({
 el:'#app-9',
 data:{
 	show:true
 }
});

Vue.directive('demo',{
	bind: function(el,binding,vnode){
		var s = JSON.stringify
		el.innerHTML = 
		'name:' + s(binding.name) + '<br>'+
		'value:' +s(binding.value) + '<br>' +
		'expression:' +s(binding.expression) +'<br>' +
		'argument:' +s(binding.arg) +'<br>' +
		'modifiers:' +s(binding.mdifiers) +'<br>'+
		'vnode keys' +Object.keys(vnode).join(',')

	}
});

new Vue({
  el:'#hook-arguments-example',
  data:{
  	message:'hello!'
  }
});






}
