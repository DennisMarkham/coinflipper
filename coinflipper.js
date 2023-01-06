var ontails = false;
function flipAni(random) {
      setTimeout(flip, 200);
    setTimeout(flip, 400);
    setTimeout(flip, 600);
    setTimeout(flip, 800);
    setTimeout(flip, 1000);
    setTimeout(flip, 1200);
    setTimeout(flip, 1400);
    setTimeout(flip, 1600);
    setTimeout(flip, 1800);
    setTimeout(flip, 2000);
    if (random == 1) {
        setTimeout(flip, 2200);
    }
}

function toss() {
    var random = Math.floor(Math.random() * 2);
    flipAni(random);
}
function heads() {
    document.getElementById("coin").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/2005-Penny-Uncirculated-Obverse.png/800px-2005-Penny-Uncirculated-Obverse.png";
    ontails = false;
}
function tails() {
    document.getElementById("coin").src = "https://upload.wikimedia.org/wikipedia/commons/e/e5/2005_Penny_Rev_Unc_D.png";
    ontails = true;
}
function flip() {
    if (ontails == false) {
        tails();
    }
    else {
        heads();
    }
}
