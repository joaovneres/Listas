function bingo(array) {
    let verificar = true;
    while (verificar) {
        let num = Math.floor(Math.random() * (76 - 0));
        if (array.indexOf(num) == -1) {
            array.push(num);
            array.sort((a, b) => a - b);
            verificar = false;
            num = "Número sorteado foi: " + num;
            return [num, array];
        }
    }
}
console.log(bingo([]));
