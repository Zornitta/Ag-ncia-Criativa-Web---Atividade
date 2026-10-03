document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica do Menu Responsivo (Hambúrguer)
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Alternar abertura/fechamento do menu
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('ativo');
        
        // Altera o ícone do botão dependendo do estado
        if(navMenu.classList.contains('ativo')) {
            menuBtn.innerHTML = '✕';
        } else {
            menuBtn.innerHTML = '☰';
        }
    });

    // Fechar o menu automaticamente ao clicar em qualquer link (útil no celular)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('ativo');
            menuBtn.innerHTML = '☰';
        });
    });

    // 2. Comportamento do Formulário (Evitar recarregar a página)
    const formContato = document.getElementById('form-contato');
    formContato.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Previne o envio padrão que recarregaria a tela
        alert('Obrigado! Sua mensagem foi recebida com sucesso (simulação).');
        formContato.reset(); // Limpa os campos do formulário
    });
});