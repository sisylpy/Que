
//
function my$(e) {
    var param = document.getElementById(e);
    return param;
}

//获取元素内容
function getInnerText(element) {
//    判断element是否支持innerText
    if (typeof element.innerText === 'string') {
        return element.innerText;
    }else {
        return element.textContent;
    }
}

//设置元素之间的内容
function setInnerText(element,content) {
//    判断element是否支持innerText
    if (typeof element.innerText === 'string') {
        element.innerText = content;
    }else {
        element.textContent = content;
    }
}


//获取页面滚动出去的距离。处理兼容性
function getScroll() {
    return {
        scrollTop: document.documentElement.scrollTop || document.body.scrollTop,
        scrollLeft: document.documentElement.scrollLeft || document.body.scrollLeft
    }

}

//获取鼠标在页面上的坐标 解决ie8的问题
function  getPage(e) {
    return {
        pageX: e.clientX + getScroll().scrollLeft,
        pageY: e.clientY + getScroll().scrollTop
    }
}





//添加动态Div到firstChild
function createDiv(item,divWidth,divHeight){
    //首先创建div
    var descDiv = document.createElement('div');
    //把新div添加的firstChild
    prependChild(item,descDiv);
    // item.appendChild(descDiv);
    //计算div的确切位置
    var seatX = item.offsetLeft + item.offsetWidth;//横坐标
    var seatY = item.offsetTop + item.offsetHeight;//纵坐标
    //给div设置样式，比如大小、位置
    // var cssStr = "z-index:100;width:"+divWidth+"'px';height:10px;background-color:#3b6caa;black;position:absolute;left:"
    //     + seatX + 'px;top:' + seatY + 'px;';
    //将样式添加到div上，显示div
    descDiv.style.width = divWidth - 20 + 'px';
    descDiv.style.height = divHeight + 'px';
    descDiv.style.backgroundColor = '#3b6caa';
    descDiv.style.position = 'absolute';
    descDiv.style.display = 'none';
    descDiv.style.left = '5px';
    descDiv.style.top= seatY + 'px';
    descDiv.setAttribute("class","underLine");
    return descDiv;
}

//添加div到父元素到firstChild
function prependChild(parent,newChild){
    if(parent.firstChild){
        parent.insertBefore(newChild,parent.firstChild);
    } else {
        parent.appendChild(newChild);
    }
    return parent;
}

//获取父元素的第一个子元素
function getFirstElementChild(parent) {
    if (parent.firstElementChild){
        return getFirstElementChild;
    }
}