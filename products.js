// let Wolf = ["Quantity:", "Color:",];
let productData = [
  {"Image": "./Mugs/WhiteWolfMug.png",
   "Title": "Ebros Celtic Direwolf Ghost White Wolf Mug  $24.95",
   "Description": "This Direwolf Ghost White Wolf mug is made of high quality resin, individually hand painted and polished. They are also designed with a stainless steel liner on the rim. Color Tone May vary from pictures. Handwash only.",
   "Quantity": 0
  },
  {"Image": "./Mugs/BrownWolfMug.png",
   "Title": "Stainless Steel Wolf Mug  $24.95",
   "Description": "High Quality Material Wolf Mug: Stainless Steel Wolf Mug made of Resin and Stainless steel material with creative 3D realistic wolf head design, full of mystery and vintage feeling.",
   "Quantity": 0
  },
  {"Image": "./Mugs/WolfHowlingMug.png",
   "Title": "Howling Wolf Mug  $19.95",
   "Description": "Howling Wolf mug, Wolf Outline Painted With white bark, Gift For Wolf Lovers, Birch Bark, 11 Oz White Ceramic Coffee Cup.",
   "Quantity": 0
  },
  {"Image": "./Mugs/BlackHowlingMug.png",
   "Title": "Howling Wolf (Silhouette) on Mug  $19.95",
   "Description": "This fully-insulated porcelain mug is ideal for your morning brew. Cream and sugar not included.",
   "Quantity": 0
  },
  {"Image": "./Mugs/WolfDrawingMug.png",
   "Title": "Wolf Mug  $12.95",
   "Description": "Crazy Wolf Studio Wolf Mug.",
   "Quantity": 0
  },
  {"Image": "./Mugs/TribalWolfMug.png",
   "Title": "Tribal Wolf Mug  $19.95",
   "Description": "Tribal Wolf Tattoo Design Ornament Front & Back Coffee Mug.",
   "Quantity": 0
  }
]


// let myBtn = document.querySelector("btn");
function displayCards(arr){

  let cardsLocation = document.getElementById("mugs")
  for (let i = 0; i < productData.length; i++){
    console.log(arr[i]);
    let newHTML = `<div class="card" style="width: 18rem;">
      <img src="${arr[i].Image}" class="card-img-top">
      <div class="card-body">
      <h5 class="card-title">${arr[i].Title}</h5>
      <p class="card-text">${arr[i].Description} <strong>Purchased<strong>: ${arr[i].Quantity}</p>
      <button class="btn" onClick="purchaseOrder(${i})"><strong>Order<strong></button>
      </div>
      </div> `
    
   cardsLocation.innerHTML += newHTML
  }
}
displayCards(productData)

function purchaseOrder (idx){
  
  //when someone hits the purchased button for a given product. The quantity value increase by 1 for that object.
  console.log(productData[idx]); 
  productData[idx].Quantity += 1
  console.log(productData[idx].Quantity);
}

// purchaseOrder(productData);



// let orderListed = document.querySelector("ol");

// let buttonTwo = document.getElementById("btn2");
// buttonTwo.addEventListener("click", () => {
//   for (let i = 0; i < Wolf.length; i++){
//     let newOrderList = document.createElement("li");
//     newOrderList.innerText = Wolf[i];
//     console.log(newOrderList);
//     orderListed.appendChild(newOrderList);
//   }
// })


