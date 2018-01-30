//一，导航
//0，获取windowload所需全部元素
// var items = document.getElementsByClassName('esjy-mh-mainitem'); //导航菜单
var items = $('.esjy-mh-mainitem');
var hiddenSmall = document.getElementById('esjy-megamenu-sections');//获取下拉菜单的id
var dropDownMenus = hiddenSmall.children; //下拉菜单
hiddenSmall.style.transition = 'all, 0.5s';//下拉菜单的下滑动画
var orignalColor = '#3e3e3e';
var orignalBackgroundColor = '#fff';
var onmouseColor = '#4ff';
var onmouseBackgroundColor = '#3e3e3e';
var i = 0;//导航菜单循环变量
var itemdatalink_id  //导航菜单和下拉菜单的链接属性




//1，添加隐藏的下划线
for (; i < items.length; i++) {
    var underLinewidth = items[i].offsetWidth;
    var underLineHeight = 4;
    underDiv = createDiv(items[i], underLinewidth, underLineHeight);
    underDiv.style.transition = 'all,0.5s';
}
//2，（左侧）导航菜单鼠标事件
for (i = 0; i < items.length; i++) {
    //2.1 鼠标划过导航菜单
    items[i].onmouseover = function () {
        //2.1.1, 鼠标划过下划线向上移动4px
        this.firstChild.style.transform = 'translateY(-4px)';
        this.firstChild.style.webkitTransform = 'translateY(-4px)';
        // this.firstChild.style.display = 'block';

        //2.1.2, 获取鼠标划过后获取到item的'data-linkid''datamnutype'
        itemdatalink_id = this.getElementsByTagName('a')[0].getAttribute('data-linkid');
        var menutype = this.getElementsByTagName('a')[0].getAttribute('data-menutype');

        //2.1.3, 判断鼠标划过导航菜单是否含有下拉菜单
        if ('megamenu' === menutype) {
            //2.1.3.1,显示鼠标划过子菜单
            for (var i = 0; i < dropDownMenus.length; i++) {
                dropDownMenus[i].style.display = 'none';
                var dropDownid = dropDownMenus[i].getAttribute('data-linkid');
                if (itemdatalink_id === dropDownid) {
                    dropDownMenus[i].style.display = 'block';//让鼠标划过所对应的下拉菜单显示
                   // var dropMune = dropDownMenus[i].getElementsByClassName('esjy-dropdown-menu');

                    //2.1.3.2, 获取鼠标划过下拉菜单的右侧
                    var drownMenuRight = dropDownMenus[i].getElementsByClassName('esjy-background-white-core');
                    var drownMenuRightDiv = drownMenuRight[0].children;
                    //2.1.3.3,遍历所有右侧菜单，默认显示第一个
                    for (var j = 0; j < drownMenuRightDiv.length; j++) {
                        drownMenuRightDiv[j].style.display = 'none';
                    }drownMenuRightDiv[0].style.display = 'block';
                }
            }
            //2.1.4 显示并移动下拉菜单
            hiddenSmall.style.display = 'block';
            hiddenSmall.style.transform = 'translateY(' + hiddenSmall.offsetHeight + 'px)';
        }
    }
    //2.2 鼠标离开导航菜单
    items[i].onmouseleave = function () {
        this.firstChild.style.transform = 'translateY(0px)';
        this.firstChild.style.webkitTransform = 'translateY(0px)';
        // this.firstChild.style.display = 'none';
        hiddenSmall.style.transform = 'translateY(0px)';
    }
}


//3，鼠标划过下拉菜单的左侧二级菜单

// var  ddd = dropMune.children;
// b = a+2;



// var dropMenuLists = dropMune.getElementsByClassName('esjy-dropdown-menu');




// for (i = 0; i < dropDownMenuLists.length; i++) {
//     //鼠标划过左侧菜单
//     dropDownMenuLists[i].onmouseover = function () {
//         //3.2.3.4.1.1, 设置左侧菜单鼠标划过的样式
//         this.style.color = onmouseColor;
//         this.style.backgroundColor = onmouseBackgroundColor;
//         //3.2.3.4.1.2, 获取左侧下拉菜单鼠标划过的事件,如果'data-panelid = null'，说明右侧无内容，return
//         if (this.getAttribute('data-panelid') === null) {
//             alert('wu-panelid');
//         } else {
//             //3.2.3.4.1.3, 获取左侧下拉菜单鼠标划过的data-panelid的右侧内容
//             //3.8.4, 显示对应的右侧下拉菜单内容
//             for (i = 0; i < drownMenuRightDiv.length; i++) {
//                 drownMenuRightDiv[i].style.display = 'none';
//                 var panelid = this.getAttribute('data-panelid');
//                 var rightlist_id = drownMenuRightDiv[i].getAttribute('id');
//                 if (panelid === rightlist_id) {
//                     drownMenuRightDiv[i].style.display = 'block';
//
//                 }
//             }
//         }
//     }
//     //鼠标离开左侧下拉菜单，隐藏对应右侧内容
//     dropDownMenuLists[i].onmouseleave = function () {
//         this.style.color = orignalColor;
//         this.style.backgroundColor = '';
//         if (0 < i < dropDownMenuLists.length) {
//             drownMenuRightDiv[i].style.display = 'none';
//         }
//
//     }
//
// }













