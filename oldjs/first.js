//Day 1
// var year = prompt("Enter a number");

// if(year % 4 == 0) {
//     console.log("Its leap year");
// }
// else{
//     console.log("Not leap year");
// }

// const number = parseInt(prompt("Enter a number"));

// let result;

// for (let i = 1; i<= 10 ; i++){

//     const value = i * number ;

//     result+=`${number} * ${i} = ${value}<br/>`;

// }

// const node=document.querySelector("p");
// node.innerHTML=result;

// function getMultiplactionTable(number){
//     var  table = "";

//     for (var i = 1; i <= 10; i++){
//         table += `${number} x ${i} = ${number * i}<br>`

//     }

//     return table;

// }

// const sadip = document.getElementById('p')

// renderNode.innerHTML = getMultiplactionTable

// price=[10,20,30,40]

// for (let i = 0; i<price.length; i++){
//     let offer = price[i] / 10;
//     price[i] -= offer
// }
// console.log(price)

//Day 2

// const header = React.createElement("h1", null, "Hello World");

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(header)

// const Footer = () =>{
//     return<h1>Footer</h1>
// }

// const Header = () => {
//     return <h1>Hello World</h1>
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render{
// <div class = "print">
// (<Header/>)
// (<Footer/>)

// </div>};

// const Header = () => {
//     return (
//         <div className="header">
//             <h1>Home Page</h1>
//         </div>
//     );
// };

// const Body = () => {
//     return (
//         <div className="body">
//             <h1> Login Page</h1>
//         </div>
//     );
// };

// const Footer = () => {
//     return (
//         <div className="footer">
//             <h1>About US</h1>
//         </div>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//     <div className="container">
//         <Header />
//         <Body />
//         <Footer />
//     </div>
// );







// console.log("Hello World")

// var myName = prompt("what is syour name??")

// var header = document.getElementById("header")

// header.innerHTML= myName;

// console.log(myName)



var mtable = document.getElementById("mtable");

function MultiplactionTable (number, n, mtable){

   

    for (var i = 1; i <=n; i++) {

    const result = number * i;

    mtable += `${number} x ${i}=${result}  <br/>`;
}

return mtable;

}

let tableData = MultiplactionTable(6, 1000 ,"");

mtable.innerHTML = tableData



// let int = num = prompt("Enter a number")

// bodyData="";

// for(var i = 1; i<=10; i++) {

//     const result = num * i;

//     bodyData += (`${num} x ${i}= ${result}<br/>`)
// }

// body.innerHTML = bodyData;
