let login 
let loginCerto = "domyngos@gmail.com"
let senhaCerta = "meamomuitoS2"
let senha
// Enquanto a senha que o usuário inserir for diferente da senha certa continuaremos pedindo para ele insira novamente 


//Do = Faça e While = enquanto, o que dá nome a estrutura dowhile, ou seja, faça enquanto.
//Dowhile executa o código uma vez antes de fazer a comparação.
do {
    senha = prompt("insira a senha:")
} while (senha != senhaCerta);

do {
    login = prompt("insira seu e-mail:")
} while (login != loginCerto);
//Peça a senha pelo menos uma vez, e caso o usuário não coloque a senha certa, repita o pedido.