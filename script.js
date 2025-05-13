// Botão 1 - altera título e cor a cada clique
document.querySelector("#btn1").addEventListener("click", function() {
  const titulo = document.querySelector("#titulo");
  if (titulo.textContent === "DOM") {
    titulo.textContent = "Página Linguagem";
    titulo.style.color = "blue";
  } else {
    titulo.textContent = "Explorando JavaScript";
    titulo.style.color = "green";
  }
});

// Botão 2 - altera imagem e tamanho a cada clique
document.querySelector("#btn2").addEventListener("click", function() {
  const img = document.querySelector("#imagem");
  if (img.src.includes("Cachorro1.jpg")) {
    img.src = "Cachorro2.jpg";  // Troca para Cachorro2.jpg
    img.style.width = "200px"; // Ajusta o tamanho
  } else {
    img.src = "Cachorro1.jpg";  // Retorna para Cachorro1.jpg
    img.style.width = "150px"; // Retorna ao tamanho original
  }
});

// Botão 3 - altera texto1 e cor de fundo a cada clique
document.querySelector("#btn3").addEventListener("click", function() {
  const texto1 = document.querySelector("#texto1");
  if (texto1.textContent === "Texto inicial") {
    texto1.textContent = "Texto modificado";
    texto1.style.backgroundColor = "#add8e6"; // Nova cor de fundo
  } else {
    texto1.textContent = "Texto inicial";  // Retorna ao texto inicial
    texto1.style.backgroundColor = "#fff"; // Cor original
  }
});

// Botões 4, 5 e 6 - colocam texto do botão no texto2
const texto2 = document.querySelector("#texto2");
const botoesTexto2 = document.querySelectorAll(".texto2-btn");

botoesTexto2.forEach(botao => {
  botao.addEventListener("click", function() {
    texto2.textContent = botao.textContent;
  });
});
