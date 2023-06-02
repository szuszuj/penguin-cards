//const { randomInt } = require('crypto');
//const fs = require('fs');
//const http = require("http");
//var port = 42069;
//var response = "";
//
////adatbázis beolvasása a "data" változóba
//var data;
//fs.readFile("../data/data.json",function(err,d){
//    data = JSON.parse(d)
//});
//
//console.log(data);
//
//

////Internetes segítség kezdődik
//forrás: https://github.com/jamezmca/json-db/blob/main/dbFunctions.js
//const fs = require('fs')

//function readDb(dbName = '../data/data.json') {
//    // read JSON object from file
//    const data = fs.readFileSync(dbName, 'utf8')
//    return JSON.parse(data)
//}
//
//function writeDb(obj, dbName = '../data/data.json') {
//    if (!obj) return console.log('Please provide data to save')
//    try {
//        fs.writeFileSync(dbName, JSON.stringify(obj)) //overwrites current data
//        return console.log('SAVE SUCESS')
//    } catch (err) {
//        return console.log('FAILED TO WRITE')
//    }
//}
////Internetes segítség vége

//var My_data = readDb("../data/data.json");
////console.log(My_data);
//console.log("Hello world");
//
//var cards;
//for (let index = 0; index < array.length; index++) {
//    const element = array[index];
//    cards.fill(My_data[index])
//    




//}
//console.log(cards);
//
//flip -> "megfordítja" a kártyát
//        L->megcseréli a kártya szövegeinek láthatóságát
function flip(card,cardflipped){
//    let My_data = readDb("../data/data.json");
    let original_orientarion;
    original_orientarion = document.getElementById(card).style.display;
    document.getElementById(card).style.display = document.getElementById(cardflipped).style.display;
    document.getElementById(cardflipped).style.display = original_orientarion;
    //console.log(original_orientarion)
    //console.log(data)
}
var next_card = 0.0;
function data_insert(in_card){
    var database="../data/data_table.html";
    let max 
    next_card += 1.0
    console.log(document.getElementById(String(next_card+0.1)).innerHTML);
    console.log(document.getElementById(String(next_card+0.2)).innerHTML);
    document.getElementById(in_card).innerHTML = 
    `
        <div id="card" style="display: block;">${document.getElementById(String(next_card+0.1)).innerHTML}</div>
        <div id="card_flipped" style="display: none;">${document.getElementById(String(next_card+0.2)).innerHTML}</div>
    `;
    console.log(next_card);
}

//function data_insert(in_card,data = readDb("../data/data.json")){
//    var cards = "";
//    for (let card of data){
//        cards += `
//        <div id="card" style="display: block;">
//            ${card.base}
//        </div>
//        
//        <div id="card_flipped" style="display: none;">
//            ${card.flipped}
//        </div>`
//    document.getElementById(in_card).innerHTML = cards
//        //if randomInt(100, (err,n)) > 50{
//        //    if (err) throw err;
//        //    console.log(`Random number chosen from (0, 1, 2): ${n}`);
//        //    
//        //}
//}
//}
//
//
//
//http.createServer(function (req, res) {
//
//    1+1
//
//}).listen(port);
//
//console.log("server is running at http://localhost:"+port)