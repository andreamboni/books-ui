const container = document.getElementsByClassName('container')[0];
const detailsTitle = document.getElementById('details-title');
const detailsContent = document.getElementById('details-content');
const buttonHome = document.getElementById('redirect-button');

const table = document.getElementsByClassName('table')[0]
// const div = document.getElementById('item-details');
const urlParams = new URLSearchParams(window.location.search);
const livroId = urlParams.get('id');
const ul = document.createElement('ul');

function createElementWithContent(tagName, content) {
    const element = document.createElement(tagName);
    element.textContent = content;
    return element;
}

function createBoldElementWithContent(tagName, content) {
    const element = document.createElement(tagName);
    const strong = document.createElement('strong');
    strong.textContent = content;
    element.appendChild(strong);
    return element;
}

if(livroId) {
    fetch(`http://localhost:8081/livros/getLivro/${livroId}`)
        .then(response => response.json())
        .then(data => {
            const titulo = data.livro.titulo;
            const autor = data.livro.autor.nome;
            const editora = data.livro.editora;
            const tipo = data.livro.tipo;
            const formato = data.livro.formato;
            const quantidadePaginas = data.livro.quantidadePaginas; 
            const edicao = data.livro.edicao;
            const anoEdicao = data.livro.anoEdicao;
            const generos = data.livro.generos.map(function(genero) {
                return genero.nome;
            }); 
            const acabamento = data.livro.acabamento;
            const idioma = data.livro.idioma.nome;
            const pais = data.livro.pais.nome;
            const quantidadeLivros = data.livro.quantidadeLivros;

            // Titulo da página
            detailsTitle.textContent = titulo;

            // Campo: titulo
            const pTitulo = document.createElement('p');
            const spanTitulo = document.createElement('span');
            const nomeTitulo = document.createTextNode(titulo);

            spanTitulo.textContent = "Título: ";

            pTitulo.appendChild(spanTitulo);
            pTitulo.appendChild(nomeTitulo);

            // Campo: autor
            const pAutor = document.createElement('p');
            const spanAutor = document.createElement('span');
            const nomeAutor = document.createTextNode(autor);
            
            spanAutor.textContent = "Autor: ";
            
            pAutor.appendChild(spanAutor);
            pAutor.appendChild(nomeAutor);
            
            // Campo: editora
            const pEditora = document.createElement('p');
            const spanEditora = document.createElement('span');
            const nomeEditora = document.createTextNode(editora);
            
            spanEditora.textContent = "Editora: ";
            
            pEditora.appendChild(spanEditora);
            pEditora.appendChild(nomeEditora);
            
            // Campo: tipo
            const pTipo = document.createElement('p');
            const spanTipo = document.createElement('span');
            const nomeTipo = document.createTextNode(tipo);
            
            spanTipo.textContent = "Tipo: ";
            
            pTipo.appendChild(spanTipo);
            pTipo.appendChild(nomeTipo);

            // Campo: formato
            const pFormato = document.createElement('p');
            const spanFormato = document.createElement('span');
            const nomeFormato = document.createTextNode(formato);
            
            spanFormato.textContent = "Formato: ";
            
            pFormato.appendChild(spanFormato);
            pFormato.appendChild(nomeFormato);
            
            // Campo: quantidade de paginas
            const pQuantidadePaginas = document.createElement('p');
            const spanQuantidadePaginas = document.createElement('span');
            const nomeQuantidadePaginas = document.createTextNode(quantidadePaginas);
            
            spanQuantidadePaginas.textContent = "Quantidade de páginas: ";
            
            pQuantidadePaginas.appendChild(spanQuantidadePaginas);
            pQuantidadePaginas.appendChild(nomeQuantidadePaginas);
            
            // Campo: edição
            const pEdicao = document.createElement('p');
            const spanEdicao = document.createElement('span');
            const nomeEdicao = document.createTextNode(edicao);
            
            spanEdicao.textContent = "Edição: ";
            
            pEdicao.appendChild(spanEdicao);
            pEdicao.appendChild(nomeEdicao);
            
            // Campo: ano edição
            const pAnoEdicao = document.createElement('p');
            const spanAnoEdicao = document.createElement('span');
            const nomeAnoEdicao = document.createTextNode(anoEdicao);
            
            spanAnoEdicao.textContent = "Ano edição: ";
            
            pAnoEdicao.appendChild(spanAnoEdicao);
            pAnoEdicao.appendChild(nomeAnoEdicao);
            
            // Campo: generos
            const pGeneros = document.createElement('p');
            const spanGeneros = document.createElement('span');
            const nomeGeneros = document.createTextNode(generos);
            
            spanGeneros.textContent = "Gêneros: ";
            
            pGeneros.appendChild(spanGeneros);
            pGeneros.appendChild(nomeGeneros);
            
            // Campo: acabamento
            const pAcabamento = document.createElement('p');
            const spanAcabamento = document.createElement('span');
            const nomeAcabamento = document.createTextNode(acabamento);
            
            spanAcabamento.textContent = "Acabamento: ";
            
            pAcabamento.appendChild(spanAcabamento);
            pAcabamento.appendChild(nomeAcabamento);
            
            // Campo: idioma
            const pIdioma = document.createElement('p');
            const spanIdioma = document.createElement('span');
            const nomeIdioma = document.createTextNode(idioma);
            
            spanIdioma.textContent = "Idioma: ";
            
            pIdioma.appendChild(spanIdioma);
            pIdioma.appendChild(nomeIdioma);
            
            // Campo: pais
            const pPais = document.createElement('p');
            const spanPais = document.createElement('span');
            const nomePais = document.createTextNode(pais);
            
            spanPais.textContent = "País: ";
            
            pPais.appendChild(spanPais);
            pPais.appendChild(nomePais);
            
            // Campo: quantidadeDeLivros
            const pQuantidadeLivros = document.createElement('p');
            const spanQuantidadeLivros = document.createElement('span');
            const nomeQuantidadeLivros = document.createTextNode(quantidadeLivros);
            
            spanQuantidadeLivros.textContent = "Quantidade de livros: ";
            
            pQuantidadeLivros.appendChild(spanQuantidadeLivros);
            pQuantidadeLivros.appendChild(nomeQuantidadeLivros);
            
            detailsContent.appendChild(pTitulo);
            detailsContent.appendChild(pAutor);
            detailsContent.appendChild(pEditora);
            detailsContent.appendChild(pTipo);
            detailsContent.appendChild(pFormato);
            detailsContent.appendChild(pQuantidadePaginas);
            detailsContent.appendChild(pEdicao);
            detailsContent.appendChild(pAnoEdicao);
            detailsContent.appendChild(pGeneros);
            detailsContent.appendChild(pAcabamento);
            detailsContent.appendChild(pIdioma);
            detailsContent.appendChild(pPais);
            detailsContent.appendChild(pQuantidadeLivros);
        })
        .catch(error => console.error('Erro ao buscar os detalhes do livro:', error));
} else {
    container.textContent = 'Id do livro não especificado.'
}

function redirect() {
    window.location.href = 'index.html';
}

buttonHome.addEventListener('click', redirect);
