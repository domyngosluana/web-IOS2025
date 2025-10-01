let credencial = "Pj"

if (credencial =="Visitante") {
    console.log("Você só pode ir onde seu anfitriãofor.");
}
else if (credencial =="estagiario") {
    console.log("Voce pode acessar as baias de trabalho e refeitorio.");
}
else if (credencial =="aprendiz") {
    console.log("Voce pode acessar as areas de lazer, baias e refeitorio.");
}
else if (credencial =="CLT") {
    console.log("Voce pode acessar tudo, menos a diretoria.");
}
else if (credencial =="CEO") {
    console.log("o ceu é o limite.");
}
else{
    console.log("Credencial invalida.ACESSO NEGADO!");
}


