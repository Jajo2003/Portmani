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
cards.sort(()=> 0.5 - Math.random());
const grid =document.getElementById('grid');

function board(){
  for(let i=0;i<cards.length;i++){
    const card = document.createElement('img');
    card.setAttribute('src','images/blank.png');
    card.setAttribute('data-id',i);
    card.addEventListener('click',Flip)
    grid.append(card);
  }
}
let cardswon = [];
let chosencards = [];
let chosecardsid = [];
function checkmatch(){
  const kartebi=document.querySelectorAll('img');
  if(chosencards[0] === chosencards[1]){
    kartebi[chosecardsid[0]].setAttribute('src','images/white.png');
    kartebi[chosecardsid[1]].setAttribute('src','images/white.png');
    kartebi[chosecardsid[0]].removeEventListener('click',Flip);
    kartebi[chosecardsid[1]].removeEventListener('click',Flip);
    cardswon.push(chosencards);
  }
  else{
    kartebi[chosecardsid[0]].setAttribute('src','images/blank.png');
    kartebi[chosecardsid[1]].setAttribute('src','images/blank.png');
    
  }
  checkwin();
  chosencards = [];
    chosecardsid = [];
}
board();
function Flip(){
  const cardid=this.getAttribute('data-id');
  this.setAttribute('src',cards[cardid].img);
  chosencards.push(cards[cardid].name);
  chosecardsid.push(cardid)
  console.log('Clickeed',cardid);
  if(chosencards.length === 2){
    setTimeout(checkmatch,800);
  }
}
function checkwin(){
  if(cardswon.length === cards.length/2){
    location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley';
  }
}
