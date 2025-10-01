let dinheiro = 10
let precoSorvete = 2.50
let saborEscolhido = "chocolate"

if (dinheiro >= precoSorvete) {
    // se o cliente tem dinheiro suficiente 
    console.log("Temos os seguintes sabores: Chocolate, morango e céu-azul");
    if (saborEscolhido == "chocolate" || saborEscolhido == "morango" || saborEscolhido == "ceú azul") {
        console.log("Aqui está seu sorvete de" + saborEscolhido);
    }
    else{
        console.log("Não temos esse sabor, desculpe");
    }

}
else{
    // Se o cliente não tem dinheiro suficiente
    console.log(" ta pobrinho amigo");
}