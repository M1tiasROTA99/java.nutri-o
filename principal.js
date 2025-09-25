//muda o nome a partir do seletor de classe
var subtitulo = document.querySelector(".subtitulo");
subtitulo.textContent = "Meus cliente";
var pipipupu = document.querySelector(".titulo");
pipipupu.textContent = "Matheus nutricao";

//acessar a tag TR -> paciente Paulo
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    //seleciona o PESO do paciente
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    //seleciona a ALTURA do paciente
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //calcula o IMC do paciente
    var imc = peso / (altura * altura);
    imc = imc.toFixed(2)

    //variáveis com valor TRUE
    var pesoValido = true;
    var alturaValida = true;

    //condicionais
    if (pesoValido && alturaValida) {
        var tdIMC = paciente.querySelector(".info-imc");
        tdIMC.textContent = imc;
    }
    if (peso <= 0 || peso >= 1000) {
        pesoValido = false;
        tdIMC.textContent = "Peso Inválido";
        paciente.style.backgroundColor = "magenta";
    }
    if (altura <= 0 || altura >= 3.00) {
        alturaValida = false;
        tdAltura.textContent = "Peso Inválido";
    }

}
