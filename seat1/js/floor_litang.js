$(document).ready(function() {
	$('#book_time').html(book_time + "起");
	for (i = 0; i < 4; i++)
	{
		switch (i)
		{
			case 0: row = 'A'; break;
			case 1: row = 'B'; break;
			case 2: row = 'C'; break;
			case 3: row = 'D'; break;
		}
		for (j = 0; j < ticketLeft[i].length(); j++)
		{
			s = ticketLeft[i][j];
			switch (i)
			{
				case 0: 
					if (s < 6)
						$("#frame").contents().find(row+" 0"+s).attr("class", "seat_Normal 0"+s);
					else if (5 < s < 10)
						$("#frame").contents().find(row+" 0"+s).attr("class", "seat_Stu 0"+s);
					else if (9 < s < 28)
						$("#frame").contents().find(row+" "+s).attr("class", "seat_Stu "+s);
					else
						$("#frame").contents().find(row+" "+s).attr("class", "seat_Normal "+s);
					break;
				case 1: 
					if (s < 7)
						$("#frame").contents().find(row+" 0"+s).attr("class", "seat_Normal 0"+s);
					else if (6 < s < 10)
						$("#frame").contents().find(row+" 0"+s).attr("class", "seat_Stu 0"+s);
					else if (9 < s < 29)
						$("#frame").contents().find(row+" "+s).attr("class", "seat_Stu "+s);
					else
						$("#frame").contents().find(row+" "+s).attr("class", "seat_Normal "+s);
					break;
				case 2: 
					if (s < 8)
						$("#frame").contents().find(row+" 0"+s).attr("class", "seat_Normal 0"+s);
					else if (7 < s < 10)
						$("#frame").contents().find(row+" 0"+s).attr("class", "seat_Stu 0"+s);
					else if (9 < s < 30)
						$("#frame").contents().find(row+" "+s).attr("class", "seat_Stu "+s);
					else
						$("#frame").contents().find(row+" "+s).attr("class", "seat_Normal "+s);
					break;
				case 3: 
					if (s < 9)
						$("#frame").contents().find(row+" 0"+s).attr("class", "seat_Normal 0"+s);
					else if (s == 9)
						$("#frame").contents().find(row+" 0"+s).attr("class", "seat_Stu 0"+s);
					else if (9 < s < 31)
						$("#frame").contents().find(row+" "+s).attr("class", "seat_Stu "+s);
					else
						$("#frame").contents().find(row+" "+s).attr("class", "seat_Normal "+s);
					break;
			}			
		}		
	}
	// seat = document.getElementById('frame').contentWindow.document.getElementById('tb_Seat');
});

front = $('#front');
front.height(0.25*front.width());

// $('#seat_Intro').css("font-size", 0.03*screen.width);

frame = $("#frame").width();
sign = $("[class^=sign]");
sign.width(frame/20);
sign.height(0.8*frame/20);

a = $('#frame');
a.height(a.width()*0.55);

a = $('#buttom');
a.height(a.width()*0.2)
b = $('#buttom_frame');
c = $('#buttom_frame a');
left = a.width()/2 - b.width()/2;
topTemp = 1.2*(a.height()/2 - b.height()/2);
b.css("left", left);
b.css("top", topTemp);
topTemp = (b.height()/2 - c.height()/2);
c.css("top", topTemp);

// $("#info_Area").css("font-size", 0.03*screen.width);

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