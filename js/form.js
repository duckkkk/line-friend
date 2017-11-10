	$(function(){
		//语言栏切换
		$(".sel").click(function(){
			$(".language").slideToggle()
		})
		//导航
		$(".daohang>li").mousemove(function(){
			$(this).addClass("activeli").siblings().removeClass("activeli")
		})
		$(".daohang>li").mouseout(function(){
			$("li").removeClass("activeli")
		})
		//正则表达式
		var tel=/^[\d]{5,20}$/
		var email= /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/ 
		$(".send").click(function(){
			if(tel.test($("#b").val())!=true&&email.test($("#c").val())&&$("#chk").is(':checked')){
				alert("请正确填写手机号码!")
			}else if(tel.test($("#b").val())&&email.test($("#c").val())!=true&&$("#chk").is(':checked')){
				alert("请正确填写邮箱!")
			}else if(tel.test($("#b").val())&&email.test($("#c").val())&&$("#chk").is(":checked")==false){
				alert("请勾选同意!")
			}else if(tel.test($("#b").val())&&email.test($("#c").val())&&$("#chk").is(":checked")){
				alert("发送成功!")
			}else{
				alert("请完善资料的填写!")
			}
		})
		//浏览窗口
		$(".liulan").click(function(){
			$("#main").css("display","block")
		})
		$(".p2").click(function(){
			$("#main").css("display","none")
		})
		$(".btn1").click(function(){
			$("#upload").val($("#wjming").val())
			$("#main").css("display","none")
		})
		$(".btn2").click(function(){
			$("#main").css("display","none")
		})
		$(".tab tr").click(function(){
			$("#wjming").val($(".tab span").eq($(this).index()).text())
		})
		
	})