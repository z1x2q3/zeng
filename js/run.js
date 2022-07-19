var timer = null;

window.onload = function () {


    var person = document.getElementsByClassName("person");

    //点击屏幕事件
    var msClick = document.getElementsByClassName("matchman");

    clearInterval(timer);

    var b_value = person[0].style.bottom;

    var step = new Array(100)

    var isFlag = true
    
    msClick[0].onclick = function () {
        
        if(isFlag){
            isFlag = false
            jump()

        }
        
    }

    var down = function () {
        var j = 1;
        var k = 149;
        timer = setInterval(function () {

            if (j <= 150) {
                j = j + 1;
                k = k - 1;
                person[0].style.bottom = 3 + k + 'px';
            }else{
                clearInterval(timer)
                isFlag = true
            }
        }, 7)

    }

    var jump = function () {

        var i = 1;

        timer = setInterval(function () {

            if (i <= 150) {
                i = i + 1;
                person[0].style.bottom = 3 + i + 'px';
            }
            else {
                clearInterval(timer)
                down()
            }
        }, 7)

       

    }

    


}
