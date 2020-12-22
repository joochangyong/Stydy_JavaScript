// const title = document.getElementById("title");
// == const title = document.querySelector("#title");
const title = document.querySelector("#title");
/* //DOM
// title를 id로 가진 태그의 텍스트 바꾸기
title.innerHTML = "Hi! From JS";
title.style.color = "red";
title.style.background="white";

// document는 html전체. 그중 title태그 텍스트 바꾸기
document.title = "I own you now";
console.dir(document);
*/

/* // Events and event handlers
function handleResize() {
    console.log("I have been resized")
}

function handleResize(event) {
    console.log(event);
}
window.addEventListener("resize", handleResize);

function handleClick() {
    title.style.color="blue";
}
title.addEventListener("click", handleClick);
*/

/* // if-else
if(10 === 5) {
    console.log('hi');
} else {
    console.log('ho');
}
*/

/* // alert창으로 물어보기. 잘 안씀. 엄청 오래됨.
prompt("Ask something");
const age = prompt("How old ard you?");
console.log(age);
*/

/* // if-else
const age = prompt("How old ard you?");
if (age >= 18 && age <= 21) {
    console.log("you can dring but you should not");
} else if(age > 21){
    console.log("go ahed");
} else {
    console.log("too young");
}
*/

/* // DOM if-else Function
const BASE_COLOR = "blue";
const OTHER_COLOR = "red";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color= BASE_COLOR;
}
title.addEventListener("click", handleClick); // "mouseenter", "handleClick"
init();
*/

// DOM if-else Function2

const CLICKED_CLASS = "clicked";

function handleClick() {
    /*
    // const currentClass = title.className;
    const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(currentClass !== CLICKED_CLASS) {
    if(hasClass) {
        // title.className = CLICKED_CLASS;
        title.classList.remove(CLICKED_CLASS);
    } else {
        // title.className = "";
        title.classList.add(CLICKED_CLASS);
    }
    */
   // toggle. 위에것을 toggle로 변경. toggle안에 있는 값이 있으면 add, 없으면 remove
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick); // "mouseenter", "handleClick"
}
init();