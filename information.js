const buttonThreePblack = document.getElementById("btn3");
const buttonFourPblue = document.getElementById("btn4");

buttonThreePblack.addEventListener("click", () => {
    let clickButton = document.querySelector(".div-class");
      clickButton.style.color = "black";
})
buttonFourPblue.addEventListener("click", () => {
    let clickButton = document.querySelector(".div-class");
     clickButton.style.color = "blue";
})