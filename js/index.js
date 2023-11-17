const listContainer = document.getElementById('list-container')

fetch('http://localhost:8081/livros/getLivros')
    .then(response => response.json())
    .then(data => {
        
        data.forEach(item => {

            // div that wrap the whole item
            const itemContainer = document.createElement('div')
            itemContainer.className = "item-container"
            itemContainer.addEventListener('click', function() {
                console.log(item.titulo + " - " + item.id)
                window.location.href = `./item-info.html?id=${item.id}`
            })

            // First group of content of the item
            const firstContentContainer = document.createElement('div')
            firstContentContainer.className = "content-container cover-title"

            const cover = document.createElement('div')
            cover.className = "cover"

            const coverImg = document.createElement('img')
            coverImg.src= "./imgs/cavaleiro-dos-sete-reinos-cover.jpg"
            coverImg.alt= "O Cavaleiro dos Sete Reinos"

            cover.appendChild(coverImg)

            const titleAuthor = document.createElement('div')
            titleAuthor.className = "title-author"

            const title = document.createElement('div')
            title.className = "first-value"
            title.textContent = item.titulo

            const author = document.createElement('div')
            author.className = 'second-value'

            const authorAnchor = document.createElement('a')
            authorAnchor.href = "./author-profile.html"
            authorAnchor.textContent = item.autor.nome

            author.appendChild(authorAnchor)

            titleAuthor.appendChild(title)
            titleAuthor.appendChild(author)

            firstContentContainer.appendChild(cover)
            firstContentContainer.appendChild(titleAuthor)

            // Second group of content of the item
            const secondContentContainer = document.createElement('div')
            secondContentContainer.className = "content-container"

            const itemTypeAndFormat = document.createElement('div')
            itemTypeAndFormat.className = "first-value"
            itemTypeAndFormat.textContent = item.tipo + " - " + item.formato

            const genders = document.createElement('div')
            genders.className = "second-value"
            genders.textContent = item.generos.map(function(genero) {
                return genero.nome;
            }); 

            secondContentContainer.appendChild(itemTypeAndFormat)
            secondContentContainer.appendChild(genders)

            // Third and final group of content of the item
            const thirdContentContainer = document.createElement('div')
            thirdContentContainer.className = 'content-container'

            const publisher = document.createElement('div')
            publisher.className = 'first-value'
            publisher.textContent = item.editora

            const pages = document.createElement('div')
            pages.className = 'second-value'
            pages.textContent = item.quantidadePaginas

            thirdContentContainer.appendChild(publisher)
            thirdContentContainer.appendChild(pages)

            // Buttons
            const buttons = document.createElement('div')
            buttons.className = 'item-buttons'

            const editButton = document.createElement('button')
            editButton.className = "button list-button"

            const editIcon = document.createElement('i')
            editIcon.className = "fa fa-pen"

            const editSpan = document.createElement('span')
            editSpan.textContent = "Edit"

            editButton.append(editIcon)
            editButton.append(editSpan)
            
            const deleteButton = document.createElement('button')
            deleteButton.className = "button list-button"

            const deleteIcon = document.createElement('i')
            deleteIcon.className = "fa fa-trash"

            const deleteSpan = document.createElement('span')
            deleteSpan.textContent = "Delete"

            deleteButton.append(deleteIcon)
            deleteButton.append(deleteSpan)

            buttons.appendChild(editButton)
            buttons.appendChild(deleteButton)

            itemContainer.appendChild(firstContentContainer)
            itemContainer.appendChild(secondContentContainer)
            itemContainer.appendChild(thirdContentContainer)
            itemContainer.appendChild(buttons)
            listContainer.appendChild(itemContainer)
            
        })

    })
    .catch(error => console.error('Erro ao buscar os livros:', error))