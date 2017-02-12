$(document).ready(function() {
	$('.picture_nine').css('height', $('.picture_nine').css('width'));
	
	// 当触摸“发布留声”时，底部弹出选择框，背景变暗 
	function touches(ev) {
		if (ev.touches.length == 1) {
			var x = document.getElementById('photo');
			var y = document.getElementById('header');
			var z = document.getElementById('content');
			switch(ev.type) {
				case 'touchstart':
				    x.style.display = "block";
				    y.style.webkitFilter = "brightness(60%)";
                    y.style.filter = "brightness(60%)";
                    z.style.webkitFilter = "brightness(60%)";
                    z.style.filter = "brightness(60%)";
				    break;
				case 'touchend':
				    x.style.display = "block";
				    y.style.webkitFilter = "brightness(60%)";
                    y.style.filter = "brightness(60%)";
                    z.style.webkitFilter = "brightness(60%)";
                    z.style.filter = "brightness(60%)";
                    break;
			}
		}
	}

	// 当按下取消时，底部选择框消失，背景亮度恢复
	function cancel(ev) {
		if (ev.touches.length == 1) {
			var x = document.getElementById('photo');
			var y = document.getElementById('header');
			var z = document.getElementById('content');
			switch(ev.type) {
				case 'touchstart':
				    x.style.display = "none";
				    y.style.webkitFilter = "brightness(100%)";
                    y.style.filter = "brightness(100%)";
                    z.style.webkitFilter = "brightness(100%)";
                    z.style.filter = "brightness(100%)";
				    break;
				case 'touchend':
				    x.style.display = "none";
				    y.style.webkitFilter = "brightness(100%)";
                    y.style.filter = "brightness(100%)";
                    z.style.webkitFilter = "brightness(100%)";
                    z.style.filter = "brightness(100%)";
                    break;
			}
		}
	}

	// 监听触摸事件
	var create = document.getElementById('create');
	create.addEventListener('touchstart', touches, false);
	create.addEventListener('touchend', touches, false);
	var noaction = document.getElementById('cancel');
	noaction.addEventListener('touchstart', cancel, false);
	noaction.addEventListener('touchend', cancel, false);
})
