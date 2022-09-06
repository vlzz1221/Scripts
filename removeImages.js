var baiduNodes = document.querySelectorAll(".slide-baidu");
var i;
for (i = 0; i < baiduNodes.length; i++) {
    var _parentElement = baiduNodes[i].parentNode;
    if(_parentElement){
        _parentElement.removeChild(baiduNodes[i]); 
    }
}
