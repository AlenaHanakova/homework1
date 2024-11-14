//cesta souboru JSON se vstupnimi daty
// VARIANTA CISLA
let inputFilePath = "../data/inputNumbers.json";

// // VARIANRA OBJEKTY
// let inputFilePath = "./data/inputObjects.json";

//cesta k souboru pro vystup
let outputFilePath = "../data/outputData.json";

const fs = require("fs");
let jsonData = JSON.parse(fs.readFileSync(inputFilePath, "utf-8"));
let filteredData = jsonData.filter(sortingFunction);

function sortingFunction(element) {
  //zde lze zmenit pravidla pro trideni prvku, necha prvky pro ktere pravidla plati, ostatni zahodi

  //VARIANTA CISLa (inputNumbers.json)
  return element > 10 && element < 100;

  // //VARIANTA OBJEKJTY (inputObjects.json)
  // return element.color == "red";
}

fs.writeFileSync(outputFilePath, JSON.stringify(filteredData));
