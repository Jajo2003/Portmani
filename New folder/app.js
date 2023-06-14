const array = [
        
        'picsandmp3/2pac.jpg',
        'picsandmp3/asap-rocky.jpg',
        'picsandmp3/ricardo-milos.jpg',
        'picsandmp3/ice-cube.jpg',
        'picsandmp3/pucci.jpg',

]
const pics = [];
for(let i=0;i<array.length;i++){
    let pic= `<img src = "${array[i]}" class="pic">`;
    pics[i]=pic;
}
function pause_play(){
    const pauseOrPlay=document.getElementById('switch');
    if(pauseOrPlay.classList.contains('fa-play')){
        pauseOrPlay.classList.remove('fa-play');
        pauseOrPlay.classList.add('fa-pause');
       
    }
    else if(pauseOrPlay.classList.contains('fa-pause')){
        pauseOrPlay.classList.remove('fa-pause');
        pauseOrPlay.classList.add('fa-play');
    }
    
}
function aaa(value){
    let a=document.getElementById('pic-cont');
    a.innerHTML=pics[value];
    
}



