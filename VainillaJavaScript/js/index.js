const title = document.getElementById("title");
// == const title = document.querySelector("#title");

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

const age = prompt("How old ard you?");
if (age >= 18 && age <= 21) {
    console.log("you can dring but you should not");
} else if(age > 21){
    console.log("go ahed");
} else {
    console.log("too young");
}