const array = [
        
        'picsandmp3/2pac.jpg',
        'picsandmp3/asap-rocky.jpg',
        'picsandmp3/ricardo-milos.jpg',
        'picsandmp3/ice-cube.jpg',
        'picsandmp3/pucci.jpg',

]
let songsarr = [
  {name: "picsandmp3/2pac.mp3",
    id:0},
  {name: "picsandmp3/Praise lord.mp3",
    id:1},
  {name: "picsandmp3/U got that.mp3",
    id:2},
    {name:  "picsandmp3/Cube.mp3",
    id:3},
    {name: "picsandmp3/Crucified.mp3",
    id:4},
  
]
let counter=0;
const pics = [];
for(let i=0;i<array.length;i++){
    let pic= `<img src = "${array[i]}" class="pic">`;
    pics[i]=pic;
}






function checkpause(val){
  let sound=document.getElementById('audioplay');
    sound.setAttribute('src',songsarr[val].name);
    let play = document.getElementById('  ');
  for(let i =0;i<songsarr.length;i++){
     play = document.getElementById(`${i}`);
    if(play.classList.contains('fa-pause')){
      if(i===val){
        continue;
      }

      else{
      play.classList.remove('fa-pause');
      play.classList.add('fa-play');
      }
    }
    if(play.classList.contains('pa-pause')){
      play.classList.remove('fa-pause');
        play.classList.add('fa-play');
    }
  }
  for(let i =0 ;i<songsarr.length;i++){
    play = document.getElementById(`${i}`);
    if(play.classList.contains('fa-pause')){
      sound.play();
    }
  }
}


let ctr2=0;
function aaa(value){
    const a=document.getElementById('pic-cont');
    let play = document.getElementById(`${value}`);
    if(a.innerHTML!=pics[value]);
    a.innerHTML=pics[value];
    checkpause(value);
    if(play.classList.contains('fa-play')){
      play.classList.remove('fa-play');
      play.classList.add('fa-pause');
      ctr2++;
    }
    else if(play.classList.contains('fa-pause')){
      play.classList.remove('fa-pause');
      play.classList.add('fa-play');
    }
}




function pause_play(a){
    let sound=document.getElementById('audioplay');
    sound.setAttribute('src',songsarr[a].name);
    const pauseOrPlay=document.getElementById('switch');
    const Pic=document.querySelector('.pic');
    let range = document.getElementById('music-range');
sound.addEventListener('loadedmetadata',function(){
    const dur = document.getElementById('duration');
    let duration = sound.duration;
    duration/=60;
    duration= duration.toFixed(2);
    dur.innerHTML=duration;
    let range = document.getElementById('music-range');

})
  if(counter===0){
   sound.play();
    counter++;
    pauseOrPlay.classList.remove('fa-play');
    pauseOrPlay.classList.add('fa-pause');
    Pic.classList.add('rotation');
  }
  else {
    sound.pause();
    counter=0;
    pauseOrPlay.classList.remove('fa-pause');
        pauseOrPlay.classList.add('fa-play');
        Pic.classList.remove('rotation');
        
  }
}




