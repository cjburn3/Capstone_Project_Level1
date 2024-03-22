const buttonOne = document.querySelector(".btn");
const buttonThreePblack = document.getElementById("btn3");
const buttonFourPblue = document.getElementById("btn4");

buttonOne.addEventListener("click", () => {
  let clickButton1 = document.querySelector(".p6-class");
    clickButton1.textContent = "";
})

buttonThreePblack.addEventListener("click", () => {
    let clickButton = document.querySelector(".div-class");
      clickButton.style.color = "black";
})
buttonFourPblue.addEventListener("click", () => {
    let clickButton = document.querySelector(".div-class");
     clickButton.style.color = "blue";
})


function changeColor() {
  document.querySelector(".p8-class").style.color = 'green';
}