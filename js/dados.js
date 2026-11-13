
const servicos = [
  {
    id: 1,
    nome: "Benefício de Prestação Continuada (BPC)",
    categoria: "Assistência Social",
    descricao: "Benefício destinado a idosos com 65 anos ou mais e pessoas com deficiência que atendam aos requisitos legais.",
    link: "https://www.gov.br/inss"
  },
  {
    id: 2,
    nome: "Aposentadoria",
    categoria: "Previdência",
    descricao: "Informações sobre aposentadoria e direitos previdenciários.",
    link: "https://meu.inss.gov.br"
  },
  {
    id: 3,
    nome: "Cartão Nacional de Saúde",
    categoria: "Saúde",
    descricao: "Informações sobre identificação e atendimento no SUS.",
    link: "https://www.gov.br/saude"
  },
  {
    id: 4,
    nome: "Cadastro Único",
    categoria: "Assistência Social",
    descricao: "Cadastro utilizado para identificar famílias de baixa renda e permitir acesso a programas sociais.",
    link: "https://www.gov.br/mds"
  }
];

function buscarServicos(termo) {
  const pesquisa = termo.toLowerCase().trim();

  return servicos.filter(servico =>
    servico.nome.toLowerCase().includes(pesquisa) ||
    servico.categoria.toLowerCase().includes(pesquisa)
  );
}
