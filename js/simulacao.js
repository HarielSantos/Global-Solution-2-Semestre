
function simularBeneficios(idade, rendaPorPessoa) {
  const beneficios = [];

  if (idade >= 65 && rendaPorPessoa <= 405.25) {
    beneficios.push({
      nome: "BPC",
      mensagem: "Você pode atender aos critérios iniciais de idade e renda do BPC. Outros requisitos precisam ser avaliados."
    });
  }

  if (idade >= 60) {
    beneficios.push({
      nome: "Direitos da pessoa idosa",
      mensagem: "Você pode ter acesso a direitos e serviços específicos para pessoas idosas."
    });
  }

  if (beneficios.length === 0) {
    beneficios.push({
      nome: "Orientação",
      mensagem: "Não identificamos benefícios nesta simulação simplificada. Consulte os canais oficiais para avaliar seus direitos."
    });
  }

  return beneficios;
}
