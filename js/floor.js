a = $('#front');
a.height(0.25*a.width());

a = $('#floor1');
a.height(0.5*a.width());
a = $('#f1_A');
a.width(1.95*a.height());
a = $('#f1_B');
a.width(1*a.height());
a = $('#f1_C');
a.width(1*a.height());
a = $('#f1_D');
a.width(1.95*a.height());
a = $('#f1_E');
a.width(1*a.height());
a = $('#f1_F');
a.width(1*a.height());



a = $('#floor2');
a.height(0.4*a.width());

a = $('#f2_A');
a.width(4*a.height());
a = $('#f2_B');
a.width(2*a.height());
a = $('#f2_C');
a.width(2*a.height());
a = $('#f2_D');
a.width(3*a.height());
a = $('#f2_E');
a.width(1.33*a.height());
a = $('#f2_F');
a.width(1.33*a.height());

a = $('#bottom');
a.height(a.width()/5.5);

var selected = 0;

$("[id^=f1],[id^=f2]").click(function(){
	if (selected != 0)
		$('#' + selected).css("background-image", "url(img/seat/"+selected+".png)");
	selected = $(this).attr("id");
	$(this).css("background-image", "url(img/seat/"+selected+"_selected.png)");
	if (selected[1] == '1')
		$("#seat_info").html("一层"+selected[3]+"区");
	else $("#seat_info").html("二层"+selected[3]+"区");
})

$("#save").mousedown(function(){
	$("#bottom").css("background-image", "url(img/seat/bottom_save.png)");
})

$("#save").mouseup(function(){
	setTimeout(function(){
		$("#bottom").css("background-image", "url(img/seat/bottom.png)");
		if (selected != 0)
			alert("成功保存预选座位信息(-ω-)/");
		else
			alert("你还未选择任何座位哟( ;∀;)");
		
	}, 100);
})

$("#submit").mousedown(function(){
	$("#bottom").css("background-image", "url(img/seat/bottom_submit.png)");
})

$("#submit").mouseup(function(){
	setTimeout(function(){
		$("#bottom").css("background-image", "url(img/seat/bottom.png)");
		if (selected != 0)
			alert("成功提交购票订单(/ω＼)");
		else
			alert("你还未选择任何座位哟( ;∀;)");
		
	}, 100);
})
