// js/validacao.js — Validação acessível sem alert() [F04-02, F07-09]

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contato");
  if (!form) return;

  const campoNome = document.getElementById("nome");
  const campoContato = document.getElementById("contato");
  const campoMensagem = document.getElementById("mensagem");

  const erroNome = document.getElementById("erro-nome");
  const erroContato = document.getElementById("erro-contato");
  const erroMensagem = document.getElementById("erro-mensagem");
  const msgSucesso = document.getElementById("msg-sucesso");

  form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    
    erroNome.textContent = "";
    erroContato.textContent = "";
    erroMensagem.textContent = "";
    msgSucesso.textContent = "";

    campoNome.removeAttribute("aria-invalid");
    campoContato.removeAttribute("aria-invalid");
    campoMensagem.removeAttribute("aria-invalid");

    let formValido = true;

    const nomeValor = campoNome.value.trim();
    if (nomeValor === "") {
      erroNome.textContent = "Por favor, digite o seu nome completo.";
      campoNome.setAttribute("aria-invalid", "true");
      formValido = false;
    } else if (nomeValor.length < 3) {
      erroNome.textContent = "O nome precisa ter pelo menos 3 letras.";
      campoNome.setAttribute("aria-invalid", "true");
      formValido = false;
    }

    const contatoValor = campoContato.value.trim();
    if (contatoValor === "") {
      erroContato.textContent = "Por favor, informe um telefone ou e-mail para retorno.";
      campoContato.setAttribute("aria-invalid", "true");
      formValido = false;
    } else if (contatoValor.indexOf("@") === -1 && contatoValor.length < 8) {
      erroContato.textContent = "Digite um e-mail com @ ou um telefone com DDD (mínimo 8 dígitos).";
      campoContato.setAttribute("aria-invalid", "true");
      formValido = false;
    }

    const mensagemValor = campoMensagem.value.trim();
    if (mensagemValor === "") {
      erroMensagem.textContent = "Descreva resumidamente qual benefício ou documento você procura.";
      campoMensagem.setAttribute("aria-invalid", "true");
      formValido = false;
    } else if (mensagemValor.length < 10) {
      erroMensagem.textContent = "A mensagem está muito curta. Conte um pouco mais sobre sua dúvida.";
      campoMensagem.setAttribute("aria-invalid", "true");
      formValido = false;
    }

    if (!formValido) {
      if (campoNome.getAttribute("aria-invalid") === "true") {
        campoNome.focus();
      } else if (campoContato.getAttribute("aria-invalid") === "true") {
        campoContato.focus();
      } else {
        campoMensagem.focus();
      }
      return;
    }

    msgSucesso.textContent = "Pronto! Sua solicitação foi recebida. Nossa equipe de assistência entrará em contato em breve.";
    form.reset();
  });
});