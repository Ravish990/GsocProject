let cnum = Math.floor(Math.random() * 100) + 1;
let input = document.getElementById("inp");
let reset = document.getElementById("reset");
let message = document.getElementById("Message");
let subBtn = document.getElementById("submit");
let attempt = document.getElementById("Attempts");
let att = 0;
let confettiCanvas = document.getElementById("confetti");
let confettiSettings = { target: confettiCanvas };
let confetti = new ConfettiGenerator(confettiSettings);

document.getElementById("start").addEventListener("click", function() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("game").style.display = "block";
});

function check() {
    let usernum = parseInt(input.value);
    if (cnum === usernum) {
        message.innerHTML = "Congratulations, You got the number!";
        message.style.color = "green";
        reset.style.display = "block";
        subBtn.disabled = true;
        
        confettiCanvas.style.display = "block";
        confetti.render();
        setTimeout(function() {
            confetti.clear();
            confettiCanvas.style.display = "none";
        }, 5000); 
    } else if (cnum < usernum) {
        message.innerHTML = "HINT: Number is lower than your guess";
        message.style.color = "red";
    } else {
        message.innerHTML = "HINT: Number is higher than your guess";
        message.style.color = "red";
    }
    att++;
    attempt.innerHTML = att;
    input.value = "";
}

subBtn.addEventListener("click", check);

reset.addEventListener("click", function() {
    cnum = Math.floor(Math.random() * 100) + 1;
    input.value = "";
    att = 0;
    attempt.innerHTML = att;
    message.innerHTML = "";
    message.style.color = "black";
    reset.style.display = "none";
    subBtn.disabled = false;
});
