
let answer = Math.floor(Math.random()*10 +1);
let guesses = 0;

document.getElementById("submit").onclick = function() {
  let guess = document.getElementById("input").value
  let resultText = document.getElementById("result");
    guesses+=1;
  if (guess == answer) {
    resultText.innerHTML =` Your guess ${guess} is correct, it takes ${guesses} guesses`;
    resultText.style.color = "Green"
  } else if (answer > guess) {
    resultText.innerHTML = `Too Small!`;
    resultText.style.color ="red";
  }
  else{
    document.getElementById("result").innerHTML = 
    `Too Big!`;
    resultText.style.color = "red";
  }

}