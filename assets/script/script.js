function createStars() {
    const numStars = 200; // Número de estrelas
    const stars = document.querySelector('.stars');

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
        star.style.top = Math.random() * 100 + 'vh'; // Posição vertical aleatória
        star.style.animationDelay = Math.random() * 5 + 's'; // Atraso aleatório na animação
        stars.appendChild(star);
    }
}

// Chamando a função para criar estrelas quando a página carregar
window.addEventListener('load', createStars);


