const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_ON = "showing";

//입력한 value 저장
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

//input창 submit
function handleSubmit(event) {
    //엔터해도 value 없어지는거 막기
    event.preventDefault();

    const currentValue = input.value;
    paintgreeting(currentValue);
    //input으로 불러온 value
    saveName(currentValue);
}

//input창 보이기
function askForName() {
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit);
}

//h4 텍스트 출력
function paintgreeting(text) {
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerHTML = `Hello ${text}`;
}

//local에 값 가져오기
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        paintgreeting(currentUser);
    }
}

function init () {
    loadName();
}

init();