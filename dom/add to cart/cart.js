const array = [
  {
    id: 1,
    foodName: "paneer butter masala",
    cusine: "north indian",
    img: "https://b.zmtcdn.com/data/dish_photos/065/8c61fca7367178d20b0a56b0b60dd065.jpg",
  },
  {
    id: 2,
    foodName: "paneer butter masala",
    cusine: "north indian",
    img: "https://b.zmtcdn.com/data/dish_photos/065/8c61fca7367178d20b0a56b0b60dd065.jpg",
  },
  {
    id: 3,
    foodName: "paneer butter masala",
    cusine: "north indian",
    img: "https://b.zmtcdn.com/data/dish_photos/065/8c61fca7367178d20b0a56b0b60dd065.jpg",
  },
  {
    id: 4,
    foodName: "paneer butter masala",
    cusine: "north indian",
    img: "https://b.zmtcdn.com/data/dish_photos/065/8c61fca7367178d20b0a56b0b60dd065.jpg",
  },
  {
    id: 5,
    foodName: "paneer butter masala",
    cusine: "north indian",
    img: "https://b.zmtcdn.com/data/dish_photos/065/8c61fca7367178d20b0a56b0b60dd065.jpg",
  },
  {
    id: 6,
    foodName: "paneer butter masala",
    cusine: "north indian",
    img: "https://b.zmtcdn.com/data/dish_photos/065/8c61fca7367178d20b0a56b0b60dd065.jpg",
  },
  {
    id: 7,
    foodName: "paneer butter masala",
    cusine: "north indian",
    img: "https://b.zmtcdn.com/data/dish_photos/065/8c61fca7367178d20b0a56b0b60dd065.jpg",
  },
  {
    id: 8,
    foodName: "paneer butter masala",
    cusine: "north indian",
    img: "https://b.zmtcdn.com/data/dish_photos/065/8c61fca7367178d20b0a56b0b60dd065.jpg",
  },
  {
    id: 9,
    foodName: "paneer butter masala",
    cusine: "north indian",
    img: "https://b.zmtcdn.com/data/dish_photos/065/8c61fca7367178d20b0a56b0b60dd065.jpg",
  },
  {
    id: 10,
    foodName: "paneer butter masala",
    cusine: "north indian",
    img: "https://b.zmtcdn.com/data/dish_photos/065/8c61fca7367178d20b0a56b0b60dd065.jpg",
  },
];

const cont = document.querySelector(".container");

//cart items
const cartDiv = document.createElement("div");
const cartHeading = document.createElement("h2");
cartHeading.innerText = "Cart Items";
cartDiv.classList.add("cart_container");
document.body.appendChild(cartDiv);
cartDiv.appendChild(cartHeading);
array.forEach(function (e) {
  //Creating Elements
  const div = document.createElement("div");
  const img = document.createElement("img");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const btn = document.createElement("button");

  div.classList.add("col");

  //Set Attributes
  img.setAttribute("src", e.img);

  //cart
  btn.setAttribute("id", "addtocart");
  btn.setAttribute("onclick", "addToCart(this)");
  div.setAttribute("data-id", e.id); //custom attribute
  p1.innerText = `Food Name : ${e.foodName}`;
  p2.innerText = `Cusine  : ${e.cusine}`;
  p3.innerText = `ID  : ${e.id}`;
  //cart
  btn.innerText = "Add to Cart";
  //Adding node element
  div.appendChild(img);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.appendChild(btn);
  cont.appendChild(div);
});

function addToCart(event) {
  let a = event.parentElement.getAttribute("data-id");
  console.log(a);
  data = array.filter((e) => e.id == parseInt(a));
  console.log(data);
  const cartChildDiv = document.createElement("div");

  const img = document.createElement("img");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  cartChildDiv.classList.add("col");
  img.setAttribute("src", data[0].img);
  p1.innerText = `Food Name : ${data[0].foodName}`;
  p2.innerText = `Cusine  : ${data[0].cusine}`;
  p3.innerText = `ID  : ${data[0].id}`;
  cartChildDiv.appendChild(img);
  cartChildDiv.appendChild(p1);
  cartChildDiv.appendChild(p2);
  cartChildDiv.appendChild(p3);
  cartDiv.appendChild(cartChildDiv);
}
