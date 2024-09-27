//document.querySelector()选取元素

/*
let myHeading = document.querySelector("h1");
myHeading.textContent = "Arcaea";

document.querySelector("img").addEventListener("click", function () {
  alert("干什么！"); //这是未命名函数？匿名函数。
});
*/

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Arghena.jpg") {
    myImage.setAttribute("src", "images/insight.jpg");
  } else {
    myImage.setAttribute("src", "images/Arghena.jpg");
  }
};

function setUserName() {
  let myHeading = document.querySelector("h1");
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome, " + myName;
  }
}

let myButton = document.querySelector("button");

myButton.onclick = function () {
  setUserName();
};

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Welcome, " + storedName;
}
