const produtos = [];

function adicionarProduto(){
const nome = document.getElementById('nome').value;
const marca = document.getElementById('marca').value;
const preco = document.getElementById('preco').value;
const foto = document.getElementById('foto').value;
const descricao = document.getElementById('descricao').value;

const produto = {nome, marca, preco, foto, descricao};

produtos.push(produto);

mostrarProdutos();

    document.getElementById('nome').value = "";
    document.getElementById('marca').value = "";
    document.getElementById('preco').value = "";
    document.getElementById('foto').value = "";
    document.getElementById('descricao').value = "";

}
mostrarProdutos();

    document.getElementById('nome').value = "";
    document.getElementById('marca').value = "";
    document.getElementById('preco').value = "";
    document.getElementById('foto').value = "";
    document.getElementById('descricao').value = "";