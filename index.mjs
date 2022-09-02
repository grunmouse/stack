	function Stack(){
		this.data = [];
		this.top = Stack.symFloor;
	}
	Stack.symFloor = Symbol('floor');
	Stack.isFloor=(value)=>(value===Stack.symFloor);
	Stack.prototype = {
		push:function(obj){
			this.data.push(this.top);
			return this.top = obj;
		},
		pushMany:function(arr){
			this.data.push(this.top, ...arr);
			this.top = this.data.pop();
		},
		pop: function(){
			var ret = this.top;
			this.top = this.data.pop();
			return ret;
		},
		swap: function(){
			var b = this.data[this.data.length-1];
			this.data[this.data.length-1] = this.top;
			this.top = b;
		},
		swap_pop: function(){
			return this.data.pop();
		},
		push_swap: function(obj){
			this.data.push(obj);
		},
		show: function(index){
			if(isNaN(index)){
				throw new Error('Index is NaN');
			}
			index = +index;
			if(index==0){
				return this.top;
			}
			else if(index>this.data.length){
				return Stack.symFloor;
			}
			else{
				return this.data[this.data.length-index];
			}
		},
		popUntil: function(callback){
			while(this.top!=Stack.symFloor && !callback(this.top)){
				this.pop();
			}
			return this.top;
		},
		first: function(){
			return this.data[1];
		},
		existTop:function(){
			return this.top != Stack.symFloor;
		},
		isFloor:function(){
			return this.top == Stack.symFloor;
		},
		toArray:function(){
			return this.data.concat([this.top]);
		},
		toJSON:function(){
			return this.toArray();
		}
	}
	
	export default Stack;