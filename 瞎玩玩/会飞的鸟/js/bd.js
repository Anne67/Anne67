$(function(){

	var bird = $('#bd');
	var pos = bird.offset();
	var bdwidth = bird.width();
	var bdheight = bird.height();
	var speed = 20;
	var keyreCode = 37;
	$(document).keydown(function(event){
		var key = event.keyCode;
		if(keyreCode!=key){
			bird.removeClass().addClass("db_"+key);

		}
		keyreCode=key;
		switch (key){
			case 37:
				pos.left -= speed;
				if(pos.left <= -bdwidth){
					pos.left = $(window).width();
				};
			break;
			case 38:
				pos.top -= speed;
				if(pos.top<= -bdheight){
					pos.top = $(window).height();
				}
			break;
			case 39:
				pos.left += speed;
				if(pos.left >= $(window).width()){
					pos.left = -bdwidth;
				}
			break;
			case 40:
				pos.top += speed;
				if(pos.top >= $(window).height()){
					pos.top = -bdheight;
				}
			break;
		}
		bird.offset(pos);
		// alert(keyreCode);


	});

});