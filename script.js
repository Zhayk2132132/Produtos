const produtos = [];

function adicionarProduto() {
    const nome = document.getElementById('nome').value;
    const marca = document.getElementById('marca').value;
    const preco = document.getElementById('preco').value;
    const foto = document.getElementById('foto').value;
    const descricao = document.getElementById('descricao').value;

    const produto = { nome, marca, preco, foto, descricao };

    produtos.push(produto);

    mostrarProdutos();

    document.getElementById('nome').value = "";
    document.getElementById('marca').value = "";
    document.getElementById('preco').value = "";
    document.getElementById('foto').value = "";
    document.getElementById('descricao').value = "";

}

function mostrarProdutos() {
    const lista = document.getElementById('lista-produtos');
    lista.innerHTML = "";

    produtos.forEach((produto) => {
        lista.innerHTML += `
         <div class="produto">
                <img src="${produto.foto}" alt="Imagem do produto"></img>
                <div class="produto-info">
                    <h3> ${produto.nome} - ${produto.marca}</h3>
                    <p> <strong> Preço: </strong> R$ ${parseFloat(produto.preco).toFixed(2)} </p>
                    <p> ${produto.descricao}</p>
                </div>
            </div>
     `;
    });
}