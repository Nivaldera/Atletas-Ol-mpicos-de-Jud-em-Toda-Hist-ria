function pesquisar() {

let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value;

if (!campoPesquisa) {
    section.innerHTML = "<p>Campo vazio</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

        resultados += `
        <div class="item-resultado">
              <p>Medalista Olímpico (a)</p>
                <h2>
                  <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                  <a href="${dado.instagram}" target="_blank">${dado.insta}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
            </div>
    `;
    }

}

if (!resultados) {
    "<p>Nada foi encontrado</p>"
}

section.innerHTML = resultados;
}