document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "postava_1.webp", "postava_2.webp", "postava_3.webp", "postava_4.webp", "postava_5.webp",
        "postava_6.webp", "postava_7.webp", "postava_8.webp", "postava_9.webp", "postava_10.webp",
        "postava_11.webp", "postava_12.webp", "postava_13.webp", "postava_14.webp", "postava_15.webp",
        "postava_16.webp", "postava_17.webp", "postava_18.webp"
    ];

    let gameImages = [...images, ...images]; // Vytvoříme páry
    gameImages = gameImages.sort(() => Math.random() - 0.5); // Náhodně zamícháme kartičky

    const gameBoard = document.getElementById("hraciPlocha");
    const attemptsElement = document.getElementById("attempts");
    let attempts = 0;
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;

    // Vytvoříme kartičky
    gameImages.forEach((image, index) => {
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

            // Kontrola, zda jsou karty stejné
            if (firstCard.dataset.image === secondCard.dataset.image) {
                disableCards();
            } else {
                unflipCards();
            }
            attempts++;
            attemptsElement.textContent = attempts;
        }
    }

    function disableCards() {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        resetBoard();
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.querySelector("img.front").style.display = "none"; // Skryj přední
            firstCard.querySelector("img.back").style.display = "block"; // Zobraz zadní
            secondCard.querySelector("img.front").style.display = "none"; // Skryj přední
            secondCard.querySelector("img.back").style.display = "block"; // Zobraz zadní
            resetBoard();
        }, 800);
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }

    // Restart hry
    document.getElementById("restart").addEventListener("click", () => {
        gameBoard.innerHTML = "";
        attempts = 0;
        attemptsElement.textContent = attempts;
        gameImages = [...images, ...images].sort(() => Math.random() - 0.5);
        gameImages.forEach((image, index) => {
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
