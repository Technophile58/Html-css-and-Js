let favmovie="thor";
let guess=prompt("Enter your guess movie ");

while(guess!=favmovie){
    if(guess=="quit"){
        console.log("You chose quit");
        break;
    }   
guess=prompt('You guess wrong,Enter your guess again :');
}
if(guess===favmovie){
    alert(`You guess right the movie name was ${guess}`);
}


