document.addEventListener("DOMContentLoaded", () => {
    
    // Der "Beobachter" wird erstellt
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            
            // Wenn das Element im Bild ist:
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } 
            // Wenn das Element NICHT MEHR im Bild ist (Animation wiederholen):
            else {
                entry.target.classList.remove('visible');
            }
            
        });
    });

    // Alle Elemente mit der Klasse "fly-in" werden gesucht und beobachtet
    const hiddenElements = document.querySelectorAll('.fly-in');
    hiddenElements.forEach((el) => observer.observe(el));
});