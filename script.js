// Configurazione della mappa celeste per La Stella di Marco
// Basata su d3-celestial

// Coordinate di Varigotti
const VARIGOTTI_LAT = 44.18203;
const VARIGOTTI_LON = 8.39737;

// Data della laurea (26 marzo 2026, ore 21:00 UTC+1 = 20:00 UTC)
const LAUREA_DATE = "2026-03-26 20:00 UTC";

// Configurazione principale
const config = {
    // Dimensioni
    width: 0,  // 0 = full width
    
    // Proiezione stereografica (come nella stampa)
    projection: "stereographic",
    
    // Posizione geografica (Varigotti)
    geopos: [VARIGOTTI_LAT, VARIGOTTI_LON],
    
    // Data e ora
    datetime: LAUREA_DATE,
    
    // Interattività
    interactive: true,
    
    // Mostra il form di controllo (utile per debugging)
    form: false,
    
    // Stelle - con URL corretto per i dati!
    stars: {
        show: true,
        limit: 6,  // Magnitudine limite (stelle visibili a occhio nudo)
        colors: true,  // Colori spettrali reali
        style: { fill: "#ffffff", opacity: 1 },
        
        // Nomi delle stelle (designazione Bayer/Flamsteed)
        designation: true,
        designationType: "designation",
        designationStyle: { 
            fill: "#ddddbb", 
            font: "12px 'Palatino Linotype', Georgia, serif",
            align: "left", 
            baseline: "top" 
        },
        designationLimit: 3.5,
        
        // Nomi propri
        propername: true,
        propernameType: "name",
        propernameStyle: { 
            fill: "#FFD700", 
            font: "bold 14px 'Palatino Linotype', Georgia, serif",
            align: "right", 
            baseline: "bottom" 
        },
        propernameLimit: 2.5,
        
        size: 7,
        exponent: -0.28,
        
        // DATI STELLARI - URL corretto!
        data: "https://ofrohn.github.io/data/stars.6.json"
    },
    
    // Costellazioni
    constellations: {
        show: true,
        names: true,
        namesStyle: { 
            fill: "#aaddff", 
            font: "italic 13px Helvetica, Arial, sans-serif",
            align: "center", 
            baseline: "middle" 
        },
        lines: true,
        linesStyle: { stroke: "#6688aa", width: 1.5, opacity: 0.7 },
        boundaries: true,
        boundariesStyle: { stroke: "#446688", width: 1, dash: [4,4] }
    },
    
    // Via Lattea
    milkyway: {
        show: true,
        style: { fill: "#112233", stroke: "#335577", width: 1 }
    },
    
    // Pianeti
    planets: {
        show: true,
        style: { 
            fill: "#ffaa00",
            stroke: "#ffff00",
            width: 2
        }
    },
    
    // Griglia celeste
    grid: {
        show: true,
        style: { stroke: "#335577", width: 0.5, opacity: 0.3 },
        numbers: false
    },
    
    // Coordinate transformation
    transform: "equatorial",
    
    // Lingua
    lang: "it",
    
    // Container
    container: "celestial-map"
};

// Inizializza la mappa quando la pagina è caricata
document.addEventListener("DOMContentLoaded", function() {
    console.log("✨ Inizializzazione mappa celeste...");
    
    try {
        // Crea la mappa
        Celestial.display(config);
        console.log("✅ Mappa inizializzata con successo");
        
        // Aggiunge un listener per i click sulle stelle
        document.addEventListener('celestial-click', function(e) {
            const star = e.detail;
            if (star && star.properties) {
                const name = star.properties.name || star.properties.designation || "Stella";
                console.log(`Cliccato su: ${name}`);
                
                // Mostra un messaggio se è Vega
                if (name.includes("Vega") || name.includes("α Lyr") || name.includes("alpha Lyr")) {
                    alert("⭐ Questa è Vega, la stella che abbiamo scelto per te!");
                }
            }
        });
        
    } catch (error) {
        console.error("❌ Errore durante l'inizializzazione:", error);
        alert("Si è verificato un errore nel caricamento della mappa. Riprova o contatta gli amici informatici!");
    }
});

// Funzione per evidenziare Vega
function highlightVega() {
    alert("🔭 Cerca Vega nella costellazione della Lira (Lyra)!\n\n" +
          "È la stella più brillante di quella zona di cielo - non puoi sbagliare!");
}

// Funzione per resettare la vista
function resetView() {
    try {
        Celestial.display(config);
        console.log("✅ Vista resettata");
    } catch (error) {
        console.error("❌ Errore nel reset:", error);
    }
}

// Funzione per mostrare/nascondere le costellazioni
function toggleConstellations() {
    try {
        // Ricarica con configurazione modificata
        const newConfig = JSON.parse(JSON.stringify(config)); // Copia profonda
        newConfig.constellations.show = !config.constellations.show;
        Celestial.display(newConfig);
        console.log(`✅ Costellazioni ${newConfig.constellations.show ? 'mostrate' : 'nascoste'}`);
    } catch (error) {
        console.error("❌ Errore nel toggle costellazioni:", error);
    }
}

// Funzione per verificare se i dati sono caricati
function checkDataLoaded() {
    console.log("Verifica caricamento dati...");
    // Nota: d3-celestial non ha un'API specifica per questo,
    // ma possiamo controllare se ci sono elementi SVG
    const svg = document.querySelector("#celestial-map svg");
    if (svg && svg.children.length > 0) {
        console.log("✅ Dati caricati correttamente");
    } else {
        console.warn("⚠️ Nessun dato visibile - verificare connessione");
    }
}

// Chiamata dopo 3 secondi per verificare
setTimeout(checkDataLoaded, 3000);

// Gestione errori globale
window.onerror = function(msg, url, line) {
    console.log("Errore JavaScript:", msg, "alla linea", line);
    return true; // Previene la visualizzazione dell'errore nel browser
};