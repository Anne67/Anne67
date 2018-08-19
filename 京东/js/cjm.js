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
function byclass2(classn){//获取class名
	var tags=document.all?document.all:document.getElementsByTagName('*');
	var arr=[];
	for(var i=0;i<tags.length;i++){
		if(tags[i].className.indexOf(classn)!=-1){
			arr.push(tags[i]);
		}
	}
	return arr;
}
function byclass3(m,n){//局部获取
	var m=document.getElementById(m);
	var tags=m.all?m.all:m.getElementsByTagName('*');
	var arr=[];
	for (var i = 0; i < tags.length; i++) {
		if (tags[i].className==n) {
			arr.push(tags[i]);
		}
	};
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
//封装的函数
var c3=document.getElementById('c3');
var c4=document.getElementById('c4');
var c5=document.getElementById('c5');
addev(c3,'mouseover',function(){
	c4.style.display='block';
	c4.style.borderTop='none';
	c3.style.backgroundColor='#fff';
	c5.style.top='-6'+'px';
});
addev(c3,'mouseout',function(){
	c4.style.display='none';
	c3.style.backgroundColor='#f1f1f1';
	c5.style.top='-15'+'px';
});
var as=c4.getElementsByTagName('a');
var c7=document.getElementById('c7');
for(var i=0;i<as.length;i++){
	addev(as[i],'click',function(){
		for(var i=0;i<as.length;i++){
			if(as[i]==this){
				as[i].className='c6';
				c7.innerHTML=as[i].innerText;
				c4.style.display='none';
			}else{
				as[i].className='';
			}			
		}
	})
}
var c12=document.getElementById('c12');
var c13=document.getElementById('c13');
var c15=document.getElementById('c15');
addev(c12,'mouseover',function(){
	c13.style.display='block';	
	c15.style.top='-6'+'px';
	c13.style.borderTop='none';
	c12.style.backgroundColor='#fff';
});
addev(c12,'mouseout',function(){
	c13.style.display='none';	
	c15.style.top='-15'+'px';
	c12.style.backgroundColor='#f1f1f1';
});
var c24=document.getElementById('c24');
var c25=document.getElementById('c25');
var c31=document.getElementById('c31');
var c26=document.getElementById('c26');
addev(c24,'mouseover',function(){
	c25.style.display='block';	
	c31.style.top='-6'+'px';
	c25.style.borderTop='none';
	c24.style.backgroundColor='#fff';
	c26.style.backgroundImage='url(img/2.jpg)';
});
addev(c24,'mouseout',function(){
	c25.style.display='none';	
	c31.style.top='-15'+'px';
	c24.style.backgroundColor='#f1f1f1';
	c26.style.backgroundImage='url(img/9.jpg)';
});
var c39=document.getElementById('c39');
var c41=document.getElementById('c41');
var c42=document.getElementById('c42');
addev(c39,'mouseover',function(){
	c41.style.display='block';	
	c42.style.top='-6'+'px';
	c41.style.borderTop='none';
	c39.style.backgroundColor='#fff';
});
addev(c39,'mouseout',function(){
	c41.style.display='none';	
	c42.style.top='-15'+'px';
	c39.style.backgroundColor='#f1f1f1';
});
var c44=document.getElementById('c44');
var c46=document.getElementById('c46');
var c45=document.getElementById('c45');
addev(c44,'mouseover',function(){
	c46.style.display='block';	
	c45.style.top='-6'+'px';
	c46.style.borderTop='none';
	c44.style.backgroundColor='#fff';
});
addev(c44,'mouseout',function(){
	c46.style.display='none';	
	c45.style.top='-15'+'px';
	c44.style.backgroundColor='#f1f1f1';
});
var c52=document.getElementById('c52');
var c54=document.getElementById('c54');
var c53=document.getElementById('c53');
addev(c52,'mouseover',function(){
	c54.style.display='block';	
	c53.style.top='-6'+'px';
	c54.style.borderTop='none';
	c52.style.backgroundColor='#fff';
});
addev(c52,'mouseout',function(){
	c54.style.display='none';	
	c53.style.top='-15'+'px';
	c52.style.backgroundColor='#f1f1f1';
});
//头部
var c63=document.getElementById('c63');

var c75b4=document.getElementById('c75b4');
var iptc64=c63.getElementsByTagName('input')[0];
iptc64.onfocus=function(){
	iptc64.value='';
}
iptc64.onblur=function(){
	if(iptc64.value==''){
		iptc64.value='海尔';
	}
}
iptc64.onkeyup=function(){
	script=document.createElement('script');
	var url='http://suggestion.baidu.com/su?cb=wenzi&wd='+iptc64.value+'&t='+new Date().getTime();
	script.src=url;
	document.body.appendChild(script);
}
function wenzi(json){
	c75b4.innerHTML='';
	for(var i=0;i<json.s.length;i++){
		c75b4.innerHTML+='<p>'+json.s[i]+'</p>';
	}
	c75b4.innerHTML=c75b4.innerHTML+'<p id="c75b6">'+'</p>'+'<p id="c75b5" class="c75b5">'+'关闭'+'</p>';
	var c75b5=document.getElementById('c75b5');					
	c75b5.onclick=function(){
		c75b4.innerHTML='';
	}
}
var c66=document.getElementById('c66');
var c67=document.getElementById('c67');
var c72=document.getElementById('c72');
var c74=document.getElementById('c74');
addev(c66,'mouseover',function(){
	c72.style.display='block';
	c74.style.display='block';
	c67.style.backgroundColor='#fff';
	c67.style.borderBottom='none';
	c66.style.boxShadow='0px 0px 1px 1px #f4f4f4';
});
addev(c66,'mouseout',function(){
	c72.style.display='none';
	c74.style.display='none';
	c67.style.backgroundColor='#f9f9f9';
	c67.style.borderBottom='1px solid #dfdfdf';
	c66.style.boxShadow='';
});
var c82=document.getElementById('c82');
var ul15=c82.getElementsByTagName('ul');
var li15=c82.getElementsByTagName('li');
var c83s=byclass1('c83');
var c84s=byclass1('c84');
var c100s=byclass1('c100');
var c77=document.getElementById('c77');
for(var i=0;i<ul15.length;i++){
	addev(ul15[i],'mouseover',function(){
		var a=document.documentElement.scrollTop||document.body.scrollTop;
		c77.style.zIndex=300;
		for(var i=0;i<ul15.length;i++){
			if(ul15[i]==this){
				li15[i].style.display='block';
				if(a<174){
					li15[i].style.top=46+'px';
					c100s[i].style.height=(li15[i].offsetHeight-466)+'px';
				}else{
					li15[i].style.top=(a-134)+'px';
					c100s[i].style.height=(a-180)+'px';
				}
				c83s[i].style.backgroundColor='#f7f7f7';
				c84s[i].style.display='none';
			}else{
				li15[i].style.display='none';
				c100s[i].style.height=0+'px';
			}	
		}
	})
	addev(ul15[i],'mouseout',function(){
		c77.style.zIndex=10;
		for(var i=0;i<ul15.length;i++){
			if(ul15[i]==this){
				li15[i].style.display='none';
				c83s[i].style.backgroundColor='#c81623';
				c84s[i].style.display='block';
				c100s[i].style.height=0+'px';
			}else{
				li15[i].style.display='none';
			}	
		}
	})
}
//一楼左侧
var c110=document.getElementById('c110');
var c113=document.getElementById('c113');
var c114=document.getElementById('c114');
var a114=c114.getElementsByTagName('a');
var p110=c110.getElementsByTagName('p');
var span113=c113.getElementsByTagName('span');
var t110=null,t1102=null;
var x110=0;
huan();
function huan(){
	clearInterval(t110);
	t110=setInterval(function(){
		x110++;
		if(x110>=a114.length){
			x110=0;
			bian();
		}
		bian();
	},5000)
}
function bian(){
	for(var i=0;i<a114.length;i++){
		a114[i].style.opacity=0;
		span113[i].style.backgroundColor='#3e3e3e';
	}
	span113[x110].style.backgroundColor='#b61b1f';
	clearInterval(t1102);
	var y=0.4;
	t1102=setInterval(function(){
		y+=0.01;
		if(y>=1){
			y=1;
		}
		a114[x110].style.opacity=y;
	},10)	
}		
addev(p110[0],'click',function(){
	clearInterval(t1102);
	x110--;
	if(x110<0){
		x110=a114.length-1;
		bian();
	}
	bian();
})
addev(p110[1],'click',function(){
	clearInterval(t1102);
	x110++;
	if(x110>=a114.length){
		x110=0;
		bian();
	}
	bian();
})
for(var i=0;i<span113.length;i++){
	span113[i].index=i;
	addev(span113[i],'mouseover',function(){
		clearInterval(t1102);
		x110=this.index;
		bian();
	})
	addev(span113[i],'mouseout',function(){
		clearInterval(t1102);
		bian();
	})
}
var c139=document.getElementById('c139');
var c139b1=document.getElementById('c139b1');
var c139b2=document.getElementById('c139b2');
c139.onfocus=function(){
	c139.value='';
	c139.style.borderColor='#00A6FC';
}
c139.onblur=function(){
	if(c139.value==''){
		c139.value='请输入手机号码';
		c139.style.borderColor='#ccc';
	}
}
c139b1.onfocus=function(){
	c139b1.value='';
	c139b1.style.borderColor='#00A6FC';
}
c139b1.onblur=function(){
	if(c139b1.value==''){
		c139b1.value='请输入手机号码';
		c139b1.style.borderColor='#ccc';
	}
}
c139b2.onfocus=function(){
	c139b2.value='';
	c139b2.style.borderColor='#00A6FC';
}
c139b2.onblur=function(){
	if(c139b2.value==''){
		c139b2.value='请输入手机号码';
		c139b2.style.borderColor='#ccc';
	}
}
var c158s=byclass1('c158');
var c157s=byclass1('c157');
addev(c157s[0],'click',function(){
	if(c157s[0].checked==''){
		c158s[0].style.display='none';
	}else{
		c158s[0].style.display='block';
	}
}) 
addev(c157s[1],'click',function(){
	if(c157s[1].checked==''){
		c158s[1].style.display='none';
	}else{
		c158s[1].style.display='block';
	}
}) 
var c147s=byclass1('c147');
var c148s=byclass1('c148');
var c149s=byclass1('c149');
addev(c148s[0],'click',function(){
	var a=c147s[0].value;
	var b=c149s[0].value;
	c147s[0].value=b;
	c149s[0].value=a;
})
addev(c148s[1],'click',function(){
	var a=c147s[1].value;
	var b=c149s[1].value;
	c147s[1].value=b;
	c149s[1].value=a;
})

var c178=document.getElementById('c178');
var c119=document.getElementById('c119');
var c177=document.getElementById('c177');
var a177=c177.getElementsByTagName('a');
var c118=document.getElementById('c118');
var li118=c118.getElementsByTagName('li');
for(var i=0;i<a177.length;i++){
	a177[i].index=i;
	addev(a177[i],'mouseover',function (){
		for(var i=0;i<a177.length;i++){
			if(a177[i]==this){
				li118[i].style.display='block';
				c119.style.top=-40+'px';
				c119.style.height=69+'px';
				a177[i].style.borderBottom='none';
				c178.style.display='block';
				c178.style.left=x*62+'px';
				c145.style.display='block';
			}else{
				li118[i].style.display='none';
				a177[i].style.borderBottom='1px solid #e8e8e7';
			}
		}
		
		
	})
};
var c145=document.getElementById('c145');
var cj14=document.getElementById('cj14');
addev(c145,'click',function(){
	cj14.style.display='block';
	c145.style.display='none';
	c119.style.top=-1+'px';
	c119.style.height=209+'px';
	c178.style.display='none';
	for(var i=0;i<a177.length;i++){
		a177[i].style.borderBottom='1px solid #e8e8e7';
	}
	for(var i=0;i<li118.length;i++){
		li118[i].style.display='none';
	}
	cj14.onmouseout=function(){
		cj14.style.display='none';
	}
})
var c141=document.getElementById('c141');
var em141=c141.getElementsByTagName('em');
c140.oninput=function(){
	em141[0].innerHTML=c140.value-0.2*(c140.value/10);
	if(c140.value<50){
		em141[1].innerHTML=c140.value/10+'1.0';
	}else{
		em141[1].innerHTML=c140.value;
	}	
}
var c141b=document.getElementById('c141b');
var em141b=c141b.getElementsByTagName('em');
c185.oninput=function(){
	if(c185.value==50){
		em141b[0].innerHTML='7.5';
		em141b[1].innerHTML='10.0';
	}else if(c185.value==100){
		em141b[0].innerHTML='9.5';
		em141b[1].innerHTML='20.0';
	}else if(c185.value==200){
		em141b[0].innerHTML='19.9';
		em141b[1].innerHTML='20.5';
	}else if(c185.value==300){
		em141b[0].innerHTML='29.0';
		em141b[1].innerHTML='29.9';
	}else if(c185.value==500){
		em141b[0].innerHTML='49.0';
		em141b[1].innerHTML='50.0';
	}
};
var c184=document.getElementById('c184');
var c137=document.getElementById('c137');
var dl137=c137.getElementsByTagName('dl');
var var138=c137.getElementsByTagName('var');
for(var i=0;i<var138.length;i++){
	var138[i].index=i;
	addev(var138[i],'mouseover',function(){
		for(var i=0;i<var138.length;i++){
			dl137[i].style.display='none';
			var138[i].style.backgroundColor='#fff';
			var138[i].style.color='#666';
		}
		var xx=this.index
		dl137[this.index].style.display='block';
		var138[this.index].style.backgroundColor='#c81623';
		var138[this.index].style.color='#fff';
		c184.style.display='block';
		c184.style.left=33+xx*60+'px';
	})
}
var slt137=c137.getElementsByTagName('select');
for(var i=0;i<slt137.length;i++){
	slt137[i].onfocus=function(){
		for(var i=0;i<slt137.length;i++){
			if(slt137[i]==this){
				slt137[i].style.borderColor='#00A6FC';
			}else{
				slt137[i].style.borderColor='#ccc';
			}
		}
	}	
	slt137[i].onblur=function(){
		for(var i=0;i<slt137.length;i++){
			if(slt137[i]==this){
				slt137[i].style.borderColor='#ccc';
			}else{
				slt137[i].style.borderColor='#ccc';
			}
		}
	}		
}
var c192=document.getElementById('c192');
var c191=document.getElementById('c191');
var c190=document.getElementById('c190');
var dl192=c192.getElementsByTagName('dl');
var var190=c190.getElementsByTagName('var');
for(var i=0;i<var190.length;i++){
	var190[i].index=i;
	addev(var190[i],'mouseover',function(){
		for(var i=0;i<var190.length;i++){
			dl192[i].style.display='none';
			var190[i].style.backgroundColor='#fff';
			var190[i].style.color='#666';
		}
		var xx=this.index
		dl192[this.index].style.display='block';
		var190[this.index].style.backgroundColor='#c81623';
		var190[this.index].style.color='#fff';
		c191.style.display='block';
		c191.style.left=20+xx*34+'px';
	})
}
var sl192=c192.getElementsByTagName('select');
for(var i=0;i<sl192.length;i++){
	sl192[i].onfocus=function(){
		for(var i=0;i<sl192.length;i++){
			if(sl192[i]==this){
				sl192[i].style.borderColor='#00A6FC';
			}else{
				sl192[i].style.borderColor='#ccc';
			}
		}
	}	
	sl192[i].onblur=function(){
		for(var i=0;i<sl192.length;i++){
			if(sl192[i]==this){
				sl192[i].style.borderColor='#ccc';
			}else{
				sl192[i].style.borderColor='#ccc';
			}
		}	
	}		
}
var c159=document.getElementById('c159');
var cj2=document.getElementById('cj2');
var cj1=document.getElementById('cj1');
var dl159=c159.getElementsByTagName('dl');
var varcj1=cj1.getElementsByTagName('var');

for(var i=0;i<varcj1.length;i++){
	varcj1[i].index=i;
	addev(varcj1[i],'mouseover',function(){
		for(var i=0;i<varcj1.length;i++){
			dl159[i].style.display='none';
			varcj1[i].style.backgroundColor='#fff';
			varcj1[i].style.color='#666';
		}
		var xxx=this.index
		dl159[this.index].style.display='block';
		varcj1[this.index].style.backgroundColor='#c81623';
		varcj1[this.index].style.color='#fff';
		cj2.style.display='block';
		cj2.style.left=32+xxx*60+'px';
	})
}
var cj5=document.getElementById('cj5');
var cj7=document.getElementById('cj7');
var cj6=document.getElementById('cj6');
var dlcj5=cj5.getElementsByTagName('dl');
var varcj6=cj6.getElementsByTagName('var');
for(var i=0;i<varcj6.length;i++){
	varcj6[i].index=i;
	addev(varcj6[i],'mouseover',function(){
		for(var i=0;i<varcj6.length;i++){
			dlcj5[i].style.display='none';
			varcj6[i].style.backgroundColor='#fff';
			varcj6[i].style.color='#666';
		}
		var xxx=this.index
		dlcj5[this.index].style.display='block';
		varcj6[this.index].style.backgroundColor='#c81623';
		varcj6[this.index].style.color='#fff';
		cj7.style.display='block';
		cj7.style.left=19+xxx*33+'px';
	})
}
var sltcj5=cj5.getElementsByTagName('select');
for(var i=0;i<sltcj5.length;i++){
	sltcj5[i].onfocus=function(){
		for(var i=0;i<sltcj5.length;i++){
			if(sltcj5[i]==this){
				sltcj5[i].style.borderColor='#00A6FC';
			}else{
				sltcj5[i].style.borderColor='#ccc';
			}
		}
	}	
	sltcj5[i].onblur=function(){
		for(var i=0;i<sltcj5.length;i++){
			if(sltcj5[i]==this){
				sltcj5[i].style.borderColor='#ccc';
			}else{
				sltcj5[i].style.borderColor='#ccc';
			}
		}
	}
}
var cj18=document.getElementById('cj18');
var licj18=cj18.getElementsByTagName('li');
var cj19=document.getElementById('cj19');
var cj21=document.getElementById('cj21');
var cj18time=null;
cj21.onclick=function(){
	clearInterval(cj18time);
	var step=0;
	var maxstep=100;
	var meibu=licj18[0].offsetWidth/maxstep;
	cj18time=setInterval(function(){
		if(cj18.scrollLeft>=licj18[0].offsetWidth*3){
			cj18.scrollLeft=0;
			clearInterval(cj18time);
			return false;
		}
		step++;
		if(step>=maxstep){
			step=0
			clearInterval(cj18time);
		}
		cj18.scrollLeft+=meibu;
	},10)
}
cj19.onclick=function(){
	clearInterval(cj18time);
	var step=0;
	var maxstep=100;
	var meibu=licj18[0].offsetWidth/maxstep;
	cj18time=setInterval(function(){
		if(cj18.scrollLeft<=0){
			cj18.scrollLeft=licj18[0].offsetWidth*3;
			clearInterval(cj18time);
			return false;
		}
		step++;
		if(step>=maxstep){
			step=0
			clearInterval(cj18time);
		}
		cj18.scrollLeft-=meibu;
	},10)
}
var cj25=document.getElementById('cj25');
var cj28=document.getElementById('cj28');
var olcj31=cj28.getElementsByTagName('ol');
addev(cj25,'click',function(){
	if(cj28.scrollLeft>olcj31[0].offsetWidth*2){
		cj28.scrollLeft=0;
		return false;
	}
	cj28.scrollLeft+=olcj31[0].offsetWidth;
})
var cj30=document.getElementById('cj30');
var cj30time=null,cj30time2=null,x=842;
cj28.onmouseover=function(ev){
	var ev=ev||window.event;
	var from=ev.fromElement||ev.relatedTarget;
	while(from){
		if(this==from){
			return false;
		}
		from=from.parentNode;
	}
	x=842;
	clearInterval(cj30time);
	cj30time=setTimeout(function(){
		clearInterval(cj30time2);
		cj30time2=setInterval(function(){
			x-=30;
			if(x<=-1){
				x=-1;
				cj30.style.right=x+'px';
				clearInterval(cj30time2);
			}
			cj30.style.right=x+'px';
		},10)
	},1000)
}
/*二楼 */
var cj49s=byclass1('cj49');
var cj44s=byclass1('cj44');
var timecj44=null,xcj44=0;
for(var i=0;i<cj49s.length;i++){
	cj49s[i].index=i;
	addev(cj49s[i],'mouseover',function(ev){
		var ev=ev||window.event;
		var from=ev.fromElement||ev.relatedTarget;
		while(from){
			if(this==from){
				return false;
			}
			from=from.parentNode;
		}
		clearInterval(timecj44);
		xcj44=0
		for(var i=0;i<cj49s.length;i++){
			cj44s[i].style.left=0+'px';
		}
		var z=this.index;	
		timecj44=setInterval(function(){
			xcj44-=0.1;
			if(xcj44<=-7){
				xcj44=-7;
				clearInterval(timecj44);
			}
			cj44s[z].style.left=xcj44+'px';
		},1)
	});
	addev(cj49s[i],'mouseout',function(ev){
		var ev=ev||window.event;
		var to=ev.toElement||ev.relatedTarget;
		while(to){
			if(this==to){
				return false;
			}
			to=to.parentNode;
		}
		clearInterval(timecj44);
		for(var i=0;i<cj49s.length;i++){
			cj44s[i].style.left=0+'px';
		}
		var z=this.index;	
		timecj44=setInterval(function(){
			xcj44+=0.1;
			if(xcj44>=0){
				xcj44=0;
				clearInterval(timecj44);
			}
			cj44s[z].style.left=xcj44+'px';
		},1)
	});
}
var cj98=document.getElementById('cj98');
var cj92=document.getElementById('cj92');
var cj94=document.getElementById('cj94');
var cj95=document.getElementById('cj95');
var cj96=document.getElementById('cj96');
var img92=cj92.getElementsByTagName('img');
var var96=cj96.getElementsByTagName('var');
var time92=null,time93=null,x92=1,y92=0;
var l92=img92[0].offsetWidth;
for (var i = 0; i < var96.length; i++) {
	var96[i].onmouseover=function(){ 
		clearInterval(time92);
		clearInterval(time93);   
		for (var i = 0; i < var96.length; i++) {
			if(var96[i]==this){
				y92=i;     
				x92=i+1; 
				style96();
				huan();
				zou92();
			}
		}
	}
};
/*cj98.onmouseover=function(){
	clearInterval(time92);
	clearInterval(time93); 
}
cj98.onmouseout=function(){
	time92=setInterval(function(){
		x92++;
		if(x92>=img92.length){
			cj92.scrollLeft=l92;
			x92=2;
		}
		y92++;
		if(y92>=var96.length){
			y92=0;
		}
		style96();
		zou92()
	},5000)
}*/
function style96(){
	for(var i=0;i<var96.length;i++){
		var96[i].className='';
	}
	var96[y92].className='cj97';
}
function huan92(){
	clearInterval(time92);
	time92=setInterval(function(){
		x92++;
		if(x92>=img92.length){
			cj92.scrollLeft=l92;
			x92=2;
		}
		y92++;
		if(y92>=var96.length){
			y92=0;
		}
		style96();
		zou92()
	},5000)
}
function zou92(){
	var shi=cj92.scrollLeft;
	var zhong=img92[0].offsetWidth*x92;
	var maxstep=20;
	var step=0;
	var meibu=(zhong-shi)/maxstep;
	clearInterval(time93);
	time93=setInterval(function(){
		step++;
		if(step>=maxstep){
			step=0;
			clearInterval(time93);
		}
		cj92.scrollLeft+=meibu;
	},10)
}
cj94.onclick=function(){
	x92--;
	if(x92<0){
		cj92.scrollLeft=l92*(img92.length-2);
		x92=img92.length-3;
	}
	y92--;
	if(y92<0){
		y92=var96.length-1;
	}
	style96();
	huan();
	zou92();
}
cj95.onclick=function(){
	x92++;
	if(x92>=img92.length){
		cj92.scrollLeft=l92;
		x92=2;
	}
	y92++;
	if(y92>=var96.length){
		y92=0;
	}
	style96();
	huan();
	zou92();
}
huan92();
var cj122=document.getElementById('cj122');
var cj126=document.getElementById('cj126');
var cj127=document.getElementById('cj127');
var cj128=document.getElementById('cj128');
var p122=byclass2('cj137');
var var128=cj128.getElementsByTagName('var');
var time121=null,time122=null,x121=1,y121=0;
var l121=p122[0].offsetWidth;
for (var i = 0; i < var128.length; i++) {
	var128[i].onmouseover=function(){ 
		clearInterval(time121);
		clearInterval(time122);   
		for (var i = 0; i < var128.length; i++) {
			if(var128[i]==this){
				y121=i;     
				x121=i+1; 
				style121();
				//huan121();
				zou121();
			}
		}
	}
};
function style121(){
	for(var i=0;i<var128.length;i++){
		var128[i].className='';
	}
	var128[y121].className='cj129';
}
function huan121(){
	clearInterval(time121);
	time121=setInterval(function(){
		x121++;
		if(x121>=p122.length){
			cj122.scrollLeft=l121;
			x121=2;
		}
		y121++;
		if(y121>=var128.length){
			y121=0;
		}
		style121();
		zou121()
	},5000)
}
function zou121(){
	var shi=cj122.scrollLeft;
	var zhong=p122[0].offsetWidth*x121;
	var maxstep=20;
	var step=0;
	var meibu=(zhong-shi)/maxstep;
	clearInterval(time122);
	time122=setInterval(function(){
		step++;
		if(step>=maxstep){
			step=0;
			clearInterval(time122);
		}
		cj122.scrollLeft+=meibu;
	},10)
}
cj126.onclick=function(){
	x121--;
	if(x121<0){
		cj122.scrollLeft=l121*(p122.length-2);
		x121=p122.length-3;
	}
	y121--;
	if(y121<0){
		y121=var128.length-1;
	}
	style121();
	//huan121();
	zou121();
}
cj127.onclick=function(){
	x121++;
	if(x121>=p122.length){
		cj122.scrollLeft=l121;
		x121=2;
	}
	y121++;
	if(y121>=var128.length){
		y121=0;
	}
	style121();
	//huan121();
	zou121();
}
//huan121();











function quehuan(a,b){
	for(var i=0;i<a.length;i++){
		addev(a[i],'mouseover',function(){
			for(var i=0;i<a.length;i++){
				if(a[i]==this){
					a[i].className='cj66';
					b[i].style.display='block';
				}else{
					a[i].className='';
					b[i].style.display='none';
				}
			}
		})	
	}
}
var cjm1s=byclass2('cjm1');
var cjm2s=byclass2('cjm2');
quehuan(cjm1s,cjm2s);
var cjm3s=byclass2('cjm3');
var cjm4s=byclass2('cjm4');
quehuan(cjm3s,cjm4s);
var cjm5s=byclass2('cjm5');
var cjm6s=byclass2('cjm6');
quehuan(cjm5s,cjm6s);
var cjm7s=byclass2('cjm7');
var cjm8s=byclass2('cjm8');
quehuan(cjm7s,cjm8s);
var cjm9s=byclass2('cjm9');
var cjm20s=byclass2('cjm20');
quehuan(cjm9s,cjm20s);
var cjm21s=byclass2('cjm21');
var cjm22s=byclass2('cjm22');
quehuan(cjm21s,cjm22s);
var cjm23s=byclass2('cjm23');
var cjm24s=byclass2('cjm24');
quehuan(cjm23s,cjm24s);
var cjm25s=byclass2('cjm25');
var cjm26s=byclass2('cjm26');
quehuan(cjm25s,cjm26s);
var cjm27s=byclass2('cjm27');
var cjm28s=byclass2('cjm28');
quehuan(cjm27s,cjm28s);
var cjm29s=byclass2('cjm29');
var cjm40s=byclass2('cjm40');
quehuan(cjm29s,cjm40s);
var cjm_11s=byclass2('cjm_11');
var a11s=byclass2('a11');
quehuan(cjm_11s,a11s);
var a13s=byclass2('a13');
var a12s=byclass2('a12');
quehuan(a13s,a12s);
/*一楼*/

var cj285=byclass1('cj285');
var cj283=document.getElementById('cj283');
var p283=document.querySelectorAll('.p1');
var arr283=['服饰','美妆','手机','家电','数码','运动','居家','母婴','食品','图书','车品','服务'];
var arr284=['1F','2F','3F','4F','5F','6F','7F','8F','9F','10F','11F','12F'];
var arr285=[1745,2513,3279,3893,4507,5276,5887,6498,7109,7875,8489,9103]
var time285=null;
var x285=0;
window.onscroll=function(){
	if(document.body.scrollTop>=780){
		cj283.style.display='block';
	}else{
		cj283.style.display='none';
	}
}
for(var i=0;i<cj285.length;i++){
	cj285[i].onclick=function(){
		for(var i=0;i<cj285.length;i++){
			if(cj285[i]==this){
				y285=i;
				time285=setInterval(function(){
					if(document.body.scrollTop<arr285[y285]){
						x285+=50;
						if(x285>=arr285[y285]){
							clearInterval(time285);
							x285=arr285[y285];
						}
						document.body.scrollTop=x285;
					}else{
						x285-=50;
						if(x285<=arr285[y285]){
							clearInterval(time285);
							x285=arr285[y285];
							document.body.scrollTop=arr285[y285];
						}
						document.body.scrollTop=x285;
					}
					
				},10)
				cj285[i].onmouseout=null;
				p283[i].innerText=arr283[i];
				p283[i].classList.remove("p1");
			}else{
				p283[i].innerText=arr284[i];
				p283[i].classList.add("p1");
			}
		}
	}
}
for(var i=0;i<cj285.length;i++){
	p283[i].innerText=arr284[i];
	cj285[i].onmouseover=function(){
		for(var i=0;i<cj285.length;i++){
			if(cj285[i]==this){

					p283[i].innerText=arr283[i];
				
			}else{
				if(p283[i].classList.item("p1")=="p1"){
					p283[i].innerText=arr284[i];
				}else{
					p283[i].innerText=arr283[i];
				}
				
				
			}
		}
	}
	cj285[i].onmouseout=function(){
		for(var i=0;i<cj285.length;i++){
			if(cj285[i]==this){
				p283[i].innerText=arr284[i];
			}else{
				if(p283[i].classList.item("p1")=="p1"){
					p283[i].innerText=arr284[i];
				}else{
					p283[i].innerText=arr283[i];
				}
			}
		}
	}
}

	