var nomeplayer1 = localStorage.getItem("player1");
var nomeplayer2 = localStorage.getItem("player2");
document.getElementById("nomedoplayer1").innerHTML = nomeplayer1 + " : ";
document.getElementById("nomedoplayer2").innerHTML = nomeplayer2 + " : ";
var pontuaçãoplayer1 = 0;
var pontuaçãoplayer2 = 0;
document.getElementById("pontuação1").innerHTML = pontuaçãoplayer1;
document.getElementById("pontuação2").innerHTML = pontuaçãoplayer2;
document.getElementById("turnodepergunta").innerHTML = "Turno de pergunta: " + nomeplayer1;
document.getElementById("turnoderesposta").innerHTML = "Turno de resposta: " + nomeplayer2;
function send(){
    numero_da_equação1 = document.getElementById("numero1").value;
    numero_da_equação2 = document.getElementById("numero2").value;
    resposta = parseInt(numero_da_equação1) * parseInt(numero_da_equação2);
    question_word = "<h4 id='word_display'> P. "+numero_da_equação1+" X "+numero_da_equação2+"</h4>"
    input_box = "<br> Resposta: <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
}

var playerpergunta = "player1";
var playerresposta = "player2";

function check(){
    get_awnser = document.getElementById("input_check_box").value;
    if (get_awnser == resposta){
        document.getElementById("acerto_ou_erro").innerHTML = "Você acertou!";
        if(playerresposta == "player1"){
            pontuaçãoplayer1 = pontuaçãoplayer1 + 1;
            document.getElementById("pontuação1").innerHTML = pontuaçãoplayer1;
        }
        else{
            pontuaçãoplayer2 = pontuaçãoplayer2 + 1;
            document.getElementById("pontuação2").innerHTML = pontuaçãoplayer2;
        }
    }
    else{
        document.getElementById("acerto_ou_erro").innerHTML = "Você errou!";
    }
    if(playerpergunta == "nomeplayer1"){
        playerturnopergunta = "nomeplayer2";
        document.getElementById("turnodepergunta").innerHTML = "Turno de pergunta: " + nomeplayer2;
    }
    else{
        playerpergunta = "nomeplayer1";
        document.getElementById("turnodepergunta").innerHTML = "Turno de pergunta: " + nomeplayer1;
    }
    if(playerresposta == "nomeplayer2"){
        playerresposta = "nomeplayer1";
        document.getElementById("turnoderesposta").innerHTML = "Turno de resposta: " + nomeplayer1;
    }
    else{
        playerresposta = "nomeplayer2";
        document.getElementById("turnoderesposta").innerHTML = "Turno de resposta: " + nomeplayer2;
    }
    document.getElementById("output").innerHTML = "";
}