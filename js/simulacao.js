document.addEventListener("DOMContentLoaded", function () {
  const vitrine = document.getElementById("vitrine-servicos");
  const contador = document.getElementById("contador-resultados");
  const campoBusca = document.getElementById("busca-termo");
  const filtroCategoria = document.getElementById("filtro-categoria");

  if (!vitrine || !contador || !campoBusca || !filtroCategoria) {
    return;
  }

  function normalizar(texto) {
    return (texto || "")
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function renderizarServicos(lista) {
    vitrine.innerHTML = "";

    if (lista.length === 0) {
      contador.textContent = "Nenhum serviço encontrado.";
      vitrine.innerHTML = `
        <article class="cartao-vazio">
          <h3>Nenhum direito localizado para esta busca</h3>
          <p>Tente usar termos mais simples, como "remédio", "luz", "idoso" ou selecione "Todos os serviços".</p>
        </article>
      `;
      return;
    }

    contador.textContent = `Exibindo ${lista.length} serviço(s) disponível(is):`;

    for (let i = 0; i < lista.length; i++) {
      const item = lista[i];
      const cartao = document.createElement("article");
      cartao.className = "cartao-servico";

      cartao.innerHTML = `
        <span class="tag-categoria">${item.categoriaNome}</span>
        <h3>${item.nome}</h3>
        <p><strong>Quem tem direito:</strong> ${item.publico}</p>
        <p>${item.descricao}</p>
        <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="botao-secundario" aria-label="Ver ${item.nome} no portal oficial">
          Ver no portal oficial
        </a>
      `;

      vitrine.appendChild(cartao);
    }
  }

  function filtrar() {
    const termo = normalizar(campoBusca.value.trim());
    const categoriaSelecionada = filtroCategoria.value;

    const filtrados = servicos.filter(function (servico) {
      const bateuCategoria = (categoriaSelecionada === "todos") || (servico.categoria === categoriaSelecionada);
      const bateuTermo = (termo === "") ||
        normalizar(servico.nome).includes(termo) ||
        normalizar(servico.descricao).includes(termo) ||
        normalizar(servico.publico).includes(termo) ||
        normalizar(servico.categoriaNome).includes(termo);

      return bateuCategoria && bateuTermo;
    });

    renderizarServicos(filtrados);
  }

  campoBusca.addEventListener("input", filtrar);
  filtroCategoria.addEventListener("change", filtrar);

  renderizarServicos(servicos);
});