
function iniciarAcessibilidade() {
  const btnContraste = document.getElementById("btn-contraste");
  const btnAumentar = document.getElementById("btn-aumentar-fonte");
  const btnDiminuir = document.getElementById("btn-diminuir-fonte");

  if (btnContraste) {
    btnContraste.onclick = function () {
      document.body.classList.toggle("alto-contraste");
    };
  }

  let zoom = 100;

  if (btnAumentar) {
    btnAumentar.onclick = function () {
      if (zoom < 140) {
        zoom += 10;
        document.body.style.fontSize = zoom + "%";
      }
    };
  }

  if (btnDiminuir) {
    btnDiminuir.onclick = function () {
      if (zoom > 80) {
        zoom -= 10;
        document.body.style.fontSize = zoom + "%";
      }
    };
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciarAcessibilidade);
} else {
  iniciarAcessibilidade();
}