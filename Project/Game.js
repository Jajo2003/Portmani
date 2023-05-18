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



function GAME(user_move){
  const a=cpu_move();
  console.log(a);
  const user_pick=document.querySelector('.user_pick');
  const cpu_pick=document.querySelector('.cpu_pick');
  user_pick.innerHTML=`YOUR MOVE<img src="Pics/${user_move}-emoji.png" alt="Rock Emoji">`;
  cpu_pick.innerHTML=`CPU MOVE <img src="Pics/${a}-emoji.png" alt="Rock Emoji">`;
  user_pick.style.width='30px';
  if(user_move==='rock'){
      if(a==='rock'){
          alert('FREA\n CPU CHOOSE ROCK');
      }
      if(a==='paper'){
          alert('Waage :(\nCPU CHOOSE PAPER');
      }
      if(a==='scissors'){
          alert('Moige 🙂 YAAY\nCPU CHOOSE scissors');
      }
  }
  if(user_move==='paper'){
      if(a==='rock'){
          alert('Moige 🙂 YAAY \n CPU CHOOSE ROCK');
      }
      if(a==='paper'){
          alert('FREA \nCPU CHOOSE PAPER');
      }
      if(a==='scissors'){
          alert('Waage :(\nCPU CHOOSE scissors');
      }
  }
  if(user_move==='scissors'){
      if(a==='rock'){
           alert('Waage :(\n CPU CHOOSE ROCK');
      }
      if(a==='paper'){
         alert('Moige 🙂 YAAY \nCPU CHOOSE PAPER');
      }
      if(a==='scissors'){
          alert('FREA \nCPU CHOOSE scissors');
      }
  }
}