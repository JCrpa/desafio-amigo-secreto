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
      atualizarListaAmigos(amigos);
  }
  //criar uma função para atualizar a lista de amigos na tela
  function atualizarListaAmigos(amigos) {
      const listaAmigosElement = document.getElementById("listaAmigos");
      listaAmigosElement.innerHTML = "";
      //criar um loop para percorrer a lista de amigos
      for (const amigo of amigos) {
          const novoItemLista = document.createElement("li");
          novoItemLista.textContent = amigo;
          listaAmigosElement.appendChild(novoItemLista);
      }
}
  //criar uma função para embaralhar a lista de amigos
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
}
    //criar uma função para embaralhar a lista de amigos e verificar se alguém se sorteou
    function shuffleAndCheck(array) {
        let shuffled = [...array]; // Cria uma cópia para não modificar o array original
        let valid = false;
        // Embaralha e verifica se alguém se sorteou
        while (!valid) {
            shuffleArray(shuffled); // Embaralha a cópia
            valid = !shuffled.some((amigo, i) => amigo === array[i]); // Verifica se alguém se sorteou
        if (!valid) {
            console.log("Sorteio inválido. Tentando novamente...");
        }
        } 
        //retornar a lista embaralhada
        return shuffled;
}
    //criar uma função para sortear o amigo secreto
    function sortearAmigo() {
        //verificar se a lista de amigos está vazia
        if (amigos.length < 2) {
            alert("Para realizar o sorteio, adicione pelo menos dois amigos.");
            return; // Impede que o código continue se houver menos de dois amigos
        }
        const sorteados = shuffleAndCheck(amigos); // Embaralha e verifica se alguém se sorteou
        //criar um objeto para armazenar os resultados do sorteio
        const resultados = {};
        for (let i = 0; i < amigos.length; i++) {
            resultados[amigos[i]] = sorteados[i];
        }
        //exibir o resultado do sorteio na tela
        const resultadoElement = document.getElementById("resultado");
        let resultadoHTML = "";
        for (const amigo in resultados) {
            resultadoHTML += `${amigo} sorteou: ${resultados[amigo]}<br>`;
        }   
        resultadoElement.innerHTML = resultadoHTML;
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