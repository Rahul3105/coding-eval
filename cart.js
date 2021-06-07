addItem();
function addItem() {
  let cartLocalSto = localStorage.getItem("cart");
  let cartItemCont = document.getElementsByClassName("cartItemCont")[0];
  if (cartLocalSto == null) {
    cartLocalSto = [];
  } else {
    cartLocalSto = JSON.parse(cartLocalSto);
  }
  cartLocalSto.forEach((element, ind) => {
    let div = document.createElement("div");
    div.id = ind;
    let img = document.createElement("img");
    img.src = element.img;

    console.log(element);
    let info = document.createElement("div");
    info.classList.add("info");
    info.innerHTML = `<p class="price">${element.price}</p>
        <p class="description">${element.description}</p>
        <p class="time">${element.time}</p>
        <button onclick = submitOrder(${ind})>Submit order</button>`;
    console.log(info);
    div.append(img, info);
    cartItemCont.append(div);
  });
}
function submitOrder(ind) {
  showTiming();
  let cartLocalSto = localStorage.getItem("cart");
  if (cartLocalSto == null) {
    cartLocalSto = [];
  } else {
    cartLocalSto = JSON.parse(cartLocalSto);
  }
  cartLocalSto.splice(ind, 1);
  localStorage.setItem("cart", JSON.stringify(cartLocalSto));
}
function showTiming() {
  alert("Your order is accepted");
  setTimeout(() => {
    alert("Your order is being cooked");
    bool = true;
  }, 3000);
  setTimeout(() => {
    alert("your order is ready");
  }, 11000);
  setTimeout(() => {
    alert("order out for delivery");
  }, 10000 + 11000);
  setTimeout(() => {
    alert("order delivered thank you");
  }, 12000 + 21000);
}
