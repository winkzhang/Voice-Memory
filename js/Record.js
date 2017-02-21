$(document).ready(function() {
    // 使高度等于宽度
	$('.file_upload').css('height', $('.file_upload').css('width'));
	$('.addpic').css('height', $('.addpic').css('width'));
    // 记录上传图片的数目
    var number = 0;
    // 判断图片是否超过九张
    var overflow = false;
    // 创建一个数组，分别代表九张图片
    var img = new Array(8);
    // 给数组的每一个元素绑定一个id,并通过css设置样式
    for (var x = 1; x <= 9; x++) {
        var identity = "preview" + x;
        img[x-1] = $("#" + identity);
    }
    // 用j来记录总共上传第几张图片，j=0表示第一张
    var j = 0;
    // 当input被触发的时候调用函数
    $(".file_upload").change(function() {
        var file = $(this);
        // 将获取的文件当做参数传进去，之所以要单独写一个函数，是因为用户可能选择几张图片后，继续选择，而这个change函数只有
        // 第一次的时候被触发，将函数的内容独立出来，可以在下面继续进行调用。
        addpicture(file);
    });

    function addpicture(file) {
        var fileObj = file[0];
        var windowURL = window.URL || window.webkitURL;
        var dataURL;
        // i表示每一次选择相册图片时的数量，i=0表示第一张
        for (var i = 0; fileObj && fileObj.files && fileObj.files[i]; i++, j++) {
            number++;
            // 一开始img的display是设为none，每选择一张图片，就把它设为inline。
            // jquery默认获取到的对象是一个类数组，所以要用img[i][0],这是原生的Dom方法，如果用jquey方法，则改为img[i].css({style: "inline"});
            img[j][0].style.display = "inline";
            // 获取图片的路径，显示在相应的位置上
            dataURL = windowURL.createObjectURL(fileObj.files[i]);
            img[j].attr('src', dataURL);
            // 为了使input隐藏在添加图片的图标下面，设置了opacity以及position：absolute，让其脱离文本流，但这带来一个问题，
            // 因为使用了absolute，在第四张图片后面，input不会跑到下一行，而是处于行末。于是我在第四和第八张图片后面，加了一个height=0的div，
            // 起到换行的作用，又不占用高度。
            if (number == 4 || number == 8) {
                var rock = document.createElement("div");
                rock.setAttribute("id", "rock");
                var parent = document.getElementById("photo");
                parent.appendChild(rock);
            }
            // 当上传完一张图片后，应该删掉第一个input节点，不然按下第一个图标还可以选择图片，不符合逻辑
            if (number == 1) {
                var first = $('.file_upload');
                // getElementsByClass得到的是所有这个类的元素的数组，要取第一个
                first[0].parentNode.removeChild(first[0]);
            }
            // 当总的图片数量大于等于9的时候，跳出循环
            if (number >= 9) {
                overflow = true;
                break;
            }
        }
        // overflow等于false，表示还没超过九张图，那么每次上传完照片，就创建一个input节点和一个img节点，设置好属性，
        // 再将节点添加进Dom中，此时又会出现一个可以添加图片的图标
        if (overflow == false) {
            // 如果照片数量大于4且小于8，此时div还存在，就需要把它从节点中删除，否则它会另起一行，添加图标也会被换到下一行
            if (number > 4 && number < 8) {
                if (rock)
                    rock.parentNode.removeChild(rock);
            }
            var add = document.createElement("input");
            var add_icon = document.createElement("img");
            add_icon.setAttribute("src", "image/record/leaveVoice_btn_add.png");
            add_icon.setAttribute("class", "addpic");
            add.setAttribute("type", "file");
            add.setAttribute("accept", "images/*");
            add.setAttribute("capture", "camera");
            add.setAttribute("class", "file_upload");
            add.setAttribute("multiple", "multiple");
            var parent = document.getElementById("photo");
            parent.appendChild(add);
            $('.file_upload').css('height', $('.file_upload').css('width'));
            parent.appendChild(add_icon);
            // 再一次调用input被触发时的函数
            $(".file_upload").change(function() {
                // 第四张和第八张图片后面，加了一个div，此时要将它从Dom中去掉，否则第五张图插入时，它会另起一行。
                // 此操作要在新加了input之后,因为需要通过这个div来使input换行
                if (number == 4 || number == 8)  
                    rock.parentNode.removeChild(rock);
                // 每次上传新的图片，要将input和+图标删掉。
                add_icon.parentNode.removeChild(add_icon);
                add.parentNode.removeChild(add);
                var file = $(this);
                addpicture(file);
            });
        }
    }
})