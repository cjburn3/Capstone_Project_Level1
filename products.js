let Wolf = ["Quantity:", "Color:",];

let orderListed = document.querySelector("ol");

let buttonTwo = document.getElementById("btn2");
buttonTwo.addEventListener("click", () => {
  console.log("button clicked");
  for (let i = 0; i < Wolf.length; i++){
    let newOrderList = document.createElement("li");
    newOrderList.innerText = Wolf[i];
    console.log(newOrderList);
    orderListed.appendChild(newOrderList);
  }
})