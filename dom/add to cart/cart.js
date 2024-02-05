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
    foodName: 'paneer butter masala',
    cusine: 'north indian',
    img: 'hhttps://b.zmtcdn.com/data/dish_photos/065/8c61fca7367178d20b0a56b0b60dd065.jpg',
  },
];

const cont = document.querySelector(".container");

const cards = document.createElement('div');
cards.classList.add('row');
cont.appendChild(cards);
array.forEach(function(e){
    const div = document.createElement('div');
    cards.classList.add('col');
    cards.appendChild(div);
})


