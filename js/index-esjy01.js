//一，导航
//0，获取windowload所需全部元素
var items = document.getElementsByClassName('esjy-mh-mainitem'); //导航菜单
var hiddenSmall = document.getElementById('esjy-megamenu-sections');//下拉菜单
hiddenSmall.style.transition = 'all, 0.5s';//下拉菜单的下滑动画
var orignalColor = '#3e3e3e';
var orignalBackgroundColor = '#fff';
var onmouseColor = '#4ff';
var onmouseBackgroundColor = '#3e3e3e';
var i = 0, len = items.length;



//1,给导航栏item添加firstChild（下划线）
for (; i < len; i++) {
    var underLinewidth = items[i].offsetWidth;
    var underLineHeight = 4;
    underDiv = createDiv(items[i], underLinewidth, underLineHeight);
    underDiv.style.transition = 'all,0.5s';
}

//3, 设置鼠标划过导航栏事件
for (i = 0; i < items.length; i++) {

    //3.1, 鼠标开始划过
    items[i].onmouseover = function () {

        //3.0, 鼠标划过下划线向上移动4px
        this.firstChild.style.transform = 'translateY(-4px)';
        this.firstChild.style.webkitTransform = 'translateY(-4px)';
        this.firstChild.style.display = 'block';

        //3.1 获取数据
        //3.1.1,获取所有下拉菜单
        var dropDownMenus = hiddenSmall.children;
        //3.1.2, 获取鼠标划过后获取到item的'data-linkid''datamnutype'
        var itemdatalink_id = this.getElementsByTagName('a')[0].getAttribute('data-linkid');
        var menutype = this.getElementsByTagName('a')[0].getAttribute('data-menutype');


        //3.3  如果鼠标划过的item存在下拉菜单
        if (menutype === 'megamenu') {

            //3.2.1, 首先遍历全部下拉菜单
            for (i = 0; i < dropDownMenus.length; i++) {
                //3.2,设置所有下拉菜单为none
                dropDownMenus[i].style.display = 'none';

                //3.2.2, 获取鼠标划过的'data-linkid'
                var menudatalink_id = dropDownMenus[i].getAttribute('data-linkid');

                //3.2.3,找到鼠标划过对应的下拉菜单
                if (itemdatalink_id === menudatalink_id) {

                    dropDownMenus[i].style.display = 'block';
                }

                  //3.5.0, 显示并移动下拉菜单
                    hiddenSmall.style.display = 'block';
                    hiddenSmall.style.transform = 'translateY(' + hiddenSmall.offsetHeight + 'px)';


                    //3.7, 获取下拉菜单右侧
                    // var drownMenuRight = dropDownMenus[i].getElementsByClassName('esjy-background-white-core');
                    // var drownMenuRightDiv = drownMenuRight[0].children;
                    // //3.7.1,遍历所有右侧菜单，默认显示第一个
                    // for (i = 0; i < drownMenuRightDiv.length; i++) {
                    //     drownMenuRightDiv[i].style.display = 'none';
                    // }
                    // drownMenuRightDiv[0].style.display = 'block';
                    //
                    //
                    //
                    //3.2.3,3, 找到对应的下拉菜单
                    var dropMene = dropDownMenus[i];
                    var dropMuneDiv = dropMene.children[0];

                    //3.2.3.4, 获取左侧下拉菜单列表，设置鼠标划过事件
                    var menuLeft = dropMuneDiv.getElementsByClassName('esjy-background-neutral-white-30');
                    var dropDownMenuUl = menuLeft[0].getElementsByClassName('esjy-dropdown-menu');
                    var dropDownMenuLists = dropDownMenuUl[0].getElementsByTagName('a');



                //如果下拉菜单显示出来，则设置下拉菜单的鼠标划过事件
                // if (hiddenSmall.style.display = 'block'){
                //
                //
                //
                    // 3.2.3,4,1, 鼠标划过左侧下拉菜单事件
                    for (i = 0; i < dropDownMenuLists.length; i++) {
                        //鼠标划过左侧菜单
                        dropDownMenuLists[i].onmouseover = function () {
                            //3.2.3.4.1.1, 设置左侧菜单鼠标划过的样式
                            this.style.color = onmouseColor;
                            this.style.backgroundColor = onmouseBackgroundColor;
                            //3.2.3.4.1.2, 获取左侧下拉菜单鼠标划过的事件,如果'data-panelid = null'，说明右侧无内容，return
                            if (this.getAttribute('data-panelid') === null) {
                                alert('wu-panelid');
                            } else {
                                //3.2.3.4.1.3, 获取左侧下拉菜单鼠标划过的data-panelid的右侧内容
                                //3.8.4, 显示对应的右侧下拉菜单内容
                                for (i = 0; i < drownMenuRightDiv.length; i++) {
                                    drownMenuRightDiv[i].style.display = 'none';
                                    var panelid = this.getAttribute('data-panelid');
                                    var rightlist_id = drownMenuRightDiv[i].getAttribute('id');
                                    if (panelid === rightlist_id) {
                                        drownMenuRightDiv[i].style.display = 'block';
                                    }
                                }
                            }
                        }
                        //鼠标离开左侧下拉菜单，隐藏对应右侧内容
                        dropDownMenuLists[i].onmouseleave = function () {
                            this.style.color = orignalColor;
                            this.style.backgroundColor = '';
                            if (0 < i < dropDownMenuLists.length) {
                                drownMenuRightDiv[i].style.display = 'none';
                            }

                        }

                    }

                }

            }
        }


        // hiddenSmall.style.transform = 'translateY(' + hiddenSmall.offsetHeight + 'px)';
    }

    // 2.2, 设置鼠标离开事件
    items[i].onmouseleave = function () {

        this.firstChild.style.transform = 'translateY(0px)';
        this.firstChild.style.webkitTransform = 'translateY(0px)';
        this.firstChild.style.display = 'none';
        hiddenSmall.style.transform = 'translateY(0px)';


    }
}








