//cesta souboru JSON se vstupnimi daty
let inputFilePath = "../data/inputDataRegex.json";

//cesta k souboru pro vystup
let outputFilePath = "../data/outputData.json";

//filtrovani pomoci regex - v tomto pripade prvky obsahujici 'e'
let ruleRegex = /e/;

//uklada do cache, takze pokud se soubor zmeni, vysledek se zmeni az po zmeni cashe
let jsonData = require(inputFilePath);
let filteredData = jsonData.filter((element) => ruleRegex.test(element));

let fs = require("fs");
fs.writeFileSync(outputFilePath, JSON.stringify(filteredData));
