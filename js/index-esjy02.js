//一，导航
//0，获取windowload所需全部元素
// var items = document.getElementsByClassName('esjy-mh-mainitem'); //导航菜单

var items = $('.esjy-mh-mainitem');
var hiddenSmall = document.getElementById('esjy-megamenu-sections');//获取下拉菜单的id
var dropDownMenus = hiddenSmall.children; //下拉菜单
hiddenSmall.style.transition = 'all, 0.5s';//下拉菜单的下滑动画
var i = 0;//导航菜单循环变量
var itemdatalink_id; //导航菜单和下拉菜单的链接属性
var allLeftMunes;
var activeLeftMune;
var showRight;
var im = 0;
var drownMenuRightDiv;


//1，添加隐藏的下划线
// for (; im < items.length; im++) {
//     var underLinewidth = items[im].offsetWidth;
//     var underLineHeight = 4;
//     underDiv = createDiv(items[im], underLinewidth, underLineHeight);
//     underDiv.style.transition = 'all,0.5s';
// }
// //2，（左侧）导航菜单鼠标事件
// for (im = 0; im < items.length; im++) {
//     //2.1 鼠标划过导航菜单
//     items[im].onmouseover = function () {
//
//         this.firstChild.style.transform = 'translateY(-4px)';
//         this.firstChild.style.webkitTransform = 'translateY(-4px)';
//         this.firstChild.style.display = 'block';
//
//         //2.1.2, 获取鼠标划过后获取到item的'data-linkid''datamnutype'
//         itemdatalink_id = this.getElementsByTagName('a')[0].getAttribute('data-linkid');
//         var menutype = this.getElementsByTagName('a')[0].getAttribute('data-menutype');
//
//         //2.1.3, 判断鼠标划过导航菜单是否含有下拉菜单
//         if ('megamenu' === menutype) {
//             //2.1.3.1,显示鼠标划过子菜单
//             for (var i = 0; i < dropDownMenus.length; i++) {
//                 dropDownMenus[i].style.display = 'none';
//                 var dropDownid = dropDownMenus[i].getAttribute('data-linkid');
//                 if (itemdatalink_id === dropDownid) {
//                     dropDownMenus[i].style.display = 'block';//让鼠标划过所对应的下拉菜单显示
//
//                     dropDownMunesActive = null;
//                     dropDownMunesActive = dropDownMenus[i];
//
//                     //左侧下拉菜单
//                     var dropdownmune = dropDownMenus[i].getElementsByClassName('esjy-dropdown-menu');
//                     activeLeftMune = dropdownmune[0].getElementsByTagName('a')[0];
//                     $(activeLeftMune).addClass('esjy-init');
//                     //右侧下拉菜单
//                     var drownMenuRight = dropDownMenus[i].getElementsByClassName('esjy-background-white-core');
//                     drownMenuRightDiv = drownMenuRight[0].children;
//                     //初始状态右侧第一个div为active
//                     $(drownMenuRightDiv[0]).addClass('esjy-show-active');
//                     showRight = drownMenuRightDiv[0];
//                     //2.1.3.4 显示并移动下拉菜单
//                     hiddenSmall.style.display = 'block';
//                     hiddenSmall.style.transform = 'translateY(' + hiddenSmall.offsetHeight + 'px)';
//                     //鼠标划过左侧二级菜单
//                     // var droplefts = dropdownmune[0].children;
//                     var droplefts = dropdownmune[0].getElementsByTagName('li');
//                     dropdownmune[0].onmouseover = function (e) {
//                         $(activeLeftMune).removeClass('esjy-init');
//                         $(e.target).addClass('esjy-init');
//                         activeLeftMune = e.target;
//                         var datapanelid = e.target.getAttribute('data-panelid');
//                         for (j = 0; j < drownMenuRightDiv.length; j++) {
//                             var rightdata = drownMenuRightDiv[j].getAttribute('id');
//                             if (rightdata === datapanelid) {
//                                 $(showRight).removeClass('esjy-show-active');
//                                 $(drownMenuRightDiv[j]).addClass('esjy-show-active');
//                                 showRight = null;
//                                 showRight = drownMenuRightDiv[j];
//                             }
//                         }
//                     }
//                     //鼠标离开左侧二级菜单
//                     dropdownmune[0].onmouseleave = function (e) {
//                     }
//
//                     //离开鼠标无效！
//                     // for(var lf = 0; lf < droplefts.length; lf++){
//                     //         droplefts[lf].onmouseleave = function () {
//                     //             $(this).addClass('esjy-init');
//                     //         }
//                     // }
//
//
//                     //鼠标划过三级菜单a      padding-left: 4rem;
//
//                     var leftitemid = showRight.getAttribute('id');
//                     var haslink = dropDownMunesActive.getElementsByClassName('esjy-arrow-forward-link');
//                     var lll= showRight.getElementsByTagName('ul');
//                     // var lll = ul[0].getElementsByClassName('esjy-mh-quicklinks');
//                     var lis = lll[0].children;
//                     for (var n = 0; n < lis.length; n++) {
//                         lis[n].onmouseover = function () {
//                             for(var k = 0; k < haslink.length; k++ ){
//                                 var kid = haslink[k].getAttribute('data-panelid');
//                                 if (kid === leftitemid) {
//                                     activeLeftMune = haslink[k];
//                                     $(haslink[k]).addClass('esjy-init');
//                                     // alert(kid,leftitemid);
//
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//
//     //2.2鼠标离开导航菜单
//     items[im].onmouseleave = function () {
//         this.firstChild.style.transform = 'translateY(0px)';
//         this.firstChild.style.webkitTransform = 'translateY(0px)';
//         this.firstChild.style.display = 'none';
//     }
// }
//3, 鼠标离开下拉菜单，隐藏下拉菜单
for (i = 0; i < dropDownMenus.length; i++) {
    dropDownMenus[i].onmouseleave = function () {
        hiddenSmall.style.transform = 'translateY(-' + hiddenSmall.offsetHeight + 'px)';
        showRight = null;
        activeLeftMune = null;
    }
}



//Animation
(function ($) {

    //定义变量
    var fadeInDown = $(".fadeInDown");
    var fadeInLeftBig = $(".fadeInLeftBig");
    var fadeInRightBig = $(".fadeInRightBig");

    //自定义动画
    $.Velocity.RegisterUI('esjy.fadeInDown',{
        defaultDuration:500,
        calls: [
            [{opacity:[1,0.5], translateY:[300,100]}]
        ]
    });


    //动画序列
    var seqFadeInDown = [{
        elements: fadeInDown,
        properties: 'esjy.fadeInDown',
        options: {
            delay:300
        }
    }]


    //事件绑定
    $.Velocity.RunSequence(seqFadeInDown);

})(jQuery);





