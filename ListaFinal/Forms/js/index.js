/*
Crie um formulário com 10 questões:

* 5 de múltipla escolha (radio button);
* 2 dissertativas (text area);
* 3 múltipla escolha (check box);

Para enviar o formulário (imprimir as respostas na mesma página) valide-o primeiro:

* Todas as questões são obrigatórias;
* Informe ao usuário, quando tentar enviar, quais as questões não foram respondidas;
* Verifique se as dissertativas tem, pelo menos 3 palavras;
* Mostrar pontuação (fazer um array de objetos com as respostas corretas).
*/


function validar() {
    let pontos = 0;
    verificarRadio(pontos);
    verificarCheck(pontos);
    //verificarText(pontos);
}

function verificarMarcadas(marcada){

}

function verificarRadio(pontos) {
    const questao1 = document.getElementsByName('questao1');
    const questao2 = document.getElementsByName('questao2');
    const questao3 = document.getElementsByName('questao3');
    const questao4 = document.getElementsByName('questao4');
    const questao5 = document.getElementsByName('questao5');
    let q1 = document.getElementById('resposta1');
    let q2 = document.getElementById('resposta2');
    let q3 = document.getElementById('resposta3');
    let q4 = document.getElementById('resposta4');
    let q5 = document.getElementById('resposta5');
    for (let a = 0; a < questao1.length; a++) {
        if (questao1[a].checked) {
            if (questao1[a].value == 5) {
                pontos++;
                q1.innerHTML = "Parabéns, certa resposta."
                q1.style.color = "rgb(21, 247, 32)";
                q1.style.backgroundColor = "black";
            } else {
                q1.innerHTML = "Que pena, você errou."
                q1.style.color = "rgb(236, 82, 82)";
                q1.style.backgroundColor = "black";
            }
        }
    }
    for (let a = 0; a < questao2.length; a++) {
        if (questao2[a].checked) {
            if (questao2[a].value == 5) {
                pontos++;
                q2.innerHTML = "Parabéns, certa resposta."
                q2.style.color = "rgb(21, 247, 32)";
                q2.style.backgroundColor = "black";
            } else {
                q2.innerHTML = "Que pena, você errou."
                q2.style.color = "rgb(236, 82, 82)";
                q2.style.backgroundColor = "black";
            }
        }
    }
    for (let a = 0; a < questao3.length; a++) {
        if (questao3[a].checked) {
            if (questao3[a].value == 5) {
                pontos++;
                q3.innerHTML = "Parabéns, certa resposta."
                q3.style.color = "rgb(21, 247, 32)";
                q3.style.backgroundColor = "black";
            } else {
                q3.innerHTML = "Que pena, você errou."
                q3.style.color = "rgb(236, 82, 82)";
                q3.style.backgroundColor = "black";
            }
        }
    }
    for (let a = 0; a < questao4.length; a++) {
        if (questao4[a].checked) {
            if (questao4[a].value == 5) {
                pontos++;
                q4.innerHTML = "Parabéns, certa resposta."
                q4.style.color = "rgb(21, 247, 32)";
                q4.style.backgroundColor = "black";
            } else {
                q4.innerHTML = "Que pena, você errou."
                q4.style.color = "rgb(236, 82, 82)";
                q4.style.backgroundColor = "black";
            }
        }
    }
    for (let a = 0; a < questao5.length; a++) {
        if (questao5[a].checked) {
            if (questao5[a].value == 5) {
                pontos++;
                q5.innerHTML = "Parabéns, certa resposta."
                q5.style.color = "rgb(21, 247, 32)";
                q5.style.backgroundColor = "black";
            } else {
                q5.innerHTML = "Que pena, você errou."
                q5.style.color = "rgb(236, 82, 82)";
                q5.style.backgroundColor = "black";
            }
        }
    }
    return pontos;
}

function verificarCheck(pontos) {
    const questao6 = document.getElementsByName('questao6');
    const questao7 = document.getElementsByName('questao7');
    const questao8 = document.getElementsByName('questao8');
    let q6 = document.getElementById('resposta6');
    let q7 = document.getElementById('resposta7');
    let q8 = document.getElementById('resposta8');
    for (let a = 0; a < questao6.length; a++){
        if(questao6[a].checked){
            let contador=0;
            if(questao6[a].value==5){
                contador++;
                pontos += 0.5;
                questao6[a].style.color= "rgb(21, 247, 32)";
            }
            if(contador==2){
                q6.innerHTML = "Parabéns, certa resposta."
                q6.style.color = "rgb(21, 247, 32)";
                q6.style.backgroundColor = "black";
            } else {
                q6.innerHTML = "Que pena, você errou."
                q6.style.color = "rgb(236, 82, 82)";
                q6.style.backgroundColor = "black";
            }
        }
    }
    let contador=0;
    for (let a = 0; a < questao7.length; a++){
        if(questao7[a].checked){
            if(questao7[a].value==5){
                contador++;
                pontos += 0.5;
                questao7[a].style.color= "rgb(21, 247, 32)";
            }
        }
    }
    if(contador==2){
        q7.innerHTML = "Parabéns, certa resposta."
        q7.style.color = "rgb(21, 247, 32)";
        q7.style.backgroundColor = "black";
    } else {
        q7.innerHTML = "Que pena, você errou."
        q7.style.color = "rgb(236, 82, 82)";
        q7.style.backgroundColor = "black";
    }
    for (let a = 0; a < questao8.length; a++){
        if(questao8[a].checked){
            let contador=0;
            if(questao8[a].value==5){
                contador++;
                pontos += 0.5;
                questao8[a].style.color= "rgb(21, 247, 32)";
            }
            if(contador==2){
                q8.innerHTML = "Parabéns, certa resposta."
                q8.style.color = "rgb(21, 247, 32)";
                q8.style.backgroundColor = "black";
            } else {
                q8.innerHTML = "Que pena, você errou."
                q8.style.color = "rgb(236, 82, 82)";
                q8.style.backgroundColor = "black";
            }
        }
    }
    return pontos;
}

/*function verificarText(pontos){

}*/

