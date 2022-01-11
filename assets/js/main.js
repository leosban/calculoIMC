const form = document.getElementById("form");

const criaParagrafo = () => {
  const paragrafoResultado = document.createElement("p");
  return paragrafoResultado;
};

const setResultado = (msg, isValid) => {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  const paragrafo = criaParagrafo();

  if (isValid) {
    paragrafo.classList.add("paragrafo-resultado");
  } else {
    paragrafo.classList.add("bad");
  }
  paragrafo.innerHTML = msg;
  resultado.appendChild(paragrafo);
};

const getImc = (peso, altura) => {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
};

const getNivelImc = (imc) => {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputPeso = event.target.querySelector("#peso");
  const inputAltura = event.target.querySelector("#altura");
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);
  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);

  console.log(imc, nivelImc);
});
