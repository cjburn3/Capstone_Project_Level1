let Help = ["Advocate", "Donate", "Donate Goods and Services", "Host a Fundraiser", "Volunteer", "Educate Yourself", "Talk about it", "Be Involved"];

let orderListed = document.querySelector("ol");

let buttonOne = document.getElementById("btn1");
buttonOne.addEventListener("click", () => {
  console.log("button clicked");
  for (let i = 0; i < Help .length; i++){
    let newOrderList = document.createElement("li");
    newOrderList.textContent = Help[i];
    console.log(newOrderList);
    orderListed.appendChild(newOrderList);
  }
})