const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const years = date.getUTCFullYear();
    const months = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clockTitle.innerHTML = `${years}년 
    ${months < 10 ? `0${months}` : `${months}`}월 
    ${day < 10 ? `0${day}` : `${day}`}일 
    ${hours < 10 ? `0${hours}` : `${hours}`}시 
    ${minutes < 10 ? `0${minutes}` : `${minutes}`}분 
    ${seconds < 10 ? `0${seconds}` : `${seconds}`}초`;
}
    

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();