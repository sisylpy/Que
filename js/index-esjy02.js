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
var itemdatalink_id; //导航菜单和下拉菜单的链接属性
var allLeftMunes;
var activeLeftMune;
var showRight;


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

        this.firstChild.style.transform = 'translateY(-4px)';
        this.firstChild.style.webkitTransform = 'translateY(-4px)';
        this.firstChild.style.display = 'block';

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

                    //初始状态左侧菜单第一个li为active
                    var drownLeftMunes = document.getElementById(itemdatalink_id);
                    var tempallLeftMunes = drownLeftMunes.children[0];
                    var temptwoallLeftMunes = tempallLeftMunes.children[0];
                    allLeftMunes = temptwoallLeftMunes.children;
                    var forwordLinks = drownLeftMunes.children[0].getElementsByClassName('esjy-arrow-forward-link');
                    activeLeftMune = forwordLinks[0];
                    $(activeLeftMune).addClass('esjy-show-active');

                    if(activeLeftMune){
                        //todo: $(activeLeftMune).removeClass('esjy-show-active')



                    }


                    //2.1.3.2, 获取鼠标划过下拉菜单的右侧
                    var drownMenuRight = dropDownMenus[i].getElementsByClassName('esjy-background-white-core');
                    var drownMenuRightDiv = drownMenuRight[0].children;
                    $(drownMenuRightDiv[0]).addClass('esjy-show-active');
                    showRight = drownMenuRightDiv[0];

                    if (showRight) {
                        // $(showRight).removeClass('esjy-show-active');
                        //todo showRight = drownMenuRightDiv[0];
                    }






                    //2.1.3.4 显示并移动下拉菜单
                    hiddenSmall.style.display = 'block';
                    hiddenSmall.style.transform = 'translateY(' + hiddenSmall.offsetHeight + 'px)';

                }
            }

        }

    }

    items[i].onmouseleave = function () {
        this.firstChild.style.transform = 'translateY(0px)';
        this.firstChild.style.webkitTransform = 'translateY(0px)';
        this.firstChild.style.display = 'none';
        hiddenSmall.style.transform = 'translateY(-' + hiddenSmall.offsetHeight + 'px)';
    }

}












for (i = 0; i < dropDownMenus.length; i++) {

    var drownMenuLeft = dropDownMenus[i].getElementsByClassName('esjy-background-neutral-white-30');
    var drownMenuLeftDiv = drownMenuLeft[0].children[0].children;

    var drownMenuRight = dropDownMenus[i].getElementsByClassName('esjy-background-white-core');
    var drownMenuRightDiv = drownMenuRight[0].children;

    //鼠标划过左侧菜单
    drownMenuLeftDiv[i].onmouseover = function () {
        //3.2.3.4.1.1, 设置左侧菜单鼠标划过的样式
        this.style.color = onmouseColor;
        this.style.backgroundColor = onmouseBackgroundColor


        var thisa = this.getElementsByTagName('a');
        var thisadatapanelid = thisa[0].getAttribute('data-panelid');
        //3.2.3.4.1.2, 获取左侧下拉菜单鼠标划过的事件,如果'data-panelid = null'，说明右侧无内容，return
        if (thisadatapanelid === null) {
            alert('wu-panelid');
        } else {
            //3.2.3.4.1.3, 获取左侧下拉菜单鼠标划过的data-panelid的右侧内容
            //3.8.4, 显示对应的右侧下拉菜单内容

            for (var j = 0; j < drownMenuRightDiv.length; j++) {
                var rightlist_id = drownMenuRightDiv[j].getAttribute('id');
                if (thisadatapanelid === rightlist_id) {
                    $(drownMenuRightDiv[j]).addClass('esjy-show-active');
                    showRight = drownMenuRightDiv[0];

                }
            }
        }
    }
    //鼠标离开左侧下拉菜单，隐藏对应右侧内容
    dropDownMenus[i].onmouseleave = function () {
        this.style.color = orignalColor;
        this.style.backgroundColor = '';
        if (0 < i < dropDownMenus.length) {
            // drownMenuRightDiv[i].style.display = 'none';
        }

    }

}













