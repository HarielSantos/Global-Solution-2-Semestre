
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector("#formulario");
  const mensagem = document.querySelector("#mensagem");

  if (!formulario || !mensagem) {
    return;
  }

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const idade = Number(document.querySelector("#idade").value);

    if (nome.length < 3) {
      mensagem.textContent = "Digite seu nome com pelo menos 3 letras.";
      mensagem.style.color = "red";
      return;
    }

    if (!Number.isInteger(idade) || idade < 0 || idade > 120) {
      mensagem.textContent = "Digite uma idade válida.";
      mensagem.style.color = "red";
      return;
    }

    mensagem.textContent = "Dados preenchidos corretamente!";
    mensagem.style.color = "green";
  });
});
