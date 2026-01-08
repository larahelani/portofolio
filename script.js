document.addEventListener("DOMContentLoaded", () => {
    
    // ============================================
    // TEIL 1: SCROLL ANIMATION (FLY-IN)
    // ============================================
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
            // Optional: Wenn man will, dass es beim Rausscrollen wieder verschwindet:
            // else { entry.target.classList.remove('visible'); }
        });
    }, { threshold: 0.1 }); // Reagiert schon, wenn 10% sichtbar sind

    // Alle Elemente mit der Klasse "fly-in" beobachten
    const hiddenElements = document.querySelectorAll('.fly-in');
    hiddenElements.forEach((el) => observer.observe(el));


    // ============================================
    // TEIL 2: PODCAST BILD POP-UP (HOVER EFFEKT)
    // ============================================
    // Dieser Effekt funktioniert auf Desktop. Auf Mobile werden die Bilder
    // durch das neue CSS untereinander angezeigt, daher stört der Effekt nicht.

    const backImage = document.querySelector('.hover-target');

    if (backImage) {
        backImage.addEventListener('mouseenter', () => {
            backImage.classList.add('pop-to-front');
        });

        backImage.addEventListener('mouseleave', () => {
            backImage.classList.remove('pop-to-front');
        });
    }
});