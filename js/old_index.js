const containerList = document.getElementById('container-list');

fetch('http://localhost:8081/livros/getLivros')
    .then(response => response.json())
    .then(data => {

        const hightlightPreview = document.createElement('div');
        hightlightPreview.classList.add("highlight-preview");
        
        data.forEach(livro => {

            // Main div
            const div = document.createElement('div');
            div.className = "muted card flex separate";

            // Link to details page
            const link = document.createElement('a');
            link.className = "card-header";
            link.href = `details.html?id=${livro.id}`;
            link.textContent = livro.titulo;

            // Creating buttons
            const buttonDiv = document.createElement('div');

            // Pen button
            const penButton = document.createElement('button');
            penButton.className = "button small";
    
            const penIcon = document.createElement('i');
            penIcon.className = "fas fa-pen";

            penButton.appendChild(penIcon);

            // Trash button
            const trashButton = document.createElement('button');
            trashButton.className = "button small";
            
            const trashIcon = document.createElement('i');
            trashIcon.className = "fas fa-trash";

            trashButton.appendChild(trashIcon);
            
            // Appending to button div
            buttonDiv.appendChild(penButton);
            buttonDiv.appendChild(trashButton);

            // Appending all to main div
            div.appendChild(link);
            div.appendChild(buttonDiv);
            // hightlightPreview.appendChild(div);
            containerList.appendChild(div);
        });
        
        // containerList.appendChild(hightlightPreview);
        
    })
    .catch(error => console.error('Erro ao buscar os livros:', error));

function redirect() {
    window.location.href = 'add-item.html';
}

document.getElementById('redirect-button').addEventListener('click', redirect);

