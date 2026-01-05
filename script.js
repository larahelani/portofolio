document.addEventListener("DOMContentLoaded", () => {
    
    // ============================================
    // TEIL 1: SCROLL ANIMATION (FLY-IN)
    // ============================================
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    // Alle Elemente mit der Klasse "fly-in" beobachten
    const hiddenElements = document.querySelectorAll('.fly-in');
    hiddenElements.forEach((el) => observer.observe(el));


    // ============================================
    // TEIL 2: PODCAST BILD POP-UP (HOVER EFFEKT)
    // ============================================

    // Wir suchen das hintere Bild anhand der Klasse "hover-target"
    const backImage = document.querySelector('.hover-target');

    if (backImage) {
        // Wenn Maus drauf: Klasse hinzufügen (Bild kommt nach vorne)
        backImage.addEventListener('mouseenter', () => {
            backImage.classList.add('pop-to-front');
        });

        // Wenn Maus weg: Klasse entfernen (Bild geht nach hinten)
        backImage.addEventListener('mouseleave', () => {
            backImage.classList.remove('pop-to-front');
        });
    }
});