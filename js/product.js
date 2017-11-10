	$(function(){
		//金额计算
		var num=0
		$(".minus").click(function(){
			num--
			if(num<0){
				num=0
			}
			$("#count").val(num)
			$("#money").val(num*11900+"韩元")
		})
		$(".plus").click(function(){
			num++
			$("#count").val(num)
			$("#money").val(num*11900+"韩元")
		})
		//只可输入数字
		$("#count").keydown(function(e){
			if((e.keyCode<49 || e.keyCode>57)&&e.keyCode!=8){
				return false
			}
		})
		$("#count").change(function(){
			num=$("#count").val()
			$("#money").val(num*11900+"韩元")
		})
		//点击小图轮播
		$(".minipic li").click(function(){
			$(this).addClass("act").siblings().removeClass("act")
			$(".bigpic ul").css("left",-495*($(this).index)()+"px")
		})
		//购买时跳转到登录页面
		$(".load").click(function(){
			window.open("../html/load.html")
		})
		//拖拽大图轮播
//		var a=0
		$(".bigpic li").mousedown(function(e){
//			var x=e.clientX-$(".bigpic ul").offset().left
//			a++
//			if(a==4){
//				a=0
//			}
//			$(".bigpic li").mousemove(function(e){
//				var moveX=e.clientX-x
//				$(".bigpic ul").css("left",moveX-160*a)
//				if(moveX<50+495*(a-1)){
//					$(".bigpic ul").css("left",-495*a)
//				}
//				else if(moveX>450*(a-1)){
//					$(".bigpic ul").css("left",-495*a)
//				}
//			})
//			$(".bigpic li").mouseup(function(){
//				$(".minipic li").eq(a).addClass("act").siblings().removeClass("act")
//				$(".bigpic li").off("mousemove")
//				$(".bigpic li").off("mouseup")
//			})
			return false;
			
		})
		
		//$("button").off("focus")

})