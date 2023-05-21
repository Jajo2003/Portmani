function cpu_move(){
  let CPU;
  CPU=Math.random();
  if(CPU>0&&CPU<=1/3){
      CPU='rock';
  }
  else if(CPU>1/3&&CPU<=2/3){
      CPU='scissors';
  }
  else if(CPU>2/3){
      CPU='paper';
  }
  return CPU;
}

let result;
function GAME(user_move){
  const a=cpu_move();
  const user_pick=document.querySelector('.user_pick');
  const cpu_pick=document.querySelector('.cpu_pick');
  user_pick.innerHTML=`YOUR MOVE<img src="Pics/${user_move}-emoji.png" alt="Rock Emoji">`;
  cpu_pick.innerHTML=`CPU MOVE <img src="Pics/${a}-emoji.png" alt="Rock Emoji">`;
  user_pick.style.width='30px';
  if(user_move==='rock'){
      if(a==='rock'){
          alert('FREA\n CPU CHOOSE ROCK');
          result='FRE';
      }
      if(a==='paper'){
          alert('Waage :(\nCPU CHOOSE PAPER');
        result='Wageba';
      }
      if(a==='scissors'){
          alert('Moige 🙂 YAAY\nCPU CHOOSE scissors');
          result='Mogeba';
      }
  }
  if(user_move==='paper'){
      if(a==='rock'){
          alert('Moige 🙂 YAAY \n CPU CHOOSE ROCK');
          result='Mogeba';
      }
      if(a==='paper'){
          alert('FREA \nCPU CHOOSE PAPER');
          result='FRE';
      }
      if(a==='scissors'){
          alert('Waage :(\nCPU CHOOSE scissors');
          result='Wageba';
      }
  }
  if(user_move==='scissors'){
      if(a==='rock'){
           alert('Waage :(\n CPU CHOOSE ROCK');
           result='Wageba';
      }
      if(a==='paper'){
         alert('Moige 🙂 YAAY \nCPU CHOOSE PAPER');
         result='Mogeba';
      }
      if(a==='scissors'){
          alert('FREA \nCPU CHOOSE scissors');
          result='FRE';
      }
  }
  return result;
}
const resullt=document.querySelector('.scoreboard');
let Score ={
  Mogeba:0,
  Wageba:0,
  Fre:0
};

function CTR(){
    localStorage.setItem('scoreboard',JSON.stringify(Score));
    
    if(result==='FRE'){
        Score.Fre++;
    }
    else if(result==='Mogeba'){
        Score.Mogeba++;
    }
    else if(result==='Wageba'){
        Score.Wageba++;
    }
    localStorage.getItem('scoreboard',JSON.stringify(Score));
    resullt.innerHTML=`Wins:${Score.Mogeba},Losses:${Score.Wageba},Tie:${Score.Fre}`;
}
function anulireba(){
    Score.Fre=0;
    Score.Mogeba=0;
    Score.Wageba=0;
    location.reload();
}