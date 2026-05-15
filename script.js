// Historia de apoyo con temática suave y reconfortante
const storyPages = [
    {
        title: "Quien eres Tú?",
        image: "M1.jpeg", // Imagen de una niña sonriente
        text: "Mariana era una niña llena de sueños, talento y muchas cualidades que la hacían única. Estaba a punto de terminar el colegio, un logro muy importante que demostraba todo su esfuerzo, dedicación e inteligencia. Le apasionaban muchas cosas: la velocidad de la Fórmula 1, la emoción del volleyball, los videojuegos y la lectura de libros un poco extraños, pero fascinantes para ella. Cada una de sus aficiones mostraba una parte especial de quién era Mariana: curiosa, divertida, inteligente y llena de energía. Aunque muchas personas la veían sonriendo, pocos sabían todo lo que había tenido que enfrentar para llegar hasta allí."
    },
    {
        title: "Esto eres tu",
        image: "M3.jpeg",
        text: "A lo largo de su vida, Mariana tuvo que enfrentar problemas de muchos tipos. Algunas veces sintió miedo, tristeza o cansancio, como cualquier persona. Había días difíciles donde parecía más fácil rendirse o quedarse llorando por todo lo que estaba pasando.Pero Mariana tenía algo especial dentro de ella: valentía. En lugar de quedarse atrapada en los problemas, siempre intentaba levantarse otra vez. Aunque el dolor estuviera presente, ella seguía adelante sin querer convertirse en una carga para los demás. Eso era lo más admirable de Mariana: incluso en sus momentos más difíciles, nunca dejaba de luchar."
    },
    {
        title: "No estas sola",
        image: "M4.jpeg",
        text: "Mariana nunca estuvo completamente sola. A su lado siempre estuvieron personas importantes que la ayudaron a seguir brillando: su mami y sus amigos. Ellos estuvieron ahí para escucharla, apoyarla y recordarle lo fuerte que realmente era cuando ella misma lo olvidaba. Gracias a ese cariño y apoyo, Mariana encontraba fuerzas para continuar cada vez que la vida se complicaba. Poco a poco, cada obstáculo se convertía en una enseñanza, y cada caída en una oportunidad para crecer. Porque aunque Mariana tuviera cicatrices, también tenía una luz enorme dentro de ella."
    },
    {
        title: "Un Nuevo Amanecer",
        image: "M2.jpeg",
        text: "Esta es la historia de Mariana: una niña que pelea sus batallas en silencio, pero que nunca se rinde.Una niña que aprende, cae, se levanta y sigue avanzando con valentía hacia sus sueños. Una niña inteligente, fuerte y llena de vida que demuestra que el verdadero éxito no es no tener problemas, sino tener el coraje de enfrentarlos y seguir adelante. Y aunque el camino no siempre sea fácil, Mariana siempre encuentra la manera de volver a brillar.Porque algunas personas nacen para rendirse… pero Mariana nació para luchar y terminar ganando. "
    },
    // --- NUEVA PÁGINA FINAL: LA ROSA ---
    {
        title: "Para Ti",
        image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Imagen de una rosa suave
        text: "Has llegado al final de este pequeño viaje. Recuerda que, al igual que esta rosa, tienes la capacidad de florecer incluso después de las temporadas más frías. Gracias por tu valentía. Todo mejorará.ATT Tu padre bonito :v"
    }
];

// Variables de estado
let currentPageIndex = 0;
let isAutoplayOn = false;
let autoplayTimer = null;

// Referencias al DOM
const titleElement = document.getElementById('page-title');
const imageElement = document.getElementById('page-image');
const textElement = document.getElementById('page-text');
const contentContainer = document.getElementById('page-content');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const autoplayBtn = document.getElementById('autoplay-btn');
const indicator = document.getElementById('page-indicator');
const progressBar = document.getElementById('progress-bar');

// Función para actualizar la UI
function loadPage(index) {
    contentContainer.classList.remove('fade-in');
    contentContainer.classList.add('fade-out');

    setTimeout(() => {
        const page = storyPages[index];
        
        titleElement.textContent = page.title;
        imageElement.src = page.image;
        textElement.textContent = page.text;
        
        indicator.textContent = `Página ${index + 1} de ${storyPages.length}`;
        const progressPercentage = (index / (storyPages.length - 1)) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        // Lógica del botón "Anterior"
        prevBtn.disabled = index === 0;

        // Lógica especial para el botón "Siguiente" en la última página
        if (index === storyPages.length - 1) {
            nextBtn.textContent = "Volver al Inicio ↺";
        } else {
            nextBtn.innerHTML = "Siguiente &#8594;";
        }

        contentContainer.classList.remove('fade-out');
        contentContainer.classList.add('fade-in');
        
        // Detener autoplay al llegar al final
        if (isAutoplayOn && index === storyPages.length - 1) {
            toggleAutoplay();
        }
    }, 500); 
}

function nextPage() {
    if (currentPageIndex < storyPages.length - 1) {
        currentPageIndex++;
        loadPage(currentPageIndex);
    } else {
        // Si estamos en la última página y hacemos clic, volvemos al inicio
        currentPageIndex = 0;
        loadPage(currentPageIndex);
    }
}

function prevPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        loadPage(currentPageIndex);
    }
}

function toggleAutoplay() {
    isAutoplayOn = !isAutoplayOn;
    
    if (isAutoplayOn) {
        autoplayBtn.textContent = "Pausar Lectura";
        autoplayBtn.classList.add('active');
        autoplayTimer = setInterval(nextPage, 6000); 
    } else {
        autoplayBtn.textContent = "Lectura Automática";
        autoplayBtn.classList.remove('active');
        clearInterval(autoplayTimer);
    }
}

// Event Listeners
prevBtn.addEventListener('click', () => {
    prevPage();
    if(isAutoplayOn) toggleAutoplay();
});

nextBtn.addEventListener('click', () => {
    nextPage();
    if(isAutoplayOn) toggleAutoplay();
});

autoplayBtn.addEventListener('click', toggleAutoplay);

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        nextPage();
        if(isAutoplayOn) toggleAutoplay();
    } else if (event.key === 'ArrowLeft') {
        prevPage();
        if(isAutoplayOn) toggleAutoplay();
    }
});

// Inicialización
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        loadPage(currentPageIndex);
    }, 150);
});