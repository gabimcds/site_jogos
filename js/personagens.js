function personagens(numPersonagens) {
    fetch("http://localhost:3000/personagens")
      .then((response) => {
        return response.json();
      })
      .then((personagensJson) => {
        console.log(personagensJson);
  
        document.getElementById("conteudo").innerHTML = " ";

            document.getElementById("conteudo").innerHTML +=
          "<b>Nome: </b>" +
          personagensJson[numPersonagens].nome +
          "<p><b>Idade: </b>" +
          personagensJson[numPersonagens].idade +
          "</p>" +
          "<p><b>Personalidade: </b>" +
          personagensJson[numPersonagens].carac +
          "</p>" +
          personagensJson[numPersonagens].img +
          "</p>";
        }
      );
}
  
