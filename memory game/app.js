const cards = [
  {
    name:'fries',
    img:'./images/fries.png',
  },
  
  {
    name:'cheeseburger',
    img:'./images/cheeseburger.png'
  },
  {
    name:'hotdog',
    img:'./images/hotdog.png'
  },
  {
    name:'ice-cream',
    img:'./images/ice-cream.png'
  },
  {
    name:'milkshake',
    img:'./images/milkshake.png'
  },
  {
    name:'pizza',
    img:'./images/pizza.png'
  },

]
let counter=0;
const smth=document.querySelector('.a');
smth.innerHTML='<img src="' + cards[0].img + '">';

let newarr = [
];
for(let i=0;i<cards.length;i++){
  newarr[i]='<img src="' + cards[i].img + '">';
}
console.log(cards.length)

function create(a){
  let a=document.createElement('div');
  smth.innerHTML='<img src="' + cards[0].img + '">';
  a.innerHTML=newarr[a];
}