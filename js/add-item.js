const debug = document.getElementById('formato').childNodes;
console.log(debug);

const idiomaElement = document.getElementById('idioma');
idiomaElement.addEventListener('input', idiomaSearch)

function idiomaSearch() {
    let searchItem = idiomaElement.value;

    fetch('http://localhost:8081/idiomas/searchIdioma?idioma=' + searchItem)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            exibirIdioma(data);
        })
        .catch(function(error) {
            console.error('Erro ao buscar conteúdo:', error);
        });
}

function exibirIdioma(data) {
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (data.length === 0) {
        resultadoDiv.innerHTML = 'Nenhum resultado encontrado.';
        return;
    }

    // Crie um campo de seleção com os resultados da busca
    var select = document.createElement('select');
    select.setAttribute('id', 'resultadoSelecionado');

    data.forEach(function(item) {
        var option = document.createElement('option');
        option.value = item.id; // Use um identificador único do resultado
        option.text = item.nome; // Substitua 'nome' pelo campo relevante na API
        select.appendChild(option);
    });

    resultadoDiv.appendChild(select);
}

function addItem() {
    const formatoFieldset = document.getElementById('formato');

    const request = {
        titulo: document.getElementById('titulo').value,
        autor: document.getElementById('autor').value,
        editora: document.getElementById('editora').value,
        tipo: document.getElementById('choose').value,
        formato: formatoFieldset.querySelector('input[name="formato"]:checked').value,
        quantidadePaginas: document.getElementById('quantidadeLivros').value,
        edicao: document.getElementById('edicao').value,
        anoEdicao: document.getElementById('ano-edicao').value,
        generos: document.getElementById('generos').value.split(','),
        acabamento: document.getElementById('acabamento').value,
        idioma: document.getElementById('idioma').value,
        pais: document.getElementById('pais').value,
        quantidadeLivros: document.getElementById('quantidadeLivros').value
    }
    
    console.log("request: ", request);

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request), 
    }

    fetch('http://localhost:8081/livros/addLivro', requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json();
        })
        .then(data => {
            console.log('Resposta:', data);
            document.getElementById('form').reset();
            location.reload()
        })
        .catch(error => {
            console.error('Erro:', error);
            document.getElementById('form').reset();
            location.reload()
        });
}

function redirect() {
    window.location.href = 'index.html';
}

document.getElementById('redirect-button').addEventListener('click', redirect);
document.getElementById('add-item').addEventListener('click', addItem);



