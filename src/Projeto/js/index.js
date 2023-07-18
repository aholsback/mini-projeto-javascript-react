var carrosselRadio = document.getElementsByClassName ("radio-carrossel");
var carrosselAtivo = 1;

const proximaImagem = () => {
    carrosselAtivo++;

    if (carrosselAtivo > carrosselRadio.length) {
        carrosselAtivo = 1;
    }

    var radioElement = document.getElementById("radio" + carrosselAtivo);

    if (radioElement) {
        radioElement.checked = true;
    }
}

setInterval (() => {
    proximaImagem ();
}, 5000);