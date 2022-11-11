const numberRotations = [
    [-.03, -.03, 0], // Number 1
    [-.53,.03,0],
    [-.03,-.28,0],
    [-.03,.22,0],
    [-.28,0,-.03],
    [.22,0,.03]      // Number 6
];

function rollDie(id) {
    document.getElementById('die-instruction').style.visibility = 'hidden';

    let dieElement = document.getElementById(id);
    let randomNumber = Math.floor((Math.random() * 6) + 1);

    let transform = getCSSTransform(randomNumber);

    console.log(randomNumber);
    console.log(transform);

    dieElement.style.transform = transform;
}

function getCSSTransform(randNum) {
    // Calculate random number of turns the die will roll.
    let xTurns = Math.floor(Math.random() * 11);
    let yTurns = Math.floor(Math.random() * 11);
    let zTurns = Math.floor(Math.random() * 11);

    xTurns += numberRotations[randNum-1][0];
    yTurns += numberRotations[randNum-1][1];
    zTurns += numberRotations[randNum-1][2];

    return "rotateX("+xTurns+"turn) rotateY("+yTurns+"turn) rotateZ("+zTurns+"turn)";
}
