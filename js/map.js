// geolocation = new BMap.Geolocation;
// geolocation.getCurrentPosition(function(result) {
//    console.log(result);
// });
geolocation = new BMap.Geolocation;
geolocation.getCurrentPosition(function(result) {
    var currentLat = result.latitude; //纬度
    var currentLon = result.longitude; //经度
    // 获取到的坐标是GPS坐标
    var gpsPoint = new BMap.Point(currentLon, currentLat);
    // 需要将GPS坐标转换为百度地图的坐标。gpsPoint是转换前的坐标，0表示转换方法，将gps坐标转换为百度坐标，initMap是回调函数
    BMap.Convertor.translate(gpsPoint, 0, initMap);
});

// 当触摸气泡时，跳转到地区留声页
function touches(ev) {
    if (ev.touches.length == 1) {
		switch(ev.type) {
			case 'touchstart':
				window.location.href="AreaSound.html";
				break;
			case 'touchend':
				window.location.href="AreaSound.html";
				break;
		}
	}
}



// 定义自定义覆盖物的构造函数
function IconOverlay(center, length) {
	this._center = center;
    this._length = length;
}
// 继承API的BMap.Overlay
IconOverlay.prototype = new BMap.Overlay();

IconOverlay.prototype.initialize = function(map) {
	// 保存map对象实例
	this._map = map;
	// 创建img元素，作为自定义覆盖物的容器
	var img = document.createElement("img");
	img.style.position = "absolute";
	img.src = "image/discover_icon_yourLoc.png";
	// 根据参数设置元素外观
	img.style.width = this._length + "px";
	img.style.height = this._length - 15 + "px";
	// 将img添加到覆盖物容器中
    map.getPanes().markerPane.appendChild(img);
    // 保存img实例
    this._img = img;
    // 需要将img元素作为方法的返回值
    return img;

}

IconOverlay.prototype.draw = function() {
	// 将地理坐标转换到覆盖物的所需要的像素坐标
	var position = this._map.pointToOverlayPixel(this._center);
	this._img.style.left = position.x - this._length/2 + "px";
	this._img.style.top = position.y - (this._length-15)/2 + "px";
}


// 定义自定义覆盖物的构造函数
function BubbleOverlay(center, length) {
	this._center = center;
    this._length = length;
}
// 继承API的BMap.Overlay
BubbleOverlay.prototype = new BMap.Overlay();

BubbleOverlay.prototype.initialize = function(map) {
	// 保存map对象实例
	this._map = map;
	// 创建img元素，作为自定义覆盖物的容器
	var img = document.createElement("img");
	img.style.position = "absolute";
	img.src = "image/discover_btn_bubbleUnable.png";
	// 根据参数设置元素外观
	img.style.width = this._length + "px";
	img.style.height = this._length + "px";
	// 将img添加到覆盖物容器中
    map.getPanes().markerPane.appendChild(img);
    // 保存img实例
    this._img = img;
    // 需要将img元素作为方法的返回值
    return img;

}

BubbleOverlay.prototype.draw = function() {
	// 将地理坐标转换到覆盖物的所需要的像素坐标
	var position = this._map.pointToOverlayPixel(this._center);
	this._img.style.left = position.x - this._length/2 + "px";
	this._img.style.top = position.y - this._length/2 + "px";
	// 添加触摸监听事件，draw函数把气泡放到当前正确位置，所以在此处才有效
	this._img.addEventListener('touchstart', touches, false);
}

// 定义自定义覆盖物的构造函数
function Bubble2Overlay(center, length) {
	this._center = center;
    this._length = length;
}
// 继承API的BMap.Overlay
Bubble2Overlay.prototype = new BMap.Overlay();

Bubble2Overlay.prototype.initialize = function(map) {
	// 保存map对象实例
	this._map = map;

	var div = this._div = document.createElement("div");
	div.style.position = "absolute";
	div.style.width = this._length + "px";
	div.style.height = this._length + "px";

	// 创建img元素，作为自定义覆盖物的容器
	var img = document.createElement("img");
	img.style.position = "absolute";
	img.src = "image/discover_btn_bubbleHot.png";
	// 根据参数设置元素外观
	img.style.width = this._length + "px";
	img.style.height = this._length + "px";

	div.appendChild(img);
	// 将img添加到覆盖物容器中
    map.getPanes().markerPane.appendChild(div);
    // 保存img实例
    this._img = img;
    // 需要将img元素作为方法的返回值
    return div;

}

Bubble2Overlay.prototype.draw = function() {
	// 将地理坐标转换到覆盖物的所需要的像素坐标
	var position = this._map.pointToOverlayPixel(this._center);
	this._div.style.left = position.x - this._length/2 + "px";
	this._div.style.top = position.y - this._length/2 + "px";
	this._img.addEventListener('touchstart', touches, false);
}

// 定义自定义覆盖物的构造函数
function Bubble3Overlay(center, length) {
	this._center = center;
    this._length = length;
}
// 继承API的BMap.Overlay
Bubble3Overlay.prototype = new BMap.Overlay();

Bubble3Overlay.prototype.initialize = function(map) {
	// 保存map对象实例
	this._map = map;
	// 创建img元素，作为自定义覆盖物的容器
	var img = document.createElement("img");
	img.style.position = "absolute";
	img.src = "image/discover_btn_bubbleActive.png";
	// 根据参数设置元素外观
	img.style.width = this._length + "px";
	img.style.height = this._length + "px";
	// 将img添加到覆盖物容器中
    map.getPanes().markerPane.appendChild(img);
    // 保存img实例
    this._img = img;
    // 需要将img元素作为方法的返回值
    return img;

}

Bubble3Overlay.prototype.draw = function() {
	// 将地理坐标转换到覆盖物的所需要的像素坐标
	var position = this._map.pointToOverlayPixel(this._center);
	this._img.style.left = position.x - this._length/2 + "px";
	this._img.style.top = position.y - this._length/2 + "px";
	this._img.addEventListener('touchstart', touches, false);
}

// 定义自定义覆盖物的构造函数
function Bubble4Overlay(center, length) {
	this._center = center;
    this._length = length;
}
// 继承API的BMap.Overlay
Bubble4Overlay.prototype = new BMap.Overlay();

Bubble4Overlay.prototype.initialize = function(map) {
	// 保存map对象实例
	this._map = map;
	// 创建img元素，作为自定义覆盖物的容器
	var img = document.createElement("img");
	img.style.position = "absolute";
	img.src = "image/discover_btn_bubbleInactive.png";
	// 根据参数设置元素外观
	img.style.width = this._length + "px";
	img.style.height = this._length + "px";
	// 将img添加到覆盖物容器中
    map.getPanes().markerPane.appendChild(img);
    // 保存img实例
    this._img = img;
    // 需要将img元素作为方法的返回值
    return img;

}

Bubble4Overlay.prototype.draw = function() {
	// 将地理坐标转换到覆盖物的所需要的像素坐标
	var position = this._map.pointToOverlayPixel(this._center);
	this._img.style.left = position.x - this._length/2 + "px";
	this._img.style.top = position.y - this._length/2 + "px";
	this._img.addEventListener('touchstart', touches, false);
}



function initMap(point) {
	// 初始化地图，设置控件、中心点、缩放等级，然后给地图添加point的overlay
	map = new BMap.Map("map");
	// console.log(point);
	console.log(point.lng);
	console.log(point.lat);
	map.addControl(new BMap.NavigationControl());
	map.addControl(new BMap.ScaleControl());
	map.addControl(new BMap.OverviewMapControl());
	map.centerAndZoom(point, 15);

	// 创建一个地址解析器的实例
	var gc = new BMap.Geocoder();
	// 对指定的坐标点进行反地址解析，如果解析成功，则回调函数的参数为GeocoderResult对象。否则回调函数的参数为null
	gc.getLocation(point, function(rs) {
		// 表示地址解析结果的层次化地址信息
		var addComp = rs.addressComponents;
		var string = addComp.province + addComp.city;
		document.getElementById("area").innerHTML = string;
	});

	// 添加自定义覆盖物
	var myIcon = new IconOverlay(map.getCenter(), 40);
	map.addOverlay(myIcon);

    var point1 = new BMap.Point(point.lng-0.008, point.lat+0.008);
    var point2 = new BMap.Point(point.lng+0.008, point.lat+0.007);
    var point3 = new BMap.Point(point.lng+0.008, point.lat-0.009);
    var point4 = new BMap.Point(point.lng-0.005, point.lat+0.004);
    var point5 = new BMap.Point(point.lng+0.007, point.lat-0.003);
    var point6 = new BMap.Point(point.lng-0.007, point.lat+0.000);
    var point7 = new BMap.Point(point.lng+0.005, point.lat+0.002);
    var point8 = new BMap.Point(point.lng-0.001, point.lat-0.007);
    var myBubble1 = new BubbleOverlay(point1, 65);
    map.addOverlay(myBubble1);
    var myBubble2 = new BubbleOverlay(point2, 65);
    map.addOverlay(myBubble2);
    var myBubble3 = new BubbleOverlay(point3, 65);
    map.addOverlay(myBubble3);
    var myBubble4 = new Bubble2Overlay(point4, 65);
    // console.log(myBubble4);
    // myBubble4.style.background = "pink";
    // myBubble4.innerHTML = "1.3w";
    map.addOverlay(myBubble4);
    var myBubble5 = new Bubble2Overlay(point5, 65);
    map.addOverlay(myBubble5);
    var myBubble6 = new Bubble3Overlay(point6, 65);
    map.addOverlay(myBubble6);
    var myBubble7 = new Bubble3Overlay(point7, 65);
    map.addOverlay(myBubble7);
    var myBubble8 = new Bubble4Overlay(point8, 65);
    map.addOverlay(myBubble8);

}


