/*--js控制页面字号大小--*/
(function (doc, win) {
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = doc.body.clientWidth;
            if (!clientWidth) return;
            var theHtml = doc.getElementsByTagName("html");
            theHtml[0].style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);