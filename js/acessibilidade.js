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

  function aplicarZoom() {
    document.documentElement.classList.remove(
      "fonte-80",
      "fonte-90",
      "fonte-110",
      "fonte-120",
      "fonte-130",
      "fonte-140"
    );
    if (zoom !== 100) {
      document.documentElement.classList.add("fonte-" + zoom);
    }
  }

  if (btnAumentar) {
    btnAumentar.onclick = function () {
      if (zoom < 140) {
        zoom += 10;
        aplicarZoom();
      }
    };
  }

  if (btnDiminuir) {
    btnDiminuir.onclick = function () {
      if (zoom > 80) {
        zoom -= 10;
        aplicarZoom();
      }
    };
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciarAcessibilidade);
} else {
  iniciarAcessibilidade();
}