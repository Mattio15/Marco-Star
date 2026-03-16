// Funzione per aprire la modale
function openModal(title, content) {
    document.getElementById('modalTitle').innerHTML = title;
    document.getElementById('modalBody').innerHTML = content;
    document.getElementById('surpriseModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Funzione per chiudere la modale
function closeModal() {
    document.getElementById('surpriseModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Chiudi la modale cliccando fuori
window.onclick = function(event) {
    const modal = document.getElementById('surpriseModal');
    if (event.target == modal) closeModal();
}

// Gestione click sulle emoji - VERSIONE SEMPLICE E FUNZIONANTE
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 script.js caricato!");
    
    const emojis = document.querySelectorAll('.side-emoji');
    console.log("Trovate", emojis.length, "emoji");
    
    // PRIMA RIGA - Alto sx e Alto dx
    emojis[0].addEventListener('click', function() {
        openModal('⭐ Cielo',
            `<div style="text-align:center;">
                <p style="font-style:italic; font-size:1.2em;">
                    "Da un giorno all'altro<br>sostituiscono la pioggia.<br>
                    Le nuvole sganciano<br>sulle nostre teste<br>
                    miliardi di bigliettini.<br>
                    Il mare ha già<br>le farfalle nello stomaco.<br>
                    Sta arrivando:<br><br>
                    'Alla mia festa sono vietati gli ombrelli'"
                </p>
            </div>`
        );
    });
    
    emojis[1].addEventListener('click', function() {
        openModal('🌊 Foto 1',
            `<div style="text-align:center;">
                <img src="foto1.png" style="max-width:100%; max-height:500px; border-radius:12px; border:3px solid #FFD700;">
                <p style="color:#FFD700; font-size:1.5em; margin-top:10px;">NESUNO<br>GUARDA<br>MENTRE</p>
            </div>`
        );
    });
    
    // SECONDA RIGA - Centro sx e Centro dx
    emojis[2].addEventListener('click', function() {
        openModal('🌊 Foto 2',
            `<div style="text-align:center;">
                <img src="foto2.png" style="max-width:100%; max-height:500px; border-radius:12px; border:3px solid #FFD700;">
            </div>`
        );
    });
    
    emojis[3].addEventListener('click', function() {
        openModal('⭐ Mare',
            `<div style="text-align:center;">
                <p style="font-style:italic; font-size:1.2em;">
                    "Piuttosto di tuffarci tra le onde<br>
                    siamo davvero disposti<br>
                    a rifare sempre lo stesso castello di sabbia?"
                </p>
            </div>`
        );
    });
    
    // TERZA RIGA - Basso sx e Basso dx
    emojis[4].addEventListener('click', function() {
        openModal('💭 Pensieri',
            `<div style="text-align:center;">
                <p style="font-style:italic; font-size:1.2em;">
                    "Paure in spalla ti chiedevi<br>
                    come farò ad arrivare nel futuro.<br>
                    Leggevi tanto sperando di trovare<br>
                    una qualche risposta,<br>
                    sempre alla prossima pagina.<br>
                    Notti intere a studiare sotto stelle di carta,<br>
                    Ma quei capitoli non li ha chiesti:<br>
                    bastava respirare."
                </p>
            </div>`
        );
    });
    
    emojis[5].addEventListener('click', function() {
        openModal('💭 Foto 3',
            `<div style="text-align:center;">
                <img src="foto3.png" style="max-width:100%; max-height:500px; border-radius:12px; border:3px solid #FFD700;">
            </div>`
        );
    });
});