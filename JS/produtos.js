let inputNovoProduto = document.querySelector('#input-novo-produto');
let btnAddProduto = document.querySelector('#btn-add-produto');
let listaProduto = document.querySelector('#lista-produto');
let modalEditar = document.querySelector('#modal-editar');
let modalEditarFundo = document.querySelector('#modal-editar-fundo');
let modalFecharEditar = document.querySelector('#modal-editar-btn-fechar');
let btnAtualizarProduto = document.querySelector('#btn-atualizar-produto');
let idProdutoEditar = document.querySelector('#idProduto-editar');
let inputProdutoNomeEditar = document.querySelector('#input-produto-nome-editar');

//Evento que cria a partir do teclado enter (13)
inputNovoProduto.addEventListener('keypress', (e) => {
    if(e.keyCode ==13){
        let produto ={
            nome: inputNovoProduto.value,
            id: gerarId(),
        }
        //Adiciona produto ao HTML
        adicionarProduto(produto);
    }
});

//Evento que cria a partir do boão
btnAddProduto.addEventListener('click', (e) => {
    let produto ={
        nome: inputNovoProduto.value,
        id: gerarId(),
    }
    //Adiciona produto ao HTML
    adicionarProduto(produto);
});

//Evento que atualiza o produto
btnAtualizarProduto.addEventListener('click', (e) =>{
    e.preventDefault();
    let idProduto = idProdutoEditar.innerHTML.replace('#', '');

    let produto ={
        nome: inputProdutoNomeEditar.value,
        id: idProduto
    }
    
    let produtoAtual = document.getElementById(''+idProduto+'');
    if(produtoAtual){
        let li = criarTagLI(produto)
        listaProduto.replaceChild(li, produtoAtual);
        alternarModalEditar();
    } else{
        alert('Produto não encontrado')
    }
});

//Evento que ativa a função
modalFecharEditar.addEventListener('click', (e) =>{
    alternarModalEditar();
});

//Função que gera Id aleatorio
function gerarId(){
    return Math.floor(Math.random() * 3000);
}

//Função que cria novo produto
function adicionarProduto(produto){
    let li =criarTagLI(produto);
    listaProduto.appendChild(li);
    inputNovoProduto.value = '';
}

//Função que gera codigo html
function criarTagLI(produto){
    let li = document.createElement('li');
    li.id = produto.id;

    let span = document.createElement('span');
    span.classList.add('texto-produto');
    span.innerHTML = produto.nome;

    let div = document.createElement('div');

    //Botão de editar
    let btnEditar = document.createElement('button');
    btnEditar.classList.add('btn-acao');
    btnEditar.innerHTML = '<i class="fa fa-pencil"></i>'
    btnEditar.setAttribute('onclick', 'editar('+produto.id+')');

    //Botão de apagar
    let btnApagar = document.createElement('button');
    btnApagar.classList.add('btn-acao');
    btnApagar.innerHTML = '<i class="fa fa-trash"></i>'
    btnApagar.setAttribute('onclick', 'apagar('+produto.id+')');

    div.appendChild(btnEditar);
    div.appendChild(btnApagar);

    li.appendChild(span);
    li.appendChild(div);
    return li;
}

//Função que edita o produto
function editar(idProduto){
    let li = document.getElementById(''+idProduto+'');
        if(li){
            idProdutoEditar.innerHTML = '#' + idProduto;
            inputProdutoNomeEditar.value = li.innerText;
            alternarModalEditar();
        } else{
            alert('Produto não encontrado')
        }
}

//Função que apaga o produto
function apagar(idProduto){
    let confirmacao = window.confirm('Tem certeza que deseja excluir esse produto?');
    if(confirmacao){
        let li = document.getElementById(''+idProduto+'');
        if(li){
            listaProduto.removeChild(li);
        }
    } else{
        alert('Produto não encontrado')
    }
}

//Função que abre o modal
function alternarModalEditar(){
    modalEditar.classList.toggle('abrir');
    modalEditarFundo.classList.toggle('abrir');
}