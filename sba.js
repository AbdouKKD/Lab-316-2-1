
function promptExample(){
    let dice = Math.floor(Math.random() *6) + 1
    test =  document.getElementById('ice').innerText = prompt("Guess again")
   


    while(test!= dice){

      if (Number(test) > dice ){
        test = prompt("Number TOO HIGH")
      } else if (Number(test) < dice) {
        test =  prompt("Number is to low")
      } else {alert("You didn't enter a number ?")
        test = prompt("Guess AGAIN")
      }
       
    }
}
