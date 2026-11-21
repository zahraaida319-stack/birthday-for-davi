
// HALAMAN 1 KE 2
function openGift() {
    document.getElementById("opening").classList.add("hidden");
    document.getElementById("welcome").classList.remove("hidden");

    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicBtn");

    music.play()
        .then(() => {
            button.textContent = "♫ PAUSE MUSIC";
        })
        .catch(() => {
            button.textContent = "♫ PLAY MUSIC";
        });
}

// HALAMAN 2 KE 3
function openLetter() {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("letter").classList.remove("hidden");
}

// HALAMAN 3 KE 4
function nextPage() {
    document.getElementById("letter").classList.add("hidden");
    document.getElementById("about").classList.remove("hidden");
}

// HALAMAN 4 KE 5
function goToGallery() {
    document.getElementById("about").classList.add("hidden");
    document.getElementById("gallery").classList.remove("hidden");
}


function nextChapter() {
    document.getElementById("gallery").classList.add("hidden");
    document.getElementById("prayer").classList.remove("hidden");
}


function openWish() {
    document.getElementById("prayer").classList.add("hidden");
    document.getElementById("wish").classList.remove("hidden");
}

function blowCandle() {
    document.getElementById("flame").style.display = "none";
    document.getElementById("wishHint").classList.add("hidden");
    document.getElementById("wishMessage").classList.remove("hidden");
}

function showFinalMessage() {
    document.getElementById("wish").classList.add("hidden");
    document.getElementById("finalMessage").classList.remove("hidden");
}
function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicBtn");

    if (music.paused) {
        music.play()
            .then(() => {
                button.textContent = "♫ PAUSE MUSIC";
            })
            .catch(() => {
                button.textContent = "♫ TRY AGAIN";
            });
    } else {
        music.pause();
        button.textContent = "♫ PLAY MUSIC";
    }
}
// Create background stars
document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.getElementById("stars");

    if (!starsContainer) return;

    for (let i = 0; i < 45; i++) {
        const star = document.createElement("div");

        star.classList.add("star");

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay = Math.random() * 3 + "s";
        star.style.animationDuration = (2 + Math.random() * 3) + "s";

        starsContainer.appendChild(star);
    }
});
// Hati kecil muncul saat layar diklik
document.addEventListener("click", function (event) {
    const heart = document.createElement("span");

    heart.classList.add("click-heart");
    heart.textContent = "♥";

    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 1400);
});
function replayWebsite() {
    location.reload();
}
