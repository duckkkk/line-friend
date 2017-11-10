	$(function(){ 
		//页面加载后判断导航位置
		if($("body").scrollTop()>0){
			$(".big").css("background-color","white")
			$(".head").css("background","url(../img/head_logo2.png)")
			$(".daohang>li").css("color","black")
			$(".daohang>li>a").css("color","black")
			$(".sel").css("color","black")
			$(".sel").css("background","url(../img/ico_unfd2.png) no-repeat")
			$(".sel").css("background-position","right")
		}
		//滚动滑轮改变导航样式
		$(document).scroll(function(){ 
			if($("body").scrollTop()>0){
				$(".big").css("background-color","white")
				$(".head").css("background","url(../img/head_logo2.png)")
				$(".daohang>li").css("color","black")
				$(".daohang>li>a").css("color","black")
				$(".sel").css("color","black")
				$(".sel").css("background","url(../img/ico_unfd2.png) no-repeat")
				$(".sel").css("background-position","right")
			}else{
				$(".big").css("background-color","")
				$(".head").css("background","url(../img/head_logo.png)")
				$(".daohang>li").css("color","white")
				$(".daohang>li>a").css("color","white")
				$(".sel").css("color","white")
				$(".sel").css("background","url(../img/ico_unfd.png)no-repeat")
				$(".sel").css("background-position","right")
			}
		})
		//点击语言切换
		$(".sel").click(function(){
			$(".language").slideToggle()
			//$(".sel").toggle()
		})
		//点击导航阶梯跳转
			//*商务
		$(".Bussi").click(function(){
			$(this).addClass("activeli").siblings().removeClass("activeli")
			$("body").animate({
				"scrollTop":$(".banner").height()-$(".big").height()
			})
		})
			//*商店
		$(".Shop").click(function(){
			$(this).addClass("activeli").siblings().removeClass("activeli")
			$("body").animate({
				"scrollTop":$(".banner").height()+$(".bussi").height()+$(".logo").height()-$(".big").height()
			})
		})
			//*相册
		$(".Pic").click(function(){
			$(this).addClass("activeli").siblings().removeClass("activeli")
			$("body").animate({
				"scrollTop":$(".banner").height()+$(".bussi").height()+$(".logo").height()+$(".map").height()-$(".big").height()
			})
		})
			//*品牌介绍
		$(".About").click(function(){
			$(this).addClass("activeli").siblings().removeClass("activeli")
			$("body").animate({
				"scrollTop":$(".banner").height()+$(".bussi").height()+$(".logo").height()+$(".map").height()+$(".pic").height()-$(".big").height()
			})
		})
		//滚轮控制导航事件
		$(document).scroll(function(){
			if($("body").scrollTop()<$(".banner").height()-$(".big").height()){
				$(".Bussi").removeClass("activeli")
			}else if($("body").scrollTop()>$(".banner").height()-$(".big").height()&&$("body").scrollTop()<$(".banner").height()+$(".bussi").height()+$(".logo").height()-$(".big").height()){
				$(".Bussi").addClass("activeli").siblings().removeClass("activeli")
			}else if($("body").scrollTop()>$(".banner").height()+$(".bussi").height()+$(".logo").height()-$(".big").height()&&$("body").scrollTop()<$(".banner").height()+$(".bussi").height()+$(".logo").height()+$(".map").height()-$(".big").height()){
				$(".Shop").addClass("activeli").siblings().removeClass("activeli")
			}else if($("body").scrollTop()>$(".banner").height()+$(".bussi").height()+$(".logo").height()+$(".map").height()-$(".big").height()){
				$(".Pic").addClass("activeli").siblings().removeClass("activeli")
			}else if($("body").scrollTop()>$(".banner").height()+$(".bussi").height()+$(".logo").height()+$(".map").height()+$(".pic").height()-$(".big").height()&&$(".banner").height()+$(".bussi").height()+$(".logo").height()+$(".map").height()+$(".pic").height()+$(".contanct").height()-$(".big").height()){
				$(".About").addClass("activeli").siblings().removeClass("activeli")
			}
		})
		//相册
		$(".xiaotu0 li").click(function(){
			$(this).addClass("kuang").siblings().removeClass("kuang")
			$(".datu li").eq($(this).index()).fadeIn(300).siblings().removeClass("show").fadeOut(10)
		})
		$(".xiaotu1 li").click(function(){
			$(this).addClass("kuang").siblings().removeClass("kuang")
			$(".datu1 li").eq($(this).index()).fadeIn(300).siblings().removeClass("show").fadeOut(10)
		})
		$(".xiaotu2 li").click(function(){
			$(this).addClass("kuang").siblings().removeClass("kuang")
			$(".datu2 li").eq($(this).index()).fadeIn(300).siblings().removeClass("show").fadeOut(10)
		})
		var a=0
		//小图左右按钮
		$(".an1").click(function(){
			a++
			if(a===4){
				a=1
			}
			$(".pic ul").eq(3-a).addClass("show").siblings("ul").removeClass("show")
			$(".pic p").eq(3-a).addClass("show").siblings("p").removeClass("show")
			$(".pic ol").eq(3-a).addClass("show").siblings("ol").removeClass("show")
		})
		var b=0
		$(".an2").click(function(){
			b++
			if(b===3){
				b=0
			}
			$(".pic ul").eq(b).addClass("show").siblings("ul").removeClass("show")
			$(".pic p").eq(b).addClass("show").siblings("p").removeClass("show")
			$(".pic ol").eq(b).addClass("show").siblings("ol").removeClass("show")
		})
		
	})	