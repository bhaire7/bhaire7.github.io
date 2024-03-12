// // const myImg = document.getElementById("imgg");
// // const onButton = document.getElementById("buttonTochange");
// // const offButton = document.getElementById("buttonTochange2");

// // onButton.addEventListener("click", function () {
// //         myImg.src = "turned-on.png";
// // });
// // offButton.addEventListener("click", function () {
// //         myImg.src = "turned-off.png";
// // });

// let bulbState = "off";

// function switchon() {
//         let image = document.getElementById("bulb");

//         if (bulbState === "off") {
//                 image.scr = "turned-on.png";
//                 bulbState = "on";
//         } else {
//                 image.scr = "turned-off.png";
//                 bulbState = "off";
//         }
// }

let bulbstate = "off";

function switchon() {
        const imge = document.getElementById("bulb");
        if (bulbstate === "off") {
                imge.src = "turned-on.png";
                bulbstate = "on";
        } else {
                imge.src = "turned-off.png";
                bulbstate = "off";
        }
}
