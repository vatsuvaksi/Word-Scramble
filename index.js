const msg=document.querySelector('.message');   //Takes the message from h3 file 
const guess=document.querySelector('input');   // Takes the user input 
const but=document.querySelector('.but');     // button on the main screen
 let play= false;                            // Initialise that that the game is not being played at the moment
 let newWords="";                           
 let randomWords="";
 let words=['java','python','c++','ruby','ecmascripts','javascript','html','css','xml','json','.net','pascal','sql','swift','c#'];  //Initialise programming languages in an array
 
   
 // this creates the new Words for scramble 
 const createNewWords = () => {
 let randomNum=Math.floor((Math.random()*words.length));
    let tempWords=words[randomNum];
    return  tempWords;
}
// Generates the random scrambled element with jth index along with it's original index i
const scramble = (arr) =>{
for(let i=arr.length-1;i>=0;i--)
{
    temp=arr[i];
    let j=Math.floor(Math.random()*(i+1));
    arr[i]=arr[j];
    arr[j]=temp;
}
return arr;
}
but.addEventListener('click',function(){     // on clicking the button The game will start
    //  play is initially set to false so when the button is clicked if part will run and play's value will be set true for the next part

if(!play){
play=true;
but.innerHTML="Guess";                       //sets the button's text to Guess
guess.classList.toggle('hidden');           // shows the rest of the feids    
newWords= createNewWords();                 // chooses a random word from the arrray
randomWords= scramble(newWords.split("")).join("");             // .split sends the strinf as array and when scramble returns the random text from that  .join converts it to string
msg.innerHTML=randomWords;



}else{
let tempWord=guess.value;                
if(tempWord === newWords){
console.log('correct');
play = false;
msg.innerHTML=`Correct Guess, This is ${tempWord}`;
but.innerHTML="Start again";
guess.classList.toggle('hidden');
guess.value="";

}else
{
 console.log('incorrect');
 msg.innerHTML=`Sorry friend wrong answer for ${randomWords}`;
 but.innerHTML="try again";
}

}
});



//This project is made to practise Modern Javascripts features  