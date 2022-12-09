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
    var numero_da_equação1 = document.getElementById("numero1").value;
    var numero_da_equação2 = document.getElementById("numero2").value;
    var resposta_da_equação = parseInt(numero_da_equação1) * parseInt(numero_da_equação2);
    question_word = "<h4 id='word_display'> P. "+numero_da_equação1+" X "+numero_da_equação2+"</h4>"
    input_box = "<br> Resposta: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
}