const cardvalues = ["1", "2", "3", "4", "5", "6", "7", "8"];
const cardPairs = [...cardvalues, ...cardvalues];
console.log(cardPairs);
const shuffledPairs = shuffledArray(cardPairs);
const gameBoard = document.getElementById("gameboard");
createGameBoard(shuffledPairs);
function shuffledArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
}

function createGameBoard(cards) {
        cards.forEach((value, index) => {
                const card = document.createElement("div");
                card.classList.add("card", "hidden");
                card.dataset.index = index;
                card.innerText = value;
                card.addEventListener("click", revealCard);
                gameBoard.appendChild(card);
        });
}

let flippedCard = [];
let matchedPairs = 0;

function revealCard() {
        const selectedCard = this;

        if (selectedCard.classList.contains("hidden") && flippedCard.length < 2) {
                selectedCard.classList.remove("hidden");
                flippedCard.push(selectedCard);
        }
        if (flippedCard.length === 2) {
                setTimeout(checkMatch, 500);
        }
}

function checkMatch() {
        const [card1, card2] = flippedCard;

        if (card1.innerText === card2.innerText) {
                // Cards match, keep them face up
                card1.classList.add("matched");
                card2.classList.add("matched");
                matchedPairs++;

                // Check if all pairs are matched
                if (matchedPairs === cardPairs.length / 2) {
                        // alert("Congratulations! You've matched all pairs!");
                        const text = document.getElementById("msg");
                        text.innerText = "Congratulations You Won!!!";
                }
        } else {
                // Cards don't match, flip them back
                setTimeout(() => {
                        card1.classList.add("hidden");
                        card2.classList.add("hidden");
                }, 500);
        }

        // Clear the flippedCard array for the next turn
        flippedCard = [];
}
