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
    let maxRandTurns = 6;
    let turns = [0,0,0];

    for(let i = 0; i < turns.length; i++) {
        turns[i] = Math.floor(Math.random() * maxRandTurns+1) - (maxRandTurns)/2;
        turns[i] += numberRotations[randNum-1][i];
    }

    return "rotateX("+turns[0]+"turn) rotateY("+turns[1]+"turn) rotateZ("+turns[2]+"turn)";
}
