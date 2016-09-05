
$(document).ready(function(){
	

	$(".menu-div").click(function(){
		
		if($(this).children("ul").attr("data-type") != "1"){
			
			//关闭之前的
			$(".sildebar").children(".menu-div").children("ul").slideUp();
			$(".sildebar").children(".menu-div").children("ul").removeAttr("data-type");
			
			//开启现在的
			$(this).children("ul").slideDown();
			$(this).children("ul").attr("data-type","1");
			
	
		}else{
			
			$(this).children("ul").removeAttr("data-type");
			$(this).children("ul").slideUp();	
		}
		
	});
	
	var curIndex = 0;
	var imgLen = $(".imgList li").length;
	
	var artoChange = setInterval(function(){
		
		change();
	},2500);
	
	//鼠标移入停止滚动
	$("#wrapper").mouseover(function(){
		
		clearInterval(artoChange);
	}).mouseout(function(){	//移出开始滚动
		
		artoChange = setInterval(function(){
			
			change();
		},2500);
	});
	
	
	
	//改变事件
	function change(){
		
		if(curIndex<imgLen-1){
			
			curIndex++;
			
		}else{
			
			curIndex = 0;
		}
		//调用改变事件
		changeTo(curIndex);
	}
	
	//滚动事件
	function changeTo(indexNum){
		
		var goLeft = indexNum * 400;
		
		$(".imgList").animate({left:"-"+goLeft+"px"},500);
		
		
	}
	
	
	
	
	
	
});

