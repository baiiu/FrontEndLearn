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
