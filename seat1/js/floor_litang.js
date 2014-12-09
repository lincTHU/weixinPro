$(document).ready(function() {
	$('#book_time').html(book_time + "起");
	seat = document.getElementById('frame').contentWindow.document.getElementById('tb_Seat');
});

front = $('#front');
front.height(0.25*front.width());

frame = $("#frame").width();
sign = $("[class^=sign]");
sign.width(frame/20);
sign.height(0.8*frame/20);

a = $('#frame');
a.height(a.width()*0.65);

a = $('#buttom');
b = $('#buttom_frame');
c = $('#buttom_frame a');
left = a.width()/2 - b.width()/2;
topTemp = 1.2*(a.height()/2 - b.height()/2);
b.css("left", left);
b.css("top", topTemp);
topTemp = (b.height()/2 - c.height()/2);
c.css("top", topTemp);

$("#info_Area").css("font-size", 0.03*screen.width);

// 更新信息
// $("[class^=seat]").click(function(){
// 	if (this.className.indexOf("seat_Null") != -1 || this.className.indexOf("seat_Cannot") != -1)
// 		return;
// 	if (this.childElementCount == 0){
// 		$("[class^=seat] span").remove();

// 		$(this).html('<span class = "seat_Selected"></span>');
// 		$("[class^=seat] span").width(seat_w);
// 		$("[class^=seat] span").height(seat_h);

// 		var pos, type;
// 		if (this.className.indexOf("Stu") != -1)
// 			type = "学生特惠票";
// 		else type = "普通票";
// 		pos = this.className.indexOf(" ")+1;
// 		$("#seat_info").html(type + " " + this.parentElement.id + "排" + this.className.substring(pos) + "座");
// 	}
// })