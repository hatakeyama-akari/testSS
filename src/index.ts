function init() {
    const URL_FRONT_SIDE = 'https://demo.shapespark.com/api-examples-autoplay/';
    const URL_BACK_SIDE = 'https://usedge.shapespark.com/model/';

    const URL_MEETING = 'https://usedge.shapespark.com/example-room/#meeting-key=MQwo3CGLKhfxhsIV';
    const MEETING_KEY = 'MQwo3CGLKhfxhsIV';

    let roomUrl = URL_FRONT_SIDE;

    let iframeElement = document.createElement('iframe');
    iframeElement.setAttribute('src', roomUrl);
    iframeElement.setAttribute('allow', 'gyroscope; accelerometer; xr-spatial-tracking; vr;');
    iframeElement.setAttribute('scrolling', 'no');
    iframeElement.setAttribute('allowfullscreen', 'true');
    iframeElement.style.width = '100%';
    iframeElement.style.height = '100%';
    iframeElement.style.border = 'none';

    document.getElementById('iframe').appendChild(iframeElement);

    document.getElementById('switch-room').onclick = () => {
        roomUrl = roomUrl === URL_FRONT_SIDE ? URL_BACK_SIDE : URL_FRONT_SIDE;
        iframeElement.setAttribute('src', roomUrl);
    };

    document.getElementById('meeting').onclick = () => {
        let errorMassageElement = document.getElementById('meeting-key-error-message');
        if (errorMassageElement.classList.contains('show')) {
            errorMassageElement.classList.remove('show');
        }

        switchMeetingModal();
    };

    document.getElementById('meeting-key-submit').onclick = () => {
        let meetingKey = (<HTMLInputElement>document.getElementById('meeting-key-input')).value;
        let errorMassageElement = document.getElementById('meeting-key-error-message');

        if (meetingKey === MEETING_KEY) {
            if (errorMassageElement.classList.contains('show')) {
                errorMassageElement.classList.remove('show');
            }

            switchMeetingModal();

            iframeElement.setAttribute(
                'allow',
                'gyroscope; accelerometer; xr-spatial-tracking; vr; camera; microphone;'
            );
            roomUrl = URL_MEETING;
            iframeElement.setAttribute('src', roomUrl);
        } else {
            if (!errorMassageElement.classList.contains('show')) {
                errorMassageElement.classList.add('show');
            }
        }
    };

    document.getElementById('meeting-key-cancel').onclick = () => {
        switchMeetingModal();
    };
}

function switchMeetingModal() {
    let modalElement = document.getElementById('meeting-key-modal');
    if (modalElement.classList.contains('show')) {
        modalElement.classList.remove('show');
    } else {
        modalElement.classList.add('show');
    }
}

window.onload = () => {
    init();
};
