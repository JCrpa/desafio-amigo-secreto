//criar uma lista (array) para armazenar os nomes dos amigos
let amigos = [];
//criar uma função para adicionar amigos à lista
function adicionarAmigo() {
  //capturar o valor de entrada do input com id amigo
  const amigoInput = document.getElementById("amigo");
  const amigo = amigoInput.value;
  //validar a entrada e verificar se o campo não está vazio
  if (amigo === "") {
      alert("Por favor, insira um nome.");
      return; // Impede que o código continue se o campo estiver vazio
  }
  //se o valor for válido, adicione o nome do amigo ao array usando o método push()
  amigos.push(amigo);
  //redefina o campo de texto para uma string vazia
  amigoInput.value = "";
  //recebe a lista de amigos e atualiza a lista de amigos na tela
  atualizarlistaAmigos(amigos);
}
//criar uma função para atualizar a lista de amigos na tela
function atualizarlistaAmigos(amigos) {
  const listaAmigosElement = document.getElementById("listaAmigos");
  listaAmigosElement.innerHTML = "";
  //criar um loop para percorrer a lista de amigos
  for (const amigo of amigos) {
      const novoItemLista = document.createElement("li");
      novoItemLista.textContent = amigo;
      listaAmigosElement.appendChild(novoItemLista);
  }
}
//criar uma função para sortear o amigo secreto
function sortearAmigo() {
  //verificar se a lista de amigos está vazia
  if (amigos.length < 2) {
      alert("Para realizar o sorteio, adicione pelo menos dois amigos.");
      return; // Impede que o código continue se houver menos de dois amigos
  }
  //criar uma variável para verificar se o sorteio já foi realizado
  let sorteioRealizado = false;
  //criar uma função para exibir o resultado do sorteio
  function exibirResultado(resultadoSorteio) {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = resultadoSorteio;
}
// Verifica se o sorteio já foi realizado
if (sorteioRealizado) {
    alert("O sorteio já foi realizado. Clique no campo 'Digite um nome' para reiniciar.");
    return;
}
//embaralhar a lista de amigos
for (let i = amigos.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
}
// verificar se a pessoa sorteada é ela mesma
let amigoSorteado;
do {
    amigoSorteado = amigos.shift(); // Remove o primeiro amigo da lista
} while (amigos.includes(amigoSorteado)); // Repete até que o amigo sorteado seja diferente do primeiro da lista
amigos.push(amigoSorteado); // Adiciona o amigo removido de volta à lista (para evitar repetição)
//exibir o nome do amigo sorteado na tela com a frase
const resultadoElement = document.getElementById("resultado");
resultadoElement.textContent = "O amigo secreto sorteado é: " + amigos[0]; // O primeiro amigo da lista embaralhada é o amigo secreto do último amigo
sorteioRealizado = true; // Define a variável sorteioRealizado como verdadeira
// Adiciona evento de clique ao campo de nome
document.getElementById("amigo").addEventListener("click", function() {
    if (sorteioRealizado) { // Verifica se o sorteio já foi realizado
        reiniciarSorteio();
        sorteioRealizado = false; // Reinicia a variável
    }
});
}
//criar uma função para reiniciar o sorteio e limpar a lista de amigos
function reiniciarSorteio() {
  const listaAmigosElement = document.getElementById("listaAmigos");
  listaAmigosElement.innerHTML = "";
  //limpar a lista de amigos
  amigos = [];
  //limpar o resultado do sorteio
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = ""; // Limpa o resultado do sorteio
}