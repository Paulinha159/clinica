/*Criar um sistema que irá gerenciar as consultas de uma clínica médica.
Como requisitos, nós teremos as seguintes funcionalidades:

Adicionar uma nova consulta
Listar todas as consultas
Atualizar uma consulta existente
Cancelar uma consulta*/

const consultas = [];
let livro = {};
let opcao = 0;
let cadastrandoLivro = false;
let removendoLivro = false;

console.log("Bem-vindos, escolha uma das opções abaixo:");
console.log("1: Digitar as informações do livro:");
console.log("2: Caso queira remover um livro");
console.log("3: Para ver os livros que inseriu");
console.log("4: Sair do programa");

process.stdin.on("data", function (data) {
    let entrada_usuario = data.toString().trim();

    if (!opcao) {
        opcao = parseInt(entrada_usuario);

        switch (opcao) {
            case 1:
                console.log("Nome do livro:");
                cadastrandoLivro = true;
                break;
            case 2:
                console.log("Digite o nome do livro a ser removido:");
                removendoLivro = true;
                break;
            case 3:
                if (biblioteca.length === 0) {
                    console.log("Nenhum livro cadastrado.");
                } else {
                    console.log("Livros cadastrados:");
                    biblioteca.forEach((livro, index) => {
                        console.log(`${index + 1}. Nome: ${livro.nome}, Autor: ${livro.autor}, Tamanho: ${livro.tamanho}, Gênero: ${livro.genero}`);
                    });
                }
                opcao = 0;
                console.log("\nEscolha uma das opções abaixo:");
                console.log("1: Digitar as informações do livro:");
                console.log("2: Caso queira remover um livro");
                console.log("3: Para ver os livros que inseriu");
                console.log("4: Sair do programa");
                break;
            case 4:
                console.log("Encerrando o programa...");
                process.exit();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                console.log("\nEscolha uma das opções abaixo:");
                console.log("1: Digitar as informações do livro:");
                console.log("2: Caso queira remover um livro");
                console.log("3: Para ver os livros que inseriu");
                console.log("4: Sair do programa");
                break;
        }
    } else {
        switch (opcao) {
            case 1:
                if (cadastrandoLivro) {
                    if (!livro.nome) {
                        livro.nome = entrada_usuario;
                        console.log("Nome do autor:");
                    } else if (!livro.autor) {
                        livro.autor = entrada_usuario;
                        console.log("Tamanho do livro:");
                    } else if (!livro.tamanho) {
                        livro.tamanho = entrada_usuario;
                        console.log("Gênero do livro:");
                    } else if (!livro.genero) {
                        livro.genero = entrada_usuario;
                        biblioteca.push(livro);
                        console.log("Livro cadastrado com sucesso!");
                        livro = {};
                        opcao = 0;
                        cadastrandoLivro = false;
                        console.log("\nEscolha uma das opções abaixo:");
                        console.log("1: Digitar as informações do livro:");
                        console.log("2: Caso queira remover um livro");
                        console.log("3: Para ver os livros que inseriu");
                        console.log("4: Sair do programa");
                    }
                }
                break;

            case 2:
                if (removendoLivro) {
                    const nome = entrada_usuario;
                    const index = biblioteca.findIndex(livro => livro.nome.toLowerCase() === nome.toLowerCase());
                    if (index !== -1) {
                        biblioteca.splice(index, 1);
                        console.log(`Livro '${nome}' removido com sucesso.`);
                    } else {
                        console.log(`Livro '${nome}' não encontrado.`);
                    }
                    opcao = 0;
                    removendoLivro = false;
                    console.log("\nEscolha uma das opções abaixo:");
                    console.log("1: Digitar as informações do livro:");
                    console.log("2: Caso queira remover um livro");
                    console.log("3: Para ver os livros que inseriu");
                    console.log("4: Sair do programa");
                }
                break;

            default:
                console.log("Opção inválida. Tente novamente.");
                console.log("\nEscolha uma das opções abaixo:");
                console.log("1: Digitar as informações do livro:");
                console.log("2: Caso queira remover um livro");
                console.log("3: Para ver os livros que inseriu");
                console.log("4: Sair do programa");
                break;
        }
    }
});