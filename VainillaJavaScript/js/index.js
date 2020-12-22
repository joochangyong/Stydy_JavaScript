const title = document.getElementById("title");
// == const title = document.querySelector("#title");

// title를 id로 가진 태그의 텍스트 바꾸기
title.innerHTML = "Hi! From JS";
title.style.color = "red";
title.style.background="white";

// document는 html전체. 그중 title태그 텍스트 바꾸기
document.title = "I own you now";
console.dir(document);