document.getElementById("frame").onload=function(){
	// 更新信息
	$("#frame").contents().find("[class^=seat]").click(function(){
		if (this.className.indexOf("seat_Null") != -1 || this.className.indexOf("seat_Cannot") != -1)
			return;
		if (this.childElementCount == 0){
			$("#frame").contents().find("[class^=seat] span").remove();

			$(this).html('<span class = "seat_Selected"></span>');
			$("#frame").contents().find("[class^=seat] span").width(seat_w);
			$("#frame").contents().find("[class^=seat] span").height(seat_h);

			var pos, type;
			if (this.className.indexOf("Stu") != -1)
				type = "学生特惠票";
			else type = "普通票";
			pos = this.className.indexOf(" ")+1;
			$("#seat_info").html(type + " " + this.parentElement.id + "排" + this.className.substring(pos) + "座");
		}
	})
}