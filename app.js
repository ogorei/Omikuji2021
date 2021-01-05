let unmei=["大吉","吉","小吉","末吉","末小吉","凶"];
const btnHiku= document.getElementById('hiku').addEventListener('click',pickUP);
const btnStop= document.getElementById('stop').addEventListener('click',stopOmikuji);

function pickUP(n){
const outputSpan= document.getElementById('resultOutput');
 n= Math.floor(Math.random()*unmei.length);
 outputSpan.innerText= unmei[n];
}


function stopOmikuji(){
const outputSpan= document.getElementById('resultOutput');   
outputSpan.innerText="";
}

