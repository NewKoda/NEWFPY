// Base de datos de nuestro cuento (Array de páginas)
const storyPages = [
    {
        title: "El Bosque Susurrante",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        text: "Había una vez un bosque antiguo donde los árboles parecían murmurar secretos al viento. Se decía que quien escuchara con atención, podría encontrar el camino hacia una ciudad oculta."
    },
    {
        title: "El Encuentro",
        image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        text: "Una tarde, la joven Elara se aventuró más allá del sendero marcado. Allí, posado sobre una roca cubierta de musgo, encontró a un zorro con pelaje del color del fuego y ojos que brillaban con inteligencia."
    },
    {
        title: "El Pacto Mágico",
        image: "https://images.unsplash.com/photo-1490243248048-51f923c55135?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        text: "El zorro habló con voz clara y cristalina: 'Te guiaré, pero a cambio debes prometerme que nunca revelarás la ubicación de este lugar'. Elara asintió, sellando un pacto que cambiaría su vida para siempre."
    },
    {
        title: "La Ciudad de Cristal",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        text: "Tras días de viaje, la espesura se abrió revelando torres brillantes que refractaban la luz del amanecer. Habían llegado. La gran aventura de Elara apenas comenzaba."
    }
];

// Variables de estado
let currentPageIndex = 0;

// Referencias a los elementos del DOM
const titleElement = document.getElementById('page-title');
const imageElement = document.getElementById('page-image');
const textElement = document.getElementById('page-text');
const contentContainer = document.getElementById('page-content');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const indicator = document.getElementById('page-indicator');

// Función principal para cargar una página con animación
function loadPage(index) {
    // 1. Iniciar animación de salida
    contentContainer.classList.remove('fade-in');
    contentContainer.classList.add('fade-out');

    // 2. Esperar a que termine la animación para cambiar los datos (400ms = tiempo en CSS)
    setTimeout(() => {
        const page = storyPages[index];
        
        // Inyectar el nuevo contenido
        titleElement.textContent = page.title;
        imageElement.src = page.image;
        imageElement.alt = `Ilustración de: ${page.title}`;
        textElement.textContent = page.text;
        
        // Actualizar el estado de la UI
        indicator.textContent = `Página ${index + 1} de ${storyPages.length}`;
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === storyPages.length - 1;

        // 3. Iniciar animación de entrada con el nuevo contenido
        contentContainer.classList.remove('fade-out');
        contentContainer.classList.add('fade-in');
    }, 400); 
}

// Event Listeners para los botones de navegación
prevBtn.addEventListener('click', () => {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        loadPage(currentPageIndex);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPageIndex < storyPages.length - 1) {
        currentPageIndex++;
        loadPage(currentPageIndex);
    }
});

// Inicializar la aplicación cuando el DOM esté listo
window.addEventListener('DOMContentLoaded', () => {
    // Forzamos un pequeño retraso inicial para que la primera animación fluya bien
    setTimeout(() => {
        loadPage(currentPageIndex);
    }, 100);
});