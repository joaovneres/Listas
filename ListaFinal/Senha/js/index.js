const btn = document.getElementById('btn');

btn.onclick = function () {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    let usuario = null;
    if (verificarNome(nome)) {
        if (verificarEmail(email, usuario)) {
            if(verificarSenha(senha, usuario)){
                
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

function verificarEmail(email, usuario) {
    let arrayEmail = email.split("@");
    try {
        if (arrayEmail.length < 2)
            throw ("erro");
        usuario = arrayEmail[0];
        return true;
    } catch (error) {
        if (error == "erro")
            alert("Email inválido.")
            return false;
    }
}

function verificarSenha(senha, usuario) {
    try {
        if(senha.length<6 || senha.length>10);
        throw("errotamanho")
        if(senha.indexOf(usuario)==-1)
        throw("errousario")
        if(senha)
    } catch (error) {
        
    }
}

colocar um array com tudo completo e verificar se tem, por meio delete, um la'co de repeticao que continha enquanto for menos um