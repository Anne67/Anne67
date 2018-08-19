/**
 * Created by Administrator on 2017/3/2.
 */
$(function(){
    $('.icon').mouseover(function(){
        $(this).parent().stop(true).animate({"width":'800px'},500).siblings().stop(true).animate({'width':'100px'},500)


    })


});