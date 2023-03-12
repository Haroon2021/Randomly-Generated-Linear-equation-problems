    const a = Math.floor(Math.random() * (10 - -10 + 1)) + -10;
    console.log(a)
    if (a == 0) {
        a = a + 1;
    } 
    const b = Math.floor(Math.random() * (10 - -10 + 1)) + -10;
    const c = Math.floor(Math.random() * (10 - -10 + 1)) + -10;

    const answer = (c-b)/a

    document.querySelector(".question").innerText = `
    ${a}x + ${b} = ${c}
    `

const checkAnswer = (e) => {
    const userGuess = parseFloat(document.getElementById("guess").value);
    
    
    if (userGuess.toFixed(2) == answer.toFixed(2)) {
        document.querySelector(".incorrectresult").innerText = ``
        document.querySelector(".correctresult").innerText = `
        Well done! Your answer is correct!`
    } else {
        document.querySelector(".correctresult").innerText = ``
        document.querySelector(".incorrectresult").innerText = `
        The answer is incorrect, please try again`
    }
    
};

const refreshButton = document.getElementById("refresh-btn");
  refreshButton.addEventListener("click", function() {
    location.reload();
  });