const produtos = [];

function adicionarProduto(){
const nome = document.getElementById('nome').value;
const marca = document.getElementById('marca').value;
const preco = document.getElementById('preco').value;
const foto = document.getElementById('foto').value;
const descricao = document.getElementById('descricao').value;

const produto = {nome, marca, preco, foto, descricao};

produtos.push(produto);

}