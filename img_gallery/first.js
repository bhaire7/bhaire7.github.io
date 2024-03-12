const imgg = ["cr7.jpg", "b.jpg", "c.jpg", "d.jpg"];
let selectedIndex = 0;

let img = document.getElementById("current-img");

img.src = imgg[selectedIndex];

function nextimg() {
        if (selectedIndex < imgg.length - 1) {
                selectedIndex += 1;
                img.src = imgg[selectedIndex];
        } else if ((selectedIndex = imgg.length - 1)) {
                selectedIndex = 0;
                img.src = imgg[selectedIndex];
        }
}

function preimg() {
        if (selectedIndex > 0) {
                selectedIndex -= 1;
                img.src = imgg[selectedIndex];
        } else if ((selectedIndex = 0)) {
                selectedIndex = imgg.length - 1;
                img.src = imgg[selectedIndex];
        }
}
