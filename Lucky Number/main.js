
const button = document.getElementById('btn');
const sorteado = document.querySelector('.sorteado');
const copiar = document.getElementById('copiar');

function convertor() {
    const min = parseInt(document.querySelector('.min').value);
    const max = parseInt(document.querySelector('.max').value);

    if (isNaN(min) || isNaN(max)) {
        alert("Erro! Por favor, insira números válidos.");
        return;
    }

    if (min >= max) {
        alert("Erro! O número mínimo não pode ser maior ou igual ao número máximo.");
        return;
    }

    const random = Math.floor(Math.random() * (max - min + 1)) + parseInt(min);
    sorteado.value = random;

    som.currentTime = 0;
    som.play();

    const intervalo = setInterval(() => {
        const numeroAleatorio = Math.floor(
            Math.random() * (max - min + 1)
        ) + min;

        sorteado.value = numeroAleatorio;

    }, 150);

    setTimeout(() => {
        clearInterval(intervalo);

        sorteado.value = random;

        sorteado.classList.remove("animar");
        void sorteado.offsetWidth;
        sorteado.classList.add("animar");

    }, 4700)
};

const som = new Audio("./sorteio.wav");

som.volume = 0.7;

button.addEventListener('click', convertor);

copiar.addEventListener('click', () => {
    if (sorteado.value === "") {
        alert("Não há resultado para copiar!");
        return;
    }

    navigator.clipboard.writeText(sorteado.value);

    alert("Número copiado com sucesso!");
});

