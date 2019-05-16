
function pedido (){
    var n = 1000;
    switch (n == 1000){

        case n == 1000:
        prompt("Faça o seu pedido !");
        alert("Seu desejo será realizado.");
        n = 0;
        break;

        case n == 0:
        alert("Você precisa obter mais tsurus !");
        break;

    }

    var button = document.querySelector('button');
    button.setAttribute("disabled", true);

    
    document.getElementById("h1").innerHTML = "TOTAL DE TSURUS: 0";

    setTimeout(function(){location.href = "../pages/thatsallfolks.html"},3000);



}