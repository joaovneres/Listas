const btn = document.getElementById('btn');
const definir = document.getElementById('definir');
const necessidades = document.getElementsByClassName('necessidades');
let senhas = [];

definir.onclick = function () {
    if (validar()) {
        btn.style.display = "inline";
        definir.style.display = "none";
        let senha = document.getElementById("senha").value;
        if (senhas.length < 6) {
            senhas.push(senha);
        } else {
            senhas.shift();
            senhas.push(senha);
        }
        for(let i=0; i<necessidades.length; i++){
            necessidades[i].style.color = "#000";
        }
        const saida = document.getElementById('saida');
        saida.innerHTML = "Cadastrado com sucesso";
    }
}
btn.onclick = function () {
    if (validar()) {
        btn.style.display = "none";
        definir.style.display = "inline";
    }
}

function validar() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    let usuario = "";
    if (verificarNome(nome)) {
        if (verificarEmail(email)) {
            let arrayEmail = email.split("@");
            usuario = arrayEmail[0];
            if (verificarSenha(senha, usuario)) {
                return true;
            }
        }
    }
}

function verificarNome(nome) {
    let arrayNome = nome.split(" ");
    try {
        if (arrayNome.length < 2)
            throw ("erro");
        return true;
    } catch (error) {
        if (error == "erro")
            alert("Por favor, digite o nome completo.");
        return false;
    }
}

function verificarEmail(email) {
    let arrayEmail = email.split("@");
    try {
        if (arrayEmail.length < 2)
            throw ("erro");
        return true;
    } catch (error) {
        if (error == "erro")
            alert("Email inválido.")
        return false;
    }
}

function verificarSenha(senha, usuario) {
    const arrayA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const arraya = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const arrayC = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];
    const arrayN = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    try {
        if (senha.length < 6 || senha.length > 10)
            throw ("errotamanho");
        necessidades[0].style.color = "rgb(21, 247, 32)";
        if (senha.indexOf(usuario) != -1)
            throw ("errousario")
        necessidades[1].style.color = "rgb(21, 247, 32)";
        let verificarMai = -1;
        let verificarMin = -1;
        let verificarCar = -1;
        let verificarNum = -1;
        let verificarAnt = 0;
        for (let i = 0; i < arrayA.length; i++) {
            if (senha.indexOf(arrayA[i]) != -1) {
                verificarMai = 0;
            }
            if (senha.indexOf(arraya[i]) != -1) {
                verificarMin = 0;
            }
            if (senha.indexOf(arrayC[i]) != -1) {
                verificarCar = 0;
            }
            if (senha.indexOf(arrayN[i]) != -1) {
                verificarNum = 0;
            }
            if (senha==senhas[i]){
                verificarAnt = -1;
            }
        }
        if (verificarMai == -1)
            throw ("erromaiusculo")
        necessidades[2].style.color = "rgb(21, 247, 32)";
        if (verificarMin == -1)
            throw ("errominusculo")
        necessidades[3].style.color = "rgb(21, 247, 32)";
        if (verificarCar == -1)
            throw ("errocaracter")
        necessidades[4].style.color = "rgb(21, 247, 32)";
        if (verificarNum == -1)
            throw ("erronumero")
        necessidades[5].style.color = "rgb(21, 247, 32)";
        if (verificarAnt == -1)
            throw ("erroanterior")
        necessidades[6].style.color = "rgb(21, 247, 32)";
        return true;
    } catch (error) {
        if (error == "errotamanho")
            necessidades[0].style.color = "rgb(236, 82, 82)";
        if (error == "errousuario")
            necessidades[1].style.color = "rgb(236, 82, 82)";
        if (error == "erromaiusculo")
            necessidades[2].style.color = "rgb(236, 82, 82)";
        if (error == "errominusculo")
            necessidades[3].style.color = "rgb(236, 82, 82)";
        if (error == "errocaracter")
            necessidades[4].style.color = "rgb(236, 82, 82)";
        if (error == "erronumero")
            necessidades[5].style.color = "rgb(236, 82, 82)";
        if (error == "erroanterior")
            necessidades[6].style.color = "rgb(236, 82, 82)";
    }
}