const urlParams = new URLSearchParams(window.location.search)
const itemId = urlParams.get('id')

const itemContainer = document.getElementById('item-container')

if (itemId) {
    fetch(`http://localhost:8081/livros/getLivro/${itemId}`)
        .then(response => response.json())
        .then(data => {
            document.title = data.livro.titulo

            // First grid item
            const titleInfoGrid = document.createElement('div')
            titleInfoGrid.className = "grid-item"

            const titleSectionHeader = document.createElement('div')
            titleSectionHeader.className = "section-title"
            titleSectionHeader.textContent = "Informações do título"

            const titleDiv = document.createElement('div')
            titleDiv.className = 'book-info'

            const titleSpan = document.createElement('span')
            titleSpan.textContent = "Título: "

            const title = document.createTextNode(data.livro.titulo)

            titleDiv.appendChild(titleSpan)
            titleDiv.appendChild(title)

            const authorDiv = document.createElement('div')
            authorDiv.className = 'book-info'

            const authorSpan = document.createElement('span')
            authorSpan.textContent = "Autor: "

            const author = document.createTextNode(data.livro.autor.nome)

            authorDiv.appendChild(authorSpan)
            authorDiv.appendChild(author)

            const publisherDiv = document.createElement('div')
            publisherDiv.className = 'book-info'

            const publisherSpan = document.createElement('span')
            publisherSpan.textContent = "Editora: "

            const publisher = document.createTextNode(data.livro.editora)

            publisherDiv.appendChild(publisherSpan)
            publisherDiv.appendChild(publisher)

            titleInfoGrid.appendChild(titleSectionHeader)
            titleInfoGrid.appendChild(titleDiv)
            titleInfoGrid.appendChild(authorDiv)
            titleInfoGrid.appendChild(publisherDiv)

            // Second grid item
            const itemDetailsGrid = document.createElement('div')
            itemDetailsGrid.className = "grid-item"

            const itemDetailsSectionHeader = document.createElement('div')
            itemDetailsSectionHeader.className = "section-title"
            itemDetailsSectionHeader.textContent = "Informações da edição"

            const typeDiv = document.createElement('div')
            typeDiv.className = 'book-info'

            const typeSpan = document.createElement('span')
            typeSpan.textContent = "Tipo: "

            const type = document.createTextNode(data.livro.tipo)

            typeDiv.appendChild(typeSpan)
            typeDiv.appendChild(type)

            const formatDiv = document.createElement('div')
            formatDiv.className = 'book-info'

            const formatSpan = document.createElement('span')
            formatSpan.textContent = "Formato: "

            const format = document.createTextNode(data.livro.formato)

            formatDiv.appendChild(formatSpan)
            formatDiv.appendChild(format)

            const pagesDiv = document.createElement('div')
            pagesDiv.className = 'book-info'

            const pagesSpan = document.createElement('span')
            pagesSpan.textContent = "Quantidade de páginas: "

            const pages = document.createTextNode(data.livro.quantidadePaginas)

            pagesDiv.appendChild(pagesSpan)
            pagesDiv.appendChild(pages)

            const editionDiv = document.createElement('div')
            editionDiv.className = 'book-info'

            const editionSpan = document.createElement('span')
            editionSpan.textContent = "Edição: "

            const edition = document.createTextNode(data.livro.edicao)

            editionDiv.appendChild(editionSpan)
            editionDiv.appendChild(edition)

            const editionYearDiv = document.createElement('div')
            editionYearDiv.className = 'book-info'

            const editionYearSpan = document.createElement('span')
            editionYearSpan.textContent = "Edição ano: "

            const editionYear = document.createTextNode(data.livro.anoEdicao)

            editionYearDiv.appendChild(editionYearSpan)
            editionYearDiv.appendChild(editionYear)

            const gendersDiv = document.createElement('div')
            gendersDiv.className = 'book-info'

            const gendersSpan = document.createElement('span')
            gendersSpan.textContent = "Gêneros: "

            const genders = document.createTextNode(data.livro.generos.map(function (genero) {
                return genero.nome;
            }))

            gendersDiv.appendChild(gendersSpan)
            gendersDiv.appendChild(genders)

            const finishingDiv = document.createElement('div')
            finishingDiv.className = 'book-info'

            const finishingSpan = document.createElement('span')
            finishingSpan.textContent = "Acabamento: "

            const finishing = document.createTextNode(data.livro.acabamento)

            finishingDiv.appendChild(finishingSpan)
            finishingDiv.appendChild(finishing)

            const languageDiv = document.createElement('div')
            languageDiv.className = 'book-info'

            const languageSpan = document.createElement('span')
            languageSpan.textContent = "Idioma: "

            const language = document.createTextNode(data.livro.idioma.nome)

            languageDiv.appendChild(languageSpan)
            languageDiv.appendChild(language)

            const countryDiv = document.createElement('div')
            countryDiv.className = 'book-info'

            const countrySpan = document.createElement('span')
            countrySpan.textContent = "País: "

            const country = document.createTextNode(data.livro.pais.nome)

            countryDiv.appendChild(countrySpan)
            countryDiv.appendChild(country)

            itemDetailsGrid.appendChild(itemDetailsSectionHeader)
            itemDetailsGrid.appendChild(typeDiv)
            itemDetailsGrid.appendChild(formatDiv)
            itemDetailsGrid.appendChild(pagesDiv)
            itemDetailsGrid.appendChild(editionDiv)
            itemDetailsGrid.appendChild(editionYearDiv)
            itemDetailsGrid.appendChild(gendersDiv)
            itemDetailsGrid.appendChild(finishingDiv)
            itemDetailsGrid.appendChild(languageDiv)
            itemDetailsGrid.appendChild(countryDiv)

            // First grid item
            const collectionInfoGrid = document.createElement('div')
            collectionInfoGrid.className = "grid-item"

            const collectionSectionHeader = document.createElement('div')
            collectionSectionHeader.className = "section-title"
            collectionSectionHeader.textContent = "Informações da coleção"

            const numberOfCopiesDiv = document.createElement('div')
            numberOfCopiesDiv.className = 'book-info'

            const numberOfCopiesSpan = document.createElement('span')
            numberOfCopiesSpan.textContent = "Quantidade de exemplares: "

            const numberOfCopies = document.createTextNode(data.livro.quantidadeLivros)

            numberOfCopiesDiv.appendChild(numberOfCopiesSpan)
            numberOfCopiesDiv.appendChild(numberOfCopies)

            const collectionDiv = document.createElement('div')
            collectionDiv.className = 'book-info'

            const collectionSpan = document.createElement('span')
            collectionSpan.textContent = "Coleção: "

            const collection = document.createTextNode(data.livro.colecao ? data.livro.colecao.nome : "Sem coleção")

            collectionDiv.appendChild(collectionSpan)
            collectionDiv.appendChild(collection)

            collectionInfoGrid.appendChild(collectionSectionHeader)
            collectionInfoGrid.appendChild(numberOfCopiesDiv)
            collectionInfoGrid.appendChild(collectionDiv)

            itemContainer.append(titleInfoGrid)
            itemContainer.append(itemDetailsGrid)
            itemContainer.append(collectionInfoGrid)

        })
        .catch(error => console.error('Erro ao buscar os detalhes do item:', error));
} else {
    console.log('deu merda')
}