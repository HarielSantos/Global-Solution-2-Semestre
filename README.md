# Cidadão Conectado — CitizenTech (Global Solution 2026/2)

> **FIAP Graduação** · 1º Ano · Engenharia de Software ON (Turmas 1ESOA e 1ESOB)  
> **Tema:** CitizenTech — Tecnologia com o cidadão no centro da inovação  
> **Eixo Escolhido:** Serviços e Direitos  

---

## 📌 Descrição do Projeto
Plataforma digital acessível e humanizada desenvolvida para simplificar o acesso a benefícios sociais, saúde, documentos e aposentadoria para idosos e pessoas com baixa literacia digital. A solução centraliza informações dispersas em uma interface limpa, com navegação guiada, comandos visuais, suporte a contraste e consulta interativa de direitos sem burocracia ou termos técnicos complexos.

---

## 👥 Cidadão Beneficiado e o Problema Real

* **Quem é o cidadão:** Pessoas com 60 anos ou mais e brasileiros em situação de vulnerabilidade com pouca familiaridade com smartphones e computadores.
* **O Problema:** A digitalização acelerada dos serviços públicos concentrou o acesso a direitos fundamentais em aplicativos difíceis de operar, com regras de senhas complexas e excesso de termos jurídicos. Isso gerou exclusão e dependência de intermediários.
* **Dados Reais e Fontes Oficiais:**
  * **32,1 milhões de idosos** vivem no Brasil, representando 15,6% da população nacional (*Fonte: IBGE — Censo Demográfico*).
  * **Mais de 8 milhões de idosos** permanecem completamente excluídos da internet (*Fonte: IBGE — PNAD Contínua TIC*).
  * **66,5% dos idosos sem internet** apontam expressamente a falta de conhecimento sobre como usar a tecnologia como a barreira principal (*Fonte: IBGE — Agência de Notícias*).
  * **Apenas 41,1% dos brasileiros conectados** utilizam ativamente serviços públicos digitais (*Fonte: Cetic.br | NIC.br — TIC Domicílios*).

---

## 🎯 Conexão com os ODS da ONU
* **ODS 10 — Redução das Desigualdades (Meta 10.2):** Promover a inclusão social, econômica e digital de todos, independentemente da idade, assegurando que o avanço tecnológico reduza as disparidades no acesso aos serviços essenciais do Estado.

---

## 🚀 Como Abrir e Executar o Projeto
O projeto foi construído seguindo as diretrizes de portabilidade da FIAP, sem necessidade de servidores, bancos de dados ou instalações prévias:

1. Baixe e extraia o arquivo compactado `.zip` do projeto.
2. Abra a pasta descompactada.
3. Dê um **duplo clique no arquivo `index.html`** para abrir o protótipo diretamente em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).
4. Todas as páginas, simulações e formulários funcionam de forma 100% autônoma (modo *offline* compatível).

---

## 🛠️ Tecnologias Utilizadas
Apenas tecnologias e recursos permitidos até a Fase 7 do curso:
* **HTML5 Semântico:** Estruturação acessível com uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` e atributos WAI-ARIA.
* **CSS3 Moderno:** Layout responsivo construído com Flexbox e Media Queries (`@media`), sem uso de CSS *inline*.
* **JavaScript (Vanilla JS):** Manipulação dinâmica do DOM, filtragem de *array de objetos* com dados de serviços e validação de formulário na própria tela (sem `alert()`).

## 👥 Integrantes do Grupo

| Nome Completo | RM | Turma | Função no Projeto |
| :--- | :--- | :--- | :--- |
| Hariel Santos Da Silva | RM rm570145 | 1ESOA | Estrutura HTML e Acessibilidade |
| MATHEUS MARQUES DE SOUZA SANTOS | RM rm574122 | 1ESOA | Estilização CSS e Design Responsivo |
| Mike Roberson Almeida | RM rm570333 | 1ESOA | Lógica JavaScript e Simulação Interativa |
| Felipe Matos de Miranda | RM rm568892 | 1ESOA | Pesquisa de Conteúdo e Roteiro/Vídeo Pitch |

---

## 📁 Estrutura de Pastas do Projeto

```text
Global-Solution-2-Semestre/
├── css/
│   └── style.css            # Estilização completa e responsiva
├── js/
│   ├── dados.js             # Base com 10+ serviços em array de objetos
│   ├── simulacao.js         # Lógica de busca, filtro e injeção no DOM
│   └── validacao.js         # Validação de campos e mensagens de feedback
├── img/
│   └── ...                  # Imagens e ícones otimizados (com alt)
├── index.html               # Página inicial (Problema, Dados e ODS)
├── solucao.html             # Simulação Interativa de Direitos (4 pontos)
├── impacto.html             # Impacto Social e Formulário de Apoio
├── equipe.html              # Apresentação do grupo e papéis
└── README.md                # Documentação técnica do projeto