function resposta1 (){
  var r1 = prompt ("INSIRA AQUI A RESPOSTA:");
  var resposta = r1.toLowerCase();

  if (resposta == "sagrada"){
      alert("Acertoooou, miserave.")
      window.location.href = "eden.html"
  }

  if (resposta == "rasgada"){
      alert ("Você sabe ler, mas se atente ao título. O Google é seu amigo!")
  }
}