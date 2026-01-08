# Portfolio Website – Lara Zimmermann

Willkommen im Repository meiner persönlichen Portfolio-Website. Dieses Projekt präsentiert meine Arbeiten als Multimedia Producerin mit Fokus auf Social Media Content, Vertical Video und Storytelling.

## Projekt-Hintergrund & Entstehung

### Persönliche Challenge & Entwicklung
Ehrlich gesagt war dieses Projekt für mich eine große Hürde. Ich tue mich mit dem selbstständigen Programmieren relativ schwer und habe oft Mühe, logische Zusammenhänge im Code sofort zu erkennen.

Deshalb war dieses Portfolio ein riesiger persönlicher Fortschritt. Ich habe mich bewusst dazu gezwungen, nicht einfach nur Code zu kopieren, sondern die Struktur von HTML und CSS wirklich zu durchdringen. Von den ersten "kaputten" Layouts bis zur fertigen, responsiven Seite war es ein langer Weg mit viel Trial-and-Error, aber es hat mir gezeigt, dass ich auch technische Hürden überwinden kann.

### Der Fokus (Editorial Look)
Ich wollte weg von statischen Standard-Galerien und hin zu einem Layout, das an ein modernes Editorial-Magazin erinnert. Die Herausforderung bestand darin, verschiedene Medienformate (Hochformat-Videos, Querformat-Thumbnails und längere Texte) harmonisch auf einer Seite zu vereinen.

---

## Features

* **One-Page Scroll Design:** Die Seite ist in bildschirmfüllende Panels unterteilt, die beim Scrollen "einrasten" (CSS Scroll Snap).
* **Editorial Grid Layouts:** Speziell angepasste Raster für komplexe Inhalte (z.B. Text neben gestapelten Bildern oder Bild-Überlappungen).
* **Responsive Design:** Automatische Auflösung der Grids in eine vertikale Flexbox-Struktur für nahtloses Scrollen auf Mobile.
* **Interaktive Elemente:** Fly-In Animationen beim Scrollen und Hover-Effekte auf Bildern.
* **Smartes Layout:** Nutzung von `object-fit: contain`, damit Bilder unabhängig vom Format immer vollständig sichtbar bleiben.

---

## Tech Stack

* **HTML5:** Semantische Strukturierung.
* **CSS3:** Fokus auf `display: grid`, `flexbox`, `vh`-Einheiten und Media Queries.
* **JavaScript (Vanilla):** `IntersectionObserver` für Scroll-Animationen.

---

## Schwierigkeiten & Learnings

Die Entwicklung war ein intensiver Lernprozess. Neben Layout-Fragen stieß ich auf spezifische technische Probleme, die ich lösen musste:

### 1. Das "Aumatt"-Layout (Grid Overflow)
Das Layout für das Seniorenzentrum Aumatt bereitete mir Kopfzerbrechen.
* **Problem:** Die Bilder im Grid ignorierten ihre Container-Grenzen und überlagerten den Text, sobald sich die Bildschirmhöhe änderte. Ich verstand lange nicht, warum `height: 100%` nicht funktionierte.
* **Lösung:** Ich lernte, wie wichtig strikte Höhenbegrenzungen sind. Durch den Einsatz von `max-height: 30vh` (Viewport Height) konnte ich erzwingen, dass dem Text immer genug Platz bleibt, egal wie das Browserfenster skaliert ist.

### 2. CSS Spezifität & "Verschwundene Styles"
Da ich anfangs oft Code-Schnipsel ausprobierte, wurde mein CSS chaotisch.
* **Problem:** Oft schrieb ich einen Style für die mobile Ansicht, aber er wurde nicht angewendet. Ich dachte, mein Code sei kaputt, dabei lag es an der Reihenfolge im Stylesheet oder daran, dass eine ID eine Klasse überschrieb.
* **Lösung:** Ich musste lernen, mein CSS sauber zu strukturieren (Mobile-Regeln immer *nach* den Desktop-Regeln bzw. im Media Query am Ende), damit die Überschreibung korrekt funktioniert. Das war ein großer "Aha-Moment" im Verständnis von CSS.


###  Grid vs. Flexbox auf Mobile
Was auf dem Desktop als 2x2-Raster gut aussah, funktionierte auf dem Handy überhaupt nicht.
* **Learning:** Ich habe gelernt, Grids in den Media Queries (`@media (max-width: 900px)`) komplett zu "resetten". Statt `display: grid` nutze ich auf Mobile jetzt `display: flex` mit `flex-direction: column`. Das war der Schlüsselmoment, um die Seite wirklich "handyfreundlich" zu machen.

---

## 📂 Ordnerstruktur

```text
/ (Root)
├── index.html          # Hauptseite (Portfolio One-Pager)
├── social.html         # Unterseite für Social Media Beispiele
├── style.css           # Globales Styling & Grid-Logik
├── script.js           # Scroll-Animationen
├── img/                # Bilder Assets (JPG, PNG)
└── README.md           # Projektdokumentation