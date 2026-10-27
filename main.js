
const nomes = ["Seu Nome Aqui"];

const form = document.getElementById("formNome");
const input = document.getElementById("inputNome");
const lista = document.getElementById("listaNomes");


function exibirNomes() {
  lista.innerHTML = "";

  nomes.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
  });
}


form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const novoNome = input.value.trim();

  if (novoNome !== "") {
    nomes.push(novoNome);
    exibirNomes();
    input.value = "";
    input.focus();
  }
});

exibirNomes();