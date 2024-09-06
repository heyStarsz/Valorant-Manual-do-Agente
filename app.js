function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Exibe a seção no console para fins de depuração (pode ser removido em produção)
  
    let campoPesquisa =document.getElementById("campo-pesquisa").value

    //se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
       section.innerHTML = "<p>Sem resultados para a pesquisa. Você precisa nomear um agente ou função!"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    //let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      //tags = dado.tags.toLowerCase()
      
      //se titulo includes campoPesquisa  || tags.includes(campoPesquisa)
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        // Cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href=${dado.link}
            target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }
          //entao, faca...

    }
  
    if (!resultados) {
        resultados = "<p>Sem resultados para a pesquisa :/"
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }
  
  // Exibe o conteúdo da variável 'dados' no console para depuração
  console.log(dados);