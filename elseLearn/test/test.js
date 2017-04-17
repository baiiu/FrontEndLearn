function getImg() {
    var objs = document.getElementsByTagName("img");
    var imgurl = '';

    for (var i = 0; i < objs.length; i++) {

        if (objs[i].alt.indexOf('videoplay') > -1) {
            continue;
        }

        imgurl += objs[i].src + ',';

        (function(i) {
            objs[i].onclick = function() {
                alert(i);
            }
        })(i);

    }

    // alert(imgurl);
}


setupWebViewJavascriptBridge(function(bridge) {
    bridge.registerHandler('elementToHeight', function(id, responseCallback) {
        var element = document.getElementById('referenceSection');
        var actualTop = element.offsetTop;　　　　
        var current = element.offsetParent;　　　　
        while (current !== null) {
            actualTop += current.offsetTop;　　　　　　
            current = current.offsetParent;　
        }
        responseCallback(actualTop);
    });
});



function getTop() {
    var image = document.getElementById("image");
    var actualTop = element.offsetTop;　　　　
    var current = element.offsetParent;　　　　
    while (current !== null) {
        actualTop += current.offsetTop;　　　　　　
        current = current.offsetParent;　
    }
    return actualTop;　　

}

function getElementTop(element) {
    var actualTop = element.offsetTop;　　　　
    var current = element.offsetParent;　　　　
    while (current !== null) {
        actualTop += current.offsetTop;　　　　　　
        current = current.offsetParent;　
    }
    return actualTop;　　
}
