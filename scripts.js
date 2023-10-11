

let container = document.querySelector('.container');
let btn = document.querySelector('.start_btn');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time');

btn.onclick = function () {
    let score = 0;
    let time = 60; // Définir la durée du jeu en secondes
    container.innerHTML = "";
    
    let interval = setInterval(function () {
        // Création de la cible
        let target = document.createElement('img');
        target.id = "target";
        target.src = "silly.png";
        container.appendChild(target);
        target.style.left = Math.random() * (500 - target.offsetWidth) + 'px';
        target.style.top = Math.random() * (600 - target.offsetHeight) + 'px';

        // Faire disparaître la cible après un certain délai
        setTimeout(function () {
            target.remove();
        }, 2000);

        // Quand on clique sur le target
        target.onclick = function () {
            score += 1;
            target.style.display = 'none';
            scoreContainer.innerHTML = `Score : ${score}`;
        }
        time -= 1;

        // Afficher les informations
        scoreContainer.innerHTML = `Score : ${score}`;
        timeContainer.innerHTML = `Temps : ${time} s`;

        // Fin du jeu lorsque le temps est écoulé
        if (time == 0) {
            clearInterval(interval);
            container.innerHTML = "Le jeu est terminé";
        }
    }, 1000);
}
