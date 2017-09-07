//$(document).ready(function(){

window.onload = function (){

var currentId = parseInt(window.location.hash.substring(1)),
	scrollTop = 0


var paper = Raphael('rsr', '836', '1585');

var attr = {fill: '#C4B99C','stroke-width': '0','stroke-opacity': '0'},
	attrSold = {fill: '#009bc0','stroke-width': '0','stroke-opacity': '0'},
	attrOrder = {fill: '#a5cad9','stroke-width': '0','stroke-opacity': '0'},
    attrHouse = {fill: '#77b84f','stroke-width': '0','stroke-opacity': '0'}

var $paper = $('#rsr')

function show()
{
	var obj = this.dataObj || this[0].dataObj

	if (!obj.babl)
	{
	
		var status,
			statusClass
		
		if ( obj.status == 1 ){
			status = 'в продаже'
			statusClass = 'bubble_sale'

		}
		else if ( obj.status == 2 ){
			status = 'продано'
			statusClass = 'bubble_sold_out'
		}
		else if ( obj.status == 3 ){
			status = 'бронь'
			statusClass = 'bubble_order'
		}
        if ( obj.type == 101 )
                status += ' дом + участок'
	
		var babl = $('<div />').addClass("bubble"),
			babl_top = $('<div />').addClass("bubble_top clearfix"),
			babl_text = $('<div />').addClass("bubble_text"),
			babl_number = $('<div />').addClass("bubble_number"),
			babl_sold_out = $('<div />').addClass(statusClass)
		if (obj.type == 101)
            var babl = $('<div />').addClass("bubble house")

        babl.append(babl_top).append(babl_text)
		babl_top.append(babl_number)
		babl_top.append(babl_sold_out)
		
		if (obj.action == "1"){
			var babl_action = $('<div />').addClass("bubble_action")
			babl_action.append($('<span>').text('акция'))
			babl_top.append(babl_action)
		}
		
		babl_number.append($('<span>').text(obj.number))
		babl_sold_out.append($('<span>').text(status))
       //#todo
        var btext = ""
        if (obj.type == 100)
		   btext ='площадь: '+ obj.size +' сот.<br/>'
        if (obj.type == 101)
            btext ='площадь участка: '+ obj.size +' сот.<br/>площадь дома: ' +obj.size_house+' кв.м.<br/>'

        if(obj.status != 2 && obj.status != 202 ){
        	btext +="цена: " + obj.price + '<br>'
        	if (obj.type != 101){
        		btext +="цена за сотку: " + obj.price_one_hundred;
        	}
        	
        }

        babl_text.html(btext)
        babl.appendTo('body').css({
			left: obj.center.x + $paper.offset().left - 32,
			top: obj.center.y + $paper.offset().top - 105
		})
		

		babl[0].dataObj = obj
		babl.hover(show, hide)

		
		obj.babl = babl
	}
	obj.babl.show()
}

function hide()
{
	var obj = this.dataObj || this[0].dataObj
	
	obj.babl.hide()
}

for (var i = 0, il = polys.length; i < il; i++)
{
	var poly = polys[i]
	
	var elem
	if (poly.status==1)
		elem = paper.path(poly.path).attr(attr)
    if (poly.status==1 && poly.type == 101 )
		elem = paper.path(poly.path).attr(attrHouse)
	else if (poly.status==2)
		elem = paper.path(poly.path).attr(attrSold)
	else if (poly.status==3)
		elem = paper.path(poly.path).attr(attrOrder)
	
	
	var text = paper.text(0, 0, poly.number);
	text.attr({'font-size': 10, 'font-family': 'georgia'});
	text.attr("fill", "#5d3d1e");
	var box = elem.getBBox()
	
	var x = (box.width/2)+box.x,
		y = (box.height/2)+box.y

	elem[0].dataObj = text[0].dataObj = poly

	
//	elem.hover(show, hide)
//	text.hover(show, hide)
		
	poly.center = {};
	poly.center.x = x;
	poly.center.y = y;
	switch(poly.number)
    {
        case 133: poly.numberShiftX = -5; break;
      //  case 139: poly.numberShiftX = -5; break;
        case 146: poly.numberShiftX = 5; break;
        case 153: poly.numberShiftX = 4;poly.numberShiftY = 4; break;
        case 222: poly.numberShiftY = 5;break;
        case 224: poly.numberShiftY = 6;break;
    }


	if (poly.numberShiftX) x += poly.numberShiftX;
	if (poly.numberShiftY) y += poly.numberShiftY;

	text.translate(x, y);


	if(currentId && currentId == poly.id){
		elem.attr({fill: '#FF0000'})
		scrollTop = $(elem[0]).offset().top - 200

		elem.hover(show, function(){})
		text.hover(show, function(){})
		show.call(elem)
	}
	else{
		elem.hover(show, hide)
		text.hover(show, hide)
	}
}


var line = paper.path("M 701.317,1301.633 692.657,1178.321 681.614,1182.405 661.112,1138.407 676.167,1132.356 669.288,767.805 546.224,770.415 542.657,235.978 505.286,242.564 380.126,319.147 287.827,383.557 243.668,406.247 113.617,446.868 237.704,935.245 243.115,1110.326 204.089,1191.243 188.489,1190.994 173.72,1352.892")
line.attr({fill: 'none',stroke: '#E8B60E',"stroke-width": '5.2',"stroke-miterlimit": '10','stroke-opacity': '1'})


var icos = [
{
	ico: 'js/genplan_module/img/water.png',
	top: 125,
	left: 495,
	text: "водозаборный узел"
},
{
	ico: 'js/genplan_module/img/water.png',
	top: 356,
	left: 121,
	text: "водозаборный узел"
},
{
	ico: 'js/genplan_module/img/water.png',
	top: 877,
	left: 345,
	text: "водозаборный узел"
},
{
	ico: 'js/genplan_module/img/electro.png',
	top: 324,
	left: 101,
	text: "электрический трансформатор"
},
{
	ico: 'js/genplan_module/img/electro.png',
	top: 610,
	left: 338,
	text: "электрический трансформатор"
},
{
	ico: 'js/genplan_module/img/electro.png',
	top: 881,
	left: 428,
	text: "электрический трансформатор"
},
{
	ico: 'js/genplan_module/img/gas.png',
	top: 309,
	left: 130,
	text: "газорегуляторный пункт"
},
{
	ico: 'js/genplan_module/img/enter.png',
	top: 520,
	left: 102,
	text: "пост охраны (въезд)"
},
{
	ico: 'js/genplan_module/img/enter.png',
	top: 262,
	left: 229,
	text: "пост охраны (въезд)"
},
{
	ico: 'js/genplan_module/img/enter.png',
	top: 946,
	left: 191,
	text: "пост охраны (въезд)"
},
{
	ico: 'js/genplan_module/img/servuce.png',
	top: 244,
	left: 254,
	text: "служба эксплуатации и сервиса"
},
{
	ico: 'js/genplan_module/img/child_center.png',
	top: 561,
	left: 378,
	text: "детский развлекательный центр"
},
{
	ico: 'js/genplan_module/img/lake.png',
	top: 595,
	left: 361,
	text: "внутреннее озеро"
},
{
	ico: 'js/genplan_module/img/tennis.png',
	top: 874,
	left: 467,
	text: "спортивная площадка"
},
{
	ico: 'js/genplan_module/img/wood.png',
	top: 1003,
	left: 575,
	text: "парковая прогулочная зона"
},
{
	ico: 'js/genplan_module/img/beach.png',
	top: 1229,
	left: 419,
	text: "пляж"
},
// {
// 	ico: 'js/genplan_module/img/info.png',
// 	top: 197,
// 	left: 566
// }

]

function icoshow()
{
	var obj = this.dataObj || this[0].dataObj
	
	if (!obj.text)
		return
	
	if (!obj.babl)
	{
		var babl = $('<div />').addClass("bubble mini"),
			babl_text = $('<div />').addClass("bubble_text")
		
		babl.append(babl_text)
		
		babl_text.html(obj.text)

		babl.appendTo('body').css({
			left: obj.center.x-20,// + $paper.offset().left - 32,
			top: obj.center.y-70// + $paper.offset().top - 105
		})
		

		babl[0].dataObj = obj
		babl.hover(icoshow, icohide)

		
		obj.babl = babl
	}
	obj.babl.show()
}

function icohide()
{
	var obj = this.dataObj || this[0].dataObj
	
	if (obj.babl)
		obj.babl.hide()
}

var pg = $('#pg')
for ( var i = 0, il = icos.length; i < il; i++  )
{

	icos[i].ico = icos[i].ico || ''

	var src = ''
	if (icos[i].ico)
		src = icos[i].ico
	
	var img = $('<img>').attr('src', src)
	
	var o = $('<div>').addClass('icons').css({
		position: 'absolute',
		top: icos[i].top,
		left: icos[i].left
	}).append(img).appendTo(pg).hover(icoshow, icohide)
	
	o[0].dataObj = icos[i]
	
	icos[i].center = {}
	icos[i].center.x = o.offset().left
	icos[i].center.y = o.offset().top
	
}

// var iframe = window.top.$('.fancybox-iframe')

// iframe.load(function(){
// 	iframe[0].contentWindow.scrollTo(0, scrollTop)
// })

}