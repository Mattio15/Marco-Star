// Configurazione della mappa celeste
// Basata su d3-celestial

// Coordinate di Varigotti
const VARIGOTTI_LAT = 44.18203;
const VARIGOTTI_LON = 8.39737;

// Data della laurea (26 marzo 2026, ore 21:00 UTC+1 = 20:00 UTC)
const LAUREA_DATE = "2026-03-26 20:00 UTC";

// Configurazione principale
const config = {
    width: 0,
    projection: "stereographic",
    geopos: [VARIGOTTI_LAT, VARIGOTTI_LON],
    datetime: LAUREA_DATE,
    interactive: true,
    form: false,
    
    stars: {
        show: true,
        limit: 6,
        colors: true,
        style: { fill: "#ffffff", opacity: 1 },
        designation: true,
        designationStyle: { 
            fill: "#ddddbb", 
            font: "12px 'Palatino Linotype', Georgia, serif",
            align: "left", 
            baseline: "top" 
        },
        designationLimit: 3.5,
        propername: true,
        propernameStyle: { 
            fill: "#FFD700", 
            font: "bold 14px 'Palatino Linotype', Georgia, serif",
            align: "right", 
            baseline: "bottom" 
        },
        propernameLimit: 2.5,
        size: 7,
        exponent: -0.28,
    },
    
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
    
    milkyway: {
        show: true,
        style: { fill: "#112233", stroke: "#335577", width: 1 }
    },
    
    planets: {
        show: true,
        style: { 
            fill: "#ffaa00",
            stroke: "#ffff00",
            width: 2
        }
    },
    
    grid: {
        show: true,
        style: { stroke: "#335577", width: 0.5, opacity: 0.3 },
        numbers: false
    },
    
    container: "celestial-map"
};

// Inizializza la mappa
document.addEventListener("DOMContentLoaded", function() {
    console.log("✨ Inizializzazione mappa celeste...");
    Celestial.display(config);
    
    // Listener per click sulle stelle
    document.addEventListener('celestial-click', function(e) {
        const star = e.detail;
        if (star && star.properties) {
            const name = star.properties.name || star.properties.designation || "Stella";
            console.log(`Cliccato su: ${name}`);
            if (name.includes("Vega") || name.includes("α Lyr")) {
                alert("⭐ Questa è Vega, la stella che abbiamo scelto per te!");
            }
        }
    });
});

// Funzioni di controllo
function highlightVega() {
    alert("🔭 Cerca Vega nella costellazione della Lira (Lyra)!\n\n" +
          "Coordinate: Ascensione Retta 18h36m56s, Declinazione +38°47'01″");
}

function resetView() {
    Celestial.display(config);
}

function toggleConstellations() {
    const newConfig = {...config};
    newConfig.constellations.show = !config.constellations.show;
    Celestial.display(newConfig);
}