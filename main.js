(function (window, document) {
    'use strict';

    const $toggles = document.querySelectorAll('.toggle'); //NodeList 유사배열
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function () {
        toggleElements();
    });

    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on'); //클릭할때마다 toggle 클래스에 on 추가, 제거
        })
    }
})(window, document) //즉시실행 함수