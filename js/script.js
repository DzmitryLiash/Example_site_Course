window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    //Timer

    let deadline = '2020-05-05';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / (1000 * 60 * 60)); //floor() выдает только целые числа

        //hours = Math.floor((t / 1000 / 60 / 60) % 24), Если нам нужны еще и дни
        //days = Math.floor((t / (1000 * 60 * 60 * 24));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setLock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            //1 Method add 0 if number < 10 example: 08.09.2020
            function addZero(num) {
                if (num < 10) {
                    return '0' + num;
                } else {
                    return num;
                }
            }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            // 2 Method
            // if (t.hours < 10) {
            //     hours.textContent = '0' + t.hours;
            // } else {
            //     hours.textContent = t.hours;
            // }
            // if (t.minutes < 10) {
            //     minutes.textContent = '0' + t.minutes;
            // } else {
            //     minutes.textContent = t.minutes;
            // }
            // if (t.seconds < 10) {
            //     seconds.textContent = '0' + t.seconds;
            // } else {
            //     seconds.textContent = t.seconds;
            // }

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setLock('timer', deadline);

    //Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        description = document.querySelectorAll('.description-btn');// button - "узнать подробнее" in the tabs

    more.addEventListener('click', () => {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        //stops to scroll the page
        document.body.style.overflow = 'hidden';
    });

    //function for each buttons description []
    description.forEach((item) => {
        item.addEventListener('click', () =>{
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            //stops to scroll the page
            document.body.style.overflow = 'hidden';
        });
    });

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        //description.classList.remove('more-splash');
        //stops to scroll the page
        document.body.style.overflow = '';
    });


});