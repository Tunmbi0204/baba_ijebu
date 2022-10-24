function play() {
    let input = document.getElementById('threedirect');
    let newInput = Array.from(input.value);
    const random = [] 
    const predict = newInput;


 for(let i=0; i < 6; i++){
  random[i] = Math.floor(Math.random() * 100 + 1 );

}



const correctGuess = [];
let correctIndex = 0;

  for(let value of predict){
    let tum  = parseInt(value)
   if(random.includes(tum)){
    correctGuess[correctIndex] = value;
    correctIndex++
   }

}

if(correctGuess.length >= 3){
    document.getElementById('finalresult').innerHTML = "You Win!!";
}
else{
    document.getElementById('finalresult').innerHTML = "You Lost!!";
}

document.getElementById('random').innerHTML = random;

document.getElementById('AvailNumber').innerHTML = "<b> YOUR CORRECT VALUE: " + correctGuess + "</b>";


}







































// let play = document.getElementById('play');
// play.addEventListener('submit', function(e){
//     e.preventDefault();
//     let name = play['name'].value;
//     let name2 = play['name2'].value;
//     let name3 = play['name3'].value;
//     let number = document.getElementById("output");
//    output.innerHTML = name;
//    console.log(name)


// })