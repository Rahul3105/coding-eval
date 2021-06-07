//  <div>
//     <img src="https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com%20C/O%20https://placeholder.com/" alt="" srcset="">
//     <div class="info">

//     </div>
// </div>

const dishes = [
  {
    img: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com%20C/O%20https://placeholder.com/",
    price: "$100",
    description: "matar paneer",
    time: "00: 01: 00",
  },
  {
    img: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com%20C/O%20https://placeholder.com/",
    price: "$200",
    description: "cake",
    time: "00: 02: 00",
  },
  {
    img: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com%20C/O%20https://placeholder.com/",
    price: "$300",
    description: "drinks",
    time: "00: 03: 00",
  },
  {
    img: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com%20C/O%20https://placeholder.com/",
    price: "$400",
    description: "noodles",
    time: "00: 04: 00",
  },
  {
    img: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com%20C/O%20https://placeholder.com/",
    price: "$500",
    description: "chowmin",
    time: "00: 05: 00",
  },
  {
    img: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com%20C/O%20https://placeholder.com/",
    price: "$600",
    description: "matar paneer",
    time: "00: 06: 00",
  },
];
let dishLocalSto = localStorage.getItem("dishes");
if (dishLocalSto == null) {
  localStorage.setItem("dishes", JSON.stringify(dishes));
}
function addDish() {
  let dishLocalSto = localStorage.getItem("dishes");
  let dishCont = document.getElementsByClassName("dishCont")[0];
  if (dishLocalSto == null) {
    dishLocalSto = [];
  } else {
    dishLocalSto = JSON.parse(dishLocalSto);
  }
  dishLocalSto.forEach((element, ind) => {
    let div = document.createElement("div");
    div.id = ind;
    let img = document.createElement("img");
    img.src = element.img;
    let info = document.createElement("div");
    info.classList.add("info");
    info.innerHTML = `<p class="price">${element.price}</p>
        <p class="description">${element.description}</p>
        <p class="time">${element.time}</p>
        <button onclick = addToCart(${ind})>Add to cart</button>`;
    div.append(img, info);
    dishCont.append(div);
  });
}
addDish();
function addToCart(ind) {
  let dishLocalSto = localStorage.getItem("dishes");
  if (dishLocalSto == null) {
    dishLocalSto = [];
  } else {
    dishLocalSto = JSON.parse(dishLocalSto);
  }
  let itemObj = dishLocalSto.slice(ind, ind + 1);
  let cartLocalSto = localStorage.getItem("cart");
  if (cartLocalSto == null) {
    cartLocalSto = [];
  } else {
    cartLocalSto = JSON.parse(cartLocalSto);
  }
  cartLocalSto.push(itemObj[0]);
  localStorage.setItem("cart", JSON.stringify(cartLocalSto));
}
