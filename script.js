document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    const certTrigger = document.getElementById('certTrigger'); 
    const certModal = document.getElementById('certModal');     
    const modalClose = document.getElementById('modalClose');   
    certTrigger.addEventListener('click', (e) => {
        e.stopPropagation(); 
        certModal.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    });

    modalClose.addEventListener('click', () => {
        closeModal();
    });

    certModal.addEventListener('click', (e) => {
        if (e.target === certModal) {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && certModal.classList.contains('active')) {
            closeModal();
        }
    });

    function closeModal() {
        certModal.classList.remove('active');
        document.body.style.overflow = ''; 
    }
});