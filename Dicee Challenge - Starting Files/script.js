let gerarAleatorioInt = (min,max) =>{
    return parseInt(Math.random() * (max - min) + min);
}

let img_1 = document.getElementsByClassName("img1")[0];
let img_2 = document.getElementsByClassName("img2")[0];
let header = document.getElementsByTagName("h1")[0];
let rand_1 = parseInt(gerarAleatorioInt(1,6));
let diceImage_1 = "dice" + rand_1 + ".png";
let rand_2 = parseInt(gerarAleatorioInt(1,6));
let diceImage_2 = "dice" + rand_2 + ".png";
let endereco_1 = "images/" + diceImage_1;
let endereco_2 = "images/" + diceImage_2;

img_1.setAttribute("src",endereco_1);
img_2.setAttribute("src", endereco_2);

// let img_arr = ["images/dice1.png",
//             "images/dice2.png",
//             "images/dice3.png",
//             "images/dice4.png",
//             "images/dice5.png",
//             "images/dice6.png",];


// img_1.src = img_arr[rand_1];
// img_2.src = img_arr[rand_2];

if(rand_1 > rand_2){
    header.innerHTML = "Player 1 Wins";
}
else if (rand_1 < rand_2) {
    header.innerHTML = "Player 2 Wins"
}
else {
    header.innerHTML = "Draw";
}

