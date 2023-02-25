    const a = Math.floor(Math.random() * (10 - -10 + 1)) + -10;
    console.log(a)
    if (a == 0) {
        a = a + 1;
    } 

    const b = Math.floor(Math.random() * (10 - -10 + 1)) + -10;
    const c = Math.floor(Math.random() * (10 - -10 + 1)) + -10;

    const answer = (c-b)/a

    console.log('answer is '+ answer);
    console.log('does answer = 15?');
    console.log(15==answer)
    console.log("answer.type");
    console.log(answer.type);
    console.log("------------")

    console.log('a is '+ a);
    console.log("a.type");
    console.log(a.type);

    console.log("------------")
    console.log('b is '+ b);
    console.log("b.type");
    console.log(b.type);

    console.log("------------")
    console.log('c is '+ c); 
    console.log("c.type");
    console.log(c.type);

    document.querySelector(".question").innerText = `
    ${a}x + ${b} = ${c}
    `

    console.log("------------")

const checkAnswer = (e) => {
    const userGuess = parseFloat(document.getElementById("guess").value);
    console.log('Check answer button pressed');
    console.log("userGuess");
    console.log(userGuess);
    console.log(userGuess.type);
    console.log("answer");
    console.log(answer.type);
    
    if (userGuess.toFixed(2) == answer.toFixed(2)) {
        document.querySelector(".result").innerText = `
        Well done! Your answer is correct!`
    } else {
        document.querySelector(".result").innerText = `
        The answer is incorrect, please try again`
    }
    
};

const refreshButton = document.getElementById("refresh-btn");
  refreshButton.addEventListener("click", function() {
    location.reload();
  });