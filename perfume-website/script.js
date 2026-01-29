// Ajouter à panier
document.addEventListener('DOMContentLoaded', function() {
    const addCartButtons = document.querySelectorAll('.btn-add-cart');
    
    addCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            
            // Afficher une confirmation
            alert(`${productName} (${productPrice}) a été ajouté au panier!`);
            
            // Changer le texte du bouton temporairement
            const originalText = this.textContent;
            this.textContent = '✓ Ajouté au panier';
            this.style.backgroundColor = '#27ae60';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
            }, 2000);
        });
    });
});

// Newsletter
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert(`Merci! Vous êtes inscrit avec: ${email}`);
        this.reset();
    });
}

// Active link basé sur la page actuelle
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
