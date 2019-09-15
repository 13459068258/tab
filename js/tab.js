;(function(window,undefined){
    window.onload = function(){
        //  todos
        //  1.当鼠标点击或者移到某个标题的时候显示对应的内容;
        //  2.被点击或者鼠标放置的标题背景高亮,其他标题背景不变!
        var titles = document.getElementById('gui-tab-title-item').getElementsByTagName('li');
        var contents = document.getElementById('gui-tab-content-item').getElementsByTagName('li');
        if(titles.length!== contents.length){
            return ;
        }        
        for(var i=0,len=titles.length;i<len;i++){
            // 给所有的标题加上一个id;这个很重要！后面的contents的功能需要用到
            titles[i].id = i;
            titles[i].onmouseover = function(){
                //清除titles和contents所有的名为selected的class
                for(var j=0;j<len;j++){
                    titles[j].classList.remove('selected');
                    contents[j].classList.remove('selected');
                }
                this.className = 'selected';
                contents[this.id].className = 'selected';
            }
        }
    }
})(window)