
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

function displayCards(arr){

  let cardsLocation = document.getElementById("mugs")
  // let wideRowCount = productData.length / 3;
  
  for (let i = 0; i < productData.length; i++){
    console.log(arr[i]);

    let newHTML =  `<div class="row row-cols-3 g-3">
    <div class="col">
      <div class="card">
        <img src="${arr[i].Image}" class="card-img-top img-fluid" alt="Wolf"">
        <div class="card-body">
          <h5 class="card-title">${arr[i].Title}</h5>
          <p class="card-text">${arr[i].Description} <strong>Purchased<strong>: ${arr[i].Quantity}</p>
          <button class="btn" onClick="purchaseOrder(${i})"><strong>Order<strong></button>
        </div>
      </div>
      >/div>
    </div>`
   
    cardsLocation.innerHTML += newHTML;
  }
}
displayCards(productData)

function purchaseOrder (idx){
  
  //when someone hits the purchased button for a given product. The quantity value increase by 1 for that object.
  console.log(productData[idx]); 
  productData[idx].Quantity += 1
  console.log(productData[idx].Quantity);
}



//when the for loop first runs create a row
//For the first row add the first 3 productData cards.
//then continue this pattern every 3 cards.
//example modulus example.  100% 25 =0 because 100 can be evenly divided my 25.
//first row will be i=0.  any other row after that will be increments of 3 later. 0,3,6,9.
// can do all this within this for loop. need something to account for each index.
