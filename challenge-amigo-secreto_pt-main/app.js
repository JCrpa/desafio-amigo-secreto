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