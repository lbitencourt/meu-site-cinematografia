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
// ... (mantenha o código existente do menu toggle) ...

// Lógica para o Pop-up
const openPopupBtns = document.querySelectorAll('.open-popup-btn');
const popupContainer = document.getElementById('movie-popup');
const closeBtn = document.querySelector('.close-btn');

openPopupBtns.forEach(button => {
    button.addEventListener('click', () => {
        // Exibe o pop-up
        popupContainer.style.display = 'flex';
        // Aqui você pode carregar o conteúdo dinamicamente com base no `data-film-id`
        // const filmId = button.getAttribute('data-film-id');
        // console.log(`Abrir pop-up para o filme com ID: ${filmId}`);

        popupContainer.classList.add('popup-show');
        document.body.classList.add('no-scroll');
        const filmId = button.getAttribute('data-film-id');

        const title = button.getAttribute('data-film-title') || "Título do Filme";
        document.querySelector('.popup-title').innerText = title;

        const texto = document.getElementById(filmId).innerHTML || "Descrição do filme não disponível.";
        document.querySelector('.popup-description').innerHTML = texto;


        const imageUrl = button.getAttribute('data-film-img') || "https://via.placeholder.com/300x450?text=No+Image";
        document.querySelector('.popup-image').src = imageUrl;
        document.querySelector('.popup-image').alt = `Capa do Filme: ${title}`;

        const author = button.getAttribute('data-film-author') || "Autor Desconhecido";
        document.querySelector('.popup-author').innerText = `Feito por: ${author}`;

    });
});

// Fecha o pop-up ao clicar no botão 'X'
closeBtn.addEventListener('click', () => {
    popupContainer.style.display = 'none';
    popupContainer.classList.remove('popup-show');
    document.body.classList.remove('no-scroll');
});

// Fecha o pop-up ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target == popupContainer) {
        popupContainer.style.display = 'none';
        popupContainer.classList.remove('popup-show');
        document.body.classList.remove('no-scroll');
    }
});