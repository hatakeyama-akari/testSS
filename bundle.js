/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
function init() {
    var URL_FRONT_SIDE = 'https://usedge.shapespark.com/example-room/';
    var URL_BACK_SIDE = 'https://usedge.shapespark.com/model/';
    var roomUrl = URL_FRONT_SIDE;
    var iframeElement = document.createElement('iframe');
    iframeElement.setAttribute('src', roomUrl);
    iframeElement.setAttribute('allow', 'gyroscope; accelerometer; xr-spatial-tracking; vr;');
    iframeElement.setAttribute('scrolling', 'no');
    iframeElement.setAttribute('allowfullscreen', 'true');
    iframeElement.style.width = '100%';
    iframeElement.style.height = '100%';
    iframeElement.style.border = 'none';
    document.getElementById('iframe').appendChild(iframeElement);
    document.getElementById('switch-room').onclick = function () {
        roomUrl = roomUrl === URL_FRONT_SIDE ? URL_BACK_SIDE : URL_FRONT_SIDE;
        iframeElement.setAttribute('src', roomUrl);
    };
}
window.onload = function () {
    init();
};

/******/ })()
;
//# sourceMappingURL=bundle.js.map