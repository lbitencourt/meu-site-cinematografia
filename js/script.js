// Obtém o botão e a lista de navegação
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.navigation-list');

// Adiciona um 'ouvinte de eventos' para o clique no botão
menuToggle.addEventListener('click', () => {
    // Alterna a classe 'active' na lista de navegação
    navList.classList.toggle('active');

    // Atualiza o atributo de acessibilidade 'aria-expanded'
    const isExpanded = navList.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isExpanded);
});

// Adiciona um 'ouvinte de eventos' para cada link na lista
const navLinks = document.querySelectorAll('.navigation-list a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Fecha o menu após o clique em um link
        navList.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', false);
    });
});