document.getElementById("knopLetter").addEventListener("click", raadLetter );

      const woorden =  ["CODEFEVER", "PROGRAMMEREN", "NADENKEN", "VARIABELE"];
      let teZoekenLetters;
      let gevondenLetters;
      
      kiesWoord();
      
      function kiesWoord(){
       let willekeurigeIndex = Math.floor(Math.random()*woorden.length);
       let woord = woorden[willekeurigeIndex];
       teZoekenLetters = woord.split("");
       console.log(teZoekenLetters);
       gevondenLetters = [];
       for (let i = 0; i<teZoekenLetters.length; i++ ){
      gevondenLetters.push("_");
       }
       plaatsLettersOpHetScherm();
      }
      function plaatsLettersOpHetScherm(){
       let div = document.getElementById("contentGalgje");
       while (div.firstChild){
      div.removeChild(div.firstChild)
       };
       for (let i = 0; i<gevondenLetters.length; i++ ){
      let nieuwElement = document.createElement("p");
      nieuwElement.innerHTML = gevondenLetters[i];
      div.appendChild(nieuwElement);
       }
      }
      
      function raadLetter(){
       let letter = prompt("Geef een letter").toUpperCase();
       for (let i = 0; i<teZoekenLetters.length; i++ ){
      if(letter === teZoekenLetters[i]){
      gevondenLetters[i]=letter;
      }
       }
       plaatsLettersOpHetScherm();
      }
