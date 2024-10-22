document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "postava_1.webp", "postava_2.webp", "postava_3.webp", "postava_4.webp", "postava_5.webp",
        "postava_6.webp", "postava_7.webp", "postava_8.webp", "postava_9.webp", "postava_10.webp",
        "postava_11.webp", "postava_12.webp", "postava_13.webp", "postava_14.webp", "postava_15.webp",
        "postava_16.webp", "postava_17.webp", "postava_18.webp"
    ];

    let gameImages = [...images, ...images];
    gameImages = gameImages.sort(() => Math.random() - 0.5);

    const gameBoard = document.getElementById("hraciPlocha");
    const attemptsElement1 = document.getElementById("player1Attempts");
    const pairsElement1 = document.getElementById("player1Pairs");
    const attemptsElement2 = document.getElementById("player2Attempts");
    const pairsElement2 = document.getElementById("player2Pairs");
    const currentPlayerElement = document.getElementById("currentPlayer");
    let attempts1 = 0;
    let attempts2 = 0;
    let pairs1 = 0;
    let pairs2 = 0;
    let currentPlayer = 1; // 1 or 2
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;

    // Vytvoření kartiček
    gameImages.forEach((image) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.image = image;

        const frontImg = document.createElement("img");
        frontImg.src = `Obrazky/${image}`;
        frontImg.classList.add("front");

        const backImg = document.createElement("img");
        backImg.src = "Obrazky/Zadni_strana_pexesa.webp";
        backImg.classList.add("back");

        card.appendChild(frontImg);
        card.appendChild(backImg);

        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    });

    function flipCard() {
        if (lockBoard || this === firstCard) return;

        this.classList.add("flipped");

        this.querySelector("img.front").style.display = "block";
        this.querySelector("img.back").style.display = "none";

        if (!firstCard) {
            firstCard = this;
        } else {
            secondCard = this;
            lockBoard = true;

            if (firstCard.dataset.image === secondCard.dataset.image) {
                currentPlayer === 1 ? pairs1++ : pairs2++;
                updateScore();
                disableCards();
            } else {
                currentPlayer === 1 ? attempts1++ : attempts2++;
                updateAttempts();
                unflipCards();
            }
        }
    }

    function updateScore() {
        pairsElement1.textContent = pairs1;
        pairsElement2.textContent = pairs2;
        resetBoard();
    }

    function updateAttempts() {
        attemptsElement1.textContent = attempts1;
        attemptsElement2.textContent = attempts2;
        currentPlayer = currentPlayer === 1 ? 2 : 1; // Přepni hráče
        currentPlayerElement.textContent = `Hráč ${currentPlayer} je na tahu`;
    }

    function disableCards() {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        const matchedPairsContainer = document.getElementById("matchedPairs");
        const matchedPair = document.createElement("div");
        matchedPair.classList.add("matched-pair");

        const img = document.createElement("img");
        img.src = firstCard.dataset.image; // Použij obrázek z první karty
        img.alt = "Uhodnutá dvojice";

        matchedPair.appendChild(img);
        matchedPairsContainer.appendChild(matchedPair);

        resetBoard();
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.querySelector("img.front").style.display = "none";
            firstCard.querySelector("img.back").style.display = "block";
            secondCard.querySelector("img.front").style.display = "none";
            secondCard.querySelector("img.back").style.display = "block";
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }

    // Restart hry
    document.getElementById("restart").addEventListener("click", () => {
        gameBoard.innerHTML = "";
        attempts1 = 0;
        attempts2 = 0;
        pairs1 = 0;
        pairs2 = 0;
        currentPlayer = 1; // Resetni na prvního hráče
        currentPlayerElement.textContent = `Hráč ${currentPlayer} je na tahu`;
        updateAttempts();
        updateScore();
        gameImages = [...images, ...images].sort(() => Math.random() - 0.5);
        gameImages.forEach((image) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.image = image;

            const frontImg = document.createElement("img");
            frontImg.src = `Obrazky/${image}`;
            frontImg.classList.add("front");

            const backImg = document.createElement("img");
            backImg.src = "Obrazky/Zadni_strana_pexesa.webp";
            backImg.classList.add("back");

            card.appendChild(frontImg);
            card.appendChild(backImg);

            card.addEventListener("click", flipCard);
            gameBoard.appendChild(card);
        });
    });
});
