/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
function init() {
    var URL_FRONT_SIDE = 'https://demo.shapespark.com/api-examples-autoplay/';
    var URL_BACK_SIDE = 'https://usedge.shapespark.com/model/';
    var URL_MEETING = 'https://usedge.shapespark.com/example-room/#meeting-key=MQwo3CGLKhfxhsI';
    var MEETING_KEY = 'test';
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
    document.getElementById('meeting').onclick = function () {
        var errorMassageElement = document.getElementById('meeting-key-error-message');
        if (errorMassageElement.classList.contains('show')) {
            errorMassageElement.classList.remove('show');
        }
        switchMeetingModal();
    };
    document.getElementById('meeting-key-submit').onclick = function () {
        var meetingKey = document.getElementById('meeting-key-input').value;
        var errorMassageElement = document.getElementById('meeting-key-error-message');
        if (meetingKey === MEETING_KEY) {
            if (errorMassageElement.classList.contains('show')) {
                errorMassageElement.classList.remove('show');
            }
            switchMeetingModal();
            iframeElement.setAttribute('allow', 'gyroscope; accelerometer; xr-spatial-tracking; vr; camera; microphone;');
            roomUrl = URL_MEETING;
            iframeElement.setAttribute('src', roomUrl);
        }
        else {
            if (!errorMassageElement.classList.contains('show')) {
                errorMassageElement.classList.add('show');
            }
        }
    };
    document.getElementById('meeting-key-cancel').onclick = function () {
        switchMeetingModal();
    };
}
function switchMeetingModal() {
    var modalElement = document.getElementById('meeting-key-modal');
    if (modalElement.classList.contains('show')) {
        modalElement.classList.remove('show');
    }
    else {
        modalElement.classList.add('show');
    }
}
window.onload = function () {
    init();
};

/******/ })()
;
//# sourceMappingURL=bundle.js.map