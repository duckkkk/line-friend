	$(function(){
		//登录方式切换
		$(".fangshi li").click(function(){
			$(this).addClass("activefs").siblings().removeClass("activefs")
			$(".wx ol").eq(($(this).index())).css("display","block").siblings("ol").css("display","none")
			$(".qq ol").eq(($(this).index())).css("display","block").siblings("ol").css("display","none")
			$(".wb ol").eq(($(this).index())).css("display","block").siblings("ol").css("display","none")
		})
		//记住密码
		$(".dlu").click(function(){
			if($(".chk").is(":checked")==false){
				$(".row input").val("")
			}
		})
		$(".qx").click(function(){
			$(".row input").val("")
		})
		//取消foucs事件
		//$("button").off("focus ")
	})