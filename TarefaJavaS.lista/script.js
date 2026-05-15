let produtos = []

function cadastrarProduto() {
    let produto = document.getElementById ("nproduto").value;
    let preço = document.getElementById ("pproduto").value;
    let mensagem = document.getElementById ("mensagem");
    if (produto == "" || preço <=0) {
        mensagem.textContent = "Digite algo valido...";
        mensagem.style.color = "red";
    }
    else {
        produtos.push(produto + " R$ " + preço);
        mensagem.textContent = "Produto adicionado!";
        mensagem.style.color = "green";
        mostrarProduto();
    }
}

function mostrarProdutos(){
    let qnt = document.getElementById("quantidade");
    let lista = document.getElementById("lista");

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    for (let i = 0; i < produtos.length; i++) {
        let item = document.createElement("li");
        item.textContent = produtos [i];
        lista.appendChild (item);
    }
}