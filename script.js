
// Smooth scroll para as seções
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Função para fazer pedido de produto específico
function fazerPedido(sabor) {
    const mensagemElement = document.getElementById('mensagem');
    if (mensagemElement) {
        mensagemElement.value = `Olá! Gostaria de fazer um pedido do Pudim de ${sabor}.`;
        scrollToSection('contato');
        mensagemElement.focus();
    }
}

// Função para enviar o pedido
function enviarPedido(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;
    
    // Simular envio do pedido
    alert(`Obrigado ${nome}! Seu pedido foi enviado com sucesso. Entraremos em contato em breve através do email ${email} ou telefone ${telefone}.`);
    
    // Limpar o formulário
    document.getElementById('pedidoForm').reset();
}

// Efeito de header ao fazer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Animação de fade in quando elementos entram na tela
function animateOnScroll() {
    const elements = document.querySelectorAll('.produto-card, .contato-form, .info-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Inicializar animações
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Configurar elementos para animação inicial
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.produto-card, .contato-form, .info-item');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    // Trigger initial animation check
    setTimeout(animateOnScroll, 100);
});

// Validação do formulário
document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    
    // Validação simples de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido.');
        event.preventDefault();
        return;
    }
    
    // Validação simples de telefone
    const telefoneRegex = /^[\d\s\(\)\-\+]+$/;
    if (!telefoneRegex.test(telefone)) {
        alert('Por favor, insira um telefone válido.');
        event.preventDefault();
        return;
    }
});
