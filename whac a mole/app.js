const squares = document.querySelectorAll('.square');
const qula = document.querySelector('#qula');
const shoto = document.querySelector('.shoto')
const dro = document.querySelector('#dro');
const startgame = document.querySelector('#play-game');
let result = 0;
let tamashis_dro = 60;
let gartyma;
let tamashi;
startgame.addEventListener('click',function(){
  if(startgame.classList.contains('no-playing')){
    startgame.classList.remove('no-playing');
    startgame.classList.add('playing');
    tamashis_dro=60;
    result=0;
    game();
  }
})

function game(){
  startgame.textContent = 'წარმატებები';
 
  function randomSqr(){
  squares.forEach(b =>{
    b.classList.remove('shoto');
  })
  let a = Math.random()*9;
  a=Math.floor(a);
  let randomPst = squares[a];
  randomPst.classList.add('shoto');
  gartyma = randomPst.id;
  }
  randomSqr();
  
  squares.forEach(a =>{
    a.addEventListener('mousedown',()=>{
      if(a.id === gartyma){
        result++;
        qula.textContent="ქულია: "+result;
        gartyma=null;
      }
    })
  })
  function shotodadis(){
      tamashi=setInterval(randomSqr,300);
  }
  shotodadis();
  function ukutvla(){
  tamashis_dro--;
  dro.innerHTML='დრო: '+tamashis_dro;
    if(tamashis_dro === 0){
      clearInterval(ukutvlis_dro);
      clearInterval(tamashi);
      startgame.textContent = 'დაიწყე თამაში';
      startgame.classList.remove('playing');
      startgame.classList.add('no-playing');
      alert('თამაში დასრულდა შენ შოთიკო დაიჭირე '+result+'-ჯერ');
      tamashis_dro=60;
      result=0;
      qula.textContent="ქულია: "+result;
      dro.innerHTML='დრო: '+tamashis_dro;
    }
  
  }
  let ukutvlis_dro = setInterval(ukutvla,1000);
}
