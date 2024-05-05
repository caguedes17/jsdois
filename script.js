let titulo = document.createElement("h1");

titulo.id = "titulo";
titulo.innerText = "Cervejaria do DOM";

let body = document.querySelector("body");

body.appendChild(titulo);

// ------------------------------------------- //

// Criando um elemento para o produto
let produto = document.createElement("div");

// Manipulando o elemento
produto.innerHTML = `
  <div>
    <h2>Caneca de Chopp Pilsen</h2>
    <img scr="pilsen.jpg" alt="chopp pilsen">
    <p> Como características marcantes, a bebida apresenta aroma 
    e sabor acentuados pelo lúpulo, além da cor dourada. Seu teor alcoólico varia entre 4,6% e 5% em média..</p>
    <p id="Preço chopp Pilsen">R$ 14.90</p>
  </div>
`;

// Adicionando o elemento no dom
body.appendChild(produto)