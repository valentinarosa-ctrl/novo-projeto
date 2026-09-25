let filmes = [];
let id = 1;

function cadastrar() {

    let nome = prompt("Digite o nome do filme:");
    let genero = prompt("Digite o gênero do filme:");
    let ano = prompt("Digite ano do filme:");

    if (nome == "" || genero == "" || ano == "") {
        alert("Preencha todos os campos!");
    } else {

        let filme = {
            id: id,
            nome: nome,
            genero: genero,
            ano: ano
        };

        filmes.push(filme);

        alert("Filme cadastrado!\n\nId: " + id +
        "\nNome: " + nome +
        "\nGênero: " + genero +
        "\nAno: " + ano);

        id = id + 1;
    }
}

function listar() {

    let resultado = "";

    if (filmes.length == 0) {
        alert("Nenhum filme cadastrado.");
    } else {

        for (let i = 0; i < filmes.length; i++) {

            resultado = resultado +
            "Id: " + filmes[i].id +
            "\nNome: " + filmes[i].nome +
            "\nGênero: " + filmes[i].genero +
            "\nAno: " + filmes[i].ano +
            "\n\n";
        }

        alert(resultado);
    }
}

function buscar() {

    let nome = prompt("Digite o nome do filme:");

    for (let i = 0; i < filmes.length; i++) {

        if (filmes[i].nome == nome) {

            alert("Id: " + filmes[i].id + "\nNome: " + filmes[i].nome + "\nGênero: " + filmes[i].genero + "\nAno: " + filmes[i].ano);
        }
    }
}

function deletar() {

    let idDeletar = prompt("Digite o id do filme:");

    for (let i = 0; i < filmes.length; i++) {

        if (filmes[i].id == idDeletar) {

            filmes.splice(i, 1);

            alert("Filme deletado!");
        }
    }
}

function removerUltimo() {

    filmes.pop();

    alert("Último filme removido!");
}

function limparTudo() {

    let confirmar = confirm("Tem certeza que deseja apagar todos os filmes?");

    if (confirmar == true) {

        filmes = [];

        alert("Todos os filmes foram apagados!");
    }
}

function total() {

    alert("Total de filmes: " + filmes.length);
}