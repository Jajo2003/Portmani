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
  let a1 = chosecardsid[0];
  let a2= chosecardsid[1];
  
  if(a1 === a2 ){
    kartebi[a1].setAttribute('src', 'images/blank.png');
    kartebi[a2].setAttribute('src', 'images/blank.png');
    alert('Erti da igives ra pontshi acher dzmi!!!');
  }
  else if(chosencards[0] === chosencards[1]){
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
    setTimeout(checkmatch,400);
  }
}
function checkwin(){
  if(cardswon.length === cards.length/2){
    setTimeout(winner,2000);
    setTimeout(rickroll,2000);
  }
}
function winner(){
  document.body.innerHTML='Moigeee';
}
function rickroll(){
location.href='https://www.youtube.com/watch?v=niwAlnT4gWo&ab_channel=TVIMEDI';
}
