const array = [
        
        'picsandmp3/2pac.jpg',
        'picsandmp3/asap-rocky.jpg',
        'picsandmp3/ice-cube.jpg',
        'picsandmp3/ricardo-milos.jpg',
    

]
const pics = [];
const id = [];
for(let i=0;i<array.length;i++){
    let pic= `<img src = "${array[i]}" class="pic">`;
    pics[i]=pic;
    id[i]=i;
}



