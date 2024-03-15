var numeroAleatorio = 0;
function novoNumero() {
    var data = new Date();
    numeroAleatorio = data.getSeconds();
    numeroAleatorio = Number.parseInt((numeroAleatorio / 60) * 100);
}
novoNumero();

var n = document.getElementById('n');
var i = 0;
var dificuldade = 8;
var vida = 0;
var filtro = document.getElementsByTagName('img')[vida];

function comparacao() {
    let contador = i;
    if (n.value < 0 || n.value > 100 || n.value == '') {
        document.getElementById('msg').innerHTML = '<p>Insira um valor válido de 0 a 100.</p>';
    }
    else if (contador >= dificuldade) {
        document.getElementById('msg').innerHTML = '<p>Você esgotou suas tentativas. O número era: ' + numeroAleatorio + '</p>';
    }
    else if (n.value > numeroAleatorio) {
        document.getElementById('msg').innerHTML = '<p>O numero misterioso é menor que isso.</p>';
        i++;
        filtro.classList.add('filtro');
        vida++;
        filtro = document.getElementsByTagName('img')[vida];
        document.getElementById('pontuacao').innerHTML += (`<p>Menor que: ${n.value}</p>`);
    }
    else if (n.value < numeroAleatorio) {
        document.getElementById('msg').innerHTML = '<p>O numero misterioso é maior que isso.</p>';
        i++;
        filtro.classList.add('filtro');
        vida++;
        filtro = document.getElementsByTagName('img')[vida];
        document.getElementById('pontuacao').innerHTML += (`<p>Maior que: ${n.value}</p>`);
    }
    else {
        document.getElementById('msg').innerHTML = '<p>Parabens, você acertou!</p>';
        i++;
    }

}
function reset() {
    i = 0;
    document.getElementById('msg').innerHTML = '';
    document.getElementById('pontuacao').innerHTML = '';
    document.getElementById('n').value = '';

    for (let p = 0; p <= 16; p++) {
        filtro = document.getElementsByTagName('img')[p];
        filtro.classList.remove('filtro');
    }
    if (dificuldade == 8) {
        vida = 0;
        filtro = document.getElementsByTagName('img')[vida];
    }
    else if (dificuldade == 6) {
        vida = 8;
        filtro = document.getElementsByTagName('img')[vida];
    }
    else {
        vida = 14;
        filtro = document.getElementsByTagName('img')[vida];
    }
    novoNumero()
}

function setDificuldade(botao) {
    switch (botao) {
        case 1:
            dificuldade = 8;
            vida = 0;
            filtro = document.getElementsByTagName('img')[vida];
            window.alert('Você está jogando no fácil. Possui 8 corações ❤️')
            window.document.getElementById('medio').style.backgroundColor = '#121212';
            window.document.getElementById('dificil').style.backgroundColor = '#121212';
            window.document.getElementById('facil').style.backgroundColor = 'red';
            break

        case 2:
            dificuldade = 6;
            vida = 8;
            filtro = document.getElementsByTagName('img')[vida];
            window.alert('Você está jogando no médio. Possui 6 corações ❤️')
            window.document.getElementById('medio').style.backgroundColor = 'red';
            window.document.getElementById('facil').style.backgroundColor = '#121212';
            window.document.getElementById('dificil').style.backgroundColor = '#121212';
            break

        case 3:
            dificuldade = 3;
            vida = 14;
            filtro = document.getElementsByTagName('img')[vida];
            window.alert('Você está jogando no difícil. Possui 3 corações ❤️')
            window.document.getElementById('dificil').style.backgroundColor = 'red';
            window.document.getElementById('facil').style.backgroundColor = '#121212';
            window.document.getElementById('medio').style.backgroundColor = '#121212';
            break
        
        case 4:
            window.alert('As suas tentativas foram restauradas');
            break
    }
    reset()

}
