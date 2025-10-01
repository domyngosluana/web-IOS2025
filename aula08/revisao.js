let login = prompt("insira seu e-mail:")
let senha = prompt("insira a senha:")
let loginCerto = "luanadomyngos@gmail.com"
let senhaCerta = "meamomuitoS2"

// Validar se login é o login certo e se a senha também é
if (login == loginCerto && senha == senhaCerta) {
    alert("credencial validada.")

    alert(("opção 1: creditos \n opção 2:consignado \n opção 3: empréstimo \n opção 4: renegociar \n opção 0:falar com o atendente"))

    // prompt vai dentro de Number porque queremos opções com numero, ou seja, é feita uma conversão de string para number


    let opção = Number(prompt("escolha a opção "))

    let opcao = prompt("escolha a opção")

    switch (opção) {
        case 1:
            alert("Voce selecionou creditos, redirecionando para o setor responsavel.")
            break;
        case 2:
            alert("voce selencionou consiginado, redirecionando para o setor responsavel.")
            break;
        case 3:
            alert("voce selencionou empréstimo, redirecionando para o setor responsavel. ")
            break;
        case 4:
            alert("voce selencionou renegociar, redirecionando para o setor responsavel.")
            break;
        case 0:
            alert("aguarde enquanto localizamos o atendente ")
            break;

        default:
            alert("o usuario não selencionou uma opção válida. encerrando atendimento.")
            break;
    }
}
//Se o longin e a senha que o usuário inseriu não forem iguais a que temos, ele não pode fazer login no aplicativo
else {
    alert("login ou senha incorretos")
}