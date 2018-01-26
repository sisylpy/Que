//一个div执行动画的定时器
function  animation(element,target,deriction) {

    if (element.timerId) {
        clearInterval(element.timerId)
    }
    element.timerId = setInterval(function () {

        //目标位置
        // var target = 500;

        //当前坐标
        var current  = element.offsetLeft;

        //步进
        var step = 5;

        //当当前位置 > 目标位置 step 应该是负数
        if (current > target) {
            step = - Math.abs(step);
        }


        // if (current >= target) {
        if (Math.abs(current - target) <= Math.abs(step)) {
            element.style.deriction = target + 'px';
            clearInterval(element.timerId);
            return;
        }
        current += step;
        element.style.deriction = current + 'px';
    },20);

}