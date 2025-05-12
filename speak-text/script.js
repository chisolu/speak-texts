let speech = new SpeechSynthesisUtterance();


document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});


// let speech = new SpeechSynthesisUtterance();


// let button = document.querySelector("button")
// button.addEventListener("click", () =>{
//     speech.text = document.querySelector("textarea").value;
//     window.speechSynthesis.speak(speech);
// });

// let eke = 1;
// let orie = 2;
// let afo = 3;
// let nkwo = 4;

// let today = new Date();

// function  future(){
//     if(eke===today){
//         console.log(today);
//     }
// }
//   future();

// let num1 = 1 + " Eke";
// let num2 = 2 + " Orie";
// let num3 = 3 + " Afor";
// let num4 = 4 + " nkwo";
// let today = new Date();


// function  currentDate(){
//     console.log(num1, today);
//     console.log(num2, today);
//     console.log(num3, today);
//     console.log(num4, today);

// }

// currentDate();

