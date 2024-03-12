// console.log("Hello World")

// var myName = prompt("what is syour name??")

// var header = document.getElementById("header")

// header.innerHTML= myName;

// console.log(myName)

//headding

headding = document.getElementById("header");
headding.innerHTML = "<i>Multiplaction Table</i>";

// main work

// var mtable = document.getElementById("mtable");
// function MultiplactionTable(number, n, mtable) {
//         for (var i = 1; i <= n; i++) {
//                 const result = number * i;

//                 mtable += `${number} x ${i}=${result}  <br/>`;
//         }

//         return mtable;
// }

// let tableData;

// function displaymtabe() {
//         let number = document.getElementById("mtableInput");
//         let len = document.getElementById("mtableLenInput");
//         tableData = MultiplactionTable(number.value, len.value, "");
//         mtable.innerHTML = tableData;
// }

var mtable = document.getElementById("mtable");

function multiplactionTable(number, length, mtable) {
        for (var i = 1; i <= length; i++) {
                const result = number * i;
                mtable += `${number} x ${i}=${result}  <br/>`;
        }
        return mtable;
}

let tableData;

function displaymtabe() {
        let number = document.getElementById("mtableInput");
        let length = document.getElementById("mtableLenInput");
        tableData = multiplactionTable(number.value, length.value, "");
        mtable.innerHTML = tableData;
}
