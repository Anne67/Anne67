window.onload=function (){
	function byclass1(x){//全局获取
		var tags=document.all ? document.all : document.getElementsByTagName('*');
		var arr=[];
		for (var i = 0; i < tags.length; i++) {
			if (tags[i].className==x) {
				arr.push(tags[i]);
			}
		};
		return arr;
	}
	function byclass2(x,y){//局部获取
		var parent=document.getElementById(parentID);
		var tags=parent.all?parent.all:parent.getElementsByTagName('*');
		var arr=[];
		for (var i = 0; i < tags.length; i++) {
			if (tags[i].className==classn) {
				arr.push(tags[i]);
			}
		};
		return arr;
	}
	function byclass3(cassn){//获取class名
		var tags=document.all?document.all:document.getElementsByTagName('*');
		var arr=[];
		for(var i=0;i<tags.length;i++){
			if(tags[i].className.indexOf(classn)!=-1){
				arr.push(tags[i]);
			}
		}
		return arr;
	}
	function getstyle(obj,oStyle){//获取元素样式
		if (obj.currentStyle) {
			return obj.currentStyle[oStyle];
		} else{
			return getComputedStyle(obj,null)[oStyle];
		};
	}
	function nextnode(obj){//获取下一个兄弟节点
		if (obj.nextElementSibling) {
			return obj.nextElementSibling;
		} else{
			return obj.nextSibling;
		};
	}
	function prenode(obj){//获取上一个兄弟节点
		if (obj.previousElementSibling) {
			return obj.previousElementSibling;
		} else{
			return obj.previousSibling;
		};
	}
	function firstnode(obj){//获取第一个子节点
		if (obj.firstElementChild) {
			return obj.firstElementChild;//非IE678支持
		} else{
			return obj.firstChild;//IE678支持
		};
	}
	function lastnode(obj){//获取最后一个子节点
		if (obj.lastElementChild) {
			return obj.lastElementChild;//非IE678支持
		} else{
			return obj.lastChild;//IE678支持
		};
	}
	function zuzhicb(){//阻止事件传播
		if(ev.stopPropagation){
			ev.stopPropagation();
		}else{
			ev.cancelBubble=true;//ie
		}
	}
	function addev(a,b,c){//绑定事件
			if(a.addEventListener){
				a.addEventListener(b,c,false);
			}else{
				a.attachEvent('on'+b,c);//ie
			}
	}
	function removeev(a,b,c){//移除事件
		if(a.removeEventListener){
			a.removeEventListener(b,c,false);
		}else{
			a.detachEvent('on'+b,c);//ie
		}
	}
	function zuzhimr(ev){
		var ev=ev||window.event;
		if (ev.preventDefault) {
			ev.preventDefault(); //非IE阻止默认事件
		} else{
			ev.returnValue=false; //IE阻止默认事件
		};
	}
	
	function scrolltop(x){
		var scrollTop=document.body.scrollTop||
		document.documentElement.scrollTop;
	}
	
}
