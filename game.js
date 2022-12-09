function adduser(){
    name1 = document.getElementById('nome1').value;
    name2 = document.getElementById('nome2').value;
    localStorage.setItem("player1", name1);
    localStorage.setItem("player2", name2);
    window.location = "quiz_de_math.html";
}