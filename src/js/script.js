const abas = document.querySelectorAll(".aba");

abas.forEach((aba) => {
  aba.addEventListener("click", () => {
    if (aba.classList.contains("selecionada")) {
      return;
    }

    selecionarAba(aba);

    removerInfo();

    mostrarInfo(aba);
  });
});

function selecionarAba(aba) {
  const abaSelecionada = document.querySelector(".aba.selecionada");
  abaSelecionada.classList.remove("selecionada");

  aba.classList.add("selecionada");
}

function removerInfo() {
  const informacaoSelecionada = document.querySelector(
    ".informacao.selecionada"
  );
  informacaoSelecionada.classList.remove("selecionada");
}

function mostrarInfo(aba) {
  const idElementoInfoAba = `informacao-${aba.id}`;

  const informacaoMostrada = document.getElementById(idElementoInfoAba);

  informacaoMostrada.classList.add("selecionada");
}
