const generatequestion = () => {
    console.log('generatequestion button pressed');
    let a = Math.floor(Math.random() * (10 - -10 + 1)) + -10;
    let b = Math.floor(Math.random() * (10 - -10 + 1)) + -10;
    let c = Math.floor(Math.random() * (10 - -10 + 1)) + -10;
    console.log('a is '+ a);
    console.log('b is '+ b);
    console.log('c is '+ c); 
};